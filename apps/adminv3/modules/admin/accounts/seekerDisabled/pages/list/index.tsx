"use client";

import { ListHandler } from "@vframework/core";
import { ModuleTableLayout, triggerNotification } from "@vframework/ui";
import { useRouter } from "next/navigation";
import {
  createRecord,
  deleteRecord,
  enableRecord,
  getRecords,
  updateRecord,
} from "../../module.api";

import { ActionIcon, Group, Menu, Space, Text } from "@mantine/core";
import { CheckIcon, WarningIcon, XIcon } from "@phosphor-icons/react";
import { moduleConfig } from "../../module.config";
import { columns } from "./list.columns";

import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { _Form as Form } from "../../form/form";
import { formProps } from "../../form/form.config";

import { endpoint } from "@/layouts/app";
import { modals } from "@mantine/modals";

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
        transformOnGet={(data) => {
          // console.log(data);
          return data.map((item: any) => {
            return {
              ...item,
              image: item?.image ? endpoint + item.image : null,
            };
          });
        }}
      >
        <ModuleTableLayout
          disableEdit
          disableAdd
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
          disableDelete
          // * EXTRA ACTIONS
          extraActions={({ row, refetch }: any) => (
            <>
              <Menu.Item
                leftSection={<CheckIcon />}
                onClick={() => {
                  modals.openConfirmModal({
                    title: (
                      <Group>
                        <ActionIcon size="sm" color="red" variant="light">
                          <WarningIcon size={12} />
                        </ActionIcon>
                        <Text
                          size="sm"
                          style={{
                            fontWeight: 600,
                          }}
                        >
                          Please confirm your action
                        </Text>
                      </Group>
                    ),
                    children: (
                      <>
                        <Text size="xs" my="md">
                          This account will be enabled and can be used by the
                          respective seeker.
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
                    labels: { confirm: "Confirm", cancel: "Cancel" },
                    confirmProps: {
                      color: "red",
                      size: "xs",
                    },
                    cancelProps: {
                      size: "xs",
                    },
                    onCancel: () => {},
                    onConfirm: async () => {
                      triggerNotification.form.isLoading({});

                      enableRecord(row.id)
                        .then((res: any) => {
                          if (!res.error) {
                            triggerNotification.form.isSuccess({});
                            refetch();
                          } else {
                            triggerNotification.form.isError({});
                          }
                        })
                        .catch((err) => {
                          triggerNotification.form.isError({});
                        });
                    },
                    styles: {
                      header: {
                        background: "var(--mantine-color-red-1)",
                      },
                    },
                    size: "sm",
                  });
                }}
              >
                Enable Account
              </Menu.Item>
            </>
          )}
          // * MODAL CONFIG
          hasModalForms
          modalFormProps={{ width: "lg", formProps }}
          modalForm={<Form />}
        />
      </ListHandler>
    </>
  );
}
