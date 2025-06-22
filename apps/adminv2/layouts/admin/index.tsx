"use client";

import React, { PropsWithChildren } from "react";
//next

//mantine
import {
  ActionIcon,
  Button,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import { AdminNavLayout, triggerNotification } from "@vframework/ui";
import { navItems, navModules } from "@/config/nav";
import {
  Calendar,
  CaretRight,
  CaretRightIcon,
  Check,
  Cricket,
  Note,
  UserCheck,
  UserPlus,
  UserPlusIcon,
} from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { moduleApiCall } from "@vframework/core";
//mantine

//icons

//styles

//components

export function LayoutAdmin({ children }: PropsWithChildren) {
  // * DEFINITIONS

  const Router = useRouter();

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
      <AdminNavLayout
        onLogout={() => {
          triggerNotification.form.isLoading({
            message: "Signin Out",
          });
          moduleApiCall
            .createRecord("/authenticate/logout/", {})
            .then((res) => {
              triggerNotification.form.isSuccess({
                message: "You have signed out successfully!",
              });
              if (!res.err) {
                sessionStorage.clear();
                Router.push("/");
              }
            });
        }}
        softwareInfo={{
          org: "Unite SSW Admin",
          module: "Unite SSW Management",
          moduleDescription: "Unified SSW Platform",
        }}
        //navitems
        navItems={navItems}
        //essentials
        essentials={
          <>
            <Stack gap={2} p="md">
              <Button
                px="xs"
                justify="space-between"
                bg="indigo.9"
                rightSection={<CaretRightIcon />}
                onClick={() => Router.push("/takeAttendance")}
              >
                <UserPlusIcon />{" "}
                <span
                  style={{
                    marginLeft: 8,
                  }}
                >
                  New Seeker
                </span>
              </Button>
              <Button
                px="xs"
                justify="space-between"
                bg="teal.9"
                rightSection={<CaretRightIcon />}
                onClick={() => Router.push("/takePerformance")}
              >
                <Note />{" "}
                <span
                  style={{
                    marginLeft: 8,
                  }}
                >
                  Pending Applications
                </span>
              </Button>
              <Button
                px="xs"
                justify="space-between"
                bg="teal.9"
                rightSection={<CaretRightIcon />}
                onClick={() => Router.push("/takePerformance")}
              >
                <Check />{" "}
                <span
                  style={{
                    marginLeft: 8,
                  }}
                >
                  Seeker Select Requests
                </span>
              </Button>
            </Stack>
          </>
        }
      >
        {children}
      </AdminNavLayout>
    </>
  );
}
