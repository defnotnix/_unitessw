"use client";

import React, { useState } from "react";
//next

//mantine
import {
  Alert,
  Anchor,
  Badge,
  Button,
  Center,
  Checkbox,
  CheckIcon,
  Container,
  Divider,
  Group,
  Loader,
  Menu,
  Paper,
  PasswordInput,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
  UnstyledButton,
} from "@mantine/core";
//mantine-form
import { useForm } from "@mantine/form";
// framework
import { triggerNotification } from "@vframework/ui";

//icons
import {
  CaretDownIcon,
  InfoIcon,
  WarningIcon,
  XIcon,
} from "@phosphor-icons/react";

//styles
import classes from "./auth.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

//api
import { apiLogin, googleLogin } from "./auth.api";

import { jwtDecode } from "jwt-decode";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { useLanguage } from "@/layouts/app/app.context";

//components

export const configModule = {
  successRedirect: "/dashboard",
};

export function ModuleAuthSignIn() {
  // * DEFINITIONS

  const Router = useRouter();
  const Params = useSearchParams();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {},
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

    Router.push("/home");
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

      setErrorType(response?.data?.alias || "nan");
      form.setFieldValue("fLoading", false);
      triggerNotification.auth.isError({
        message: err.message || "Cannot Reach Server, Try Again!",
      });
    },
  });

  function handleSignIn() {
    if (!form.validate().hasErrors) {
      mutation.mutate();
    }
  }

  // * COMPONENTS

  const RenderAlert = () => {
    switch (errorType) {
      case "info":
        return (
          <Alert
            radius="md"
            py="xs"
            color="blue"
            icon={<InfoIcon weight="bold" />}
          >
            <Text size="xs" c="blue.8" fw={500} py="2">
              Server under Maintainance, Try Later!
            </Text>
          </Alert>
        );
      case "pending":
        return (
          <Alert
            radius="md"
            py="xs"
            color="indigo"
            icon={<InfoIcon weight="bold" />}
          >
            <Text size="xs" c="indigo.8" fw={500} py="2">
              Verification Pending, Try Later!
            </Text>
          </Alert>
        );
      case "blocked":
        return (
          <Alert radius="md" py="xs" color="red" icon={<XIcon weight="bold" />}>
            <Text size="xs" c="red.8" fw={500} py="2">
              Account Blocked! Contact Admin
            </Text>
          </Alert>
        );
      case "expire_account":
        return (
          <Alert
            radius="md"
            py="xs"
            color="orange"
            icon={<XIcon weight="bold" />}
          >
            <Text size="xs" c="orange.8" fw={500} py="2">
              Account Expired! Contact Admin
            </Text>
          </Alert>
        );
      case "nan":
        return (
          <Alert radius="md" py="xs" color="red" icon={<XIcon weight="bold" />}>
            <Text size="xs" c="red.8" fw={500} py="2">
              Cannot Reach Server, Try Again!
            </Text>
          </Alert>
        );

      default:
        return (
          <Alert
            radius="md"
            py="xs"
            color="red"
            icon={<WarningIcon weight="bold" />}
          >
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

        {/* <SimpleGrid my="md" spacing="xs" cols={{ base: 1, lg: 1 }}>
          <GoogleLogin
            shape="circle"
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
              onGoogleSuccess(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </SimpleGrid> */}

        {/* <Divider label="or continue with" /> */}

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
          <Anchor size="xs" c="dark" fw={600} opacity={0.3}>
            {language == "en" ? "Forgot Password?" : "パス"}
          </Anchor>
        </Group>

        {mutation.isError && <RenderAlert />}

        <Stack gap={0}>
          {completed ? (
            <Button radius="lg" size="lg" loading={form.getValues()?.fLoading}>
              <CheckIcon />
            </Button>
          ) : (
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
          )}
          <Button
            mt={2}
            radius="lg"
            size="lg"
            variant="subtle"
            onClick={() => {
              Router.push("/signup");
            }}
            disabled
          >
            {language == "en"
              ? "Don't have an account? Sign Up Here"
              : "アカウントをお持ちでない場合は、こちらからサインアップしてください。"}
          </Button>
        </Stack>
      </Stack>

      <Group gap={0} justify="space-between" px="lg">
        <Text size="11" lh={5} fw={900}>
          <span
            style={{
              opacity: 0.6,
            }}
          >
            {language == "en"
              ? " Based on vFramework"
              : " vFramework によるベース"}
          </span>{" "}
        </Text>
        <Menu>
          <Menu.Target>
            <UnstyledButton>
              <Badge variant="light" size="lg">
                <Group gap={3}>
                  <Text fw={500} size="11" lh={5} tt="none">
                    {language === "en" ? "English (United States)" : "日本語"}
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
        </Menu>
      </Group>
    </>
  );
}
