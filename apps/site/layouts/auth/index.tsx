"use client";

import { PropsWithChildren } from "react";
//next
import { usePathname, useRouter } from "next/navigation";
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
  Space,
  Stack,
  Text,
} from "@mantine/core";

//context
import { useLanguage } from "../app/app.context";
//assets
import { images } from "@/public/img";

export function LayoutAuth({ children }: PropsWithChildren) {
  // * DEFINITIONS

  const Pathname = usePathname();
  const Router = useRouter();

  // * CONTEXT

  const { language } = useLanguage();

  // * PRELOADING

  // * STATE

  // * FUNCTIONS

  return (
    <>
      <Container p="md">
        <Grid gutter="sm">
          <Grid.Col span={12} hiddenFrom="lg">
            <Group gap="xs" justify="center" py="md">
              <Image
                src={images.logoMini}
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
                  {" "}
                  | {language == "en" ? "Applicant Portal" : "応募者ポータル"}
                </span>
              </Text>
            </Group>
          </Grid.Col>
          <Grid.Col
            span={{ base: 12, lg: 8 }}
            hidden={Pathname !== "/"}
            visibleFrom="lg"
          >
            <Paper
              radius="lg"
              bg="linear-gradient(to bottom, rgba(0,0,0,.7), rgba(0,0,0,.9))"
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
                backdropFilter: "blur(32px)",
              }}
            >
              <Group justify="space-between">
                <Group gap="xs">
                  <Image
                    src={images.logoMini}
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
                      {" "}
                      |{" "}
                      {language == "en" ? "Applicant Portal" : "応募者ポータル"}
                    </span>
                  </Text>
                </Group>

                <Text size="xs" c="gray.0">
                  {language == "en"
                    ? " Bridging gap between job seekers and"
                    : "求職者と企業の間のギャップを埋める"}
                </Text>
              </Group>

              <Box>
                <Text size="3rem" c="gray.0">
                  {" "}
                  {language === "en" ? (
                    <>
                      {" "}
                      A platform to bridge{" "}
                      <i>
                        career
                        <br />
                        opportunities
                      </i>{" "}
                      in Japan{" "}
                    </>
                  ) : (
                    <>
                      {" "}
                      日本での{" "}
                      <i>
                        キャリア
                        <br />
                        の機会
                      </i>{" "}
                      をつなぐプラットフォーム{" "}
                    </>
                  )}{" "}
                </Text>

                <Paper p="xl" radius="lg" bg="gray.9" mt="xl">
                  <SimpleGrid cols={4}>
                    <Text size="xs" c="gray.0" opacity={0.5}>
                      {language === "en"
                        ? "OFFICE - NEPAL"
                        : "オフィス - ネパール"}
                    </Text>

                    <Stack>
                      <Text size="xs" c="gray.0">
                        {language === "en" ? (
                          <>
                            New Plaza, Putalisadak,
                            <br /> Kathmandu, Nepal
                          </>
                        ) : (
                          <>
                            ニュープラザ、プタリサダック、
                            <br /> カトマンズ、ネパール
                          </>
                        )}
                      </Text>
                     
                    </Stack>
                    <Text size="xs" c="gray.0">
                      {language === "en" ? (
                        <>
                 <br />
                +977 15917178
                        </>
                      ) : (
                        <>
                 <br />
                +977 15917178
                        </>
                      )}
                    </Text>

                    <Text size="xs" c="gray.0">
                      {language === "en"
                        ? "info@unitessw.com"
                        : "info@unitessw.com"}
                    </Text>
                  </SimpleGrid>

                  <Divider my="lg" opacity={0.2} />

                  <Group justify="space-between">
                    <Text size="xs" c="gray.0" fw={600}>
                      Manabiya HR Unity Pvt. Ltd.
                    </Text>

                    <Text size="xs" c="gray.0">
                      {language === "en"
                        ? `Copyright © ${String(new Date()).slice(10, 15)} Manabiya HR Unity. All rights reserved.`
                        : `著作権 © ${String(new Date()).slice(10, 15)} Manabiya HR Unity。全著作権所有。`}
                    </Text>
                  </Group>
                </Paper>
              </Box>
            </Paper>
          </Grid.Col>

          <Grid.Col
            pos="relative"
            offset={{ base: 0, lg: Pathname == "/" ? 0 : 4 }}
            span={{ base: 12, lg: 4 }}
            h={{
              base: "auto",
            }}
          >
            <Paper
              mt={Pathname == "/" ? 0 : 32}
              pos="sticky"
              shadow="lg"
              radius="lg"
              h={{
                base: "auto",
                lg:
                  Pathname == "/"
                    ? "calc(100vh -   var(--mantine-spacing-xl))"
                    : "auto",
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
              <Space h={"xl"} hidden={Pathname == "/"} />

              {children}
            </Paper>
          </Grid.Col>

          <Grid.Col span={12} hiddenFrom="lg">
            <Paper p="xl" radius="lg" bg="none">
              <SimpleGrid cols={2}>
                <Text size="xs" c="gray.0" opacity={0.5}>
                  {language === "en" ? "OFFICE - NEPAL" : "オフィス - ネパール"}
                </Text>

                <Stack>
                  <Text size="xs" c="gray.0">
                    {language === "en" ? (
                      <>
                        New Plaza, Putalisadak,
                        <br /> Kathmandu, Nepal
                      </>
                    ) : (
                      <>
                        ニュープラザ、プタリサダック、
                        <br /> カトマンズ、ネパール
                      </>
                    )}
                  </Text>
                </Stack>
                <Text size="xs" c="gray.0">
                  {language === "en" ? (
                    <>
                      +977 9851338205
                      <br /> +977 1 5917178
                    </>
                  ) : (
                    <>
                      +977 9851338205
                      <br /> +977 1 5917178
                    </>
                  )}
                </Text>

                <Text size="xs" c="gray.0">
                  {language === "en"
                    ? "info@unitessw.com"
                    : "info@unitessw.com"}
                </Text>
              </SimpleGrid>

              <Divider my="lg" opacity={0.2} />

              <Group justify="center">
                <Text size="xs" c="gray.0">
                  {language === "en"
                    ? `Copyright © ${String(new Date()).slice(10, 15)} Manabiya HR Unity. All rights reserved.`
                    : `著作権 © ${String(new Date()).slice(10, 15)} Manabiya HR Unity。全著作権所有。`}
                </Text>
              </Group>
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}
