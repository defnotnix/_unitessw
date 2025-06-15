"use client";

import {
  ActionIcon,
  Box,
  Center,
  Container,
  Grid,
  Group,
  Image,
  Loader,
  Paper,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import {
  ArrowRightIcon,
  CheckIcon as Check,
  CheckIcon,
  ExclamationMarkIcon as ExclamationMark,
  HashIcon as Hash,
  InfoIcon,
} from "@phosphor-icons/react";
import { FormHandler } from "@vframework/core";
import { PropsWithChildren, useEffect, useState } from "react";
import { formProps } from "./steps/s1_Identity/form.config";

import imgLogo from "@/assets/img/sswmini.png";
import {
  apiBackground,
  apiEducation,
  apiLicense,
  apiPersonalInformation,
  apiPhysical,
  apiStory,
  apiWork,
} from "./module.api";

import { useParams, useSearchParams } from "next/navigation";
import { StepIdentity } from "./steps/s1_Identity";
import { StepBackground } from "./steps/s2_background";
import { StepPhysical } from "./steps/s3_physical";
import { StepStory } from "./steps/s4_story";
import { StepAcademics } from "./steps/s5_academics";
import { StepWork } from "./steps/s6_work";
import { StepCertificates } from "./steps/s7_certifications";

import classes from "./_.module.css";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useForceUpdate } from "@mantine/hooks";
import _ from "lodash";

