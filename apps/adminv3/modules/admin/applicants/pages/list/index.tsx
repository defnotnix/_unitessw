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
import { deleteRecord, getRecords, publishRecord } from "../../module.api";
import {
  ArrowLeft,
  Atom,
  CaretRight,
  CheckIcon,
  DotsThreeVertical,
  House,
  IdentificationBadge,
  PlugsConnected,
  Plus,
  ScrollIcon,
  Star,
} from "@phosphor-icons/react";
import { moduleConfig } from "../../module.config";
import { StatCard } from "@/components/StatCard";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { RBACCheck } from "@/components/RBACCheck";
import { modals } from "@mantine/modals";

export function _List() {
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

  // * COMPONENTS

  const RenderTable = () => {
    return (
      <ModuleTableLayout
        {...moduleConfig}
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
        contentPreTable={
          <SimpleGrid cols={{ base: 2, lg: 4 }} px="md" mb="md" spacing="xs">
            {/* <StatCard
              key={1}
              title="Total Players"
              icon={Star}
              value={queryStats?.data?.total_players}
              description="Total number of players"
              onClick={() => {
                setTab("all");
              }}
            />
            <StatCard
              key={2}
              title="Active Players"
              icon={Star}
              value={queryStats?.data?.active_players_count}
              shortValue="23% of Total"
              description="Active Players"
              onClick={() => {
                setTab("active");
              }}
            />
            <StatCard
              key={3}
              title="Expiring Soon"
              icon={Star}
              value={queryStats?.data?.soon_expiring_players}
              description="Players Expiring Soon "
              onClick={() => {
                setTab("expiring");
              }}
            />
            <StatCard
              key={4}
              title="Expired Players"
              icon={Star}
              value={queryStats?.data?.expired_players_count}
              description="Pending Invoices"
              onClick={() => {
                setTab("expired");
              }}
            /> */}
          </SimpleGrid>
        }
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
    </>
  );
}
