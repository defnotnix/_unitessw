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
import { DateInput, DatePickerInput, YearPickerInput } from "@mantine/dates";
import { modals } from "@mantine/modals";
import { apiWork } from "../../module.api";
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

export function StepWork() {
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
            Step 7 : Work History
          </b>
          <br />
          <b>Next, List academics records. 📚</b>
        </Text>

        <FormElement.SectionTitle
          title="Work Experience History"
          description="Add your academic background"
          actionButton={
            <Button
              size="xs"
              variant="light"
              leftSection={<PlusIcon />}
              onClick={() => form.insertListItem("work_experience", {})}
            >
              Add Work Experience
            </Button>
          }
        />

        <div>
          <Divider />
          <SimpleGrid cols={4} spacing="xs" my="sm">
            <Text size="sm" fw={600}>
              Company
            </Text>
            <Text size="sm" fw={600}>
              Role
            </Text>
            <Text size="sm" fw={600}>
              Notes
            </Text>
            <Text size="sm" fw={600}>
              Dates
            </Text>
          </SimpleGrid>
          <Divider />
        </div>

        {form.values.work_experience.length == 0 && (
          <Center p="xl">
            <Text size="xs">No record added yet</Text>
          </Center>
        )}

        {form.values.work_experience?.map((_: any, index: any) => (
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
                      apiWork.delete(_.id);
                      form.removeListItem("work_experience", index);
                    },
                  });
                } else {
                  form.removeListItem("work_experience", index);
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
            <SimpleGrid cols={4} spacing="xs">
              <Stack gap={0}>
                <TextInput
                  placeholder="e.g. Company Name"
                  {...form.getInputProps(`work_experience.${index}.company`)}
                  styles={styles.top}
                  leftSection={
                    <Text size="xs" fw={800}>
                      EN
                    </Text>
                  }
                />
                <TextInput
                  placeholder="例：コンピューターサイエンス学科"
                  {...form.getInputProps(`work_experience.${index}.jp_company`)}
                  styles={styles.bot}
                  leftSection={
                    <Text size="xs" fw={800}>
                      JP
                    </Text>
                  }
                />
              </Stack>

              <Stack gap={0}>
                <TextInput
                  placeholder="e.g. Manager"
                  {...form.getInputProps(`work_experience.${index}.role`)}
                  styles={styles.top}
                  leftSection={
                    <Text size="xs" fw={800}>
                      EN
                    </Text>
                  }
                />
                <TextInput
                  placeholder="例：トリブバン大学"
                  {...form.getInputProps(`work_experience.${index}.jp_role`)}
                  styles={styles.bot}
                  leftSection={
                    <Text size="xs" fw={800}>
                      JP
                    </Text>
                  }
                />
              </Stack>

              <Stack gap={0}>
                <TextInput
                  placeholder="e.g. Worked in managing multiple projects."
                  {...form.getInputProps(`work_experience.${index}.notes`)}
                  styles={styles.top}
                  leftSection={
                    <Text size="xs" fw={800}>
                      EN
                    </Text>
                  }
                />
                <TextInput
                  placeholder="例：コンピューターサイエンス学科"
                  {...form.getInputProps(`work_experience.${index}.jp_notes`)}
                  styles={styles.bot}
                  leftSection={
                    <Text size="xs" fw={800}>
                      JP
                    </Text>
                  }
                />
              </Stack>

              <Stack gap={0}>
                <YearPickerInput
                  placeholder="e.g. 2015"
                  {...form.getInputProps(`work_experience.${index}.start_date`)}
                  styles={styles.top}
                />
                <YearPickerInput
                  minDate={form.getValues().work_experience[index].start_date}
                  placeholder=" e.g. 2018"
                  {...form.getInputProps(`work_experience.${index}.end_date`)}
                  styles={styles.bot}
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
