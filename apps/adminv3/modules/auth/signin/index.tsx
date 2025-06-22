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
} from "@phosphor-icons/react";

//styles
import classes from "./auth.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

//api
import { apiLogin } from "./auth.api";

import { jwtDecode } from "jwt-decode";
import { useTimeout } from "@mantine/hooks";

//components

export const configModule = {
  successRedirect: "/dashboard",
};

export function ModuleAuthSignIn() {
  // * DEFINITIONS

  const Router = useRouter();
  const Params = useSearchParams();

  // * CONTEXT

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

      const decoded: any = jwtDecode(res.data?.access_token);
      console.log(decoded);

      setTimeout(() => {
        Router.push(
          decoded?.is_first_login == "True" ? "/onboarding" : "/admin"
        );
      }, 1000);
    },
    onError: (err: any) => {
      const { response } = err.object;

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

  // * ANIMATIONS

  if (completed) {
    return (
      <>
        <div>
          <Text size="xl" lh="lg" ta="center">
            Welcome Back!
            <br />
            Give me a moment while i arrange few things.
          </Text>

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

  return (
    <>
      <Stack gap="sm">
        <div>
          <Text size="2rem" lh="2.3rem" ta="center">
            {Params.get("type") == "newaccount"
              ? "Welcome Back!"
              : "Welcome Back!"}
            <br />
            <i> Sign In </i>to{" "}
            {Params.get("type") == "newaccount"
              ? "start onboarding process."
              : "get started."}
          </Text>
        </div>

        <Space h={"xs"} />

        {/* <SimpleGrid my="md" spacing="xs" cols={{ base: 1, lg: 1 }}>
          <Button
            radius="lg"
            size="lg"
            variant="light"
            leftSection={<GoogleLogo weight="bold" />}
            disabled={form.getValues()?.fLoading}
          >
            Sign In with Google
          </Button>
        </SimpleGrid>

        <Divider label="or continue with" /> */}

        <TextInput
          radius="lg"
          size="lg"
          label="Email"
          placeholder="x@example.com"
          disabled={form.getValues()?.fLoading}
          {...form.getInputProps("email")}
        />

        <PasswordInput
          radius="lg"
          size="lg"
          label="Password"
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
          <Anchor size="xs" c="dark" fw={600}>
            Forgot Password?
          </Anchor>
        </Group>

        <Space h={"xs"} />

        {mutation.isError && <RenderAlert />}

        <Stack gap={0}>
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
            Sign In
          </Button>
          {/* <Button
            radius="lg"
            size="lg"
            variant="subtle"
            onClick={() => {
              Router.push("/signup");
            }}
          >
            Don't have an account? Sign Up Here
          </Button> */}
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
