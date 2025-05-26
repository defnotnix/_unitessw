"use client";

import {
  Badge,
  Button,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Timeline,
} from "@mantine/core";

//assets
import imgLogo from "@/assets/img/sswmini.png";
import React from "react";
import { BookIcon, CheckIcon } from "@phosphor-icons/react";

export function ModuleApplicant() {
  const data: any = {
    name: "Ram Prasad Shrestha",
    email: "ram@example.com",
    phone: "021-7250834",
    location: "Lalitpur, Nepal",
    job: "Hospitality",
    gender: "Male",
    age: "26",
    dob: "26 February 1998",
    height: "161cm",
    weight: "76kg",
    marital: "Married",
  };

  const personal = [
    {
      label: "Name",
      key: "name",
    },
    {
      label: "Email",
      key: "email",
    },
    {
      label: "Phone",
      key: "phone",
    },
    {
      label: "Location",
      key: "location",
    },
    {
      label: "Job",
      key: "job",
    },
    {
      label: "Gender",
      key: "gender",
    },
    {
      label: "Age",
      key: "age",
    },
    {
      label: "Date of Birth",
      key: "dob",
    },
    {
      label: "Height",
      key: "height",
    },
    {
      label: "Weight",
      key: "weight",
    },
    { label: "Marital Status", key: "marital" },
  ];

  return (
    <>
      <section
        style={{
          background: "var(--mantine-color-dark-9)",
          minHeight: "100vh",
        }}
      >
        <Container size="lg" py={32}>
          <Group justify="space-between" pb="xl">
            <Group gap="xs">
              <Image
                src={imgLogo.src}
                h={24}
                w={32}
                style={{
                  objectFit: "contain",
                }}
              />
              <Text size="xs" c="white" fw={600}>
                UNITE SSW{" "}
                <span
                  style={{
                    opacity: 0.5,
                  }}
                >
                  {" "}
                  | A platform to bridge carrer oppurtunities in Japan.{" "}
                </span>
              </Text>
            </Group>

            <Group justify="space-between" gap="xs">
              <Button size="xs" color="indigo">
                Request Update
              </Button>
              <Button size="xs">Sign Out</Button>
            </Group>
          </Group>

          <Group justify="space-between" mb="xl">
            <Text size="xl" c="gray.0">
              Applicant CV.{" "}
              <span
                style={{
                  opacity: 0.5,
                }}
              >
                This is what you can expect seekers to seee.
              </span>
            </Text>
            <Badge
              radius="sm"
              size={"30"}
              px="xs"
              variant="subtle"
              tt="none"
              color="teal"
              leftSection={<CheckIcon size={12} />}
            >
              <Text size="xs">Verified & Published</Text>
            </Badge>
          </Group>

          <Paper withBorder>
            <Grid gutter={0}>
              <Grid.Col span={{ base: 12, lg: 4 }} p="xl" bg="gray.3">
                <Stack gap="xl">
                  <Stack gap="xs">
                    <Text size="2.5rem" fw={800}>
                      Ram Prasad Shrestha
                    </Text>
                    <Text size="sm">
                      Looking for jobs on
                      <br /> <b>Hospitality</b>
                    </Text>
                  </Stack>

                  <Image
                    src={
                      "https://r2.erweima.ai/imgcompressed/compressed_37c94e20cb613116de36841ba02309d2.webp"
                    }
                  />

                  <div>
                    <Text size="sm" fw={800}>
                      PROFILE
                    </Text>

                    <SimpleGrid cols={2} spacing="xs" mt="xl">
                      {personal.map((item) => (
                        <React.Fragment key={item.key}>
                          <Text size="sm" fw={800}>
                            {item.label}
                          </Text>
                          <Text size="sm">{data[item.key]}</Text>
                        </React.Fragment>
                      ))}
                    </SimpleGrid>
                  </div>
                </Stack>
              </Grid.Col>
              <Grid.Col span={{ base: 12, lg: 8 }} p="xl">
                <Text size="sm" fw={800}>
                  About Me
                </Text>

                <Text size="xs" mt="md">
                  The width of a mobile device screen typically varies, but
                  common ranges for web and app interface design include 320px
                  to 414px. Some iPhone models, like the iPhone 5, have a width
                  of 320px, while others, like the iPhone X, can have a width of
                  414px. Android devices also have varying widths, with some
                  having a width of 412px, according to IC Web Design.
                </Text>
                <Divider my="md" />

                <Text size="sm" fw={800}>
                  Work History
                </Text>

                <Timeline active={1} bulletSize={24} lineWidth={2} mt="md">
                  <Timeline.Item
                    fs="xs"
                    bullet={<BookIcon size={12} />}
                    title="Bachelors in Hospitality Management"
                  >
                    <Group justify="space-between">
                      <Text c="dimmed" size="sm">
                        Madhyanagar University, Nepal
                      </Text>
                      <Text size="xs" mt={4}>
                        2020-2025
                      </Text>
                    </Group>
                  </Timeline.Item>
                  <Timeline.Item
                    fs="xs"
                    bullet={<BookIcon size={12} />}
                    title="Bachelors in Hospitality Management"
                  >
                    <Group justify="space-between">
                      <Text c="dimmed" size="sm">
                        Madhyanagar University, Nepal
                      </Text>
                      <Text size="xs" mt={4}>
                        2020-2025
                      </Text>
                    </Group>
                  </Timeline.Item>
                </Timeline>

                <Divider my="md" />
                <Text size="sm" fw={800}>
                  Academics
                </Text>

                <Timeline active={1} bulletSize={24} lineWidth={2} mt="md">
                  <Timeline.Item
                    fs="xs"
                    bullet={<BookIcon size={12} />}
                    title="Bachelors in Hospitality Management"
                  >
                    <Text size="sm">Salary : NPR 24,000/month</Text>
                    <Group justify="space-between">
                      <Text c="dimmed" size="sm">
                        Madhyanagar University, Nepal
                      </Text>
                      <Text size="xs" mt={4}>
                        2020-2025
                      </Text>
                    </Group>
                  </Timeline.Item>
                  <Timeline.Item
                    fs="xs"
                    bullet={<BookIcon size={12} />}
                    title="Bachelors in Hospitality Management"
                  >
                    <Text size="sm">Salary : NPR 24,000/month</Text>
                    <Group justify="space-between">
                      <Text c="dimmed" size="sm">
                        Madhyanagar University, Nepal
                      </Text>
                      <Text size="xs" mt={4}>
                        2020-2025
                      </Text>
                    </Group>
                  </Timeline.Item>
                </Timeline>

                <Divider my="md" />

                <Text size="sm" fw={800}>
                  Medical Details
                </Text>

                <SimpleGrid cols={3} spacing="xs" mt="md">
                  <div>
                    <Text size="sm" fw={600} my="xs" c="brand.6">
                      Optical Characteristics <br />
                      (Natural Eye)
                    </Text>
                    <Stack mt="md">
                      <SimpleGrid cols={2}>
                        <Text size="sm" fw={600}>
                          Left Power
                        </Text>
                        <Text size="sm" c="dimmed">
                          0.00
                        </Text>
                      </SimpleGrid>
                      <SimpleGrid cols={2}>
                        <Text size="sm" fw={600}>
                          Right Power
                        </Text>
                        <Text size="sm" c="dimmed">
                          0.00
                        </Text>
                      </SimpleGrid>
                      <SimpleGrid cols={2}>
                        <Text size="sm" fw={600}>
                          Both Power
                        </Text>
                        <Text size="sm" c="dimmed">
                          0.00
                        </Text>
                      </SimpleGrid>
                    </Stack>
                  </div>

                  <div>
                    <Text size="sm" fw={600} my="xs" c="brand.6">
                      Optical Characteristics
                      <br />
                      (Corrected Eye)
                    </Text>
                    <Stack mt="md">
                      <SimpleGrid cols={2}>
                        <Text size="sm" fw={600}>
                          Left Power
                        </Text>
                        <Text size="sm" c="dimmed">
                          0.00
                        </Text>
                      </SimpleGrid>
                      <SimpleGrid cols={2}>
                        <Text size="sm" fw={600}>
                          Right Power
                        </Text>
                        <Text size="sm" c="dimmed">
                          0.00
                        </Text>
                      </SimpleGrid>
                      <SimpleGrid cols={2}>
                        <Text size="sm" fw={600}>
                          Both Power
                        </Text>
                        <Text size="sm" c="dimmed">
                          0.00
                        </Text>
                      </SimpleGrid>
                    </Stack>
                  </div>
                </SimpleGrid>

                <Divider my="md" />

                <Text size="sm" fw={800}>
                  Orthodontics
                </Text>

                <SimpleGrid cols={2} spacing="xs" mt="md">
                  <Group>
                    <Text size="sm" fw={800}>
                      1.
                    </Text>
                    <Text size="sm" fw={600}>
                      Lower Right Central Incisor (下右中切歯)
                    </Text>
                  </Group>
                  <Text size="sm">Silver Filler + Braces</Text>
                </SimpleGrid>
              </Grid.Col>
            </Grid>
          </Paper>
        </Container>
      </section>
    </>
  );
}
