"use client";

import React, { useState } from "react";
//next

//mantine
import {
  ActionIcon,
  Anchor,
  Breadcrumbs,
  Button,
  Container,
  Divider,
  Group,
  Menu,
  NumberInput,
  Paper,
  Select,
  SimpleGrid,
  Space,
  Stack,
  Tabs,
  Text,
  TextInput,
} from "@mantine/core";
import { ListHandler, useListHandlerContext } from "@vframework/core";
import { ModuleTableLayout } from "@vframework/ui";
import { columns } from "./list.columns";

//mantine

//icons

//styles

//components

//api
import { deleteRecord, getDeletedRecords, getRecords } from "../../module.api";
import {
  ArrowLeft,
  Atom,
  CaretDownIcon,
  CaretRight,
  CaretUpIcon,
  DotsThreeVertical,
  House,
  IdentificationBadge,
  MagnifyingGlassIcon,
  PlugsConnected,
  Plus,
  ScrollIcon,
  Star,
  XIcon,
} from "@phosphor-icons/react";
import { moduleConfig } from "../../module.config";
import { StatCard } from "@/components/StatCard";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { RBACCheck } from "@/components/RBACCheck";
import { Label } from "recharts";
import { getJobCategory } from "@/modules/admin/applicants/module.api";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";

export function _List() {
  // * DEFINITIONS

  const Router = useRouter();

  // * CONTEXT

  // * STATE

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
            <Stack gap="xs" pb="md">
              <SimpleGrid cols={{ base: 1, lg: 2 }}>
                <TextInput
                  label={"Full Name"}
                  size="sm"
                  radius="md"
                  placeholder="e.g. Ramesh Shah"
                  {...form.getInputProps("name")}
                />
                <SimpleGrid cols={{ base: 1, lg: 2 }}>
                  <TextInput
                    label={"Email Address"}
                    size="sm"
                    radius="md"
                    placeholder="e.g. xyz@example.com"
                    {...form.getInputProps("email")}
                  />

                  <TextInput
                    label={"Contact Number"}
                    size="sm"
                    radius="md"
                    placeholder="e.g. 98135XXXXXX"
                    {...form.getInputProps("contact")}
                  />
                </SimpleGrid>
              </SimpleGrid>
            </Stack>

            <Group justify="space-between">
              <Button
                disabled
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
                    form.reset();
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
        contentPreTable={<RenderCustomSearch />}
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
        extraActions={({ row }: { row: any }) => (
          <>
            <Menu.Item
              onClick={() => {
                Router.push(`/admin/cv/active/${row.id}`);
              }}
              leftSection={<ScrollIcon />}
            >
              Generate CV
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
        <RenderTable />
      </ListHandler>
    </>
  );
}
