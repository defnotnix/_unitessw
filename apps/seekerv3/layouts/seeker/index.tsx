"use client";

import {
  ActionIcon,
  Box,
  Burger,
  Button,
  ButtonGroup,
  Center,
  Container,
  Divider,
  Drawer,
  Grid,
  Group,
  Image,
  Menu,
  Paper,
  ScrollArea,
  SimpleGrid,
  Space,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { PropsWithChildren } from "react";

//assets
import imgLogo from "@/assets/img/sswmini.png";
import {
  ArrowRightIcon,
  BellIcon,
  DoorOpenIcon,
  MegaphoneSimpleIcon,
} from "@phosphor-icons/react";
import { useLanguage } from "../app/app.context";
import { usePathname, useRouter } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";

export function LayoutSeeker({ children }: PropsWithChildren) {
  const { language, setLanguage } = useLanguage();
  const Router = useRouter();
  const Pathname = usePathname();

  const [opened, handleOpen] = useDisclosure();

  return (
    <>
      <section
        style={{
          minHeight: "100vh",
          background: "var(--mantine-color-gray-2)",
        }}
      >
        <Paper radius={0} bg="dark.9">
          <Container size="xl">
            <Group gap="xs" hiddenFrom="lg" justify="space-between" py="md">
              <Group gap={4}>
                <Image
                  src={imgLogo.src}
                  h={16}
                  w={30}
                  style={{
                    objectFit: "contain",
                  }}
                />
                <Text size="xs" c="gray.0" fw={800}>
                  Unite SSW{" "}
                  <span
                    style={{
                      opacity: 0.8,
                      color: "var(--mantine-color-brand-4)",
                    }}
                  >
                    {language === "en" ? "| Seeker Portal" : "| 求職者ポータル"}
                  </span>
                </Text>
              </Group>

              <ThemeIcon bg="gray.9" onClick={() => handleOpen.open()}>
                <Burger color="gray.0" size="xs" />
              </ThemeIcon>
            </Group>

            <Grid py="md" visibleFrom="lg">
              <Grid.Col span={{ base: 12, lg: 9 }}>
                <div>
                  <Group gap="xs">
                    <Image
                      src={imgLogo.src}
                      h={16}
                      w={30}
                      style={{
                        objectFit: "contain",
                      }}
                    />
                    <Text size="xs" c="gray.0" fw={800}>
                      Unite SSW{" "}
                      <span
                        style={{
                          opacity: 0.8,
                          color: "var(--mantine-color-brand-4)",
                        }}
                      >
                        {language === "en"
                          ? "| Seeker Portal"
                          : "| 求職者ポータル"}
                      </span>
                    </Text>

                    <Space w="xl" />

                    <Group justify="center" gap={0}>
                      <Button
                        size="xs"
                        variant={Pathname == "/home" ? "filled" : "subtle"}
                        color={Pathname == "/home" ? "brand" : "gray"}
                        onClick={() => {
                          Router.push("/home");
                        }}
                      >
                        {language === "en" ? "Home" : "ホーム"}
                      </Button>
                      <Button
                        size="xs"
                        variant={
                          Pathname == "/applicants" ? "filled" : "subtle"
                        }
                        color={Pathname == "/applicants" ? "brand" : "gray"}
                        onClick={() => {
                          Router.push("/applicants");
                        }}
                      >
                        {language === "en"
                          ? "Browse Candidates"
                          : "候補者を探す"}
                      </Button>
                      <Button
                        size="xs"
                        variant={Pathname == "/booked" ? "filled" : "subtle"}
                        color={Pathname == "/booked" ? "brand" : "gray"}
                        onClick={() => {
                          Router.push("/booked");
                        }}
                      >
                        {language === "en"
                          ? "Booked Candidates"
                          : "予約済み候補者"}
                      </Button>
                      <Button
                        size="xs"
                        variant={Pathname == "/wishlist" ? "filled" : "subtle"}
                        color={Pathname == "/wishlist" ? "brand" : "gray"}
                        onClick={() => {
                          Router.push("/wishlist");
                        }}
                      >
                        {language === "en"
                          ? "Saved Candidate"
                          : "保存済み候補者"}
                      </Button>
                    </Group>
                  </Group>
                </div>
              </Grid.Col>

              <Grid.Col span={{ base: 12, lg: 3 }}>
                <Group justify="flex-end" gap="xs">
                  <Menu withArrow shadow="xl">
                    <Menu.Target>
                      <ActionIcon color="gray" variant="subtle">
                        <MegaphoneSimpleIcon />
                      </ActionIcon>
                    </Menu.Target>
                    <Menu.Dropdown w={400}>
                      <Box p="sm" fw={600}>
                        <Text size="sm">Announcements</Text>
                      </Box>
                      <ScrollArea h={500}>
                        <Stack>
                          <Paper withBorder p="sm">
                            <Group justify="space-between">
                              <Text size="xs" c="brand.6" fw={700}>
                                Today (21 June, 2025)
                              </Text>
                              <Text size="xs" opacity={0.5}>
                                General Notice
                              </Text>
                            </Group>

                            <Text size="sm" my="md">
                              Hello Seekers, there will be changes to the Terms
                              and Conditions governing our services on the [Job
                              Portal Name] platform. These updates are part of
                              our ongoing efforts to enhance transparency,
                              improve service quality, and ensure a more
                              seamless experience for both recruiters and
                              candidates.
                            </Text>

                            <Text size="xs" opacity={0.5}>
                              Administration, Unite SSW.
                            </Text>
                          </Paper>

                          <Paper withBorder p="sm">
                            <Group justify="space-between">
                              <Text size="xs" c="brand.6" fw={700}>
                                Today (21 June, 2025)
                              </Text>
                              <Text size="xs" opacity={0.5}>
                                General Notice
                              </Text>
                            </Group>

                            <Text size="sm" my="md">
                              Hello Seekers, there will be changes to the Terms
                              and Conditions governing our services on the [Job
                              Portal Name] platform. These updates are part of
                              our ongoing efforts to enhance transparency,
                              improve service quality, and ensure a more
                              seamless experience for both recruiters and
                              candidates.
                            </Text>

                            <Text size="xs" opacity={0.5}>
                              Administration, Unite SSW.
                            </Text>
                          </Paper>

                          <Paper withBorder p="sm">
                            <Group justify="space-between">
                              <Text size="xs" c="brand.6" fw={700}>
                                Today (21 June, 2025)
                              </Text>
                              <Text size="xs" opacity={0.5}>
                                General Notice
                              </Text>
                            </Group>

                            <Text size="sm" my="md">
                              Hello Seekers, there will be changes to the Terms
                              and Conditions governing our services on the [Job
                              Portal Name] platform. These updates are part of
                              our ongoing efforts to enhance transparency,
                              improve service quality, and ensure a more
                              seamless experience for both recruiters and
                              candidates.
                            </Text>

                            <Text size="xs" opacity={0.5}>
                              Administration, Unite SSW.
                            </Text>
                          </Paper>
                        </Stack>
                      </ScrollArea>
                    </Menu.Dropdown>
                  </Menu>

                  <Menu>
                    <Menu.Target>
                      <ActionIcon color="gray" variant="subtle">
                        <BellIcon />
                      </ActionIcon>
                    </Menu.Target>
                  </Menu>

                  <ButtonGroup>
                    <Button
                      size="xs"
                      variant={language == "en" ? "white" : "light"}
                      bg={language == "en" ? "white" : "gray.8"}
                      c={language == "en" ? "brand" : "gray"}
                      onClick={() => setLanguage("en")}
                    >
                      EN
                    </Button>
                    <Button
                      size="xs"
                      variant={language == "jp" ? "white" : "light"}
                      bg={language == "jp" ? "white" : "gray.8"}
                      c={language == "jp" ? "brand" : "gray"}
                      onClick={() => setLanguage("jp")}
                    >
                      JP
                    </Button>
                  </ButtonGroup>

                  <Button size="xs" leftSection={<DoorOpenIcon />}>
                    Sign Out
                  </Button>
                </Group>
              </Grid.Col>
            </Grid>
          </Container>
        </Paper>

        <Divider
          style={{
            borderColor: "rgba(0,0,0,.1)",
          }}
        />

        {children}

        <Drawer
          title={
            <Group gap={4}>
              <Image
                src={imgLogo.src}
                h={16}
                w={30}
                style={{
                  objectFit: "contain",
                }}
              />
              <Text size="xs" fw={800}>
                Unite SSW{" "}
                <span
                  style={{
                    opacity: 0.8,
                    color: "var(--mantine-color-brand-7)",
                  }}
                >
                  {language === "en" ? "| Seeker Portal" : "| 求職者ポータル"}
                </span>
              </Text>
            </Group>
          }
          opened={opened}
          onClose={() => handleOpen.close()}
        >
          <Stack py={"xl"}>
            <Text size="xs" opacity={0.5}>
              Site Navigation
            </Text>

            <Text size="2rem" opacity={Pathname == "/home" ? 1 : 0.5}>
              {Pathname == "/home" && "-"} Home
            </Text>
            <Text size="2rem" opacity={Pathname == "/applicants" ? 1 : 0.5}>
              {Pathname == "/applicants" && "-"} Find Candidates
            </Text>
            <Text size="2rem" opacity={Pathname == "/booked" ? 1 : 0.5}>
              {Pathname == "/booked" && "-"} Booked Candidates
            </Text>
            <Text size="2rem" opacity={Pathname == "/wishlist" ? 1 : 0.5}>
              {Pathname == "/wishlist" && "-"} Candidate Wishlist
            </Text>
            <Text size="2rem" opacity={Pathname == "/contact" ? 1 : 0.5}>
              {Pathname == "/contact" && "-"} Contact
            </Text>
          </Stack>

          <Paper
            pos="absolute"
            style={{
              bottom: "2rem",
              width: "90%",
            }}
          >
            <Group justify="space-between" wrap="nowrap">
              <Text size="xs">All rights reserved.</Text>
              <ButtonGroup>
                <Button
                  size="xs"
                  variant={language == "en" ? "white" : "subtle"}
                  bg={language == "en" ? "white" : "gray.7"}
                  c={language == "en" ? "brand" : "gray"}
                  onClick={() => setLanguage("en")}
                >
                  EN
                </Button>
                <Button
                  size="xs"
                  variant={language == "jp" ? "white" : "light"}
                  bg={language == "jp" ? "white" : "gray.7"}
                  c={language == "jp" ? "brand" : "gray"}
                  onClick={() => setLanguage("jp")}
                >
                  JP
                </Button>
              </ButtonGroup>
            </Group>
          </Paper>
        </Drawer>
      </section>
    </>
  );
}
