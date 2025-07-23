"use client";

import {
  ActionIcon,
  Badge,
  Box,
  Button,
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
  InfoIcon,
  PowerIcon,
} from "@phosphor-icons/react";
import { FormHandler } from "@vframework/core";
import { PropsWithChildren, useRef, useState } from "react";
import { formProps } from "./steps/s1_Identity/form.config";

import { InitialStep } from "./steps/s0_terms";

import z from "zod";

import imgLogo from "@/assets/img/sswmini.png";
import {
  apiBackground,
  apiEducation,
  apiIdentification,
  apiJapanVisit,
  apiLicense,
  apiPersonalInformation,
  apiPhysical,
  apiStory,
  apiWork,
} from "./module.api";

import { usePathname, useRouter } from "next/navigation";
import { StepIdentity } from "./steps/s1_Identity";
import { StepBackground } from "./steps/s2_background";
import { StepPhysical } from "./steps/s3_physical";
import { StepStory } from "./steps/s4_story";
import { StepAcademics } from "./steps/s5_academics";
import { StepWork } from "./steps/s6_work";
import { StepCertificates } from "./steps/s7_certifications";

import { endpoint } from "@/layouts/app";
import { images } from "@/public/img";
import { useForceUpdate } from "@mantine/hooks";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import classes from "./_.module.css";
import { StepVisit } from "./steps/s10_visit";
import { StepIdentification } from "./steps/s8_identification";

