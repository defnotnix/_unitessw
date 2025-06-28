"use client";

import { ListHandler } from "@vframework/core";
import { ModuleTableLayout } from "@vframework/ui";
import { useRouter } from "next/navigation";
import {
  createRecord,
  deleteRecord,
  getRecordApplicant,
  updateRecord,
} from "../../module.api";

import { columns } from "./list.columns";

import { moduleConfig } from "../../module.config";

import { _Form as Form } from "../../form/form";
import { formProps } from "../../form/form.config";

export function _List() {
  const router = useRouter();

  // * State

  return (
    <>
      <ListHandler
        endpoint={moduleConfig.endpoint}
        moduleKey={[...moduleConfig.moduleKey, "seeker"]}
        getRecords={getRecordApplicant}
        enableServerPagination
        enableServerSearch
      >
        <ModuleTableLayout
          {...moduleConfig}
          idAccessor="id"
          apiEdit={updateRecord}
          apiCreate={createRecord}
          apiDelete={deleteRecord}
          columns={columns}
          disableAdd
          disableDelete
          disableEdit
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
          disableActions
        />
      </ListHandler>
    </>
  );
}
