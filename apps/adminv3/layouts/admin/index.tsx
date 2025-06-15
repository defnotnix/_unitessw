"use client";

import React, { PropsWithChildren } from "react";
//next

//mantine
import {
  ActionIcon,
  Anchor,
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Center,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Menu,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import { AdminNavLayout, triggerNotification } from "@vframework/ui";
import { navItems, navModules } from "@/config/nav";
import {
  BellIcon,
  Calendar,
  CaretDownIcon,
  CaretRight,
  Check,
  Cricket,
  GearSixIcon,
  InfoIcon,
  Note,
  NotificationIcon,
  PlusIcon,
  PowerIcon,
  UserCheck,
  UserIcon,
  UserPlus,
  UserPlusIcon,
} from "@phosphor-icons/react";
import { usePathname, useRouter } from "next/navigation";
import { moduleApiCall } from "@vframework/core";
//mantine

//icons

//styles

import classes from "./admin.module.css";
import { images } from "@/assets/images";

//components

export function LayoutAdmin({ children }: PropsWithChildren) {
  // * DEFINITIONS

  const Router = useRouter();
  const Pathname = usePathname();

  // * CONTEXT

  // * STATE

  // * FUNCTIONS

  // * COMPONENTS

  // * ANIMATIONS

  const tooltipStyles = {
    label: {
      fontSize: "var(--mantine-font-size-xs)",
    },
  };

  return (
    <>
      <Paper
        bg="dark.9"
        radius={0}
        style={{
          borderBottom: "1px solid rgba(255,255,255,.1)",
        }}
      >
        <Container py="md">
          <Grid align="center">
            <Grid.Col span={{ base: 12, lg: 2 }}>
              <Group gap="xs">
                <Group gap="xs">
                  <Image
                    src={images.brand.adminIcon}
                    h={16}
                    w={30}
                    fit="contain"
                  />

                  <Text size="xs" c="gray.0" fw={600}>
                    <b> Unite SSW</b>{" "}
                    <span
                      style={{
                        color: "var(--mantine-color-brand-3)",
                      }}
                    >
                      | Admin Portal
                    </span>
                  </Text>
                </Group>
              </Group>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Group gap={0}>
                {navItems.map((item, index) => {
                  if (item.children) {
                    return (
                      <Menu
                        trigger="hover"
                        openDelay={100}
                        closeDelay={400}
                        key={index}
                      >
                        <Menu.Target>
                          <Button
                            color={Pathname === item.value ? "brand" : "gray"}
                            className={classes.navButton}
                            key={index}
                            size="xs"
                            variant={
                              Pathname === item.value ? "filled" : "subtle"
                            }
                            onClick={() => {
                              Router.push(item.value);
                            }}
                            rightSection={<CaretDownIcon />}
                          >
                            {item.label}
                          </Button>
                        </Menu.Target>
                        <Menu.Dropdown w={200}>
                          {item.children.map((child, index) => {
                            return (
                              <Menu.Item key={index}>
                                <Text size="xs">{child.label}</Text>
                              </Menu.Item>
                            );
                          })}
                        </Menu.Dropdown>
                      </Menu>
                    );
                  } else {
                    return (
                      <Button
                        color={Pathname === item.value ? "brand" : "gray"}
                        className={classes.navButton}
                        key={index}
                        size="xs"
                        variant={Pathname === item.value ? "filled" : "subtle"}
                        onClick={() => {
                          Router.push(item.value);
                        }}
                      >
                        {item.label}
                      </Button>
                    );
                  }
                })}
              </Group>
            </Grid.Col>

            <Grid.Col span={{ base: 12, lg: 4 }}>
              <Group justify="flex-end" gap="xs">
                <ActionIcon variant="subtle" color="gray">
                  <BellIcon />
                </ActionIcon>

                <ActionIcon>
                  <PlusIcon />
                </ActionIcon>

                <Divider orientation="vertical" opacity={0.1} />

                <Text size="xs" c="gray.0" ta="right" opacity={0.5}>
                  You are logged in as
                </Text>

                <Menu>
                  <Menu.Target>
                    <Button
                      size="xs"
                      variant="light"
                      c="white"
                      rightSection={<CaretDownIcon size={12} />}
                    >
                      Anamol
                    </Button>
                  </Menu.Target>

                  <Menu.Dropdown w={250}>
                    <Paper p="md" bg="brand.0">
                      <Group gap="xs" wrap="nowrap">
                        <Avatar color="brand" size="md">
                          AM
                        </Avatar>
                        <div>
                          <Text size="sm">Anamol Maharjan</Text>
                          <Text size="10px" opacity={0.5}>
                            anamol.maharjan@gmail.com
                          </Text>
                        </div>
                      </Group>
                    </Paper>

                    <Menu.Label>
                      <Text size="10px">My Profile</Text>
                    </Menu.Label>

                    <Menu.Item leftSection={<UserIcon />}>
                      <Text size="xs">Edit Profile</Text>
                    </Menu.Item>
                    <Menu.Item leftSection={<GearSixIcon />}>
                      <Text size="xs">Account Settings</Text>
                    </Menu.Item>

                    <Menu.Divider />

                    <Menu.Label>
                      <Text size="10px">Extra</Text>
                    </Menu.Label>
                    <Menu.Item leftSection={<InfoIcon />}>
                      <Text size="xs">About Software</Text>
                    </Menu.Item>
                    <Menu.Divider />

                    <Menu.Item color="red" leftSection={<PowerIcon />}>
                      <Text size="xs">Sign Out</Text>
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Group>
            </Grid.Col>
          </Grid>
        </Container>
      </Paper>

      {children}
    </>
  );
}
