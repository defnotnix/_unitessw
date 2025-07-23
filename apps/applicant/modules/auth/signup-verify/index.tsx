"use client";

import React, { useState } from "react";
//next

//mantine
import {
  Alert,
  Badge,
  Button,
  Center,
  Group,
  Loader,
  Menu,
  PinInput,
  Stack,
  Text,
  TextInput,
  UnstyledButton,
} from "@mantine/core";
//mantine-form
import { useForm } from "@mantine/form";
// framework
import { triggerNotification } from "@vframework/ui";

//icons
import { CaretDownIcon, Check, Info, Warning, X } from "@phosphor-icons/react";

//styles
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";

//api
import { apiDispatch } from "@vframework/core";
import { apiLogin, apiResetPassword } from "./auth.api";

//components

export const configModule = {
  successRedirect: "/",
};

export function ModuleAuthOTP() {
  // * DEFINITIONS

  const Router = useRouter();
  const Params: any = useSearchParams();

  // * CONTEXT

  // * STATE

  const [cooldown, setCooldown] = useState(0);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  const form = useForm({
    initialValues: {
      otp: "",
      fLoading: false,
      remember: false,
    },
    validate: {
      otp: (value) => (value.length < 1 ? "Username Cannot be Empty" : null),
    },
  });

  const formRe = useForm({
    initialValues: {
      fLoading: false,
      password: "",
    },
    validate: {
      password: (value) =>
        value.length < 1 ? "Password Cannot be Empty" : null,
    },
  });

  const [errorType, setErrorType] = useState<string>("nan");
  const [completed, setCompleted] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  React.useEffect(() => {
    if (sessionStorage.getItem("ssw_otp") == "true") {
      setIsChecking(false);
      if (cooldown > 0) {
        const interval = setInterval(() => {
          setCooldown((prev) => prev - 1);
        }, 1000);
        setTimerId(interval);

        return () => clearInterval(interval);
      }

      if (cooldown === 0 && timerId) {
        clearInterval(timerId);
        setTimerId(null);
      }
    } else {
      Router.push("/");
    }
  }, [cooldown]);

  const handleResendCode = async () => {
    if (cooldown > 0) return;

    try {
      triggerNotification.form.isLoading({ message: "Resending Code..." });

      // Call your resend API (replace `apiResendOTP` with actual function)
      await apiDispatch.post({
        endpoint: "/authenticate/renew/otp/",
        body: {
          email: Params.get("id"),
        },
      });

      triggerNotification.form.isSuccess({
        message: "Code resent successfully.",
      });
      setCooldown(300); // 5 minutes = 300 seconds
    } catch (err: any) {
      form.setFieldValue("fLoading", false);
      triggerNotification.form.isError({
        message: err.message || "Failed to resend code.",
      });
    }
  };

  // * FUNCTIONS

  const mutation = useMutation({
    mutationFn: async () => {
      form.setFieldValue("fLoading", true);
      triggerNotification.auth.isLoading({});

      return apiLogin({
        email: Params.get("id"),
        otp: form.getValues()?.otp,
      });
    },
    onSuccess: (res) => {
      setCompleted(true);
      //sessionStorage.setItem("Manabiya HR Unitytoken", res?.data?.access_token || "");

      // if (form.values.remember) {
      //   handleRememberMe();
      // }
      sessionStorage.removeItem("ssw_otp");
      form.setFieldValue("fLoading", false);
      triggerNotification.auth.isSuccess({});
    },
    onError: (err: any) => {
      const { detail, type } = err.object.response.data;
      form.setErrors({
        otp: detail?.data?.otp[0] || "Invalid OTP",
      });

      setErrorType(type || "nan");
      form.setFieldValue("fLoading", false);
      triggerNotification.auth.isError({
        title: "Cannot verify OTP",
        message:
          detail?.data?.otp[0] ||
          "Incorred OTP Entered, Please try again." ||
          "Cannot Reach Server, Try Again!",
      });
    },
  });

  const mutationPassword = useMutation({
    mutationFn: async () => {
      formRe.setFieldValue("fLoading", true);
      triggerNotification.form.isLoading({});

      return apiResetPassword({
        email: Params.get("id"),
        password: formRe.getValues()?.password,
      });
    },
    onSuccess: (res) => {
      sessionStorage.removeItem("ssw_otp");
      Router.push("/");
    },
    onError: (err: any) => {
      const { detail } = err.object;
      formRe.setErrors({
        password:
          "Password has to be at least 8 characters long with Capitals & Symbols",
      });

      setErrorType(err?.type || "nan");
      form.setFieldValue("fLoading", false);
      triggerNotification.form.isError({});
    },
  });

  function handleSignIn() {
    if (!form.validate().hasErrors) {
      mutation.mutate();
    }
  }

  function handleReset() {
    if (!form.validate().hasErrors) {
      mutationPassword.mutate();
    }
  }

  // * COMPONENTS

  const RenderAlert = () => {
    switch (errorType) {
      case "Validation Error":
        return (
          <Alert py="xs" color="red" icon={<Warning weight="bold" />}>
            <Text size="xs" c="red.8" fw={500} py="2">
              The OTP you entered is incorrect. Try again.
            </Text>
          </Alert>
        );

      default:
        return (
          <Alert py="xs" color="red" icon={<Warning weight="bold" />}>
            <Text size="xs" c="red.8" fw={500} py="2">
              Something went wrong. Please try again later.
            </Text>
          </Alert>
        );
    }
  };

  if (completed && Params.get("type") !== "forgot") {
    return (
      <>
        <div>
          <Stack gap="sm">
            <div>
              <Text size="1.5rem" lh="1.8rem" ta="center">
                <b> Congratulations!</b>
                <br />
                You have successfully <i>validated </i> your account.
              </Text>
            </div>
          </Stack>

          <Group justify="center" mt="xl">
            <Text size="xs" ta="center">
              Please log in again with this account to continue the onboarding
              process. Just click the button below to go to the login page.
            </Text>

            <Button
              mt="md"
              onClick={() => {
                Router.push(
                  configModule.successRedirect +
                    `?type=newaccount&email=${Params.get("id")}`
                );
              }}
            >
              Take me to login.
            </Button>
          </Group>
        </div>
        <Group gap={0} justify="center" px="lg">
          <Text size="11" lh={5} fw={900}>
            <span
              style={{
                opacity: 0.6,
              }}
            >
              Based on
            </span>{" "}
            vFramework
          </Text>
        </Group>
      </>
    );
  }

  if (completed && Params.get("type") == "forgot") {
    return (
      <Stack>
        <div>
          <Text size="2rem" lh="2.3rem" ta="center">
            Renew-Password
          </Text>
        </div>
        <Text size="xs" ta="center" opacity={0.5}>
          Enter new password for your account.
        </Text>

        <TextInput
          radius="lg"
          size="lg"
          label="New Password"
          placeholder="Enter new password"
          disabled={form.getValues()?.fLoading}
          {...formRe.getInputProps("password")}
        />

        <Button
          radius="lg"
          size="lg"
          loading={formRe.getValues()?.fLoading}
          onClick={() => {
            handleReset();
          }}
        >
          Reset
        </Button>
      </Stack>
    );
  }

  // * ANIMATIONS

  if (isChecking) {
    return (
      <Stack gap="sm">
        <Center>
          <Loader size={24} py={64} />
        </Center>
      </Stack>
    );
  }

  return (
    <>
      <Stack gap="sm">
        <div>
          <Text size="2rem" lh="2.3rem" ta="center">
            We've sent you a code in your email.
          </Text>
        </div>

        <Text size="xs" ta="center" opacity={0.5}>
          We've send you a 5 digit code in {Params.get("id")}
        </Text>

        <Group justify="center">
          <PinInput
            py="xl"
            length={5}
            oneTimeCode
            size="xl"
            radius="lg"
            {...form.getInputProps("otp")}
          />
        </Group>
        <Group justify="center" gap="xs" mb="xl">
          <Text size="xs">Haven't received a code?</Text>
          <Badge
            tt="none"
            onClick={handleResendCode}
            style={{
              cursor: cooldown === 0 ? "pointer" : "not-allowed",
              opacity: cooldown === 0 ? 1 : 0.5,
            }}
          >
            {cooldown === 0
              ? "Resend Code"
              : `Wait ${Math.floor(cooldown / 60)}:${(cooldown % 60).toString().padStart(2, "0")}`}
          </Badge>
        </Group>

        {mutation.isError && <RenderAlert />}

        <Stack gap={0}>
          <Button
            radius="lg"
            size="lg"
            loading={form.getValues()?.fLoading}
            onClick={() => {
              handleSignIn();
            }}
          >
            Verify
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
            Based on
          </span>{" "}
          vFramework
        </Text>

        {/* <Group justify="center">
          <Menu>
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
              <Menu.Item leftSection={<Check />}>
                <Text size="xs">English (United States)</Text>
              </Menu.Item>
              <Menu.Item>
                <Text size="xs">Japanese ( 日本語 )</Text>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group> */}
      </Group>
    </>
  );
}