export function ModuleOnboarding() {
  const forceUpdate = useForceUpdate();

  const Router = useRouter();
  const Pathname = usePathname();

  const [current, setCurrent] = useState(0);
  const [personId, setPersonId] = useState(null);
  const [holder, setHolder] = useState({});
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const [reEdit, setReEdit] = useState(false);

  const [showForm, setShowForm] = useState(false);

  const queryClient = useQueryClient();

  const isInitialLoad = useRef(true);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["admin", "applicants", "edit"],
    queryFn: async () => {
      if (!sessionStorage.getItem("sswtoken")) {
        Router.push("/");
        return formProps.initial;
      } else {
        const token: any = jwtDecode(sessionStorage.getItem("sswtoken") || "");

        if (token.user_id) {
          const res = await apiPersonalInformation.get(token.user_id);
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

          // mark initial load complete
          isInitialLoad.current = false;

          if (
            (res?.data?.is_published || res?.data?.is_step9) &&
            Pathname !== "/myprofile/edit"
          ) {
            Router.push("/myprofile");
            return formProps.initial;
          } else {
            setShowForm(true);
            return {
              ...res?.data,
              ...res?.data?.a_background,

              ...res?.data?.a_physical,
              ...res?.data?.a_story,
              ...res?.data?.a_identification,

              category: String(res?.data?.category),
              education: res?.data?.a_education || [],
              work_experience: res?.data?.a_work_experience || [],
              licenses: res?.data?.a_license_qualification || [],
              visithistory: res?.data?.a_japan_visit || [],

              image: res?.data?.image ? endpoint + res?.data?.image : null,
              passport: res?.data?.a_identification?.passport
                ? endpoint + res?.data?.a_identification?.passport
                : null,
              l_cert_image: res?.data?.a_identification?.l_cert_image
                ? endpoint + res?.data?.a_identification?.l_cert_image
                : null,
              ssw_cert_image: res?.data?.a_identification?.ssw_cert_image
                ? endpoint + res?.data?.a_identification?.ssw_cert_image
                : null,
            };
          }
        } else {
          return formProps.initial;
        }
      }
    },
  });

  const steps = [
    "Welcome",
    "Identity & Contact",
    "Background & Legal Status",
    "Physical & Emergency Contact",
    "Personal Story",
    "Academics",
    "Work History",
    "Certifications",
    "Identifications",
    "Japan Visit History",
    "Completed",
  ];

  const CompletedStep = () => {
    return (
      <Stack py={100} maw={500}>
        <Text size="2rem" lh="2.3rem" fw={800}>
          Hey there! You have successfully completed the onboarding application
          process.
        </Text>

        <Text size="xs" fw={600} mb="xl" maw={700}>
          Your details are now sent for further verification from our team. You
          will be notified via email once your account is verified & active.
          We're looking forward to having you with us.
        </Text>
      </Stack>
    );
  };

  const stepConfig = [
    { component: <InitialStep />, apiCreate: null, apiUpdate: null },
    {
      component: <StepIdentity />,
      apiCreate: apiPersonalInformation.create,
      apiUpdate: (body: any) => apiPersonalInformation.update(body, personId),
      isFormData: true,
      transform: (formdata: any) => {
        const { image, ...res } = formdata;

        var applicantId: any = "";

        try {
          var tokenDecoded: any = jwtDecode(
            sessionStorage.getItem("sswtoken") || ""
          );
          applicantId = tokenDecoded?.user_id;
        } catch (err) {
          applicantId = "";
        }

        return {
          ...res,
          user: applicantId,
          ...(formdata.image instanceof File ? { image: formdata.image } : {}),
        };
      },
    },
    {
      component: <StepBackground />,
      apiCreate: apiBackground.create,
      apiUpdate: (body: any) =>
        apiBackground.update(body, data?.a_background?.id),
      transform: (e: any) => ({
        applicant: personId,
        ...e,
        code:
          "USW" +
          "0000".substring(0, 4 - String(personId).length) +
          String(personId),
      }),
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
          applicant: personId,
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
          applicant: personId,
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

    {
      component: <StepVisit />,

      validation: [
        {
          visithistory: z.array(
            z.object({
              from_month: z.string().trim().max(15, {
                message: "From month must be 15 characters or fewer",
              }),

              to_month: z.string().trim().max(15, {
                message: "To month must be 15 characters or fewer",
              }),

              purpose: z.string().trim().max(100, {
                message: "Purpose must be 100 characters or fewer",
              }),

              jp_purpose: z.string().trim().max(100, {
                message: "Japanese purpose must be 100 characters or fewer",
              }),
            })
          ),
        },
      ],
      isFormData: false,
      apiCreate: async (body: any) => {
        const _forCreate = body?.filter((e: any) => {
          return !e.id;
        });
        const _forEdit = body?.filter((e: any) => {
          return e.id;
        });

        if (_forCreate.length > 0) {
          const res = await apiJapanVisit.create(_forCreate);
          refetch();
        }
        if (_forEdit.length > 0)
          _forEdit.map((e: any) => apiJapanVisit.update(e, e.id));

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
          const res = await apiJapanVisit.create(_forCreate);
          refetch();
        }
        if (_forEdit.length > 0)
          _forEdit.map((e: any) => apiJapanVisit.update(e, e.id));
        return {};
      },

      transform: (e: any) =>
        e.visithistory.map((item: any) => ({
          applicant: personId,
          ...item,
        })),
    },

    { component: <CompletedStep />, apiCreate: null, apiUpdate: null },
  ];

  const currentStepConfig = stepConfig[current];
  const isCompleted = completedSteps.includes(current);
  const apiSubmit = isCompleted
    ? currentStepConfig.apiUpdate
    : currentStepConfig.apiCreate;
  const transformData = currentStepConfig.transform ?? ((e) => e);
  const submitFormData = currentStepConfig?.isFormData ?? false;
  const validation = currentStepConfig?.validation || [];

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
              onClick={() => Router.push("/myprofile")}
              disabled={completedSteps.length !== steps.length - 2}
            >
              <CheckIcon />
            </ActionIcon>
          )}
        </Group>
      </Paper>
    );
  };

  if (!showForm) {
    return (
      <>
        <Center h={"100vh"} bg="dark.9">
          <Paper p="md" bg="none">
            <Stack>
              <Image src={images.logoMini} />

              <Center>
                <Loader color="white" size="xs" />
              </Center>
            </Stack>
          </Paper>
        </Center>
      </>
    );
  }

  return (
    <section>
      <Container p="md">
        <Group justify="space-between" mb="xl" my="lg">
          <Group gap="xs">
            <Image
              src={imgLogo.src}
              h={24}
              w={32}
              style={{
                objectFit: "contain",
              }}
            />
            <Text size="xs">Manabiya HR Unity | Applicant Onboarding</Text>
          </Group>

          <Group>
            <Text size="xs" fw={600}>
              Complete this later?
            </Text>
            <Button
              size="sm"
              leftSection={<PowerIcon size={12} />}
              onClick={() => {
                sessionStorage.removeItem("sswtoken");
                Router.push("/");
              }}
            >
              Sign Out
            </Button>
          </Group>
        </Group>

        <Grid gutter="sm">
          <Grid.Col visibleFrom="lg" span={{ base: 12, lg: 4 }}>
            <Paper
              radius="lg"
              bg="linear-gradient(to bottom, rgba(0,0,0,.7), rgba(0,0,0,.9))"
              py="xl"
              px={{ base: "xs", lg: "xl" }}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backdropFilter: "blur(32px)",
                position: "sticky",
                top: ".8rem",
              }}
            >
              <Box>
                <Text size="2rem" fw={900} c="gray.0">
                  Onboarding
                  <br />
                  <span style={{ opacity: 0.5 }}> Applicant CV.</span>
                </Text>
                <Stack gap="4" my="xl">
                  {steps.map((step, index) => (
                    <Paper
                      className={
                        current !== index ? classes.stepcard : undefined
                      }
                      key={index}
                      radius="lg"
                      opacity={current >= index ? 1 : 0.5}
                      p="md"
                      bg={current === index ? "gray.0" : "none"}
                      onClick={() => {
                        if (
                          [
                            ...completedSteps,
                            completedSteps.length + 1,
                          ].includes(index)
                        ) {
                          setCurrent(index);
                        }
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
                        <Group>
                          {index == completedSteps.length + 1 ? (
                            <Badge size="xs">CURRENT</Badge>
                          ) : (
                            ""
                          )}

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
              resetOnSubmit={false}
              formType={isCompleted ? "edit" : "new"}
              initial={data || formProps.initial}
              apiSubmit={apiSubmit}
              submitFormData={submitFormData}
              transformDataOnSubmit={transformData}
              validation={validation}
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

                if (current == 10) {
                  Router.push("/myprofile");
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
