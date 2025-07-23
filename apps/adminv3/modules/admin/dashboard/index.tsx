"use client";

import {
  ActionIcon,
  Avatar,
  Badge,
  Button,
  Center,
  Container,
  Divider,
  Grid,
  Group,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  ArticleIcon,
  CheckIcon,
  ChecksIcon,
  EyeIcon,
  Icon,
  ScrollIcon,
  UsersIcon,
} from "@phosphor-icons/react";

import { endpoint } from "@/layouts/app";
import { BarChart } from "@mantine/charts";
import { modals } from "@mantine/modals";
import { useQuery } from "@tanstack/react-query";
import { moduleApiCall } from "@vframework/core";
import { triggerNotification } from "@vframework/ui";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getUnpublished, publishRecord } from "../applicants/module.api";
import { getSeekerReqRecords, toggleLogStatus } from "../bookedlogs/module.api";
import classes from "./_.module.css";

export function ModuleAdminDashboard() {
  const Router = useRouter();

  const [tokenData, setTokenData] = useState<any>(null);

  useEffect(() => {
    const token = sessionStorage.getItem("sswtoken");
    if (token) {
      setTokenData(jwtDecode(token));
    }
  }, []);

  const queryApplicants = useQuery({
    queryKey: ["admin", "dashboard", "applicants"],
    queryFn: async () => {
      const res = await getUnpublished({});

      return res.results;
    },
    initialData: [],
  });

  const querySeekerRequest = useQuery({
    queryKey: ["admin", "dashboard", "seekerRequest"],
    queryFn: async () => {
      const res = await getSeekerReqRecords();

      return res.results;
    },
    initialData: [],
  });

  const queryDashboard = useQuery({
    queryKey: ["admin", "dashboard"],
    queryFn: async () => {
      const res = await moduleApiCall.getRecords({
        endpoint: "/dashboard/admin/",
      });

      return res;
    },
    initialData: {
      applicant_per_category: [],
    },
  });

  const StatCard = ({
    icon,
    label,
    description,
    number,
    url,
  }: {
    icon: Icon;
    label: string;
    description: string;
    number: string;
    url: string;
  }) => {
    const SIcon = icon;

    return (
      <Paper
        p="md"
        className={classes.statcard}
        withBorder
        onClick={() => {
          if (url) {
            Router.push(url);
          }
        }}
      >
        <Stack gap="xs">
          <Group justify="space-between">
            <Text fw={700} size="xs">
              {label}
            </Text>
            <ActionIcon size="sm" variant="light">
              <SIcon size={12} />
            </ActionIcon>
          </Group>
          <Space h="sm" />
          <Text size="2rem"> {number}</Text>
          <Group justify="space-between">
            <Text size="xs" opacity={0.5}>
              {description}
            </Text>
            <ActionIcon size="sm" variant="subtle" color="dark">
              <ArrowUpRightIcon size={12} weight="bold" />
            </ActionIcon>
          </Group>
        </Stack>
      </Paper>
    );
  };

  const ApplicantRenders = () => {
    const [activeTab, setActiveTab] = useState<number>(0);

    return (
      <Paper withBorder>
        <Paper>
          <Paper withBorder>
            <Paper px="sm" py={5}>
              <Group justify="space-between" my="4px">
                <Text size="xs" fw={700}>
                  Applicants Feed
                </Text>

                <ActionIcon
                  size="sm"
                  variant="subtle"
                  onClick={() => {
                    Router.push("/admin/applicants/pending");
                  }}
                >
                  <ArrowUpRightIcon />
                </ActionIcon>
              </Group>
            </Paper>
            <Divider />

            <SimpleGrid cols={4} spacing="md" px="sm" py="xs">
              <Text size="xs" fw={800} opacity={0.6}>
                Applicant
              </Text>

              <Text size="xs" fw={800} opacity={0.6}></Text>

              <Text size="xs" fw={800} opacity={0.6}>
                Address
              </Text>

              <Text size="xs" fw={800} opacity={0.6}>
                Status
              </Text>
            </SimpleGrid>
          </Paper>

          {queryApplicants.data?.map((item: any, index: number) => {
            return (
              <Paper radius={0} bg="brand.0" p="sm" withBorder key={index}>
                <SimpleGrid cols={4} spacing="md">
                  <div>
                    <Group gap="xs" wrap="nowrap">
                      <Avatar
                        src={endpoint + item?.image}
                        size="sm"
                        color="blue"
                        name={item?.first_name + item?.last_name}
                      />
                      <div>
                        <Text size="xs" fw={700}>
                          {item?.first_name} {item?.middle_name}{" "}
                          {item?.last_name}
                        </Text>
                        <Text size="10px" opacity={0.5} fw={700}>
                          {item?.jp_last_name} {item?.jp_first_name}{" "}
                          {item?.jp_middle_name}
                        </Text>
                      </div>
                    </Group>
                  </div>
                  <div>
                    <Group gap="xs">
                      <div>
                        <Text size="xs" fw={700}>
                          {item?.current_address}
                        </Text>
                        <Text size="10px" opacity={0.5} fw={700}>
                          {item?.jp_current_address}
                        </Text>
                      </div>
                    </Group>
                  </div>
                  <Text size="12px">
                    Nayabazar, Sorakhutte, Kathmandu, Bagmati, Nepal.
                  </Text>
                  <Group justify="space-between" wrap="nowrap">
                    <Group gap={4}>
                      <Badge size="xs" color="teal">
                        Profile Complete
                      </Badge>
                    </Group>

                    <ActionIcon
                      variant="light"
                      color="teal"
                      onClick={() => {
                        modals.openConfirmModal({
                          title: (
                            <Group>
                              <Text
                                size="sm"
                                style={{
                                  fontWeight: 600,
                                }}
                              >
                                Are you sure you want to publish this applicant?
                              </Text>
                            </Group>
                          ),
                          children: (
                            <>
                              <Text size="xs" my="md">
                                This will make this profile visible to all
                                registered seekers.
                              </Text>
                            </>
                          ),
                          styles: {
                            header: {
                              background: "var(--mantine-color-brand-0)",
                            },
                          },
                          labels: {
                            confirm: "Publish",
                            cancel: "Cancel",
                          },
                          confirmProps: {
                            color: "brand",
                          },
                          onConfirm: async () => {
                            triggerNotification.form.isLoading({
                              title: "Publishing",
                              message: "Publishing in progress...",
                            });

                            publishRecord({}, item.id)
                              .then((res) => {
                                if (!res.err) {
                                  triggerNotification.form.isSuccess({
                                    title: "Published",
                                    message: "Applicant has been published.",
                                  });
                                  queryApplicants.refetch();
                                }
                              })
                              .catch((err) => {
                                triggerNotification.form.isError({
                                  title: "Error",
                                  message: err.message,
                                });
                              });
                          },
                        });
                      }}
                    >
                      <CheckIcon />
                    </ActionIcon>
                  </Group>
                </SimpleGrid>
              </Paper>
            );
          })}
        </Paper>

        {queryApplicants.data?.length == 0 && (
          <Center p="xl">
            <Text size="xs" opacity={0.5}>
              You don't have any new applicant requests.
            </Text>
          </Center>
        )}
      </Paper>
    );
  };

  return (
    <div>
      <Paper
        bg="linear-gradient(to bottom, var(--mantine-color-dark-9),var(--mantine-color-gray-9))"
        radius={0}
      >
        <Container py="3rem">
          <Text size="2rem" c="gray.0">
            Welcome back {tokenData?.name || "User"}!
          </Text>
          <Text size="sm" c="gray.5">
            Here is an overview for you.
          </Text>

          <Space h="xl" />

          <SimpleGrid cols={{ base: 1, lg: 5 }} spacing="4px" mb={-100}>
            <StatCard
              icon={UsersIcon}
              label="Applicants"
              description="Total applicants registered till date."
              url="/admin/applicants/all"
              number={queryDashboard.data?.total_published_applicant || "0"}
            />
            <StatCard
              icon={ScrollIcon}
              label="New Requests"
              description="Total applicants registered till date."
              url="/admin/applicants/pending"
              number={queryDashboard.data?.total_unpublished_count || "0"}
            />
            <StatCard
              icon={CheckIcon}
              label="Booked Applicants"
              description="Total applicants registered till date."
              url="/admin/applicants/notified"
              number={queryDashboard.data?.total_booked_count || "0"}
            />
            <StatCard
              icon={ArticleIcon}
              label="CV"
              description="Total applicants registered till date."
              url="/admin/cv/active"
              number={queryDashboard.data?.total_cv_count || "0"}
            />
            <StatCard
              icon={EyeIcon}
              label="Seekers"
              description="Total applicants registered till date."
              url="/admin/accounts/seeker"
              number={queryDashboard.data?.inactive_seekers || "0"}
            />
          </SimpleGrid>
        </Container>
      </Paper>

      <Container mt={24}>
        <Grid py="2rem" gutter="4px">
          <Grid.Col span={{ base: 12, lg: 7.2 }}>
            <Paper withBorder mb="xs" pb="md">
              <Paper p="sm" mb="md">
                <Text size="xs" fw={700}>
                  Applicant Overview
                </Text>
              </Paper>

              <BarChart
                px="md"
                h={300}
                data={queryDashboard.data?.applicant_per_category.map(
                  (item: any) => {
                    return {
                      category: item.category__name,
                      total: item.total,
                      booked: item.booked,
                      published: item.published,
                      unpublished: item.unpublished,
                    };
                  }
                )}
                dataKey="category"
                series={[
                  {
                    name: "total",
                    label: "Total Applicants",
                    color: "violet.6",
                  },
                  { name: "published", label: "Published", color: "blue.6" },
                  {
                    name: "unpublished",
                    label: "Pending",
                    color: "teal.6",
                  },
                  {
                    name: "booked",
                    label: "Booked",
                    color: "orange.6",
                  },
                ]}
                tickLine="y"
              />
            </Paper>

            <ApplicantRenders />
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 4.8 }}>
            <Paper>
              <Paper withBorder>
                <Paper p="sm">
                  <Text size="xs" fw={700}>
                    Recent Seeker Requests
                  </Text>
                </Paper>

                <Divider />

                <SimpleGrid cols={2} spacing="xs" px="sm" py="xs">
                  <Text size="xs" fw={800} opacity={0.6}>
                    Applicant
                  </Text>

                  <Group justify="space-between">
                    <Text size="xs" fw={800} opacity={0.6}>
                      Requested By
                    </Text>
                  </Group>
                </SimpleGrid>
              </Paper>

              {querySeekerRequest.data?.map((item: any, index: number) => {
                return (
                  <Paper radius={0} bg="brand.0" p="sm" withBorder key={index}>
                    <SimpleGrid cols={2} spacing="xs">
                      <div>
                        <Group gap="xs">
                          <Avatar size="sm" name={item.applicant?.name} />
                          <Stack gap={2}>
                            <Badge
                              size="xs"
                              color={
                                item?.intent == "Interview" ? "indigo" : "pink"
                              }
                            >
                              {item?.intent == "Interview"
                                ? "For Interview"
                                : "Interested"}
                            </Badge>
                            <Text size="xs" fw={700}>
                              {item?.applicant?.first_name}{" "}
                              {item?.applicant?.middle_name}{" "}
                              {item?.applicant?.last_name}
                            </Text>
                          </Stack>
                        </Group>
                      </div>

                      <Group justify="space-between" wrap="nowrap">
                        <Stack gap={2}>
                          <Text size="10px" opacity={0.5} fw={700}>
                            {item?.seeker?.email}
                          </Text>
                          <Text size="xs" fw={700}>
                            {item?.seeker?.name}
                          </Text>

                          <Text size="10px" opacity={0.5} fw={700}>
                            {String(new Date(item?.created_at)).substring(
                              0,
                              25
                            )}
                          </Text>
                        </Stack>

                        {/* <Button
                          size="xs"
                          p={0}
                          px="sm"
                          leftSection={<ChecksIcon />}
                          onClick={() => {
                            modals.openConfirmModal({
                              title: (
                                <Group>
                                  <Text
                                    size="sm"
                                    style={{
                                      fontWeight: 600,
                                    }}
                                  >
                                    Are you sure you want to accept this
                                    request?
                                  </Text>
                                </Group>
                              ),
                              children: (
                                <>
                                  <Text size="xs" my="md">
                                    This will mark this request as accepted for
                                    both you and the seeker account.
                                  </Text>
                                </>
                              ),
                              labels: {
                                confirm: "Confirm",
                                cancel: "Cancel",
                              },
                              confirmProps: {
                                color: "brand",
                              },
                              onConfirm: () => {
                                triggerNotification.form.isLoading({});

                                toggleLogStatus(item?.id)
                                  .then((res) => {
                                    if (!res.err) {
                                      querySeekerRequest.refetch();
                                      triggerNotification.form.isSuccess({
                                        message: "Request Accepted",
                                      });
                                    }
                                  })
                                  .catch((err) => {
                                    
                                    triggerNotification.form.isError({
                                      message: "Request Rejected",
                                    });
                                  });
                              },
                              styles: {
                                header: {
                                  background: "var(--mantine-color-brand-0)",
                                },
                              },
                              size: "sm",
                            });
                          }}
                        >
                          Accept
                        </Button> */}

                        <ActionIcon
                          variant="light"
                          onClick={() => {
                            Router.push("/admin/applicants/notified");
                          }}
                        >
                          <ArrowRightIcon />
                        </ActionIcon>
                      </Group>
                    </SimpleGrid>
                  </Paper>
                );
              })}

              {querySeekerRequest.data?.length == 0 && (
                <Center p="xl">
                  <Text size="xs" opacity={0.5}>
                    You don't have any pending seeker requests
                  </Text>
                </Center>
              )}
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
