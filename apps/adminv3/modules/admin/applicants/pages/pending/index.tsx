"use client";

import React, { useState } from "react";
//next

//mantine
import {
  AspectRatio,
  Avatar,
  Box,
  Drawer,
  Group,
  Menu,
  Paper,
  SimpleGrid,
  Stack,
  Table,
  Tabs,
  Text,
} from "@mantine/core";
import { ListHandler } from "@vframework/core";
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
import { CheckIcon, ScrollIcon } from "@phosphor-icons/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { deleteRecord, getUnpublished, publishRecord } from "../../module.api";
import { moduleConfig } from "../../module.config";

import { useDisclosure } from "@mantine/hooks";
import { apiPersonalInformation } from "../../form/module.api";

export function _ListPending() {
  // * DEFINITIONS

  const Router = useRouter();

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

  const language: any = "en";
  const lang: any = "en";

  // * COMPONENTS
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

  const RenderTable = () => {
    return (
      <ModuleTableLayout
        {...moduleConfig}
        moduleName="Pending Applicants"
        moduleDescription="Applicants not approved yet."
        moduleKey={[...moduleConfig.moduleKey, "pending"]}
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
        // * EXTRA ACTIONS
        extraActions={({ row, refetch }) => (
          <>
            {" "}
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
                      title: "Publishing",
                      message: "Publishing in progress...",
                    });

                    publishRecord({}, row.id)
                      .then((res) => {
                        if (!res.err) {
                          triggerNotification.form.isSuccess({
                            title: "Published",
                            message: "Applicant has been published.",
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
              Publish Applicant
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
        getRecords={getUnpublished}
      >
        <Tabs value={tab} onChange={(e: any) => setTab(e)}>
          <RenderTable />
        </Tabs>
      </ListHandler>

      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        size="xl"
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
