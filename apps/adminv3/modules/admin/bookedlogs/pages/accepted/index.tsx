"use client";

import {
  ModuleModalFormLayout,
  ModuleTableLayout,
  triggerNotification,
} from "@vframework/ui";
import { useRouter } from "next/navigation";
import { FormHandler, ListHandler } from "@vframework/core";
import {
  createRecord,
  deleteRecord,
  updateRecord,
  getRecords,
  toggleLogStatus,
  getRecordsResponded,
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
        getRecords={getRecordsResponded}
        enableServerPagination
        enableServerSearch
      >
        <ModuleTableLayout
          {...moduleConfig}
          idAccessor="id"
          disableAdd
          disableDelete
          disableEdit
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
          extraActions={({ row, refetch }) => (
            <>
              <Menu.Item
                leftSection={<Pen />}
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
                          Are you sure you want to accept this request?
                        </Text>
                      </Group>
                    ),
                    children: (
                      <>
                        <Text size="xs" my="md">
                          This will mark this request as accepted for both you
                          and the seeker account.
                        </Text>
                      </>
                    ),
                    labels: {
                      confirm: "Confirm",
                      cancel: "Cancel",
                    },
                    confirmProps: {
                      color: "brand",
                    },
                    onConfirm: () => {
                      triggerNotification.form.isLoading({});

                      toggleLogStatus(row.id)
                        .then((res) => {
                          if (!res.err) {
                            refetch();
                            triggerNotification.form.isSuccess({
                              message: "Request Rejected",
                            });
                          }
                        })
                        .catch((err) => {
                          
                          triggerNotification.form.isError({
                            message: "Request Rejected",
                          });
                        });
                    },
                    styles: {
                      header: {
                        background: "var(--mantine-color-brand-0)",
                      },
                    },
                    size: "sm",
                  });
                }}
              >
                Reject Request
              </Menu.Item>
            </>
          )}
          // * MODAL CONFIG
          hasModalForms
          modalFormProps={{ width: "lg", formProps }}
          modalForm={<Form />}
          hasServerSearch
          moduleName="Rejected Requests"
          moduleDescription="Requests already accepted by admin."
        />
      </ListHandler>
    </>
  );
}
