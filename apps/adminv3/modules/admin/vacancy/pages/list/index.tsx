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
  Container,
  Group,
  Image,
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
  PenIcon,
  Trash,
  TrashIcon,
  UserPlus,
  Users,
} from "@phosphor-icons/react";
import { moduleConfig } from "../../module.config";

import { _Form as Form } from "../../form/form";
import { formProps } from "../../form/form.config";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

import { RBACCheck } from "@/components/RBACCheck";
import { endpoint } from "@/layouts/app";

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
          customRender={({ data, handleDelete, renderEdit }: any) => {
            const RenderEdit = renderEdit;
            return (
              <Container py="md">
                <SimpleGrid spacing="xs" cols={{ base: 1, lg: 3 }}>
                  {data?.map((item: any, index: any) => {
                    return (
                      <Paper
                        key={index}
                        p="xs"
                        bg="brand.0"
                        radius="lg"
                        mb="md"
                        pos="relative"
                      >
                        <Image h={300} fit="contain" src={item.image} />

                        <Group
                          gap={0}
                          p="xs"
                          pos="absolute"
                          style={{
                            top: 0,
                            right: 0,
                          }}
                        >
                          <RenderEdit row={item}>
                            <ActionIcon variant="light">
                              <PenIcon />
                            </ActionIcon>
                          </RenderEdit>
                          <ActionIcon
                            color="red"
                            onClick={() => {
                              handleDelete(item.id);
                            }}
                          >
                            <TrashIcon />
                          </ActionIcon>
                        </Group>
                      </Paper>
                    );
                  })}
                </SimpleGrid>
              </Container>
            );
          }}
        />
      </ListHandler>
    </>
  );
}
