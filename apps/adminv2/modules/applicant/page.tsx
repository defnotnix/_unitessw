"use client";

import {
  Anchor,
  AspectRatio,
  Badge,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Table,
  TableOfContents,
  TableThead,
  Text,
  Title,
} from "@mantine/core";
import imgLogo from "@/assets/img/sswmini.png";
import { Check, CheckCircle } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";

import { jwtDecode } from "jwt-decode";
import { getSingleRecord } from "./applicant.api";

import classes from "./applicant.module.css";

export function ModuleApplicant() {
  const queryData = useQuery({
    queryKey: ["applicant", "data"],
    queryFn: async () => {
      const decoded: any = jwtDecode(sessionStorage.getItem("sswtoken") || "");
      return getSingleRecord(decoded.user_id);
    },
  });

  return (
    <>
      <section
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(60deg,rgb(15, 16, 18) 0%,rgb(9, 10, 16) 100%)",
        }}
      >
        <Container size="xl" py={32}>
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
              <Badge
                radius="sm"
                size={"30"}
                px="xs"
                variant="light"
                tt="none"
                color="teal"
              >
                <Text size="xs">Your profile is verified & published.</Text>
              </Badge>{" "}
              <Button size="xs" color="indigo">
                Request Update
              </Button>
              <Button size="xs">Sign Out</Button>
            </Group>
          </Group>

          <Text size="2rem" c="gray.0" my="xl">
            Applicant Profile
          </Text>

          <Grid my="xl">
            <Grid.Col span={{ base: 12, lg: 8 }}>
              <Paper
                bg="dark.9"
                withBorder
                style={{
                  borderColor: "var(--mantine-color-dark-7)",
                }}
                p="sm"
                radius="lg"
              >
                <Title
                  component="h1"
                  style={{
                    position: "relative",
                    height: 0,
                    overflow: "hidden",
                    fontSize: 0,
                  }}
                >
                  Applicant Profile
                </Title>

                <Stack gap="xs">
                  <Paper
                    radius="lg"
                    style={{
                      overflow:
                        "style={{ position: 'relative', height: 0, overflow: 'hidden', fontSize: 0 }}",
                    }}
                  >
                    <Paper
                      style={{
                        backgroundImage:
                          "url(https://t4.ftcdn.net/jpg/02/67/40/21/360_F_267402109_jZvsqRQUvSxohAOmcUt549jlapqoRHM0.jpg)",
                        backgroundSize: "cover",
                      }}
                    >
                      <Center h={250}>
                        <Image
                          h={150}
                          w={150}
                          radius={999}
                          src="https://images.squarespace-cdn.com/content/v1/54f62cc5e4b03dc2ab4c1f4b/1630379950747-QT5HD9JKQ3JVZC9RPP2R/Passport+size+photo.JPEG"
                        />
                      </Center>
                    </Paper>

                    <Box p="xl">
                      <Badge
                        color="teal"
                        variant="light"
                        leftSection={
                          <CheckCircle
                            weight="bold"
                            color="var(--mantine-color-teal-6)"
                          />
                        }
                      >
                        Verified Account
                      </Badge>

                      <SimpleGrid cols={2}>
                        <Text size="2rem" pt={8}>
                          Raj Kumar Shrestha
                        </Text>

                        <SimpleGrid cols={{ base: 2, lg: 2 }}>
                          <div>
                            <Text size="xs" opacity={0.5} ta="right">
                              Job Category
                            </Text>
                            <Text size="sm" fw={600} ta="right">
                              Hospitality Services
                            </Text>
                          </div>
                          <div>
                            <Text size="xs" opacity={0.5} ta="right">
                              Gender / Age
                            </Text>
                            <Text size="sm" fw={600} ta="right">
                              Male (24 Years Old)
                            </Text>
                          </div>
                        </SimpleGrid>
                      </SimpleGrid>

                      <Divider my="md" />

                      <Text size="sm" c="brand.6" mb="md">
                        General Details
                      </Text>

                      <Stack gap="lg">
                        <SimpleGrid spacing="lg" cols={{ base: 2, lg: 2 }}>
                          <div>
                            <Text size="sm" opacity={0.5}>
                              Official Name
                            </Text>
                            <Text size="sm">Suhana Kumar Shrestha</Text>
                          </div>

                          <div>
                            <Text size="sm" opacity={0.5}>
                              Date of Birth
                            </Text>
                            <Text size="sm">26 February 1998</Text>
                          </div>

                          <div>
                            <Text size="sm" opacity={0.5}>
                              Nationality
                            </Text>
                            <Text size="sm">Nepalese</Text>
                          </div>

                          <div>
                            <Text size="sm" opacity={0.5}>
                              Gender
                            </Text>
                            <Text size="sm">Female</Text>
                          </div>

                          <div>
                            <Text size="sm" opacity={0.5}>
                              Marital Status
                            </Text>
                            <Text size="sm">Married</Text>
                          </div>

                          <div>
                            <Text size="sm" opacity={0.5}>
                              Religion
                            </Text>
                            <Text size="sm">Hindu</Text>
                          </div>
                        </SimpleGrid>
                        <div>
                          <Text size="sm" opacity={0.5}>
                            Address
                          </Text>
                          <Text size="sm">Kupondole, Lalitpur, Nepal</Text>
                        </div>

                        <SimpleGrid spacing="lg" cols={{ base: 2, lg: 2 }}>
                          <div>
                            <Text size="sm" opacity={0.5}>
                              Weight
                            </Text>
                            <Text size="sm">76kg</Text>
                          </div>

                          <div>
                            <Text size="sm" opacity={0.5}>
                              Height
                            </Text>
                            <Text size="sm">161cm</Text>
                          </div>
                        </SimpleGrid>
                      </Stack>
                    </Box>
                  </Paper>

                  <Paper
                    radius="lg"
                    style={{
                      overflow:
                        "style={{ position: 'relative', height: 0, overflow: 'hidden', fontSize: 0 }}",
                    }}
                  >
                    <Title
                      id="youtube"
                      component={"h1"}
                      size="2rem"
                      c="gray.0"
                      style={{
                        position: "relative",
                        height: 0,
                        overflow: "hidden",
                        fontSize: 0,
                      }}
                    >
                      Youtube Introduction
                    </Title>
                    <AspectRatio ratio={16 / 9} mb={-10}>
                      <iframe
                        src="https://www.youtube.com/embed/mzJ4vCjSt28"
                        title="YouTube video player"
                        style={{ border: 0 }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </AspectRatio>
                  </Paper>

                  <Paper radius={"lg"} p={"xl"}>
                    <Title
                      id="medical"
                      component={"h1"}
                      size="2rem"
                      c="gray.0"
                      style={{
                        position: "relative",
                        height: 0,
                        overflow: "hidden",
                        fontSize: 0,
                      }}
                    >
                      Medical Details
                    </Title>

                    <Text size="sm" c="brand.6" mb="md">
                      Medical Details
                    </Text>

                    <Stack gap="lg">
                      <SimpleGrid spacing="lg" cols={{ base: 2, lg: 2 }}>
                        <div>
                          <Text size="sm" opacity={0.5}>
                            Official Name
                          </Text>
                          <Text size="sm">Suhana Kumar Shrestha</Text>
                        </div>

                        <div>
                          <Text size="sm" opacity={0.5}>
                            Date of Birth
                          </Text>
                          <Text size="sm">26 February 1998</Text>
                        </div>

                        <div>
                          <Text size="sm" opacity={0.5}>
                            Nationality
                          </Text>
                          <Text size="sm">Nepalese</Text>
                        </div>

                        <div>
                          <Text size="sm" opacity={0.5}>
                            Gender
                          </Text>
                          <Text size="sm">Female</Text>
                        </div>

                        <div>
                          <Text size="sm" opacity={0.5}>
                            Marital Status
                          </Text>
                          <Text size="sm">Married</Text>
                        </div>

                        <div>
                          <Text size="sm" opacity={0.5}>
                            Religion
                          </Text>
                          <Text size="sm">Hindu</Text>
                        </div>
                      </SimpleGrid>
                      <div>
                        <Text size="sm" opacity={0.5}>
                          Address
                        </Text>
                        <Text size="sm">Kupondole, Lalitpur, Nepal</Text>
                      </div>

                      <SimpleGrid spacing="lg" cols={{ base: 2, lg: 2 }}>
                        <div>
                          <Text size="sm" opacity={0.5}>
                            Weight
                          </Text>
                          <Text size="sm">76kg</Text>
                        </div>

                        <div>
                          <Text size="sm" opacity={0.5}>
                            Height
                          </Text>
                          <Text size="sm">161cm</Text>
                        </div>
                      </SimpleGrid>
                    </Stack>
                  </Paper>

                  <Paper radius={"lg"} p={"xl"}>
                    <Title
                      id="orthodontic"
                      component={"h1"}
                      size="2rem"
                      c="gray.0"
                      style={{
                        position: "relative",
                        height: 0,
                        overflow: "hidden",
                        fontSize: 0,
                      }}
                    >
                      Orthodontic Appliances
                    </Title>

                    <Text size="sm" c="brand.6" mb="md">
                      Orthodontic Appliances
                    </Text>

                    <Table>
                      <Table.Thead>
                        <Table.Tr>
                          <Table.Th>Teeth</Table.Th>
                          <Table.Th>Appliance</Table.Th>
                        </Table.Tr>
                      </Table.Thead>
                    </Table>
                  </Paper>

                  <Paper radius={"lg"} p={"xl"}>
                    <Title
                      id="academics"
                      component={"h1"}
                      size="2rem"
                      c="gray.0"
                      style={{
                        position: "relative",
                        height: 0,
                        overflow: "hidden",
                        fontSize: 0,
                      }}
                    >
                      Academic Details
                    </Title>

                    <Text size="sm" c="brand.6" mb="md">
                      Academics
                    </Text>

                    <Table>
                      <Table.Thead>
                        <Table.Tr>
                          <Table.Th>Institute</Table.Th>
                          <Table.Th>Location</Table.Th>
                          <Table.Th>Enroll(From - To)</Table.Th>
                        </Table.Tr>
                      </Table.Thead>
                    </Table>
                  </Paper>

                  <Paper radius={"lg"} p={"xl"}>
                    <Title
                      component={"h1"}
                      size="2rem"
                      c="gray.0"
                      style={{
                        position: "relative",
                        height: 0,
                        overflow: "hidden",
                        fontSize: 0,
                      }}
                    >
                      Work Experience
                    </Title>

                    <Text size="sm" c="brand.6" mb="md">
                      Work Experience
                    </Text>

                    <Table>
                      <Table.Thead>
                        <Table.Tr>
                          <Table.Th>Work Address</Table.Th>
                          <Table.Th>Salary</Table.Th>
                          <Table.Th>Year (From - To)</Table.Th>
                        </Table.Tr>
                      </Table.Thead>
                    </Table>
                  </Paper>
                </Stack>
              </Paper>
            </Grid.Col>

            <Grid.Col span={{ base: 12, lg: 4 }} pos="relative">
              <Paper bg="dark.9" p="xl" radius="lg" pos="sticky" top={24}>
                <Text size="xs" c="gray.0" opacity={0.5}>
                  Profile Navigation
                </Text>

                <TableOfContents
                  py="md"
                  c="gray.0"
                  variant="filled"
                  color="brand"
                  size="sm"
                  radius="sm"
                  scrollSpyOptions={{
                    selector: "h1",
                  }}
                  getControlProps={({ data }) => ({
                    onClick: () =>
                      data.getNode().scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest",
                      }),
                    children: data.value,
                  })}
                  classNames={classes}
                />

                <Divider opacity={0.1} />
              </Paper>
            </Grid.Col>
          </Grid>
        </Container>
      </section>
    </>
  );
}
