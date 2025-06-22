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
  disableRecord,
  getSingleRecord,
} from "../../module.api";

import { columns } from "./list.columns";
import {
  ActionIcon,
  Avatar,
  Badge,
  Divider,
  Group,
  Modal,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Menu,
} from "@mantine/core";

import { EyeIcon, WarningIcon, XIcon } from "@phosphor-icons/react";

import { moduleConfig } from "../../module.config";
import { _Form as Form } from "../../form/form";
import { formProps } from "../../form/form.config";

import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

import { RBACCheck } from "@/components/RBACCheck";
import { endpoint } from "@/layouts/app";
import { modals } from "@mantine/modals";

export function _List() {
  const router = useRouter();
  const [active, setActive] = useState<any>(null);
  const [openFormModalPlayer, handlersFormModalPlayer] = useDisclosure(false);

  const openDisableConfirm = (row: any, refetch: () => void) =>
    modals.openConfirmModal({
      title: (
        <Group>
          <ActionIcon size="sm" color="red" variant="light">
            <WarningIcon size={12} />
          </ActionIcon>
          <Text size="sm" fw={600}>
            Please confirm your action
          </Text>
        </Group>
      ),
      children: (
        <Text size="xs" my="md">
          This account will be disabled and cannot be used until re-activated
          again.
          <br />
          <br />
          <strong>Are you sure you want to proceed?</strong>
        </Text>
      ),
      labels: { confirm: "Confirm", cancel: "Cancel" },
      confirmProps: { color: "red", size: "xs" },
      cancelProps: { size: "xs" },
      onConfirm: async () => {
        triggerNotification.form.isLoading({});
        try {
          const res = await disableRecord(row.id);
          if (!res.error) {
            triggerNotification.form.isSuccess({});
            refetch();
          } else {
            triggerNotification.form.isError({});
          }
        } catch (err) {
          triggerNotification.form.isError({});
        }
      },
      styles: {
        header: { background: "var(--mantine-color-red-1)" },
      },
      size: "sm",
    });

  return (
    <>
    
        <ListHandler
          endpoint={moduleConfig.endpoint}
          moduleKey={moduleConfig.moduleKey}
          getRecords={getRecords}
          transformOnGet={(data) =>
            data.map((item: any) => ({
              ...item,
              image: item?.image ? endpoint + item.image : null,
            }))
          }
        >
          <ModuleTableLayout
            {...moduleConfig}
            idAccessor="id"
            apiEdit={updateRecord}
            apiCreate={createRecord}
            apiDelete={deleteRecord}
            disableDelete
            columns={columns}
            rowStyle={({ gender }: any) => ({
              background:
                gender === "male" ? "var(--mantine-color-indigo-0)" : "",
            })}
            extraActions={({ row, refetch }: any) => (
              <>
                <Menu.Item
                  leftSection={<EyeIcon />}
                  onClick={async () => {
                    triggerNotification.list.isLoading({});
                    try {
                      const res = await getSingleRecord(row.id);
                      triggerNotification.list.isSuccess({});
                      setActive(res);
                      handlersFormModalPlayer.open();
                    } catch {
                      triggerNotification.list.isError({});
                    }
                  }}
                >
                  View Profile
                </Menu.Item>

                <Menu.Item
                  leftSection={<XIcon />}
                  onClick={() => openDisableConfirm(row, refetch)}
                >
                  Disable Account
                </Menu.Item>
              </>
            )}
            hasModalForms
            modalFormProps={{ width: "lg", formProps }}
            modalForm={<Form />}
          />
        </ListHandler>
     

      {/* Modal: View Profile */}
      <Modal
        title={
          <Text tt="uppercase" size="xs" fw={700}>
            Staff Profile
          </Text>
        }
        opened={openFormModalPlayer}
        onClose={handlersFormModalPlayer.close}
      >
        <Paper
          radius={0}
          bg="linear-gradient(to bottom, var(--mantine-color-indigo-6), var(--mantine-color-indigo-9))"
        >
          <Stack py={32} gap={0}>
            <Group justify="center">
              <Avatar
                variant="filled"
                src={endpoint + active?.image}
                name={active?.name}
                color={!active?.image ? "indigo.5" : ""}
                size={100}
              />
            </Group>

            <Text ta="center" c="gray.0" size="2rem" fw={700} mt="md">
              {active?.name}
            </Text>

            <Group justify="center" mt="4px" gap="xs">
              <Text ta="center" c="gray.0" size="sm" opacity={0.5}>
                {active?.email}
              </Text>
              <Badge size="xs" variant="dot" color="teal">
                Active
              </Badge>
            </Group>
          </Stack>
        </Paper>

        {/* Profile Details */}
        {[
          ["Name", active?.name],
          ["Gender", active?.gender],
          ["Date of Birth", active?.date_of_birth],
        ]
          .concat([
            ["Address", active?.address],
            ["Email Address", active?.email],
            ["Recovery Email", active?.recover_email],
            ["Primary Contact", active?.contact1],
            ["Secondary Contact", active?.contact2],
            ["Account Creation", new Date(active?.created_at).toLocaleString()],
            ["Last Updated", new Date(active?.updated_at).toLocaleString()],
            [
              "Last Login",
              active?.last_login
                ? new Date(active?.last_login).toLocaleString()
                : "Never",
            ],
          ])
          .map(([label, value], index) => (
            <SimpleGrid
              cols={2}
              p="xs"
              key={label}
              bg={index % 2 ? "var(--mantine-color-gray-1)" : ""}
            >
              <Group justify="space-between" mr="xl">
                <Text size="xs" opacity={0.6}>
                  {label}
                </Text>
                <Text size="xs" opacity={0.6}>
                  :
                </Text>
              </Group>
              <Text size="xs" fw={700}>
                {value}
              </Text>
            </SimpleGrid>
          ))}
      </Modal>
    </>
  );
}
