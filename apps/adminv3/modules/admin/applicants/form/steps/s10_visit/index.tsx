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
  NumberInput,
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
import { apiJapanVisit, apiLicense } from "../../module.api";
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

export function StepVisit() {
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
        <div>
          <Text size="2rem" lh="2.3rem">
            <b>Japan Visit History</b>
            <br />
          </Text>
          <Text size="xs">Youre previous Japan visit history.</Text>
        </div>

        <FormElement.SectionTitle
          title="Visit History"
          description="Your japan visit history"
          actionButton={
            <Button
              size="xs"
              variant="light"
              leftSection={<PlusIcon />}
              onClick={() => form.insertListItem("visithistory", {})}
            >
              Add Visit Log
            </Button>
          }
        />

        <div>
          <Divider />
          <SimpleGrid cols={2} spacing="xs" my="sm">
            <Text size="sm" fw={600}>
              Date
            </Text>
            <Text size="sm" fw={600}>
              Purpose
            </Text>
          </SimpleGrid>
          <Divider />
        </div>

        {form.values.visithistory.length == 0 && (
          <Center p="xl">
            <Text size="xs">No record added yet</Text>
          </Center>
        )}

        {form.values.visithistory?.map((_: any, index: any) => (
          <div key={index} style={{ position: "relative" }}>
            <ActionIcon
              onClick={() => {
                if (_.id) {
                  modals.openConfirmModal({
                    title: (
                      <Group>
                        <Text
                          size="sm"
                          style={{
                            fontWeight: 600,
                          }}
                        >
                          Are you sure you want to delete this record?
                        </Text>
                      </Group>
                    ),
                    children: (
                      <>
                        <Text size="xs" my="md">
                          This will completely remove this record from this
                          section.{" "}
                        </Text>
                      </>
                    ),
                    styles: {
                      header: {
                        background: "var(--mantine-color-brand-0)",
                      },
                    },
                    labels: {
                      confirm: "Delete",
                      cancel: "Cancel",
                    },
                    confirmProps: {
                      color: "red",
                    },
                    onConfirm: () => {
                      apiJapanVisit.delete(_.id);
                      form.removeListItem("visithistory", index);
                    },
                  });
                } else {
                  form.removeListItem("visithistory", index);
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
              <div>
                <SimpleGrid cols={2} spacing={0}>
                  <NumberInput
                    hideControls
                    placeholder="Enter Start Year"
                    {...form.getInputProps(`visithistory.${index}.start_year`)}
                  />
                  <Select
                    disabled={!form.getValues().visithistory[index].start_year}
                    data={[
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December",
                    ]}
                    placeholder="Select Month"
                    {...form.getInputProps(`visithistory.${index}.from_month`)}
                  />
                </SimpleGrid>

                <SimpleGrid cols={2} spacing={0}>
                  <NumberInput
                    min={form.getValues()?.visithistory[index]?.start_year}
                    disabled={
                      !form.getValues().visithistory[index].start_year ||
                      !form.getValues().visithistory[index].from_month
                    }
                    hideControls
                    placeholder="Enter End Year"
                    {...form.getInputProps(`visithistory.${index}.end_year`)}
                  />
                  <Select
                    disabled={!form.getValues().visithistory[index].end_year}
                    data={[
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December",
                    ]}
                    placeholder="Select Month"
                    {...form.getInputProps(`visithistory.${index}.to_month`)}
                  />
                </SimpleGrid>
              </div>
              <Stack gap={0}>
                <TextInput
                  placeholder="e.g. For a vacation"
                  {...form.getInputProps(`visithistory.${index}.purpose`)}
                  styles={styles.top}
                  leftSection={
                    <Text size="xs" fw={800}>
                      EN
                    </Text>
                  }
                />
                <TextInput
                  placeholder="例：   "
                  {...form.getInputProps(`visithistory.${index}.jp_purpose`)}
                  styles={styles.bot}
                  leftSection={
                    <Text size="xs" fw={800}>
                      JP
                    </Text>
                  }
                />
              </Stack>
            </SimpleGrid>
            <Divider my="sm" />
          </div>
        ))}
      </Stack>
    </>
  );
}
