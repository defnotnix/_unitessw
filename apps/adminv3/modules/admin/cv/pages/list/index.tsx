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
  CaretRight,
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
import { Label } from "recharts";

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

  const RenderTable = () => {
    return (
      <ModuleTableLayout
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
