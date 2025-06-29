"use client";

import React, { PropsWithChildren, useEffect, useState } from "react";
//next

//mantine
import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Box,
  Breadcrumbs,
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
  Modal,
  NavLink,
  Notification,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Tooltip,
} from "@mantine/core";
import { AdminNavLayout, triggerNotification } from "@vframework/ui";
import { navItems, navModules } from "@/config/nav";
import {
  CheckIcon,
  BellIcon,
  Calendar,
  CaretDownIcon,
  CaretRight,
  Check,
  Cricket,
  GearSixIcon,
  InfoIcon,
  KeyIcon,
  Note,
  NotificationIcon,
  PlusIcon,
  PowerIcon,
  ScrollIcon,
  UserCheck,
  UserIcon,
  UserPlus,
  UserPlusIcon,
  LockIcon,
} from "@phosphor-icons/react";
import { usePathname, useRouter } from "next/navigation";
import { FormHandler, moduleApiCall } from "@vframework/core";
//mantine

//icons

//styles

import classes from "./admin.module.css";
import { images } from "@/assets/images";
import { useDisclosure } from "@mantine/hooks";
import { jwtDecode } from "jwt-decode";
import { RBACCheck } from "@/components/RBACCheck";

//components

export function LayoutAdmin({ children }: PropsWithChildren) {
  // * DEFINITIONS

  const Router = useRouter();
  const Pathname = usePathname();

  const [openedAbout, handlerAbout] = useDisclosure();
  const [openedPassword, handlePassword] = useDisclosure();
  const [openedDrawer, handleDrawer] = useDisclosure();

  const [tokenData, setTokenData] = useState<any>(null);

  useEffect(() => {
    const token = sessionStorage.getItem("sswtokenadmin");
    if (token) {
      setTokenData(jwtDecode(token));
    }
  }, []);

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

  const PasswordForm = () => {
    const form = FormHandler.useForm();
    const { current, handleSubmit, handleStepBack, handleStepNext } =
      FormHandler.usePropContext();

    return (
      <Stack gap="xs" p="md">
        <Alert
          title="Proceed with caution."
          color="brand"
          styles={{
            title: {
              fontSize: "var(--mantine-font-size-xs)",
            },
          }}
        >
          <Text size="xs">
            You are about to change your password. This will be essential for
            all further sign in`s.
          </Text>
        </Alert>

        <TextInput
          label="Old Password"
          placeholder="Enter old password"
          {...form.getInputProps("name")}
        />

        <TextInput
          label="New Password"
          placeholder="Enter old password"
          {...form.getInputProps("name")}
        />
        <TextInput
          label="Re-New Password"
          placeholder="Enter old password"
          {...form.getInputProps("name")}
        />

        <Button onClick={handleStepNext}>Change Password</Button>
      </Stack>
    );
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
            <Grid.Col span={{ base: 8, lg: 2 }}>
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
            <Grid.Col span={{ base: 4, lg: 6 }} hiddenFrom="lg">
              <Group justify="flex-end">
                <Burger
                  size={16}
                  color="gray"
                  onClick={() => handleDrawer.open()}
                />
              </Group>
            </Grid.Col>
            <Grid.Col span={{ base: 4, lg: 6 }} visibleFrom="lg">
              <Group gap={0}>
                {navItems.map((item, index) => {
                  if (item.children) {
                    return (
                      <RBACCheck
                        key={index}
                        customRender={
                          <Button
                            disabled
                            bg="none"
                            size="xs"
                            opacity={0.3}
                            rightSection={<LockIcon weight="fill" />}
                          >
                            {item.label}
                          </Button>
                        }
                        allowList={item.roles || ["admin"]}
                      >
                        <Menu trigger="hover" openDelay={100} closeDelay={400}>
                          <Menu.Target>
                            <Button
                              color={
                                Pathname.includes(item.value || "zzz")
                                  ? "brand"
                                  : "gray"
                              }
                              className={classes.navButton}
                              key={index}
                              size="xs"
                              variant={
                                Pathname.includes(item.value || "zzz")
                                  ? "filled"
                                  : "subtle"
                              }
                              rightSection={<CaretDownIcon />}
                            >
                              {item.label}
                            </Button>
                          </Menu.Target>
                          <Menu.Dropdown w={200}>
                            {item.children.map((child, index) => {
                              if (!child.value) {
                                if (child.divider) {
                                  return <Menu.Divider key={index} />;
                                } else {
                                  return (
                                    <Menu.Label key={index}>
                                      <Text size="10px">{child.label}</Text>
                                    </Menu.Label>
                                  );
                                }
                              } else {
                                return (
                                  <Menu.Item
                                    key={index}
                                    onClick={() => {
                                      if (child.value) {
                                        Router.push(child.value);
                                      }
                                    }}
                                    color={
                                      Pathname === child.value ? "brand" : ""
                                    }
                                  >
                                    <Text size="xs">{child.label}</Text>
                                  </Menu.Item>
                                );
                              }
                            })}
                          </Menu.Dropdown>
                        </Menu>
                      </RBACCheck>
                    );
                  } else {
                    return (
                      <RBACCheck
                        customRender={
                          <Button
                            disabled
                            bg="none"
                            size="xs"
                            opacity={0.3}
                            rightSection={<LockIcon weight="fill" />}
                          >
                            {item.label}
                          </Button>
                        }
                        key={index}
                        allowList={item.roles || ["admin"]}
                      >
                        <Button
                          color={Pathname === item.value ? "brand" : "gray"}
                          className={classes.navButton}
                          key={index}
                          size="xs"
                          variant={
                            Pathname === item.value ? "filled" : "subtle"
                          }
                          onClick={() => {
                            if (item.value) {
                              Router.push(item.value);
                            }
                          }}
                        >
                          {item.label}
                        </Button>
                      </RBACCheck>
                    );
                  }
                })}
              </Group>
            </Grid.Col>

            <Grid.Col span={{ base: 12, lg: 4 }} visibleFrom="lg">
              <Group justify="flex-end" gap="xs">
                {/* <Menu shadow="xl">
                  <Menu.Target>
                    <ActionIcon variant="subtle" color="gray">
                      <BellIcon />
                    </ActionIcon>
                  </Menu.Target>
                  <Menu.Dropdown w={400}>
                    <Box px="sm" py={4} pb={4}>
                      <Group justify="space-between">
                        <Text size="xs" fw={800} tt="uppercase">
                          Notifications
                        </Text>

                        <Button
                          size="xs"
                          variant="subtle"
                          leftSection={<CheckIcon />}
                        >
                          Mark all as read
                        </Button>
                      </Group>
                    </Box>

                    <ButtonGroup mb="2">
                      <Button color="brand" fullWidth size="xs">
                        All
                      </Button>
                      <Button color="dark" fullWidth size="xs" variant="light">
                        Applicant
                      </Button>
                      <Button color="dark" fullWidth size="xs" variant="light">
                        Seeker
                      </Button>
                      <Button color="dark" fullWidth size="xs" variant="light">
                        Others
                      </Button>
                    </ButtonGroup>

                    <Stack gap={2}>
                      <Paper withBorder>
                        <Group
                          gap="lg"
                          wrap="nowrap"
                          p="xs"
                          justify="space-between"
                        >
                          <Group wrap="nowrap">
                            <Avatar radius="md" color="blue" variant="filled">
                              <UserPlusIcon weight="duotone" />
                            </Avatar>
                            <Stack gap={4}>
                              <Text size="xs" fw={700}>
                                New applicant request!
                              </Text>
                              <Text size="xs" fw={600} c="gray.7">
                                <b
                                  style={{
                                    color: "var(--mantine-color-brand-6)",
                                  }}
                                >
                                  {" "}
                                  Ram Kumar Shah
                                </b>{" "}
                                applied a new request!
                              </Text>
                            </Stack>
                          </Group>

                          <Text
                            size="10px"
                            fw={700}
                            c="gray.6"
                            w={50}
                            ta="right"
                          >
                            May 12
                          </Text>
                        </Group>
                      </Paper>

                      <Paper withBorder>
                        <Group
                          gap="lg"
                          wrap="nowrap"
                          p="xs"
                          justify="space-between"
                        >
                          <Group wrap="nowrap">
                            <Avatar radius="md" color="blue" variant="filled">
                              <UserPlusIcon weight="duotone" />
                            </Avatar>
                            <Stack gap={4}>
                              <Text size="xs" fw={700}>
                                New applicant request!
                              </Text>
                              <Text size="xs" fw={600} c="gray.7">
                                <b
                                  style={{
                                    color: "var(--mantine-color-brand-6)",
                                  }}
                                >
                                  {" "}
                                  Ram Kumar Shah
                                </b>{" "}
                                applied a new request!
                              </Text>
                            </Stack>
                          </Group>

                          <Text
                            size="10px"
                            fw={700}
                            c="gray.6"
                            w={50}
                            ta="right"
                          >
                            May 12
                          </Text>
                        </Group>
                      </Paper>

                      <Paper withBorder>
                        <Group
                          gap="lg"
                          wrap="nowrap"
                          p="xs"
                          justify="space-between"
                        >
                          <Group wrap="nowrap">
                            <Avatar radius="md" color="teal" variant="filled">
                              <ScrollIcon weight="duotone" />
                            </Avatar>
                            <Stack gap={4}>
                              <Text size="xs" fw={700}>
                                Applicant Resubmission
                              </Text>
                              <Text size="xs" fw={600} c="gray.7">
                                <b
                                  style={{
                                    color: "var(--mantine-color-teal-6)",
                                  }}
                                >
                                  {" "}
                                  Ram Kumar Shah
                                </b>{" "}
                                just resubmitted his form.
                              </Text>
                            </Stack>
                          </Group>

                          <Text
                            size="10px"
                            fw={700}
                            c="gray.6"
                            w={50}
                            ta="right"
                          >
                            May 12
                          </Text>
                        </Group>
                      </Paper>

                      <Paper withBorder>
                        <Group
                          gap="lg"
                          wrap="nowrap"
                          p="xs"
                          justify="space-between"
                        >
                          <Group wrap="nowrap">
                            <Avatar radius="md" color="indigo" variant="filled">
                              <UserPlusIcon weight="duotone" />
                            </Avatar>
                            <Stack gap={4}>
                              <Text size="xs" fw={700}>
                                Applicant Booking Request
                              </Text>
                              <Text size="xs" fw={600} c="gray.7">
                                <b
                                  style={{
                                    color: "var(--mantine-color-indigo-6)",
                                  }}
                                >
                                  {" "}
                                  Nihongo
                                </b>{" "}
                                wants to enquire on a applicant.
                              </Text>
                            </Stack>
                          </Group>

                          <Text
                            size="10px"
                            fw={700}
                            c="gray.6"
                            w={50}
                            ta="right"
                          >
                            May 12
                          </Text>
                        </Group>
                      </Paper>

                      <Paper withBorder>
                        <Group
                          gap="lg"
                          wrap="nowrap"
                          p="xs"
                          justify="space-between"
                        >
                          <Group wrap="nowrap">
                            <Avatar radius="md" color="grape" variant="filled">
                              <UserPlusIcon weight="duotone" />
                            </Avatar>
                            <Stack gap={4}>
                              <Text size="xs" fw={700}>
                                Applicant Interview Request
                              </Text>
                              <Text size="xs" fw={600} c="gray.7">
                                <b
                                  style={{
                                    color: "var(--mantine-color-grape-6)",
                                  }}
                                >
                                  {" "}
                                  Nihongo
                                </b>{" "}
                                wants to book an interview with an applicant.
                              </Text>
                            </Stack>
                          </Group>

                          <Text
                            size="10px"
                            fw={700}
                            c="gray.6"
                            w={50}
                            ta="right"
                          >
                            May 12
                          </Text>
                        </Group>
                      </Paper>
                    </Stack>
                  </Menu.Dropdown>
                </Menu> */}

                <Menu>
                  <Menu.Target>
                    <ActionIcon>
                      <PlusIcon />
                    </ActionIcon>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item
                      leftSection={<PlusIcon />}
                      onClick={() => {
                        Router.push("/admin/applicants/new");
                      }}
                    >
                      <Text size="xs">New Applicant</Text>
                    </Menu.Item>
                    <Menu.Item
                      leftSection={<PlusIcon />}
                      onClick={() => {
                        Router.push("/admin/guardians/new");
                      }}
                    >
                      <Text size="xs">New CV</Text>
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>

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
                      {tokenData?.name || "User"}
                    </Button>
                  </Menu.Target>

                  <Menu.Dropdown w={250}>
                    <Paper p="md" bg="brand.0" radius={0} mb="md">
                      <Group gap="xs" wrap="nowrap">
                        <Avatar
                          radius="md"
                          color="brand"
                          name={tokenData?.name}
                          size="md"
                        />
                        <div>
                          <Text size="sm">{tokenData?.name || "User"}</Text>
                          <Text size="10px" opacity={0.5}>
                            Admin Account
                          </Text>
                        </div>
                      </Group>
                    </Paper>

                    <Menu.Label>
                      <Text size="10px">My Profile</Text>
                    </Menu.Label>

                    <Menu.Item leftSection={<UserIcon />} disabled>
                      <Text size="xs">Review Profile</Text>
                    </Menu.Item>
                    <Menu.Item
                      leftSection={<KeyIcon />}
                      onClick={handlePassword.open}
                    >
                      <Text size="xs">Change Password</Text>
                    </Menu.Item>

                    <Menu.Divider />

                    <Menu.Label>
                      <Text size="10px">Extra</Text>
                    </Menu.Label>
                    <Menu.Item
                      leftSection={<InfoIcon />}
                      onClick={handlerAbout.open}
                    >
                      <Text size="xs">About Software</Text>
                    </Menu.Item>
                    <Menu.Divider />

                    <Menu.Item
                      color="red"
                      leftSection={<PowerIcon />}
                      onClick={() => {
                        moduleApiCall
                          .createRecord("/authenticate/logout/", {})
                          .then((res) => {
                            if (!res.err) {
                              sessionStorage.removeItem("sswtokenadmin");
                              Router.push("/");
                            }
                          });
                      }}
                    >
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

      <Modal
        opened={openedAbout}
        onClose={() => handlerAbout.close()}
        title={
          <Text tt="uppercase" size="xs" fw={700}>
            About Software
          </Text>
        }
      >
        <Stack gap="4" p="xl">
          <Text size="md" fw={600} ta="center">
            Unite SSW | Admin
          </Text>
          <Text size="xs" ta="center" c="gray.6" fw={700}>
            Latest Stable Release | v1.0.1
          </Text>

          <Button
            color="teal"
            my="md"
            variant="light"
            rightSection={<CheckIcon size={12} />}
          >
            Your software version is up-to-date
          </Button>

          <Group justify="center" mt="xl">
            <Text size="10px">vFramework</Text>
            <Text size="10px" opacity={0.6}>
              All data strictly monitored by SSW Unite.
            </Text>
          </Group>
        </Stack>
      </Modal>

      <Modal
        opened={openedPassword}
        onClose={() => handlePassword.close()}
        title={
          <Text tt="uppercase" size="xs" fw={700}>
            Update Account Password
          </Text>
        }
      >
        <FormHandler
          formType="new"
          initial={{}}
          apiSubmit={(body: any) => {}}
          validation={[]}
          onSubmitSuccess={(res: any) => {}}
        >
          <PasswordForm />
        </FormHandler>
      </Modal>

      <Drawer
        opened={openedDrawer}
        onClose={() => handleDrawer.close()}
        title={
          <Text tt="uppercase" size="xs" fw={700}>
            {" "}
            Admin Navigation
          </Text>
        }
      >
        {navItems.map((item, index) => {
          return (
            <NavLink key={index} href={item.value} label={item.label}>
              {item.children && (
                <>
                  {item.children.map((child, index) => {
                    return (
                      <NavLink
                        key={index}
                        href={child.value}
                        label={child.label}
                      />
                    );
                  })}
                </>
              )}
            </NavLink>
          );
        })}
      </Drawer>
    </>
  );
}
