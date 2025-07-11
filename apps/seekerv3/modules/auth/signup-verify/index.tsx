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
  Container,
  Divider,
  Group,
  Menu,
  Paper,
  PasswordInput,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
  UnstyledButton,
  PinInput,
  Loader,
} from "@mantine/core";
//mantine-form
import { useForm } from "@mantine/form";
// framework
import { triggerNotification } from "@vframework/ui";

//icons
import {
  AppleLogo,
  Atom,
  GoogleLogo,
  Info,
  X,
  Warning,
  CaretDown,
  Check,
} from "@phosphor-icons/react";

//styles
import classes from "./auth.module.css";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";

//api
import { apiLogin } from "./auth.api";
import { apiDispatch } from "@vframework/core";

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

  const [errorType, setErrorType] = useState<string>("nan");
  const [completed, setCompleted] = useState(false);

  React.useEffect(() => {
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
      triggerNotification.form.isError({
        message: err.message || "Failed to resend code.",
      });
    }
  };

  // * FUNCTIONS

  const handleRememberMe = () => {};

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

      form.setFieldValue("fLoading", false);
      triggerNotification.auth.isSuccess({});
    },
    onError: (err: any) => {
      const { response } = err.object;
      form.setErrors({
        otp: response?.data?.otp[0] || "Invalid OTP",
      });

      console.log("ERROR", response);
      setErrorType(response?.data?.type || "nan");
      form.setFieldValue("fLoading", false);
      triggerNotification.auth.isError({
        title: "Cannot verify OTP",
        message:
          response?.data?.otp[0] ||
          "Invalid OTP" ||
          "Cannot Reach Server, Try Again!",
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
          <Alert py="xs" color="blue" icon={<Info weight="bold" />}>
            <Text size="xs" c="blue.8" fw={500} py="2">
              Server under Maintainance, Try Later!
            </Text>
          </Alert>
        );
      case "pending":
        return (
          <Alert py="xs" color="indigo" icon={<Info weight="bold" />}>
            <Text size="xs" c="indigo.8" fw={500} py="2">
              Verification Pending, Try Later!
            </Text>
          </Alert>
        );
      case "blocked":
        return (
          <Alert py="xs" color="red" icon={<X weight="bold" />}>
            <Text size="xs" c="red.8" fw={500} py="2">
              Account Blocked! Contact Admin
            </Text>
          </Alert>
        );
      case "nan":
        return (
          <Alert py="xs" color="red" icon={<X weight="bold" />}>
            <Text size="xs" c="red.8" fw={500} py="2">
              Cannot Reach Server, Try Again!
            </Text>
          </Alert>
        );
      default:
        return (
          <Alert py="xs" color="red" icon={<Warning weight="bold" />}>
            <Text size="xs" c="red.8" fw={500} py="2">
              Invalid Credentials. Try Again!
            </Text>
          </Alert>
        );
    }
  };

  if (completed) {
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
          <Menu>
            <Menu.Target>
              <UnstyledButton>
                <Badge variant="light" size="lg">
                  <Group gap={3}>
                    <Text fw={500} size="11" lh={5} tt="none">
                      English (United States)
                    </Text>
                    <CaretDown size="11" />
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
        </Group>
      </>
    );
  }

  // * ANIMATIONS

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
        {/* <Group justify="center" gap="xs" mb="xl">
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
        </Group> */}

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
        <Menu>
          <Menu.Target>
            <UnstyledButton>
              <Badge variant="light" size="lg">
                <Group gap={3}>
                  <Text fw={500} size="11" lh={5} tt="none">
                    English (United States)
                  </Text>
                  <CaretDown size="11" />
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
      </Group>
    </>
  );
}
