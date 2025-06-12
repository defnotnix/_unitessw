"use client";

import {
  AspectRatio,
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
import { BookIcon, CheckIcon } from "@phosphor-icons/react";

export function ModuleApplicant() {
  const data: any = {
    name: "Ram Prasad Shrestha",
    name_jp: "ラム・プラサード・シュレスタ",
    email: "ram@example.com",
    phone: "021-7250834",
    location: "Lalitpur, Nepal",
    location_jp: "ネパール、ラリトプル",
    job: "Hospitality",
    job_jp: "ホスピタリティ",
    gender: "Male",
    gender_jp: "男性",
    age: "26",
    age_jp: "26歳",
    dob: "26 February 1998",
    dob_jp: "1998年2月26日",
    height: "161cm",
    height_jp: "161cm",
    weight: "76kg",
    weight_jp: "76kg",
    marital: "Married",
    marital_jp: "既婚",
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

  const academics = [
    {
      index: 1,
      year_range: "1975-1978",
      degree: "Diploma in Caregiving",
      institution: "Tribhuvan University, Nepal.",
    },
    {
      index: 2,
      year_range: "1972-1975",
      degree: "Diploma in Hotel Management",
      institution: "Kathmandu University, Nepal.",
    },
    {
      index: 3,
      year_range: "1992-1995",
      degree: "Bachelors in Education",
      institution: "Nepal Academy of Tourism and Hotel Management, Nepal.",
    },
    {
      index: 4,
      year_range: "1979-1982",
      degree: "Bachelors in Business Studies",
      institution: "Tribhuvan University, Nepal.",
    },
    {
      index: 5,
      year_range: "2017-2019",
      degree: "Certificate in Elderly Care",
      institution: "Nepal Academy of Tourism and Hotel Management, Nepal.",
    },
  ];

  const work = [
    {
      index: 1,
      year_range: "1999-2000",
      company: "Grande International Hospital",
      location: "Kathmandu, Nepal.",
    },
    {
      index: 2,
      year_range: "1970-1973",
      company: "Nepal Japan Care Center",
      location: "Kathmandu, Nepal.",
    },
    {
      index: 3,
      year_range: "1972-1973",
      company: "Soaltee Crowne Plaza",
      location: "Kathmandu, Nepal.",
    },
    {
      index: 4,
      year_range: "2023-2024",
      company: "Grande International Hospital",
      location: "Pokhara, Nepal.",
    },
    {
      index: 5,
      year_range: "2009-2013",
      company: "Void Studio",
      location: "Bhaktapur, Nepal.",
    },
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

              <Text size="xs" c="white" fw={600} visibleFrom="lg">
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
            <Text size="xl" c="gray.0" visibleFrom="lg">
              Applicant CV. <br />
              <span
                style={{
                  opacity: 0.5,
                }}
              >
                This is what you can expect seekers to seee.
              </span>
            </Text>
            <Text size="md" c="gray.0" hiddenFrom="lg">
              Applicant CV. <br />
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

                  <AspectRatio ratio={16 / 9} mt={-16}>
                    <iframe
                      src="https://www.youtube.com/embed/nBydCvT195k?si=OgzJYNdx5yQkgNaZ"
                      title="YouTube video player"
                      style={{ border: 0 }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </AspectRatio>

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
                      <Table.Th w={250}>Institute</Table.Th>
                      <Table.Th>Location</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {academics.map((item, index) => (
                      <Table.Tr key={index}>
                        <Table.Td>{item.index}</Table.Td>
                        <Table.Td>{item.year_range}</Table.Td>
                        <Table.Td>
                          <b>{item.degree}</b>
                        </Table.Td>
                        <Table.Td>{item.institution}</Table.Td>
                      </Table.Tr>
                    ))}
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
                      <Table.Th w={300}>Organization</Table.Th>
                      <Table.Th>Salary</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {work.map((item, index) => (
                      <Table.Tr key={index}>
                        <Table.Td>{item.index}</Table.Td>
                        <Table.Td>{item.year_range}</Table.Td>
                        <Table.Td>
                          <b>{item.company}</b>
                        </Table.Td>
                        <Table.Td>{item.location}</Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>

                <Divider my="md" />

                <Text size="sm" fw={800}>
                  Medical Details
                </Text>

                <SimpleGrid cols={{ base: 1, lg: 3 }} spacing="xs" mt="md">
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

                <SimpleGrid cols={2} spacing="xs" mt="md">
                  <Group>
                    <Text size="sm" fw={800}>
                      2.
                    </Text>
                    <Text size="sm" fw={600}>
                      Upper Right Central Incisor (下右中切歯)
                    </Text>
                  </Group>
                  <Text size="sm">Braces</Text>
                </SimpleGrid>

                <SimpleGrid cols={2} spacing="xs" mt="md">
                  <Group>
                    <Text size="sm" fw={800}>
                      4.
                    </Text>
                    <Text size="sm" fw={600}>
                      Front Right Central Incisor (下右中切歯)
                    </Text>
                  </Group>
                  <Text size="sm">Metal Cap</Text>
                </SimpleGrid>
              </Grid.Col>
            </Grid>
          </Paper>
        </Container>
      </section>
    </>
  );
}
