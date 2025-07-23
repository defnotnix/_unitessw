"use client";

import React, { useState } from "react";
//next

//mantine
import {
  ActionIcon,
  Anchor,
  Breadcrumbs,
  Button,
  Divider,
  Group,
  Menu,
  Paper,
  SimpleGrid,
  Space,
  Tabs,
  Text,
} from "@mantine/core";
import { ListHandler } from "@vframework/core";
import { ModuleTableLayout, triggerNotification } from "@vframework/ui";
import { columns } from "./list.columns";

//mantine

//icons

//styles

//components

//api
import {
  deleteRecord,
  getDeletedRecords,
  getRecords,
  restoreRecord,
} from "../../module.api";
import {
  ArrowLeft,
  Atom,
  CaretRight,
  DotsThreeVertical,
  House,
  IdentificationBadge,
  InfoIcon,
  PlugsConnected,
  Plus,
  Star,
} from "@phosphor-icons/react";
import { moduleConfig } from "../../module.config";
import { StatCard } from "@/components/StatCard";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { RBACCheck } from "@/components/RBACCheck";
import { Label } from "recharts";
import { modals } from "@mantine/modals";

export function _ListDeleted() {
  // * DEFINITIONS

  const Router = useRouter();

  // * CONTEXT

  // * STATE

  // const queryStats = useQuery({
  //   queryKey: ["dashboard", "stats"],
  //   queryFn: async () => {
  //     const res = [];
  //     
  //     return res;
  //   },
  // });

  // * FUNCTIONS

  // * COMPONENTS

  const RenderTable = () => {
    return (
      <ModuleTableLayout
        disableAdd
        disableDelete
        disableEdit
        {...moduleConfig}
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
        extraActions={({ row, refetch }: { row: any; refetch?: any }) => (
          <>
            <Menu.Item
              onClick={() => {
                modals.openConfirmModal({
                  title: (
                    <Group>
                      <ActionIcon size="sm" color="brand" variant="light">
                        <InfoIcon size={12} />
                      </ActionIcon>
                      <Text
                        size="sm"
                        style={{
                          fontWeight: 600,
                        }}
                      >
                        Are you sure you want to restore this CV?
                      </Text>
                    </Group>
                  ),
                  children: (
                    <>
                      <Text size="xs" my="md">
                        This CV will return to being an active CV. You can add
                        it back to the list of CVs.
                        <br />
                        <br />
                        <span
                          style={{
                            fontWeight: 600,
                          }}
                        >
                          Are you sure you want to proceed?
                        </span>
                      </Text>

                      <Space h="6px" />
                    </>
                  ),
                  labels: {
                    confirm: "Yes",
                    cancel: "No",
                  },
                  confirmProps: {
                    color: "brand",
                    size: "xs",
                  },
                  cancelProps: {
                    size: "xs",
                  },

                  onConfirm: async () => {
                    triggerNotification.form.isLoading({});
                    const res = await restoreRecord({}, row.id);
                    
                    triggerNotification.form.isSuccess({});
                    refetch();
                  },
                  styles: {
                    header: {
                      background: "var(--mantine-color-brand-0)",
                    },
                  },
                  size: "sm",
                });
              }}
              leftSection={<IdentificationBadge />}
            >
              Restore CV
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
        getRecords={getDeletedRecords}
      >
        <RenderTable />
      </ListHandler>
    </>
  );
}
