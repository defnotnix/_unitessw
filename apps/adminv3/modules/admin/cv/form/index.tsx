"use client";

import {
  ActionIcon,
  Box,
  Breadcrumbs,
  Center,
  Container,
  Grid,
  Group,
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
  InfoIcon,
} from "@phosphor-icons/react";
import { FormHandler } from "@vframework/core";
import { PropsWithChildren, useRef, useState } from "react";
import { formProps } from "./steps/s1_Identity/form.config";

import {
  apiBackground,
  apiEducation,
  apiLicense,
  apiPersonalInformation,
  apiPhysical,
  apiStory,
  apiWork,
} from "./module.api";

import { useParams, useRouter } from "next/navigation";
import { StepIdentity } from "./steps/s1_Identity";
import { StepBackground } from "./steps/s2_background";
import { StepPhysical } from "./steps/s3_physical";
import { StepStory } from "./steps/s4_story";
import { StepAcademics } from "./steps/s5_academics";
import { StepWork } from "./steps/s6_work";
import { StepCertificates } from "./steps/s7_certifications";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import classes from "./_.module.css";

export function _Form() {
  const Router = useRouter();

  const [current, setCurrent] = useState(0);
  const [personId, setPersonId] = useState(null);
  const [holder, setHolder] = useState({});
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const Params = useParams();

  const isInitialLoad = useRef(true);
  const [showForm, setShowForm] = useState(false);
  const queryClient = useQueryClient();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["admin", "cv", "edit"],
    queryFn: async () => {
      if (Params?.id) {
        const id = Params.id;
        const res = await apiPersonalInformation.get(Params.id);

        const data = res?.data || {};

        setPersonId(data.id);
        setHolder((prev) => ({ ...prev, ...data }));

        if (isInitialLoad.current) {
          const step = Array.from({ length: 8 }, (_, i) => i + 1).find(
            (i) => data[`is_step${i}`] === false
          );

          if (step) setCurrent(step);

          const completed = Array.from({ length: 8 }, (_, i) => i + 1).filter(
            (i) => data[`is_step${i}`] === true
          );

          setCompletedSteps(completed);
        }

        setShowForm(true);

        return {
          ...res?.data,
          ...res?.data?.background,

          ...res?.data?.physical,
          ...res?.data?.story,

          education: res?.data?.education,
          work_experience: res?.data?.work_experience,
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
  ];

  const InitiateStep = () => (
    <Stack>
      <Text size="2rem" lh="2.3rem" fw={800}>
        Let's begin!
      </Text>
    </Stack>
  );

  const stepConfig: any = [
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
      apiCreate: async (body: any) => {
        const _forCreate = body?.filter((e: any) => {
          return !e.id;
        });
        const _forEdit = body?.filter((e: any) => {
          return e.id;
        });

        if (_forCreate.length > 0) {
          const res = await apiEducation.create(_forCreate);
          refetch();
        }
        if (_forEdit.length > 0)
          _forEdit.map((e: any) => apiEducation.update(e, e.id));

        return {};
      },
      apiUpdate: async (body: any) => {
        const _forCreate = body?.filter((e: any) => {
          return !e.id;
        });
        const _forEdit = body?.filter((e: any) => {
          return e.id;
        });

        if (_forCreate.length > 0) {
          const res = await apiEducation.create(_forCreate);
          refetch();
        }
        if (_forEdit.length > 0)
          _forEdit.map((e: any) => apiEducation.update(e, e.id));

        return {};
      },
      transform: (e: any) =>
        e.education.map((item: any) => ({
          person: personId,
          ...item,
        })),
    },
    {
      component: <StepWork />,
      apiCreate: async (body: any) => {
        const _forCreate = body?.filter((e: any) => {
          return !e.id;
        });
        const _forEdit = body?.filter((e: any) => {
          return e.id;
        });

        if (_forCreate.length > 0) {
          const res = await apiWork.create(_forCreate);
          refetch();
        }
        if (_forEdit.length > 0)
          _forEdit.map((e: any) => apiWork.update(e, e.id));

        return {};
      },
      apiUpdate: async (body: any) => {
        const _forCreate = body?.filter((e: any) => {
          return !e.id;
        });
        const _forEdit = body?.filter((e: any) => {
          return e.id;
        });

        if (_forCreate.length > 0) {
          const res = await apiWork.create(_forCreate);
          refetch();
        }
        if (_forEdit.length > 0)
          _forEdit.map((e: any) => apiWork.update(e, e.id));

        return {};
      },
      transform: (e: any) =>
        e.work_experience.map((item: any) => ({
          person: personId,
          ...item,
        })),
    },
    {
      component: <StepCertificates />,
      apiCreate: async (body: any) => {
        const _forCreate = body?.filter((e: any) => {
          return !e.id;
        });
        const _forEdit = body?.filter((e: any) => {
          return e.id;
        });

        if (_forCreate.length > 0) {
          const res = await apiLicense.create(_forCreate);
          refetch();
        }
        if (_forEdit.length > 0)
          _forEdit.map((e: any) => apiLicense.update(e, e.id));

        return {};
      },
      apiUpdate: async (body: any) => {
        const _forCreate = body?.filter((e: any) => {
          return !e.id;
        });
        const _forEdit = body?.filter((e: any) => {
          return e.id;
        });

        if (_forCreate.length > 0) {
          const res = await apiLicense.create(_forCreate);
          refetch();
        }
        if (_forEdit.length > 0)
          _forEdit.map((e: any) => apiLicense.update(e, e.id));
        return {};
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
  const transformData = currentStepConfig.transform ?? ((e: any) => e);
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
        <Paper>
          <Container py="sm">
            <Grid align="center">
              <Grid.Col span={{ base: 12, lg: 3 }}>
                <Group gap="xs">
                  <ActionIcon
                    onClick={() => {
                      Router.back();
                    }}
                  >
                    <ArrowLeftIcon />
                  </ActionIcon>

                  <Text size="xs" fw={700}>
                    New CV
                  </Text>
                </Group>
              </Grid.Col>

              <Grid.Col span={{ base: 12, lg: 9 }}>
                <Group gap={4} visibleFrom="lg" justify="flex-end">
                  <Breadcrumbs separator={<Text size="xs">/</Text>}>
                    <Text size="xs" opacity={0.4}>
                      Admin
                    </Text>
                    <Text size="xs" opacity={0.4}>
                      CV
                    </Text>
                    <Text size="xs">New</Text>
                  </Breadcrumbs>
                </Group>
              </Grid.Col>
            </Grid>
          </Container>
        </Paper>
        <Center h={500}>
          <Loader size="xs" />
        </Center>
      </>
    );
  }

  return (
    <section>
      <Paper>
        <Container py="sm">
          <Grid align="center">
            <Grid.Col span={{ base: 12, lg: 3 }}>
              <Group gap="xs">
                <ActionIcon
                  onClick={() => {
                    Router.back();
                  }}
                >
                  <ArrowLeftIcon />
                </ActionIcon>

                <Text size="xs" fw={700}>
                  New CV
                </Text>
              </Group>
            </Grid.Col>

            <Grid.Col span={{ base: 12, lg: 9 }}>
              <Group gap={4} visibleFrom="lg" justify="flex-end">
                <Breadcrumbs separator={<Text size="xs">/</Text>}>
                  <Text size="xs" opacity={0.4}>
                    Admin
                  </Text>
                  <Text size="xs" opacity={0.4}>
                    CV
                  </Text>
                  <Text size="xs">New</Text>
                </Breadcrumbs>
              </Group>
            </Grid.Col>
          </Grid>
        </Container>
      </Paper>

      <Container p="md">
        <Grid gutter="sm">
          <Grid.Col visibleFrom="lg" span={{ base: 12, lg: 4 }}>
            <Paper
              radius="lg"
              bg="brand.2"
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
                <Text size="xs" opacity={0.5} mb="xl">
                  Creating a new CV
                </Text>
                <Text size="2rem" fw={900}>
                  Generate a new
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
                        setCurrent(index);
                      }}
                    >
                      <Group justify="space-between">
                        <Group>
                          <Text size="xs" fw={800}>
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
              key={JSON.stringify(data)}
              {...formProps}
              formType={isCompleted ? "edit" : "new"}
              initial={data ? data : formProps.initial}
              apiSubmit={apiSubmit}
              submitFormData={submitFormData}
              transformDataOnSubmit={transformData}
              onSubmitSuccess={(res) => {
                if (res.data && current > 1) {
                  queryClient.setQueryData(
                    ["admin", "applicants", "edit"],
                    (old: any) => {
                      return {
                        ...old,
                        ...(current == 2 ? { a_background: res?.data } : {}),
                        ...(current == 3 ? { a_physical: res?.data } : {}),
                        ...(current == 4 ? { a_story: res?.data } : {}),
                        ...(current == 5 ? { a_education: res?.data } : {}),
                        ...(current == 6
                          ? { a_work_experience: res?.data }
                          : {}),
                        ...(current == 7
                          ? { a_license_qualification: res?.data }
                          : {}),
                        ...(current == 8
                          ? { a_identification: res?.data }
                          : {}),
                        ...(current == 9 ? { a_japan_visit: res?.data } : {}),
                      };
                    }
                  );
                }

                if (current == 7) {
                  // # HAVE TO TEST

                  Router.push("/admin/cv/active/" + personId);
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
