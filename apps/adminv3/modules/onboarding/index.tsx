"use client";

import {
  ActionIcon,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Loader,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Circle,
  ExclamationMark,
  Hash,
  Info,
  CheckIcon,
} from "@phosphor-icons/react";
import { FormHandler } from "@vframework/core";
import { PropsWithChildren, useEffect, useState } from "react";

import imgLogo from "@/assets/img/sswmini.png";

import { jwtDecode } from "jwt-decode";
import { useRouter, useSearchParams } from "next/navigation";
import { formProps } from "./form/form.config";
import { FormOnboarding } from "./form";
import { updateRecord } from "./module.api";
import { Router } from "next/router";

export function ModuleOnboarding() {
  const [current, setCurrent] = useState(0);
  const Router = useRouter();
  const [complete, setComplete] = useState(false);

  const token: any = jwtDecode(sessionStorage.getItem("sswtokenadmin") || "");
  console.log(token);

  const FormLayout = ({ children }: PropsWithChildren) => {
    const { handleSubmit } = FormHandler.usePropContext();

    return (
      <Paper
        radius="lg"
        h={{
          base: "auto",
          lg: "calc(100vh -   var(--mantine-spacing-xl))",
        }}
        py={{ base: "xl" }}
        px={{ base: "xl", lg: "4rem" }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflowY: "scroll",
        }}
      >
        <Group justify="space-between" mb="xl">
          <Text size="xs">
            <b> UNITE SSW</b>
            <span
              style={{
                opacity: 0.5,
              }}
            >
              {" "}
              | Bridging Job seekers and Employers
            </span>
          </Text>

          <Group gap="xs">
            <Text size="xs">Account Onboarding</Text>
          </Group>
        </Group>

        {children}

        <Group justify="space-between" mt="xl">
          <ActionIcon color="teal" size="xl" onClick={handleSubmit}>
            <CheckIcon />
          </ActionIcon>
        </Group>
      </Paper>
    );
  };

  const InitiateStep = () => {
    return (
      <Stack>
        <Text size="2rem" lh="2.3rem">
          We're glad you've decided to join us. Welcome aboard!
        </Text>

        <Group>
          <ThemeIcon variant="light">
            <ExclamationMark />
          </ThemeIcon>
          <Text size="sm" fw={600} c="brand.6">
            Please Read before you proceed.
          </Text>
        </Group>

        <Text size="xs" fw={600} mb="xl">
          You’ll go through a few steps to complete your onboarding process.
          This may take a little time, so make sure you’re in a comfortable
          place before you begin.
          <br />
          <br />
          Before you begin, You will need to be prepared with :{" "}
          <b>
            General Details, Medical Details like your Eye Examination,
            Orthodontic Appliances, Academics, Work History, and Official
            Documents (e.g. Citizenship/Passport/License).
          </b>
        </Text>
      </Stack>
    );
  };

  if (complete) {
    return (
      <Center h="100vh">
        <Stack>
          <Text size="sm" ta="center" fw={800}>
            Onboarding Complete!
            <br /> Sending you over to your portal.
          </Text>

          <Group justify="center" py="xl">
            <Loader />
          </Group>

          <Text size="sm" ta="center" opacity={0.5}>
            Welcome to Unite SSW Team.
          </Text>
        </Stack>
      </Center>
    );
  }

  return (
    <>
      <section
        style={{
          background:
            "linear-gradient(60deg,rgb(15, 16, 18) 0%,rgb(9, 10, 16) 100%)",
        }}
      >
        <Container p="md">
          <Grid gutter={"sm"}>
            <Grid.Col
              span={{
                base: 12,
                lg: 5,
              }}
            >
              <Paper
                radius="lg"
                bg="dark.8"
                h={{
                  base: "auto",
                  lg: "calc(100vh -   var(--mantine-spacing-xl))",
                }}
                py={{ base: "xl" }}
                px={{ base: "xl", lg: "4rem" }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Group justify="space-between">
                  <Group gap="xs">
                    <Image
                      src={imgLogo.src}
                      h={24}
                      w={32}
                      style={{
                        objectFit: "contain",
                      }}
                    />
                    <Text size="sm" c="white">
                      UNITE SSW
                    </Text>
                  </Group>

                  <Text size="xs" c="gray.0">
                    Authorized to provide the services listed.
                  </Text>
                </Group>

                <Box>
                  <Text size="3rem" c="gray.0">
                    Applicant <br />
                    <span
                      style={{
                        opacity: 0.5,
                      }}
                    >
                      Onboarding
                    </span>
                  </Text>
                </Box>

                <Box>
                  <Paper p="lg" radius="lg" bg="dark.9">
                    <Group gap="md" wrap="nowrap">
                      <ThemeIcon size="md">
                        <Info />
                      </ThemeIcon>
                      <Text size="xs" c="gray.0">
                        You are in the process of building a comprehensive
                        professional profile. Please ensure that all information
                        provided is accurate and precise.
                      </Text>
                    </Group>
                  </Paper>
                </Box>
              </Paper>
            </Grid.Col>
            <Grid.Col
              span={{
                base: 12,
                lg: 7,
              }}
              h={{
                base: "auto",
              }}
            >
              <FormHandler
                {...formProps}
                initial={{
                  id: token?.user_id,
                  ...token,
                }}
                formType="edit"
                apiSubmit={(body, id) => {
                  return updateRecord(body, token.user_id);
                }}
                onSubmitSuccess={() => {
                  setComplete(true);
                  setTimeout(() => {
                    Router.push("/admin");
                  }, 3000);
                }}
              >
                <FormLayout>
                  <FormOnboarding />
                </FormLayout>
              </FormHandler>
            </Grid.Col>
          </Grid>
        </Container>
      </section>
    </>
  );
}
