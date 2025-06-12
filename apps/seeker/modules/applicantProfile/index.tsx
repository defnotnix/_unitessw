"use client";

import {
  ActionIcon,
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
  Table,
  Text,
  Timeline,
} from "@mantine/core";

//assets
import imgLogo from "@/assets/img/sswmini.png";
import React from "react";
import { ArrowLeftIcon, BookIcon, CheckIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

export function ModuleApplicantProfile() {
  const Router = useRouter();

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
      <section>
        <Container size="lg" py={32}>
          <Group justify="space-between" mb="xl">
            <Group gap="xs">
              <ActionIcon
                onClick={() => {
                  Router.back();
                }}
              >
                <ArrowLeftIcon />
              </ActionIcon>
              <Text size="xl">
                Applicant CV.{" "}
                <span
                  style={{
                    opacity: 0.5,
                  }}
                >
                  This is what you can expect seekers to seee.
                </span>
              </Text>
            </Group>
            <Badge
              radius="sm"
              size={"30"}
              px="xs"
              variant="filled"
              tt="none"
              color="teal"
              leftSection={<CheckIcon size={12} />}
            >
              <Text size="xs">Verified & Published</Text>
            </Badge>
          </Group>

          <Paper withBorder shadow="xl">
            <Grid gutter={0}>
              <Grid.Col span={{ base: 12, lg: 4 }} p="xl" bg="brand.0">
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

                  <Text size="xs" opacity={0.5}>
                    This is an auto-generated CV under UNITE SSW. Any misuse of
                    this information is strictly prohibited.
                  </Text>
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
                  Academics
                </Text>

                <Table withColumnBorders striped withTableBorder mt="sm">
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th w={50}>#</Table.Th>
                      <Table.Th w={120}>Year</Table.Th>
                      <Table.Th w={200}>Institute</Table.Th>
                      <Table.Th>Location</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    <Table.Tr>
                      <Table.Td>1</Table.Td>
                      <Table.Td>2019-2022</Table.Td>
                      <Table.Td>
                        <b>Bachelors in Hospitality Management</b>
                      </Table.Td>
                      <Table.Td>Madhyanabar University, Nepal.</Table.Td>
                    </Table.Tr>
                  </Table.Tbody>
                </Table>

                <Divider my="md" />
                <Text size="sm" fw={800}>
                  Work History
                </Text>

                <Table withColumnBorders striped withTableBorder mt="sm">
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th w={50}>#</Table.Th>
                      <Table.Th w={120}>Year</Table.Th>
                      <Table.Th w={200}>Organization</Table.Th>
                      <Table.Th>Salary</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    <Table.Tr>
                      <Table.Td>1</Table.Td>
                      <Table.Td>2020-2025</Table.Td>
                      <Table.Td>
                        <b>Void Studio</b>
                      </Table.Td>
                      <Table.Td>Madhyanabar University, Nepal.</Table.Td>
                    </Table.Tr>
                  </Table.Tbody>
                </Table>

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
