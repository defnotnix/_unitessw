"use client";

import React from "react";
//next

//mantine
import {
  ActionIcon,
  Button,
  Center,
  Divider,
  Group,
  Paper,
  Select,
  SimpleGrid,
  Stack,
  Switch,
  Text,
  Textarea,
  TextInput,
  ThemeIcon,
} from "@mantine/core";
import { FormHandler } from "@vframework/core";
import { FormElement, ImageUpload } from "@vframework/ui";
import {
  ExclamationMark,
  Plus,
  PlusIcon,
  TrashIcon,
} from "@phosphor-icons/react";
import { DateInput, DatePickerInput } from "@mantine/dates";
import { modals } from "@mantine/modals";
import { apiLicense } from "../../module.api";
//mantine

//icons

//styles

//components

const styles = {
  top: {
    input: {
      borderBottom: "none",
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      fontSize: "var(--mantine-font-size-xs)",
    },
    label: {
      fontSize: "var(--mantine-font-size-xs)",
    },
  },
  bot: {
    input: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      fontSize: "var(--mantine-font-size-xs)",
    },
    label: {
      fontSize: "var(--mantine-font-size-xs)",
    },
  },
};

export function StepCertificates() {
  // * DEFINITIONS

  const form = FormHandler.useForm();

  // * CONTEXT

  // * STATE

  // * FUNCTIONS

  // * COMPONENTS

  // * ANIMATIONS

  return (
    <>
      <Stack gap="md">
        <Text size="2rem" lh="2.3rem">
          <b
            style={{
              opacity: 0.5,
            }}
          >
            Step 8 : Licenses
          </b>
          <br />
          <b>Next, All registered licenses. 📚</b>
        </Text>

        <FormElement.SectionTitle
          title="Certificates History"
          description="Add your academic background"
          actionButton={
            <Button
              size="xs"
              variant="light"
              leftSection={<PlusIcon />}
              onClick={() => form.insertListItem("licenses", {})}
            >
              Add License
            </Button>
          }
        />

        <div>
          <Divider />
          <SimpleGrid cols={2} spacing="xs" my="sm">
            <Text size="sm" fw={600}>
              License
            </Text>
            <SimpleGrid cols={2} spacing="xs">
              <Text size="sm" fw={600}>
                Date Recieved
              </Text>
              <Text size="sm" fw={600}>
                Status
              </Text>
            </SimpleGrid>
          </SimpleGrid>
          <Divider />
        </div>

        {form.values.licenses.length == 0 && (
          <Center p="xl">
            <Text size="xs">No record added yet</Text>
          </Center>
        )}

        {form.values.licenses?.map((_: any, index: any) => (
          <div key={index} style={{ position: "relative" }}>
            <ActionIcon
              onClick={() => {
                if (_.id) {
                  modals.openConfirmModal({
                    title: "Are you sure?",
                    children: (
                      <Text size="sm">
                        Are you sure you want to delete this record?
                      </Text>
                    ),
                    labels: {
                      confirm: "Delete",
                      cancel: "Cancel",
                    },
                    confirmProps: {
                      color: "red",
                    },
                    onConfirm: () => {
                      apiLicense.delete(_.id);
                      form.removeListItem("licenses", index);
                    },
                  });
                } else {
                  form.removeListItem("licenses", index);
                }
              }}
              size="md"
              variant="light"
              color="red"
              style={{
                position: "absolute",
                zIndex: 1,
                right: -30,
                top: 4,
              }}
            >
              <TrashIcon />
            </ActionIcon>
            <SimpleGrid cols={2} spacing="xs">
              <Stack gap={0}>
                <TextInput
                  placeholder="e.g. Driving License"
                  {...form.getInputProps(`licenses.${index}.name`)}
                  styles={styles.top}
                  leftSection={
                    <Text size="xs" fw={800}>
                      EN
                    </Text>
                  }
                />
                <TextInput
                  placeholder="例：コンピューターサイエンス学科"
                  {...form.getInputProps(`licenses.${index}.jp_name`)}
                  styles={styles.bot}
                  leftSection={
                    <Text size="xs" fw={800}>
                      JP
                    </Text>
                  }
                />
              </Stack>

              <SimpleGrid cols={2} spacing="xs">
                <DateInput
                  placeholder="Select Date"
                  {...form.getInputProps(`licenses.${index}.date_received`)}
                />

                <Group pr="xl" justify="flex-end" align="flex-start">
                  <Switch
                    {...form.getInputProps(`licenses.${index}.status`, {
                      type: "checkbox",
                    })}
                  />
                </Group>
              </SimpleGrid>
            </SimpleGrid>
            <Divider my="sm" />
          </div>
        ))}
      </Stack>
    </>
  );
}
