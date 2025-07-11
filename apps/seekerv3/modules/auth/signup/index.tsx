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
  Loader,
  LoadingOverlay,
  Menu,
  Paper,
  PasswordInput,
  SimpleGrid,
  Space,
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
  AppleLogo,
  Atom,
  GoogleLogo,
  Info,
  X,
  Warning,
  CaretDown,
  Check,
  GoogleLogoIcon,
} from "@phosphor-icons/react";

//styles
import classes from "./auth.module.css";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

//api
import { apiLogin, googleLogin } from "./auth.api";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";

//components

export function ModuleAuthSignUp() {
  // * DEFINITIONS

  const Router = useRouter();

  // * CONTEXT

  // * STATE

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
      fLoading: false,
    },
    validate: {
      email: (value) => (value.length < 1 ? "Username Cannot be Empty" : null),
      password: (value) =>
        value.length < 1 ? "Password Cannot be Empty" : null,
    },
  });

  const [errorType, setErrorType] = useState<string>("nan");
  const [completed, setCompleted] = useState(false);
  const [processingGoogle, setProcessingGoogle] = useState(false);

  // * FUNCTIONS

  const handleRememberMe = () => {};

  const mutation = useMutation({
    mutationFn: async () => {
      form.setFieldValue("fLoading", true);
      triggerNotification.auth.isLoading({});
      return apiLogin(form.getValues());
    },
    onSuccess: (res) => {
      setCompleted(true);
      //sessionStorage.setItem("Manabiya HR Unitytoken", res?.data?.access_token || "");

      // if (form.values.remember) {
      //   handleRememberMe();
      // }

      form.setFieldValue("fLoading", false);
      triggerNotification.auth.isSuccess({});
      setTimeout(() => {
        Router.push("/signup-verify?id=" + form.getValues()?.email);
      }, 1000);
    },
    onError: (err: any) => {
      const { response } = err.object;

      form.setErrors(response?.data);

      console.log("ERROR", response);
      setErrorType(response?.data?.type || "nan");
      form.setFieldValue("fLoading", false);
      triggerNotification.auth.isError({
        message: err.message || "Cannot Reach Server, Try Again!",
      });
    },
  });

  function handleSignIn() {
    if (!form.validate().hasErrors) {
      mutation.mutate();
    } else {
    }
  }

  async function onGoogleSuccess(tokenResponse: any) {
    triggerNotification.auth.isLoading({});
    setProcessingGoogle(true);
    if (tokenResponse?.credential) {
      console.log(tokenResponse);
      await googleLogin({
        token: tokenResponse.credential,
      });
      setProcessingGoogle(false);
      triggerNotification.auth.isSuccess({});
      setCompleted(true);

      setTimeout(() => {
        Router.push("/?type=newaccount");
      }, 1000);
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
              <Text size="xl" lh="lg" ta="center">
                Creating your account!
                <br />
                Please give me a moment.
              </Text>
            </div>
          </Stack>

          <Group justify="center" mt="xl">
            <Loader size="xs" />{" "}
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
      <LoadingOverlay visible={processingGoogle} />
      <Stack gap="sm">
        <div>
          <Text size="1.6rem" lh="2rem" ta="center" mb="md">
            <b>
              Add a new password
              <br /> for your Seeker Account
            </b>
          </Text>
        </div>

        <PasswordInput
          radius="lg"
          size="lg"
          label="Password"
          placeholder="Enter new password"
          disabled={form.getValues()?.fLoading}
          {...form.getInputProps("password")}
        />
        <PasswordInput
          radius="lg"
          size="lg"
          label="Re-Password"
          placeholder="Enter password again"
          disabled={form.getValues()?.fLoading}
          {...form.getInputProps("repassword")}
        />

        <Group justify="space-between">
          <Checkbox
            disabled
            //disabled={form.getValues()?.fLoading}
            size="xs"
            label="Remember me"
          />
          <Anchor size="xs" c="dark" fw={600}>
            Forgot Password?
          </Anchor>
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
            Confirm
          </Button>
          <Space h={32} />
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
