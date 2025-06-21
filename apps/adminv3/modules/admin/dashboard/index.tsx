"use client";

import { StatCard } from "@/components/StatCard";
import {
  ActionIcon,
  Anchor,
  Avatar,
  Badge,
  Box,
  Breadcrumbs,
  Button,
  ButtonGroup,
  Center,
  Container,
  Divider,
  Grid,
  Group,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Table,
  Text,
} from "@mantine/core";
import {
  ArrowUpLeftIcon,
  ArrowUpRightIcon,
  ArticleIcon,
  CheckIcon,
  EyeIcon,
  House,
  HouseIcon,
  Icon,
  ScrollIcon,
  UsersIcon,
} from "@phosphor-icons/react";

import classes from "./_.module.css";
import { useState } from "react";
import { BarChart, DonutChart } from "@mantine/charts";

export function ModuleAdminDashboard() {
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
      <Paper p="md" className={classes.statcard} withBorder>
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
              <Group justify="space-between">
                <Text size="xs" fw={700}>
                  Applicants Feed
                </Text>

                <ButtonGroup>
                  <Button
                    color="gray.9"
                    size="xs"
                    variant={activeTab == 0 ? "filled" : "light"}
                  >
                    Recently Added
                  </Button>
                  <Button
                    color="gray.9"
                    size="xs"
                    variant={activeTab == 1 ? "filled" : "light"}
                  >
                    New Requests
                  </Button>
                  <Button
                    color="gray.9"
                    size="xs"
                    variant={activeTab == 2 ? "filled" : "light"}
                  >
                    Bookmarked
                  </Button>
                </ButtonGroup>
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

          <Paper radius={0} bg="brand.0" p="sm">
            <SimpleGrid cols={4} spacing="md">
              <div>
                <Group gap="xs">
                  <Avatar size="sm" color="blue">
                    AM
                  </Avatar>
                  <div>
                    <Text size="xs" fw={700}>
                      Applicant Name
                    </Text>
                    <Text size="10px" opacity={0.5} fw={700}>
                      Age: 28 | Male
                    </Text>
                  </div>
                </Group>
              </div>

              <div>
                <Group gap="xs">
                  <div>
                    <Text size="xs" fw={700}>
                      Hospitality Services
                    </Text>

                    <Text size="10px" opacity={0.5} fw={700}>
                      anamol.maharjan@gmail.com
                    </Text>
                  </div>
                </Group>
              </div>

              <Text size="12px">
                Nayabazar, Sorakhutte, Kathmandu, Bagmati, Nepal.
              </Text>

              <Group justify="space-between" wrap="nowrap">
                <Group gap={4}>
                  <Badge size="xs">Active</Badge>
                  <Badge size="xs" color="teal.7">
                    Profile Complete
                  </Badge>
                </Group>

                <ActionIcon size="sm" variant="subtle">
                  <ArrowUpRightIcon />
                </ActionIcon>
              </Group>
            </SimpleGrid>
          </Paper>
        </Paper>
      </Paper>
    );
  };

  return (
    <div>
      <Paper
        bg="linear-gradient(to bottom, var(--mantine-color-dark-9),var(--mantine-color-gray-7))"
        radius={0}
      >
        <Container py="3rem">
          <Text size="2rem" c="gray.0">
            Welcome back Anamol!
          </Text>
          <Text size="sm" c="gray.5">
            Here is an overview for you.
          </Text>

          <Space h="xl" />

          <SimpleGrid cols={{ base: 1, lg: 5 }} spacing="xs" mb={-100}>
            <StatCard
              icon={UsersIcon}
              label="Applicants"
              description="Total applicants registered till date."
              url="/applicants"
              number="12,344"
            />
            <StatCard
              icon={ScrollIcon}
              label="New Requests"
              description="Total applicants registered till date."
              url="/applicants"
              number="297"
            />
            <StatCard
              icon={CheckIcon}
              label="Booked Applicants"
              description="Total applicants registered till date."
              url="/applicants"
              number="334"
            />
            <StatCard
              icon={ArticleIcon}
              label="CV"
              description="Total applicants registered till date."
              url="/applicants"
              number="5,344"
            />
            <StatCard
              icon={EyeIcon}
              label="Seekers"
              description="Total applicants registered till date."
              url="/applicants"
              number="45"
            />
          </SimpleGrid>
        </Container>
      </Paper>

      <Container mt={32}>
        <Grid py="2rem" gutter="xs">
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
                data={[
                  {
                    month: "January",
                    Smartphones: 1200,
                    Laptops: 900,
                    Tablets: 200,
                  },
                  {
                    month: "February",
                    Smartphones: 1900,
                    Laptops: 1200,
                    Tablets: 400,
                  },
                  {
                    month: "March",
                    Smartphones: 400,
                    Laptops: 1000,
                    Tablets: 200,
                  },
                  {
                    month: "April",
                    Smartphones: 1000,
                    Laptops: 200,
                    Tablets: 800,
                  },
                  {
                    month: "May",
                    Smartphones: 800,
                    Laptops: 1400,
                    Tablets: 1200,
                  },
                  {
                    month: "June",
                    Smartphones: 750,
                    Laptops: 600,
                    Tablets: 1000,
                  },
                ]}
                dataKey="month"
                series={[
                  { name: "Smartphones", color: "violet.6" },
                  { name: "Laptops", color: "blue.6" },
                  { name: "Tablets", color: "teal.6" },
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
                    New Seeker Requests
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

              <Paper radius={0} bg="brand.0" p="sm" withBorder>
                <SimpleGrid cols={2} spacing="xs">
                  <div>
                    <Group gap="xs">
                      <Avatar size="sm" color="blue">
                        AM
                      </Avatar>
                      <div>
                        <Text size="xs" fw={700}>
                          Applicant Name
                        </Text>
                        <Text size="10px" opacity={0.5} fw={700}>
                          anamol.maharjan@gmail.com
                        </Text>
                      </div>
                    </Group>
                  </div>

                  <Group justify="space-between" wrap="nowrap">
                    <div>
                      <Text size="xs" fw={700}>
                        NihongoTech
                      </Text>
                      <Text size="10px" opacity={0.5} fw={700}>
                        13 minutes ago.
                      </Text>
                    </div>

                    <ActionIcon size="sm" variant="subtle">
                      <ArrowUpRightIcon />
                    </ActionIcon>
                  </Group>
                </SimpleGrid>
              </Paper>
              <Paper radius={0} p="sm" withBorder>
                <SimpleGrid cols={2} spacing="xs">
                  <div>
                    <Group gap="xs">
                      <Avatar size="sm" color="blue">
                        AM
                      </Avatar>
                      <div>
                        <Text size="xs" fw={700}>
                          Applicant Name
                        </Text>
                        <Text size="10px" opacity={0.5} fw={700}>
                          anamol.maharjan@gmail.com
                        </Text>
                      </div>
                    </Group>
                  </div>

                  <Group justify="space-between" wrap="nowrap">
                    <div>
                      <Text size="xs" fw={700}>
                        NihongoTech
                      </Text>
                      <Text size="10px" opacity={0.5} fw={700}>
                        13 minutes ago.
                      </Text>
                    </div>

                    <ActionIcon size="sm" variant="subtle">
                      <ArrowUpRightIcon />
                    </ActionIcon>
                  </Group>
                </SimpleGrid>
              </Paper>

              <Paper radius={0} p="sm" bg="brand.0" withBorder>
                <SimpleGrid cols={2} spacing="xs">
                  <div>
                    <Group gap="xs">
                      <Avatar size="sm" color="blue">
                        AM
                      </Avatar>
                      <div>
                        <Text size="xs" fw={700}>
                          Applicant Name
                        </Text>
                        <Text size="10px" opacity={0.5} fw={700}>
                          anamol.maharjan@gmail.com
                        </Text>
                      </div>
                    </Group>
                  </div>

                  <Group justify="space-between" wrap="nowrap">
                    <div>
                      <Text size="xs" fw={700}>
                        NihongoTech
                      </Text>
                      <Text size="10px" opacity={0.5} fw={700}>
                        13 minutes ago.
                      </Text>
                    </div>

                    <ActionIcon size="sm" variant="subtle">
                      <ArrowUpRightIcon />
                    </ActionIcon>
                  </Group>
                </SimpleGrid>
              </Paper>
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
