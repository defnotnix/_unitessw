"use client";

import {
  ActionIcon,
  Box,
  Button,
  CheckIcon,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import {
  ArrowLeft,
  ArrowRight,
  ArrowRightIcon,
  Check,
  Circle,
  ExclamationMark,
  Hash,
  Info,
  InfoIcon,
} from "@phosphor-icons/react";
import { FormHandler } from "@vframework/core";
import { PropsWithChildren, useEffect, useState } from "react";
import { formProps } from "./steps/s1_Identity/form.config";

import imgLogo from "@/assets/img/sswmini.png";
import {
  apiAcademics,
  apiDetails,
  apiDocument,
  apiMedical,
  apiOrthodontics,
  apiWork,
} from "./module.api";

import { jwtDecode } from "jwt-decode";
import { useSearchParams } from "next/navigation";
import { StepIdentity } from "./steps/s1_Identity";
import { StepBackground } from "./steps/s2_background";
import { StepPhysical } from "./steps/s3_physical";
import { StepStory } from "./steps/s4_story";
import { StepAcademics } from "./steps/s5_academics";
import { StepWork } from "./steps/s6_work";
import { StepCertificates } from "./steps/s7_certifications";

export function ModuleOnboarding() {
  const [current, sC] = useState(7);

  const queryParams: any = useSearchParams();

  function setCurrent(value: number) {
    sC(value);
    sessionStorage.setItem("ssw_onboarding", value.toString());
  }

  // useEffect(() => {
  //   if (queryParams.get("step") || sessionStorage.getItem("ssw_onboarding")) {
  //     setCurrent(
  //       Number(sessionStorage.getItem("ssw_onboarding")) |
  //         Number(queryParams.get("step"))
  //     );
  //   }
  // }, []);

  const steps = [
    "Welcome",
    "Identity & Contact",
    "Background & Legal Status",
    "Physical & Family Info",
    "Personal Story",
    "Academics",
    "Work History",
    "Certifications",
    "Completed",
  ];

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
          overflowX: "hidden",
        }}
      >
        <Group justify="space-between" hiddenFrom="lg">
          <Text size="xs" c="gray.0">
            Authorized to provide the services listed.
          </Text>
        </Group>

        <Group justify="space-between" mb="xl" visibleFrom="lg">
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
            <Text size="xs">Apply</Text>
            <Text size="xs">Process</Text>
          </Group>
        </Group>

        {children}

        <Group justify="space-between" mt="xl">
          {current >= 0 ? (
            <Text size="xs">
              Step {current + 1} of {steps.length}
              {current !== steps.length && (
                <span
                  style={{
                    opacity: 0.5,
                  }}
                >
                  {" "}
                  - Upcomming Step: {steps[current + 1]}
                </span>
              )}
            </Text>
          ) : (
            <Text size="xs">
              Ready to start ? Click the button on the right to begin. 😊
            </Text>
          )}
          {current < steps.length - 1 ? (
            <ActionIcon
              radius="lg"
              size="xl"
              onClick={() => {
                handleSubmit();
              }}
            >
              <ArrowRightIcon />
            </ActionIcon>
          ) : (
            <ActionIcon color="teal" size="xl" onClick={() => {}}>
              <CheckIcon />
            </ActionIcon>
          )}
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

  return (
    <>
      <section
        style={{
          background: "var(--mantine-color-gray-3)",
        }}
      >
        <Container p="md">
          <Grid gutter={"sm"}>
            <Grid.Col
              visibleFrom="lg"
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
                      CV Generator
                    </span>
                  </Text>

                  <Stack gap="4" my="xl">
                    {steps.map((_: string, index: number) => {
                      return (
                        <Paper
                          radius="lg"
                          opacity={current >= index ? 1 : 0.5}
                          key={index}
                          p="md"
                          bg={current == index ? "brand.5" : "none"}
                          style={{
                            color: "var(--mantine-color-gray-0)",
                          }}
                        >
                          <Group justify="space-between">
                            <Group>
                              <Hash size={12} />
                              <Text size="xs" fw={600}>
                                Step {index + 1} : {_}
                              </Text>
                            </Group>
                            {index < current ? (
                              <Check size={12} />
                            ) : index == current ? (
                              <ArrowRight size={12} />
                            ) : (
                              <></>
                            )}
                          </Group>
                        </Paper>
                      );
                    })}
                  </Stack>
                </Box>

                <Box>
                  <Paper p="lg" radius="lg" bg="dark.9">
                    <Group gap="md" wrap="nowrap">
                      <ThemeIcon size="md">
                        <InfoIcon />
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
              {current == 0 && (
                <FormHandler
                  {...formProps}
                  onSubmitSuccess={() => setCurrent(current + 1)}
                >
                  <FormLayout>
                    <InitiateStep />
                  </FormLayout>
                </FormHandler>
              )}

              {current == 1 && (
                <FormHandler
                  {...formProps}
                  apiSubmit={apiDocument}
                  onSubmitSuccess={async (body) => {
                    setCurrent(current + 1);
                  }}
                >
                  <FormLayout>
                    <StepIdentity />
                  </FormLayout>
                </FormHandler>
              )}

              {current == 2 && (
                <FormHandler
                  {...formProps}
                  apiSubmit={apiDocument}
                  onSubmitSuccess={async (body) => {
                    setCurrent(current + 1);
                  }}
                >
                  <FormLayout>
                    <StepBackground />
                  </FormLayout>
                </FormHandler>
              )}

              {current == 3 && (
                <FormHandler
                  {...formProps}
                  apiSubmit={apiDocument}
                  onSubmitSuccess={async (body) => {
                    setCurrent(current + 1);
                  }}
                >
                  <FormLayout>
                    <StepPhysical />
                  </FormLayout>
                </FormHandler>
              )}

              {current == 4 && (
                <FormHandler
                  {...formProps}
                  apiSubmit={apiDocument}
                  onSubmitSuccess={async (body) => {
                    setCurrent(current + 1);
                  }}
                >
                  <FormLayout>
                    <StepStory />
                  </FormLayout>
                </FormHandler>
              )}

              {current == 5 && (
                <FormHandler
                  {...formProps}
                  apiSubmit={apiDocument}
                  onSubmitSuccess={async (body) => {
                    setCurrent(current + 1);
                  }}
                >
                  <FormLayout>
                    <StepAcademics />
                  </FormLayout>
                </FormHandler>
              )}

              {current == 6 && (
                <FormHandler
                  {...formProps}
                  apiSubmit={apiDocument}
                  onSubmitSuccess={async (body) => {
                    setCurrent(current + 1);
                  }}
                >
                  <FormLayout>
                    <StepWork />
                  </FormLayout>
                </FormHandler>
              )}

              {current == 7 && (
                <FormHandler
                  {...formProps}
                  apiSubmit={apiDocument}
                  onSubmitSuccess={async (body) => {
                    setCurrent(current + 1);
                  }}
                >
                  <FormLayout>
                    <StepCertificates />
                  </FormLayout>
                </FormHandler>
              )}
            </Grid.Col>
          </Grid>
        </Container>
      </section>
    </>
  );
}
