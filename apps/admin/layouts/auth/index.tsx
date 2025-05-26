"use client";

import {
  Anchor,
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
import { PropsWithChildren } from "react";

import imgLogo from "@/assets/img/sswmini.png";
import { LayoutAuthPage } from "./page";
import { usePathname, useRouter } from "next/navigation";

export function LayoutAuth({ children }: PropsWithChildren) {
  const Pathname = usePathname();
  const Router = useRouter();

  return (
    <>
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
            <Grid.Col span={{ base: 12, lg: 8 }}>
              <Paper
                radius="lg"
                bg="dark.8"
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
                      UNITE SSW{" "}
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

                <Box>
                  <Text size="3rem" c="gray.0">
                    A platform to bridge{" "}
                    <i>
                      career
                      <br /> opportunities
                    </i>{" "}
                    in Japan
                  </Text>

                  <Paper p="xl" radius="lg" bg="dark.9" mt="xl">
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
                        +977 9851338205
                        <br /> +977 1 5917178
                      </Text>

                      <Text size="xs" c="gray.0">
                        info@manabiyanepal.com.np
                      </Text>
                    </SimpleGrid>

                    <Divider my="lg" opacity={0.2} />

                    <Group justify="space-between">
                      <Text size="xs" c="gray.0" fw={600}>
                        UNITE SSW
                      </Text>

                      <Text size="xs" c="gray.0">
                        Copyright © {String(new Date()).slice(10, 15)} Unite
                        SSW. All rights reserved.
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
                  lg: "calc(100vh -   var(--mantine-spacing-xl))",
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
                    <b> UNITE SSW</b>
                    <span
                      style={{
                        opacity: 0.5,
                      }}
                    >
                      {" "}
                      | Bridging Seekers and Employers
                    </span>
                  </Text>

                  {Pathname.includes("/signup-verify") ? (
                    <Group justify="center" mt="xl" gap={4}>
                      <Button size="xs" variant={"light"}>
                        OTP Verification
                      </Button>
                    </Group>
                  ) : (
                    <Group justify="center" mt="xl" gap={4}>
                      <Button
                        size="xs"
                        variant={Pathname == "/" ? "light" : "subtle"}
                        onClick={() => {
                          Router.push("/");
                        }}
                      >
                        Sign In
                      </Button>
                      <Button
                        size="xs"
                        variant={Pathname == "/signup" ? "light" : "subtle"}
                        onClick={() => {
                          Router.push("/signup");
                        }}
                      >
                        Sign Up
                      </Button>
                    </Group>
                  )}
                </div>

                {children}
              </Paper>
            </Grid.Col>
          </Grid>
        </Container>
      </section>
    </>
  );
}
