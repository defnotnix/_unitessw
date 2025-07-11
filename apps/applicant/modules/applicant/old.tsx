"use client";

import {
  AspectRatio,
  Badge,
  Box,
  Button,
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
  TableThead,
  Text,
} from "@mantine/core";
import imgLogo from "@/assets/img/sswmini.png";
import { Check, CheckCircle } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";

import { jwtDecode } from "jwt-decode";
import { getSingleRecord } from "./applicant.api";

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
        <Container size="lg" py={32}>
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
                Manabiya HR Unity{" "}
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

          <Grid>
            <Grid.Col span={{ base: 12, lg: 4 }}></Grid.Col>
            <Grid.Col span={{ base: 12, lg: 8 }}>
              <Paper
                mt="xl"
                radius="lg"
                style={{
                  overflow: "hidden",
                }}
              >
                <Paper
                  h={250}
                  style={{
                    backgroundImage:
                      "url(https://t4.ftcdn.net/jpg/02/67/40/21/360_F_267402109_jZvsqRQUvSxohAOmcUt549jlapqoRHM0.jpg)",
                    backgroundSize: "cover",
                  }}
                >
                  {" "}
                </Paper>

                <Grid px="xl" pt="md" gutter="xl">
                  <Grid.Col span={2}>
                    <Paper radius={999} withBorder p={6} mt={-80}>
                      <Image
                        radius={999}
                        src="https://images.squarespace-cdn.com/content/v1/54f62cc5e4b03dc2ab4c1f4b/1630379950747-QT5HD9JKQ3JVZC9RPP2R/Passport+size+photo.JPEG"
                      />
                    </Paper>
                  </Grid.Col>
                  <Grid.Col span={4}>
                    <Group>
                      <Text size="xl">Suhana Shrestha</Text>
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
                    </Group>
                    <Text size="sm" opacity={0.5}>
                      Female, 26
                    </Text>
                  </Grid.Col>

                  <Grid.Col span={{ base: 12, lg: 6 }}>
                    <Group justify="flex-end">
                      <div>
                        <Text ta="right" size="xs">
                          Seeking Job for
                        </Text>
                        <Badge
                          mt={4}
                          variant="light"
                          size="md"
                          style={{
                            fontSize: "var(--mantine-font-size-xs)",
                          }}
                        >
                          Hospitality
                        </Badge>
                      </div>
                    </Group>
                  </Grid.Col>

                  <Grid.Col
                    span={{
                      base: 12,
                      lg: 6,
                    }}
                    py="xl"
                  >
                    <AspectRatio ratio={16 / 9}>
                      <iframe
                        src="https://www.youtube.com/embed/mzJ4vCjSt28"
                        title="YouTube video player"
                        style={{ border: 0 }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </AspectRatio>
                  </Grid.Col>

                  <Grid.Col span={{ base: 12, lg: 6 }}>
                    <Stack gap="lg" py="md">
                      <Text size="xs" fw={600} c="brand.6">
                        General Details
                      </Text>

                      <SimpleGrid spacing="lg" cols={{ base: 2, lg: 3 }}>
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

                      <SimpleGrid spacing="lg" cols={{ base: 2, lg: 3 }}>
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

                    <Divider my="sm" />
                  </Grid.Col>

                  <Grid.Col span={{ base: 12, lg: 6 }}>
                    <Stack gap="lg">
                      <Text size="xs" fw={600} c="brand.6">
                        Medical Details
                      </Text>

                      <SimpleGrid spacing="lg" cols={{ base: 2, lg: 3 }}>
                        <div>
                          <Text size="sm" opacity={0.5}>
                            Left Power
                          </Text>
                          <Text size="sm">-1.25</Text>
                        </div>
                        <div>
                          <Text size="sm" opacity={0.5}>
                            Right Power
                          </Text>
                          <Text size="sm">1.25</Text>
                        </div>
                        <div>
                          <Text size="sm" opacity={0.5}>
                            Right Power
                          </Text>
                          <Text size="sm">1.25</Text>
                        </div>
                        <div>
                          <Text size="sm" opacity={0.5}>
                            Right Power
                          </Text>
                          <Text size="sm">1.25</Text>
                        </div>
                        <div>
                          <Text size="sm" opacity={0.5}>
                            Right Power
                          </Text>
                          <Text size="sm">1.25</Text>
                        </div>
                        <div>
                          <Text size="sm" opacity={0.5}>
                            Right Power
                          </Text>
                          <Text size="sm">1.25</Text>
                        </div>
                        <div>
                          <Text size="sm" opacity={0.5}>
                            Right Power
                          </Text>
                          <Text size="sm">1.25</Text>
                        </div>
                        <div>
                          <Text size="sm" opacity={0.5}>
                            Right Power
                          </Text>
                          <Text size="sm">1.25</Text>
                        </div>
                        <div>
                          <Text size="sm" opacity={0.5}>
                            Right Power
                          </Text>
                          <Text size="sm">1.25</Text>
                        </div>
                      </SimpleGrid>
                    </Stack>
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, lg: 6 }}>
                    <Table withTableBorder>
                      <TableThead>
                        <Table>
                          <Table.Thead>
                            <Table.Tr>
                              <Table.Th>#</Table.Th>
                              <Table.Th>Teeth</Table.Th>
                              <Table.Th>Appliance</Table.Th>
                            </Table.Tr>
                          </Table.Thead>
                          <Table.Tbody>
                            <Table.Tr>
                              <Table.Td>1</Table.Td>
                              <Table.Td>Upper Teeth</Table.Td>
                              <Table.Td>Metal Bracelets</Table.Td>
                            </Table.Tr>
                          </Table.Tbody>
                        </Table>
                      </TableThead>
                    </Table>
                  </Grid.Col>
                </Grid>
              </Paper>
            </Grid.Col>
          </Grid>
        </Container>
      </section>
    </>
  );
}
