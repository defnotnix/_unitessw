"use client";

import {
  Box,
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
} from "@mantine/core";
import { PropsWithChildren, Suspense } from "react";

import imgLogo from "@/assets/img/sswmini.png";

export function LayoutAuth({ children }: PropsWithChildren) {
  return (
    <>
      <Suspense fallback={<></>}>
        <section
          style={{
            minHeight: "100vh",
            background:
              "linear-gradient(to bottom,var(--mantine-color-gray-7),var(--mantine-color-teal-9))",
            // background:
            //   "linear-gradient(60deg,rgb(15, 16, 18) 0%,rgb(9, 10, 16) 100%)",
          }}
        >
          <Container p="md">
            <Grid gutter={"sm"}>
              <Grid.Col span={12} hiddenFrom="lg">
                <Group gap="xs" justify="center" py="md">
                  <Image
                    src={imgLogo.src}
                    h={24}
                    w={32}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                  <Text size="xs" c="white" fw={600}>
                    Manabiya HR Unity
                    <span
                      style={{
                        opacity: 0.5,
                      }}
                    >
                      | Admin Portal
                    </span>
                  </Text>
                </Group>
              </Grid.Col>
              <Grid.Col span={{ base: 12, lg: 8 }} visibleFrom="lg">
                <Paper
                  radius="lg"
                  bg="linear-gradient(to bottom, rgba(0,0,0,.3), rgba(0,0,0,.9))"
                  h={{
                    base: "auto",
                    lg: "calc(100vh -   var(--mantine-spacing-xl))",
                  }}
                  py={{ base: "xl" }}
                  px={{ base: "xl", lg: "4rem" }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
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
                          | ADMIN PORTAL
                        </span>
                      </Text>
                    </Group>

                    <Text size="xs" c="gray.0">
                      Authorized to provide the services listed.
                    </Text>
                  </Group>

                  <Text size="6rem" opacity={0.05} c="gray.0">
                    Admin
                    <br />
                    Portal
                  </Text>

                  <Box>
                    <Text size="3rem" c="gray.0">
                      A platform to bridge{" "}
                      <i>
                        career
                        <br /> opportunities
                      </i>{" "}
                      in Japan
                    </Text>

                    <Paper p="xl" radius="lg" bg="gray.9" mt="xl">
                      <SimpleGrid cols={4}>
                        <Text size="xs" c="gray.0" opacity={0.5}>
                          OFFICE - NEPAL
                        </Text>

                        <Stack>
                          <Text size="xs" c="gray.0">
                            New Plaza, Putalisadak,
                            <br /> Kathmandu, Nepal
                          </Text>
                          <div>
                            <Button size="xs" color="gray" variant="light">
                              Open in Google Maps
                            </Button>
                          </div>
                        </Stack>

                        <Text size="xs" c="gray.0">
                          <br />
                          +977 15917178
                        </Text>

                        <Text size="xs" c="gray.0">
                          info@unitessw.com
                        </Text>
                      </SimpleGrid>

                      <Divider my="lg" opacity={0.2} />

                      <Group justify="space-between">
                        <Text size="xs" c="gray.0" fw={600}>
                          Manabiya HR Unity Pvt. Ltd.
                        </Text>

                        <Text size="xs" c="gray.0">
                          Copyright © {String(new Date()).slice(10, 15)}{" "}
                          Manabiya HR Unity. All rights reserved.
                        </Text>
                      </Group>
                    </Paper>
                  </Box>
                </Paper>
              </Grid.Col>
              <Grid.Col
                pos="relative"
                span={{ base: 12, lg: 4 }}
                h={{
                  base: "auto",
                }}
              >
                <Paper
                  pos="sticky"
                  shadow="lg"
                  radius="lg"
                  h={{
                    base: "auto",
                    lg: "calc(100vh - var(--mantine-spacing-xl))",
                  }}
                  py={{ base: "xl" }}
                  px={{ base: "xl", lg: "4rem" }}
                  style={{
                    top: "var(--mantine-spacing-lg)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Text size="xs" ta="center">
                      <b> Manabiya HR Unity</b>
                      <span
                        style={{
                          opacity: 0.5,
                        }}
                      >
                        {" "}
                        | Bridging Seekers and Employers
                      </span>
                    </Text>
                  </div>

                  {children}
                </Paper>
              </Grid.Col>

              <Grid.Col span={12} hiddenFrom="lg">
                <Paper py="lg" radius="lg" bg="none">
                  <Divider my="lg" opacity={0.2} />

                  <Group justify="center">
                    <Text size="xs" c="gray.0">
                      Copyright © ${String(new Date()).slice(10, 15)} Manabiya
                      HR Unity . All rights reserved.
                    </Text>
                  </Group>
                </Paper>
              </Grid.Col>
            </Grid>
          </Container>
        </section>
      </Suspense>
    </>
  );
}
