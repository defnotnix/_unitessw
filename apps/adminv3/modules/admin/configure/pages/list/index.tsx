"use client";

import { ListHandler } from "@vframework/core";
import { ModuleTableLayout } from "@vframework/ui";
import { useRouter } from "next/navigation";
import {
  createRecord,
  deleteRecord,
  getRecords,
  updateRecord,
} from "../../module.api";

import { moduleConfig } from "../../module.config";
import { columns } from "./list.columns";

import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { _Form as Form } from "../../form/form";
import { formProps } from "../../form/form.config";

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
          modalFormProps={{ width: "lg", formProps }}
          modalForm={<Form />}
        />
      </ListHandler>
    </>
  );
}
