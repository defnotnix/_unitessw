"use client";

import { PropsWithChildren, useEffect, useState } from "react";
//next

//mantine
import { navItems } from "@/config/nav";
import {
  ActionIcon,
  Alert,
  Avatar,
  Burger,
  Button,
  Container,
  Divider,
  Drawer,
  Grid,
  Group,
  Image,
  Menu,
  Modal,
  NavLink,
  Paper,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import {
  CaretDownIcon,
  CheckIcon,
  InfoIcon,
  KeyIcon,
  LockIcon,
  PlusIcon,
  PowerIcon,
  UserIcon,
} from "@phosphor-icons/react";
import { FormHandler, moduleApiCall } from "@vframework/core";
import { usePathname, useRouter } from "next/navigation";
//mantine

//icons

//styles

import { images } from "@/assets/images";
import { RBACCheck } from "@/components/RBACCheck";
import { useDisclosure } from "@mantine/hooks";
import { jwtDecode } from "jwt-decode";
import classes from "./admin.module.css";

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
    const token = sessionStorage.getItem("sswtoken");
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
                    <b> Manabiya HR Unity</b>{" "}
                    <span
                      style={{
                        color: "var(--mantine-color-brand-3)",
                      }}
                    >
                      | Admin
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
                <Divider orientation="vertical" opacity={0.1} />

                <Text size="xs" c="gray.0" ta="right" opacity={0.5}>
                  You are logged in as
                </Text>

                <Menu>
                  <Menu.Target>
                    <Button
                      size="xs"
                      variant="fill"
                      bg="dark.6"
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
                              sessionStorage.removeItem("sswtoken");
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
            Manabiya HR Unity | Admin
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
