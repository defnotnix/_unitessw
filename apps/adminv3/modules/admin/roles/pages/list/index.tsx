"use client";

import { ModuleModalFormLayout, ModuleTableLayout } from "@vframework/ui";
import { useRouter } from "next/navigation";
import { FormHandler, ListHandler } from "@vframework/core";
import {
  createRecord,
  deleteRecord,
  updateRecord,
  getRecords,
} from "../../module.api";

import { columns } from "./list.columns";
import {
  ActionIcon,
  Badge,
  Box,
  Group,
  LoadingOverlay,
  Menu,
  Modal,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import {
  Calendar,
  Chair,
  Check,
  Cricket,
  DotsThree,
  Invoice,
  Pen,
  Trash,
  UserPlus,
  Users,
} from "@phosphor-icons/react";
import { moduleConfig } from "../../module.config";

import { _Form as Form } from "../../form/form";
import { formProps } from "../../form/form.config";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

import { RBACCheck } from "@/components/RBACCheck";

export function _List() {
  const router = useRouter();

  // * State

  const [openFormModalPlayer, handlersFormModalPlayer] = useDisclosure(false);
  const [openFormModalAttendance, handlersFormModalAttendance] =
    useDisclosure(false);
  const [openFormModalAttendanceNew, handlersFormModalAttendanceNew] =
    useDisclosure(false);
  const [active, setActive] = useState(null);

  return (
    <>
      <RBACCheck showStaff>
        <ListHandler
          endpoint={moduleConfig.endpoint}
          moduleKey={moduleConfig.moduleKey}
          getRecords={getRecords}
        >
          <ModuleTableLayout
            {...moduleConfig}
            idAccessor="id"
            apiEdit={updateRecord}
            apiCreate={createRecord}
            apiDelete={deleteRecord}
            columns={columns}
            // * TABS

            // * TABLE PROPS
            //tableprops={{ height: "calc(100vh - 200px)" }}
            // * ROW COLORS
            rowStyle={({ gender }: any) => ({
              background:
                gender === "male" ? "var(--mantine-color-indigo-0)" : "",
            })}
            // * EXTRA ACTIONS

            // * MODAL CONFIG
            hasModalForms
            modalFormProps={{ width: "xl", formProps }}
            modalForm={<Form />}
          />
        </ListHandler>
      </RBACCheck>
    </>
  );
}