export function ModuleOnboarding() {
  const forceUpdate = useForceUpdate();

  const [current, setCurrent] = useState(0);
  const [personId, setPersonId] = useState(null);
  const [holder, setHolder] = useState({});
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const Params = useParams();
  const queryParams = useSearchParams();

  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["admin", "cv", "edit"],
    queryFn: async () => {
      if (Params?.id) {
        const id = Params.id;
        const res = await apiPersonalInformation.get(Params.id);
        console.log("THIS", res);

        const data = res?.data || {};

        setPersonId(data.id);
        setHolder((prev) => ({ ...prev, ...data }));

        const step = Array.from({ length: 7 }, (_, i) => i + 1).find(
          (i) => data[`is_step${i}`] === false
        );
        if (step) setCurrent(step);

        const completed = Array.from({ length: 7 }, (_, i) => i + 1).filter(
          (i) => data[`is_step${i}`] === true
        );
        setCompletedSteps(completed);

        return {
          ...res?.data,
          ...res?.data?.background,

          ...res?.data?.physical,
          ...res?.data?.story,

          licenses: res?.data?.license_qualification,
        };
      } else {
        return {
          education: [],
          work_experience: [],
          licenses: [],
        };
      }
    },
  });

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

  const InitiateStep = () => (
    <Stack>
      <Text size="2rem" lh="2.3rem">
        We're glad you've decided to join us. Welcome aboard!
      </Text>
      <Group>
        <ThemeIcon variant="light">
          <ExclamationMark />
        </ThemeIcon>
        <Text size="sm" fw={600} c="brand.6">
          Please read before you proceed.
        </Text>
      </Group>
      <Text size="xs" fw={600} mb="xl">
        You'll go through a few steps to complete your onboarding process. This
        may take some time, so please ensure you're in a comfortable setting
        before you begin.
        <br />
        <br />
        Before you begin, please be ready with:{" "}
        <b>
          General Details, Medical Details such as Eye Examination, Orthodontic
          Appliances, Academics, Work History, and Official Documents (e.g.
          Citizenship/Passport/License).
        </b>
      </Text>
    </Stack>
  );

  const stepConfig = [
    { component: <InitiateStep />, apiCreate: null, apiUpdate: null },
    {
      component: <StepIdentity />,
      apiCreate: apiPersonalInformation.create,
      apiUpdate: (body: any) => apiPersonalInformation.update(body, personId),
      isFormData: true,
      transform: (formdata: any) => {
        const { image, ...res } = formdata;

        return {
          ...res,
          ...(formdata.image instanceof File ? { image: formdata.image } : {}),
        };
      },
    },
    {
      component: <StepBackground />,
      apiCreate: apiBackground.create,
      apiUpdate: (body: any) =>
        apiBackground.update(body, data?.background?.id),
      transform: (e: any) => ({ person: personId, ...e }),
    },
    {
      component: <StepPhysical />,
      apiCreate: apiPhysical.create,
      apiUpdate: (body: any) => apiPhysical.update(body, data?.physical?.id),

      transform: (e: any) => ({ person: personId, ...e }),
    },
    {
      component: <StepStory />,
      apiCreate: apiStory.create,
      apiUpdate: (body: any) => apiStory.update(body, data?.story?.id),
      transform: (e: any) => ({ person: personId, ...e }),
    },
    {
      component: <StepAcademics />,
      apiCreate: apiEducation.create,
      apiUpdate: async (body: any) => {
        const _forCreate = body?.filter((e: any) => {
          return !e.id;
        });
        const _forEdit = body?.filter((e: any) => {
          return e.id;
        });

        await apiEducation.create(_forCreate);
        _forEdit.map((e: any) => apiEducation.update(e, e.id));
      },
      transform: (e: any) =>
        e.education.map((item: any) => ({
          person: personId,
          ...item,
          from_year: item.year?.[0]?.substring(0, 4),
          to_year: item.year?.[1]?.substring(0, 4),
        })),
    },
    {
      component: <StepWork />,
      apiCreate: apiWork.create,
      apiUpdate: async (body: any) => {
        const _forCreate = body?.filter((e: any) => {
          return !e.id;
        });
        const _forEdit = body?.filter((e: any) => {
          return e.id;
        });

        await apiWork.create(_forCreate);
        _forEdit.map((e: any) => apiWork.update(e, e.id));
      },
      transform: (e: any) =>
        e.work_experience.map((item: any) => ({
          person: personId,
          ...item,
          from_year: item.year?.[0]?.substring(0, 4),
          end_year: item.year?.[1]?.substring(0, 4),
        })),
    },
    {
      component: <StepCertificates />,
      apiCreate: apiLicense.create,
      apiUpdate: async (body: any) => {
        const _forCreate = body?.filter((e: any) => {
          return !e.id;
        });
        const _forEdit = body?.filter((e: any) => {
          return e.id;
        });

        await apiLicense.create(_forCreate);
        _forEdit.map((e: any) => apiLicense.update(e, e.id));
      },
      transform: (e: any) =>
        e.licenses.map((item: any) => ({
          person: personId,
          ...item,
        })),
    },
  ];

  const currentStepConfig = stepConfig[current];
  const isCompleted = completedSteps.includes(current);
  const apiSubmit = isCompleted
    ? currentStepConfig.apiUpdate
    : currentStepConfig.apiCreate;
  const transformData = currentStepConfig.transform ?? ((e) => e);
  const submitFormData = currentStepConfig?.isFormData ?? false;

  const FormLayout = ({ children }: PropsWithChildren) => {
    const { handleSubmit } = FormHandler.usePropContext();

    return (
      <Paper
        radius="lg"
        h={{ base: "auto", lg: "calc(100vh - var(--mantine-spacing-xl))" }}
        py="xl"
        px={{ base: "xl", lg: "4rem" }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >
        <Group justify="space-between" mb="xl">
          <Text size="xs">
            Step {current + 1} of {steps.length}
            {current !== steps.length && (
              <span style={{ opacity: 0.5 }}>
                {" "}
                - Upcoming Step: {steps[current + 1]}
              </span>
            )}
          </Text>
        </Group>

        {children}

        <Group justify="space-between" mt="xl">
          <Text size="xs">
            Step {current + 1} of {steps.length}
            {current !== steps.length && (
              <span style={{ opacity: 0.5 }}>
                {" "}
                - Upcoming Step: {steps[current + 1]}
              </span>
            )}
          </Text>
          {current < steps.length - 1 ? (
            <ActionIcon radius="lg" size="xl" onClick={handleSubmit}>
              <ArrowRightIcon />
            </ActionIcon>
          ) : (
            <ActionIcon color="teal" size="xl">
              <CheckIcon />
            </ActionIcon>
          )}
        </Group>
      </Paper>
    );
  };

  if (Params.id && !data) {
    return (
      <Center h={500}>
        <Loader size="xs" />
      </Center>
    );
  }

  return (
    <section style={{ background: "var(--mantine-color-gray-3)" }}>
      <Container p="md">
        <Grid gutter="sm">
          <Grid.Col visibleFrom="lg" span={{ base: 12, lg: 5 }}>
            <Paper
              radius="lg"
              bg="dark.8"
              h={{
                base: "auto",
                lg: "calc(100vh - var(--mantine-spacing-xl))",
              }}
              py="xl"
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
                    style={{ objectFit: "contain" }}
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
                  <span style={{ opacity: 0.5 }}>CV Generator</span>
                </Text>
                <Stack gap="4" my="xl">
                  {steps.map((step, index) => (
                    <Paper
                      className={classes.stepcard}
                      key={index}
                      radius="lg"
                      opacity={current >= index ? 1 : 0.5}
                      p="md"
                      bg={current === index ? "brand.5" : "none"}
                      style={{ color: "var(--mantine-color-gray-0)" }}
                      onClick={() => {
                        Params.id && setCurrent(index);
                      }}
                    >
                      <Group justify="space-between">
                        <Group>
                          <Hash size={12} />
                          <Text size="xs" fw={600}>
                            Step {index + 1} : {step}
                          </Text>
                        </Group>
                        {index < current ? (
                          <Check size={12} />
                        ) : index === current ? (
                          <ArrowRightIcon size={12} />
                        ) : null}
                      </Group>
                    </Paper>
                  ))}
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
                      professional profile. Please ensure all information
                      provided is accurate.
                    </Text>
                  </Group>
                </Paper>
              </Box>
            </Paper>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 7 }}>
            <FormHandler
              {...formProps}
              formType={isCompleted ? "edit" : "new"}
              initial={data}
              apiSubmit={apiSubmit}
              submitFormData={submitFormData}
              transformDataOnSubmit={transformData}
              onSubmitSuccess={(res) => {
                if (!res?.err && res?.data?.id && current === 1) {
                  setPersonId(res.data.id);
                }
                const next = current + 1;
                if (next < stepConfig.length) {
                  setCurrent(next);
                }
              }}
            >
              <FormLayout>{currentStepConfig.component}</FormLayout>
            </FormHandler>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
}
