"use client";

import {
  ActionIcon,
  Box,
  Breadcrumbs,
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
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon as Check,
  CheckIcon,
  ExclamationMarkIcon as ExclamationMark,
  HashIcon as Hash,
  InfoIcon,
  WarningIcon,
} from "@phosphor-icons/react";
import { FormHandler } from "@vframework/core";
import { PropsWithChildren, useEffect, useState } from "react";
import { formProps } from "./steps/s1_Identity/form.config";

import imgLogo from "@/assets/img/sswmini.png";
import {
  apiBackground,
  apiEducation,
  apiIdentification,
  apiLicense,
  apiPersonalInformation,
  apiPhysical,
  apiStory,
  apiWork,
} from "./module.api";

import { useParams, useRouter, useSearchParams } from "next/navigation";
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
import { StepIdentification } from "./steps/s8_identification";

export function ModuleOnboarding() {
  const forceUpdate = useForceUpdate();

  const Router = useRouter();

  const [current, setCurrent] = useState(0);
  const [personId, setPersonId] = useState(null);
  const [holder, setHolder] = useState({});
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const Params = useParams();
  const queryParams = useSearchParams();

  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["admin", "applicants", "edit"],
    queryFn: async () => {
      if (Params?.id) {
        const id = Params.id;
        const res = await apiPersonalInformation.get(Params.id);
        console.log("THIS", res);

        const data = res?.data || {};

        setPersonId(data.id);
        setHolder((prev) => ({ ...prev, ...data }));

        const step = Array.from({ length: 8 }, (_, i) => i + 1).find(
          (i) => data[`is_step${i}`] === false
        );
        if (step) setCurrent(step);

        const completed = Array.from({ length: 8 }, (_, i) => i + 1).filter(
          (i) => data[`is_step${i}`] === true
        );
        setCompletedSteps(completed);

        return {
          ...res?.data,
          ...res?.data?.a_background,

          ...res?.data?.a_physical,
          ...res?.data?.a_story,
          ...res?.data?.a_identification,
          category: String(res?.data?.category),
          education: res?.data?.a_education,
          work_experience: res?.data?.a_work_experience,
          licenses: res?.data?.a_license_qualification,
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
    "Identifications",
  ];

  const InitiateStep = () => {
    return (
      <Stack>
        <Text size="2rem" lh="2.3rem" fw={800}>
          We're glad you've decided to join us.
          <br /> Welcome aboard!
        </Text>

        <Group>
          <ThemeIcon variant="light">
            <ExclamationMark />
          </ThemeIcon>
          <Text size="sm" fw={600} c="brand.6">
            Please Read before you proceed.
          </Text>
        </Group>

        <Text size="xs" fw={600} mb="xl" maw={700}>
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
        apiBackground.update(body, data?.a_background?.id),
      transform: (e: any) => ({ applicant: personId, ...e }),
    },
    {
      component: <StepPhysical />,
      apiCreate: apiPhysical.create,
      apiUpdate: (body: any) => apiPhysical.update(body, data?.a_physical?.id),

      transform: (e: any) => ({ applicant: personId, ...e }),
    },
    {
      component: <StepStory />,
      apiCreate: apiStory.create,
      apiUpdate: (body: any) => apiStory.update(body, data?.a_story?.id),
      transform: (e: any) => ({ applicant: personId, ...e }),
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
          applicant: personId,
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
          applicant: personId,
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
          applicant: personId,
          ...item,
        })),
    },

    {
      component: <StepIdentification />,
      apiCreate: apiIdentification.create,
      isFormData: true,
      apiUpdate: (body: any) =>
        apiIdentification.update(body, data?.a_identification?.id),

      transform: (formdata: any) => {
        const { passport, l_cert_image, ssw_cert_image, ...res } = formdata;

        return {
          applicant: personId,
          ...res,
          ...(passport instanceof File ? { passport: passport } : {}),
          ...(l_cert_image instanceof File
            ? { l_cert_image: l_cert_image }
            : {}),
          ...(ssw_cert_image instanceof File
            ? { ssw_cert_image: ssw_cert_image }
            : {}),
        };
      },
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
            <ActionIcon
              radius="lg"
              size="xl"
              onClick={
                apiSubmit
                  ? handleSubmit
                  : () => {
                      setCurrent(current + 1);
                    }
              }
            >
              <ArrowRightIcon />
            </ActionIcon>
          ) : (
            <ActionIcon
              color="teal"
              size="xl"
              onClick={
                apiSubmit
                  ? handleSubmit
                  : () => {
                      setCurrent(current + 1);
                    }
              }
            >
              <CheckIcon />
            </ActionIcon>
          )}
        </Group>
      </Paper>
    );
  };

  if (Params.id && !data) {
    return (
      <>
        <Center h={500}>
          <Loader size="xs" />
        </Center>
      </>
    );
  }

  return (
    <section>
      <Container p="md">
        <Group justify="center" mb="xl" my="lg">
          <Group gap="xs">
            <Image
              src={imgLogo.src}
              h={24}
              w={32}
              style={{
                objectFit: "contain",
              }}
            />
            <Text size="xs" c="white">
              Unite SSW | Applicant Onboarding
            </Text>
          </Group>

          <Text size="xs" c="gray.0" opacity={0.5}>
            Authorized to provide the services listed.
          </Text>
        </Group>

        <Grid gutter="sm">
          <Grid.Col visibleFrom="lg" span={{ base: 12, lg: 4 }}>
            <Paper
              radius="lg"
              bg="dark.9"
              py="xl"
              px={{ base: "xs", lg: "xl" }}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "sticky",
                top: ".8rem",
              }}
            >
              <Box>
                <Text size="xs" opacity={0.5} mb="xl" c="gray.0">
                  User
                </Text>
                <Text size="2rem" fw={900} c="gray.0">
                  Onboarding
                  <br />
                  <span style={{ opacity: 0.5 }}> Applicant CV.</span>
                </Text>
                <Stack gap="4" my="xl">
                  {steps.map((step, index) => (
                    <Paper
                      className={classes.stepcard}
                      key={index}
                      radius="lg"
                      opacity={current >= index ? 1 : 0.5}
                      p="md"
                      bg={current === index ? "gray.0" : "none"}
                      onClick={() => {
                        Params.id && setCurrent(index);
                      }}
                    >
                      <Group justify="space-between">
                        <Group>
                          <Text
                            size="xs"
                            fw={800}
                            c={current === index ? "dark.9" : "gray.0"}
                          >
                            Step {index + 1} : {step}
                          </Text>
                        </Group>
                        {index < current ? (
                          completedSteps.includes(index + 1) ? (
                            <Check size={12} />
                          ) : (
                            <></>
                          )
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
                      <InfoIcon color="white" />
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
          <Grid.Col span={{ base: 12, lg: 8 }}>
            <FormHandler
              {...formProps}
              formType={isCompleted ? "edit" : "new"}
              initial={Params.id ? data : formProps.initial}
              apiSubmit={apiSubmit}
              submitFormData={submitFormData}
              transformDataOnSubmit={transformData}
              onSubmitSuccess={(res) => {
                if (!Params?.id && current == 8) {
                  Router.push("/admin/applicants/all");
                }

                if (!res?.err && res?.data?.id && current === 1) {
                  setPersonId(res.data.id);
                }
                const next = current + 1;
                if (next < stepConfig.length) {
                  setCurrent(next);
                }

                if (!completedSteps.includes(current)) {
                  setCompletedSteps([...completedSteps, current]);
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
