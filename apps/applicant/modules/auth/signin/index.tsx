"use client";

import { useState } from "react";
//next

//mantine
import {
  Alert,
  Anchor,
  Button,
  Checkbox,
  Divider,
  Group,
  PasswordInput,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
//mantine-form
import { useForm } from "@mantine/form";
// framework
import { triggerNotification } from "@vframework/ui";

//icons
import { InfoIcon, WarningIcon, XIcon } from "@phosphor-icons/react";

//styles
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";

//api
import { apiLogin, googleLogin } from "./auth.api";

import { useLanguage } from "@/layouts/app/app.context";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

//components

export const configModule = {
  successRedirect: "/dashboard",
};

export function ModuleAuthSignIn() {
  // * DEFINITIONS

  const Router = useRouter();
  const Params = useSearchParams();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  const [processingGoogle, setProcessingGoogle] = useState(false);

  // * CONTEXT

  const { language, setLanguage } = useLanguage();

  // * STATE

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      fLoading: false,
      remember: false,
    },
    validate: {
      email: (value) => (value.length < 1 ? "Email Cannot be Empty" : null),
      password: (value) =>
        value.length < 1 ? "Password Cannot be Empty" : null,
    },
  });

  const [errorType, setErrorType] = useState<string>("nan");
  const [completed, setCompleted] = useState(false);

  // * FUNCTIONS

  const handleRememberMe = () => {};

  function handleRedirect(res: any) {
    const decoded: any = jwtDecode(res.data?.access_token);

    if (decoded?.is_step9 == true) {
      Router.push("/applicant");
    } else if (decoded?.is_step5 == true) {
      Router.push("/onboarding?step=5");
      sessionStorage.setItem("ssw_onboarding", "5");
    } else if (decoded?.is_step4 == true) {
      Router.push("/onboarding?step=4");
      sessionStorage.setItem("ssw_onboarding", "4");
    } else if (decoded?.is_step3 == true) {
      Router.push("/onboarding?step=3");
      sessionStorage.setItem("ssw_onboarding", "3");
    } else if (decoded?.is_step2 == true) {
      Router.push("/onboarding?step=2");
      sessionStorage.setItem("ssw_onboarding", "2");
    } else if (decoded?.is_step1 == true) {
      Router.push("/onboarding?step=1");
      sessionStorage.setItem("ssw_onboarding", "1");
    } else {
      Router.push("/onboarding");
      sessionStorage.setItem("ssw_onboarding", "0");
    }
  }

  const mutation = useMutation({
    mutationFn: async () => {
      form.setFieldValue("fLoading", true);
      triggerNotification.auth.isLoading({});
      return apiLogin(form.getValues());
    },
    onSuccess: (res) => {
      setCompleted(true);
      sessionStorage.setItem("sswtoken", res?.data?.access_token || "");

      if (form.values.remember) {
        handleRememberMe();
      }

      form.setFieldValue("fLoading", false);
      triggerNotification.auth.isSuccess({});

      handleRedirect(res);
    },
    onError: (err: any) => {
      const { response } = err.object;

      if (
        response.data.message ==
        "This Account Has Not Been Verified with OTP. Please Proceed to OTP Verification."
      ) {
        triggerNotification.auth.isInfo({
          message:
            "You have not completed the OTP Step. Proceeding to OTP Verification.",
        });

        Router.push("/signup-verify?id=" + form.getValues()?.email);
      } else {
        setErrorType(response?.data?.alias || "nan");
        form.setFieldValue("fLoading", false);
        triggerNotification.auth.isError({
          message: err.message || "Cannot Reach Server, Try Again!",
        });
      }
    },
  });

  function handleSignIn() {
    if (!form.validate().hasErrors) {
      mutation.mutate();
    }
  }

  async function onGoogleSuccess(tokenResponse: any) {
    triggerNotification.auth.isLoading({});
    setProcessingGoogle(true);
    if (tokenResponse?.credential) {
      await googleLogin({
        token: tokenResponse.credential,
      })
        .then((res) => {
          triggerNotification.auth.isSuccess({});
          setCompleted(true);

          handleRedirect(res);
          setProcessingGoogle(false);
        })
        .catch((err) => {
          triggerNotification.auth.isError({
            message: "Linked account is not for this portal!",
          });
        });
    } else {
      setProcessingGoogle(false);
      triggerNotification.auth.isError({
        message: "Google Login Failed!",
      });
    }
  }

  // * COMPONENTS

  const RenderAlert = () => {
    switch (errorType) {
      case "info":
        return (
          <Alert py="xs" color="blue" icon={<InfoIcon weight="bold" />}>
            <Text size="xs" c="blue.8" fw={500} py="2">
              Server under Maintainance, Try Later!
            </Text>
          </Alert>
        );
      case "pending":
        return (
          <Alert py="xs" color="indigo" icon={<InfoIcon weight="bold" />}>
            <Text size="xs" c="indigo.8" fw={500} py="2">
              Verification Pending, Try Later!
            </Text>
          </Alert>
        );
      case "blocked":
        return (
          <Alert py="xs" color="red" icon={<XIcon weight="bold" />}>
            <Text size="xs" c="red.8" fw={500} py="2">
              Account Blocked! Contact Admin
            </Text>
          </Alert>
        );
      case "nan":
        return (
          <Alert py="xs" color="red" icon={<XIcon weight="bold" />}>
            <Text size="xs" c="red.8" fw={500} py="2">
              Cannot Reach Server, Try Again!
            </Text>
          </Alert>
        );
      case "cooldown_account":
        return (
          <Alert py="xs" color="red" icon={<XIcon weight="bold" />}>
            <Text size="xs" c="red.8" fw={500} py="2">
              Account is under cooldown. Please try again later.
            </Text>
          </Alert>
        );
      default:
        return (
          <Alert py="xs" color="red" icon={<WarningIcon weight="bold" />}>
            <Text size="xs" c="red.8" fw={500} py="2">
              Invalid Credentials. Try Again!
            </Text>
          </Alert>
        );
    }
  };

  // * ANIMATIONS

  return (
    <>
      <Stack gap="sm">
        <div>
          <Text size="2rem" lh="2.3rem" ta="center" visibleFrom="lg">
            {language === "en" ? (
              <>
                Welcome Back!
                <br />
                <i> Sign In </i> to{" "}
                {Params.get("type") == "newaccount"
                  ? "start onboarding process."
                  : "get started."}
              </>
            ) : (
              <>
                おかえりなさい！
                <br />
                <i> サインイン </i>して{" "}
                {Params.get("type") == "newaccount"
                  ? "オンボーディングを開始しましょう。"
                  : "始めましょう。"}
              </>
            )}
          </Text>

          <Text size="1.5rem" lh="1.8rem" ta="center" hiddenFrom="lg" mt="xl">
            {language === "en" ? (
              <>
                Welcome Back!
                <br />
                <i> Sign In </i> to{" "}
                {Params.get("type") == "newaccount"
                  ? "start onboarding process."
                  : "get started."}
              </>
            ) : (
              <>
                おかえりなさい！
                <br />
                <i> サインイン </i>して{" "}
                {Params.get("type") == "newaccount"
                  ? "オンボーディングを開始しましょう。"
                  : "始めましょう。"}
              </>
            )}
          </Text>
        </div>

        <SimpleGrid my="md" spacing="xs" cols={{ base: 1, lg: 1 }}>
          <GoogleLogin
            shape="circle"
            onSuccess={(credentialResponse) => {
              onGoogleSuccess(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </SimpleGrid>

        <Divider label="or continue with" />

        <TextInput
          radius="lg"
          size="lg"
          label={language == "en" ? "Email" : "メールアドレス"}
          placeholder="x@example.com"
          disabled={form.getValues()?.fLoading}
          {...form.getInputProps("email")}
        />

        <PasswordInput
          radius="lg"
          size="lg"
          label={language == "en" ? "Password" : "パスワード"}
          disabled={form.getValues()?.fLoading}
          {...form.getInputProps("password")}
        />

        <Group justify="space-between">
          <Checkbox
            disabled
            //disabled={form.getValues()?.fLoading}
            size="xs"
            label="Remember me"
          />
          <Anchor
            size="xs"
            c="dark"
            fw={600}
            onClick={() => {
              Router.push("/forgot-password");
            }}
          >
            {language == "en" ? "Forgot Password?" : "パス"}
          </Anchor>
        </Group>

        {mutation.isError && <RenderAlert />}

        <Stack gap={0} mt="md">
          <Button
            radius="lg"
            size="lg"
            loading={form.getValues()?.fLoading}
            onClick={() => {
              if (!mutation.isSuccess) {
                handleSignIn();
              }
            }}
          >
            {language == "en" ? "Sign In" : "サインイン"}
          </Button>
          <Button
            mt="4px"
            radius="lg"
            size="lg"
            color="red.6"
            onClick={() => {
              Router.push("/signup");
            }}
          >
            {language == "en"
              ? "Register a new Account."
              : "アカウントを登録する。"}
          </Button>
        </Stack>
      </Stack>

      <Text size="xs" ta="center" my="md" fw={700}>
        By continuing, you agree to our{" "}
        <Anchor
          href="https://unitessw.com/terms"
          target="_blank"
          rel="noreferrer"
        >
          Terms of Service
        </Anchor>{" "}
        and{" "}
        <Anchor
          href="https://unitessw.com/terms"
          target="_blank"
          rel="noreferrer"
        >
          Privacy Policy
        </Anchor>
      </Text>

      <Group gap={0} justify="center" px="lg">
        <Text size="11" lh={5} fw={900}>
          <span
            style={{
              opacity: 0.6,
            }}
          >
            {language == "en"
              ? "  Based on vFramework"
              : " vFramework によるベース"}
          </span>{" "}
        </Text>
        {/* <Menu>
          <Menu.Target>
            <UnstyledButton>
              <Badge variant="light" size="lg">
                <Group gap={3}>
                  <Text fw={500} size="11" lh={5} tt="none">
                    English (United States)
                  </Text>
                  <CaretDownIcon size="11" />
                </Group>
              </Badge>
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item
              leftSection={<CheckIcon />}
              onClick={() => {
                setLanguage("en");
              }}
            >
              <Text size="xs">English (United States)</Text>
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                setLanguage("jp");
              }}
            >
              <Text size="xs">Japanese ( 日本語 )</Text>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu> */}
      </Group>
    </>
  );
}
