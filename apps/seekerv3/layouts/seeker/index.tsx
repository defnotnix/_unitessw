"use client";

import {
  ActionIcon,
  Box,
  Burger,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Drawer,
  Grid,
  Group,
  Image,
  Menu,
  Paper,
  ScrollArea,
  Space,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { PropsWithChildren } from "react";
import {
  ArrowRightIcon,
  BellIcon,
  DoorOpenIcon,
  MegaphoneSimpleIcon,
} from "@phosphor-icons/react";
import { usePathname, useRouter } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";
import { useLanguage } from "../app/app.context";
import imgLogo from "@/assets/img/sswmini.png";
import { moduleApiCall } from "@vframework/core";

function LogoWithText({ size = "xs" }: { size?: string }) {
  const { language } = useLanguage();
  return (
    <Group gap={4}>
      <Image src={imgLogo.src} h={16} w={30} style={{ objectFit: "contain" }} />
      <Text size={size} fw={800} c="gray.0">
        Unite SSW{" "}
        <span style={{ opacity: 0.8, color: "var(--mantine-color-brand-4)" }}>
          {language === "en" ? "| Seeker Portal" : "| 求職者ポータル"}
        </span>
      </Text>
    </Group>
  );
}

function LangSwitcher() {
  const { language, setLanguage } = useLanguage();
  return (
    <ButtonGroup>
      {["en", "jp"].map((lang) => (
        <Button
          key={lang}
          size="xs"
          variant={language === lang ? "white" : "light"}
          bg={language === lang ? "white" : "gray.8"}
          c={language === lang ? "brand" : "gray"}
          onClick={() => setLanguage(lang)}
        >
          {lang.toUpperCase()}
        </Button>
      ))}
    </ButtonGroup>
  );
}

function AnnouncementList() {
  return (
    <ScrollArea h={500}>
      <Stack>
        {[...Array(3)].map((_, i) => (
          <Paper key={i} withBorder p="sm">
            <Group justify="space-between">
              <Text size="xs" c="brand.6" fw={700}>
                Today (21 June, 2025)
              </Text>
              <Text size="xs" opacity={0.5}>
                General Notice
              </Text>
            </Group>
            <Text size="sm" my="md">
              Hello Seekers, there will be changes to the Terms and Conditions
              governing our services on the [Job Portal Name] platform. These
              updates are part of our ongoing efforts to enhance transparency,
              improve service quality, and ensure a more seamless experience for
              both recruiters and candidates.
            </Text>
            <Text size="xs" opacity={0.5}>
              Administration, Unite SSW.
            </Text>
          </Paper>
        ))}
      </Stack>
    </ScrollArea>
  );
}

export function LayoutSeeker({ children }: PropsWithChildren) {
  const { language, setLanguage } = useLanguage();
  const Router = useRouter();
  const Pathname = usePathname();
  const [opened, { open, close }] = useDisclosure();

  const navItems = [
    { label: language === "en" ? "Home" : "ホーム", path: "/home" },
    {
      label: language === "en" ? "Browse Candidates" : "候補者を探す",
      path: "/applicants",
    },

    {
      label: language === "en" ? "Saved Candidate" : "保存済み候補者",
      path: "/saved",
    },
  ];

  return (
    <section
      style={{ minHeight: "100vh", background: "var(--mantine-color-gray-2)" }}
    >
      <Paper radius={0} bg="dark.9">
        <Container size="xl">
          <Group gap="xs" hiddenFrom="lg" justify="space-between" py="md">
            <LogoWithText />
            <ThemeIcon bg="gray.9" onClick={open}>
              <Burger color="gray.0" size="xs" />
            </ThemeIcon>
          </Group>

          <Grid py="md" visibleFrom="lg">
            <Grid.Col span={{ base: 12, lg: 9 }}>
              <Group gap="xs">
                <LogoWithText />
                <Space w="xl" />
                <Group gap={0}>
                  {navItems.map((item) => (
                    <Button
                      key={item.path}
                      size="xs"
                      variant={Pathname === item.path ? "filled" : "subtle"}
                      color={Pathname === item.path ? "brand" : "gray"}
                      onClick={() => Router.push(item.path)}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Group>
              </Group>
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
                    <AnnouncementList />
                  </Menu.Dropdown>
                </Menu>

                <Menu>
                  <Menu.Target>
                    <ActionIcon color="gray" variant="subtle">
                      <BellIcon />
                    </ActionIcon>
                  </Menu.Target>
                </Menu>

                <LangSwitcher />
                <Button
                  size="xs"
                  leftSection={<DoorOpenIcon />}
                  onClick={() => {
                    moduleApiCall
                      .createRecord("/authenticate/logout/", {})
                      .then((res) => {
                        if (!res.err) {
                          sessionStorage.removeItem("sswtoken");
                          Router.push("/");
                        }
                      });
                  }}
                >
                  Sign Out
                </Button>
              </Group>
            </Grid.Col>
          </Grid>
        </Container>
      </Paper>

      <Divider style={{ borderColor: "rgba(0,0,0,.1)" }} />
      {children}

      <Drawer
        title={<LogoWithText />}
        opened={opened}
        onClose={close}
        padding="xl"
      >
        <Stack>
          <Text size="xs" opacity={0.5}>
            Site Navigation
          </Text>
          {navItems.map((item) => (
            <Text
              key={item.path}
              size="2rem"
              opacity={Pathname === item.path ? 1 : 0.5}
              onClick={() => {
                Router.push(item.path);
                close();
              }}
              style={{ cursor: "pointer" }}
            >
              {Pathname === item.path && "-"} {item.label}
            </Text>
          ))}
        </Stack>

        <Paper pos="absolute" bottom="2rem" w="90%">
          <Group justify="space-between" wrap="nowrap">
            <Text size="xs">All rights reserved.</Text>
            <LangSwitcher />
          </Group>
        </Paper>
      </Drawer>
    </section>
  );
}
