"use client";

import { useState } from "react";
//next

//mantine
import {
  AspectRatio,
  Avatar,
  Box,
  Button,
  Container,
  Drawer,
  Group,
  Menu,
  NumberInput,
  Paper,
  Select,
  SimpleGrid,
  Space,
  Stack,
  Table,
  Tabs,
  Text,
  TextInput,
} from "@mantine/core";
import { ListHandler, useListHandlerContext } from "@vframework/core";
import {
  ApplicantProfile,
  ModuleTableLayout,
  triggerNotification,
} from "@vframework/ui";
import { columns } from "./list.columns";

//mantine

//icons

//styles

//components

//api
import { modals } from "@mantine/modals";
import {
  CaretDownIcon,
  CaretUpIcon,
  CheckIcon,
  MagnifyingGlassIcon,
  ScrollIcon,
  XIcon,
} from "@phosphor-icons/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import {
  deleteRecord,
  getJobCategory,
  getRecords,
  publishRecord,
} from "../../module.api";

import { useDisclosure } from "@mantine/hooks";
import { apiPersonalInformation } from "../../form/module.api";

import { useForm } from "@mantine/form";
import React from "react";
import { moduleConfig } from "../../module.config";

export function _List() {
  // * DEFINITIONS

  const Router = useRouter();

  const language: any = "en";
  const lang: any = "en";

  // * CONTEXT

  // * STATE

  const [tab, setTab] = useState("all");

  const queryPlayerData = useQuery({
    queryKey: ["player", "playerData"],
    queryFn: async () => {
      return {};
    },
    initialData: {},
  });

  // const queryStats = useQuery({
  //   queryKey: ["dashboard", "stats"],
  //   queryFn: async () => {
  //     const res = [];
  //     console.log(res);
  //     return res;
  //   },
  // });

  // * FUNCTIONS

  const [info, setInfo] = useState<any>({});

  const [opened, { open, close }] = useDisclosure();

  const { data, isPending, mutate } = useMutation({
    mutationKey: ["admin", "cv"],
    mutationFn: async (id) => {
      const res: any = await apiPersonalInformation.get(id);

      console.log(res);

      if (!res.err) {
        setInfo({
          ...res?.data,
          ...res?.data?.a_background,

          ...res?.data?.a_physical,
          ...res?.data?.a_story,
          ...res?.data?.a_identification,
          category: String(res?.data?.category),
          education: res?.data?.a_education,
          work_experience: res?.data?.a_work_experience,
          licenses: res?.data?.a_license_qualification,
          mainId: res?.data?.id,
          pastvisits: res?.data?.a_japan_visit,
        });
        return {};
      } else {
        return {};
      }
    },
  });

  // * COMPONENTS

  const RenderCustomSearch = () => {
    const { setSearchVal } = useListHandlerContext();

    const form = useForm({
      mode: "uncontrolled",
    });
    const [openedAdvanced, handlersAdvance] = useDisclosure();

    const queryJobCategory = useQuery({
      queryKey: ["seeker", "category"],
      queryFn: async () => {
        const res = await getJobCategory();
        console.log(res);
        return res;
      },
      initialData: [],
    });

    return (
      <>
        <Container pt="md">
          <Paper p="md">
            <Stack gap="xs">
              <SimpleGrid cols={{ base: 1, lg: 2 }}>
                <SimpleGrid cols={{ base: 1, lg: 2 }}>
                  <TextInput
                    label={"Applicant Code"}
                    size="sm"
                    radius="md"
                    placeholder="e.g. USW12345"
                    {...form.getInputProps("code")}
                  />
                  <Select
                    data={queryJobCategory.data.map((item: any) => {
                      return {
                        label: `${item.name} (${item.jp_name})`,
                        value: String(item.id),
                      };
                    })}
                    label="Job Category"
                    placeholder="Select Job Category"
                    radius="md"
                    {...form.getInputProps("category")}
                  />
                </SimpleGrid>
                <SimpleGrid cols={{ base: 1, lg: 2 }}>
                  <Select
                    data={[
                      { value: "Male", label: "Male" },
                      { value: "Female", label: "Female" },
                      { value: "Other", label: "Other" },
                    ]}
                    label="Gender"
                    placeholder="Gender"
                    radius="md"
                    {...form.getInputProps("gender")}
                  />
                  <div>
                    <Text size="xs" my={4}>
                      Age Range (Min - Max)
                    </Text>
                    <SimpleGrid cols={2} spacing={2}>
                      <NumberInput
                        hideControls
                        placeholder="Min"
                        radius="md"
                        {...form.getInputProps("min_age")}
                      />
                      <NumberInput
                        min={
                          form.getValues()?.min_age
                            ? form.getValues()?.min_age + 1
                            : null
                        }
                        hideControls
                        placeholder="Max"
                        radius="md"
                        {...form.getInputProps("max_age")}
                      />
                    </SimpleGrid>
                  </div>
                </SimpleGrid>
              </SimpleGrid>

              <div
                style={{
                  transition: ".3s ease-in-out",
                  maxHeight: openedAdvanced ? 500 : 0,
                  overflow: "hidden",
                }}
              >
                <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="xs">
                  <TextInput
                    label="Full Name (English)"
                    placeholder="Name of the Applicant"
                    radius="md"
                    {...form.getInputProps("name")}
                  />

                  <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }}>
                    <div>
                      <Text size="xs" my={4}>
                        Weight (Min - Max)
                      </Text>
                      <SimpleGrid cols={2} spacing={2}>
                        <NumberInput
                          hideControls
                          placeholder="Min"
                          radius="md"
                          {...form.getInputProps("min_weight")}
                          rightSectionWidth={50}
                          rightSection={<Text size="xs">kg</Text>}
                        />
                        <NumberInput
                          min={
                            form.getValues()?.min_weight
                              ? form.getValues()?.min_weight + 1
                              : null
                          }
                          hideControls
                          placeholder="Max"
                          radius="md"
                          {...form.getInputProps("max_weight")}
                          rightSectionWidth={50}
                          rightSection={<Text size="xs">kg</Text>}
                        />
                      </SimpleGrid>
                    </div>
                    <div>
                      <Text size="xs" my={4}>
                        Height (Min - Max)
                      </Text>
                      <SimpleGrid cols={2} spacing={2}>
                        <NumberInput
                          hideControls
                          placeholder="Min"
                          radius="md"
                          {...form.getInputProps("min_height")}
                          rightSectionWidth={50}
                          rightSection={<Text size="xs">cm</Text>}
                        />
                        <NumberInput
                          min={
                            form.getValues()?.min_height
                              ? form.getValues()?.min_height + 1
                              : null
                          }
                          hideControls
                          placeholder="Max"
                          radius="md"
                          {...form.getInputProps("max_height")}
                          rightSectionWidth={50}
                          rightSection={<Text size="xs">cm</Text>}
                        />
                      </SimpleGrid>
                    </div>
                    <Select
                      data={[
                        { label: "A+", value: "A+" },
                        { label: "A-", value: "A-" },
                        { label: "B+", value: "B+" },
                        { label: "B-", value: "B-" },
                        { label: "AB+", value: "AB+" },
                        { label: "AB-", value: "AB-" },
                        { label: "O+", value: "O+" },
                        { label: "O-", value: "O-" },
                      ]}
                      label="Blood Group"
                      placeholder="Select"
                      radius="md"
                      {...form.getInputProps("blood_group")}
                    />
                    <Select
                      data={[
                        { value: "Single", label: "Single" },
                        { value: "Married", label: "Married" },
                        { value: "Divorced", label: "Divorced" },
                        { value: "Widowed", label: "Widowed" },
                        { value: "Separated", label: "Separated" },
                        { value: "Partnered", label: "Partnered" },
                      ]}
                      label="Martial Status"
                      placeholder="Select"
                      radius="md"
                      {...form.getInputProps("martial_status")}
                    />
                  </SimpleGrid>
                </SimpleGrid>

                <Space h="md" />
              </div>
            </Stack>

            <Group justify="space-between">
              <Button
                size="xs"
                radius="xl"
                leftSection={
                  openedAdvanced ? (
                    <CaretUpIcon size={12} />
                  ) : (
                    <CaretDownIcon size={12} />
                  )
                }
                variant="light"
                onClick={() => {
                  handlersAdvance.toggle();
                }}
              >
                EnableAdvanced Search Options
              </Button>

              <Group gap="xs">
                <Button
                  onClick={() => {
                    form.initialize({});
                    setSearchVal({});
                  }}
                  leftSection={<XIcon />}
                  size="xs"
                  variant="light"
                >
                  Clear Search
                </Button>
                <Button
                  onClick={() => {
                    setSearchVal(form.getValues());
                  }}
                  leftSection={<MagnifyingGlassIcon />}
                  size="xs"
                >
                  Apply Search
                </Button>
              </Group>
            </Group>
          </Paper>
        </Container>
      </>
    );
  };

  const RenderTable = () => {
    return (
      <ModuleTableLayout
        {...moduleConfig}
        disableSearch
        forceFilter={(records: any) => {
          if (tab === "all") {
            return records;
          } else if (tab === "active") {
            return records.filter((item: any) => {
              return (
                new Date(item.expiry_date) >
                new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)
              );
            });
          } else if (tab === "expiring") {
            return records.filter((item: any) => {
              const expiryDate = new Date(item.expiry_date);
              const now = new Date();
              return (
                expiryDate > now &&
                expiryDate <= new Date(now.getTime() + 10 * 24 * 60 * 60 * 1000)
              );
            });
          } else if (tab === "expired") {
            return records.filter((item: any) => {
              return new Date(item.expiry_date) <= new Date();
            });
          }
        }}
        apiDelete={deleteRecord}
        //Data
        columns={columns}
        //styles
        rowStyle={({ gender }: any) => {
          switch (gender) {
            case "male":
              return {
                background: "var(--mantine-color-indigo-0)",
              };

            default:
              return {};
          }
        }}
        contentPreTable={<RenderCustomSearch />}
        // * EXTRA ACTIONS
        extraActions={({ row, refetch }) => (
          <>
            <Menu.Item
              leftSection={<ScrollIcon />}
              onClick={async () => {
                await mutate(row.id);
                open();
              }}
            >
              View Profile
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                Router.push(`/admin/applicants/all/${row.id}`);
              }}
              leftSection={<ScrollIcon />}
            >
              Generate CV
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                modals.openConfirmModal({
                  title: (
                    <Group>
                      <Text
                        size="sm"
                        style={{
                          fontWeight: 600,
                        }}
                      >
                        Are you sure you want to publish this applicant?
                      </Text>
                    </Group>
                  ),
                  children: (
                    <>
                      <Text size="xs" my="md">
                        This will make this profile visible to all registered
                        seekers.
                      </Text>
                    </>
                  ),
                  styles: {
                    header: {
                      background: "var(--mantine-color-brand-0)",
                    },
                  },
                  labels: {
                    confirm: "Publish",
                    cancel: "Cancel",
                  },
                  confirmProps: {
                    color: "brand",
                  },
                  onConfirm: async () => {
                    triggerNotification.form.isLoading({
                      title: "Removing application from publish list.",
                      message: "Removal in progress...",
                    });

                    publishRecord({}, row.id)
                      .then((res) => {
                        if (!res.err) {
                          triggerNotification.form.isSuccess({
                            title: "Account Unpublished!",
                            message: "Applicant has been un-published.",
                          });
                          refetch();
                        }
                      })
                      .catch((err) => {
                        triggerNotification.form.isError({
                          title: "Error",
                          message: err.message,
                        });
                      });
                  },
                });
              }}
              leftSection={<CheckIcon />}
            >
              Unpublish Applicant
            </Menu.Item>
          </>
        )}
      />
    );
  };

  // * ANIMATIONS

  return (
    <>
      <ListHandler
        endpoint={moduleConfig.endpoint}
        moduleKey={moduleConfig.moduleKey}
        enableServerPagination
        enableServerSearch
        getRecords={getRecords}
      >
        <Tabs value={tab} onChange={(e: any) => setTab(e)}>
          <RenderTable />
        </Tabs>
      </ListHandler>

      <Drawer
        size="xl"
        opened={opened}
        onClose={close}
        position="right"
        title={
          <Text size="xs" tt="uppercase">
            Applicant Profile
          </Text>
        }
        styles={{
          body: {
            padding: 0,
            background: "var(--mantine-color-gray-2)",
          },
        }}
      >
        <ApplicantProfile info={info} lang="en" />
      </Drawer>
    </>
  );
}
