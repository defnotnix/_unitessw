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

export function StepAcademics() {
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
            Step 6 : Academics
          </b>
          <br />
          <b>Next, List academics records. 📚</b>
        </Text>

        <FormElement.SectionTitle
          title="Education History"
          description="Add your academic background"
          actionButton={
            <Button
              size="xs"
              variant="light"
              leftSection={<PlusIcon />}
              onClick={() => form.insertListItem("education", {})}
            >
              Add Education
            </Button>
          }
        />

        <div>
          <Divider />
          <SimpleGrid cols={3} spacing="xs" my="sm">
            <Text size="sm" fw={600}>
              Institute
            </Text>
            <Text size="sm" fw={600}>
              Major/Notes
            </Text>
            <Text size="sm" fw={600}>
              Enroll (From - To)
            </Text>
          </SimpleGrid>
          <Divider />
        </div>

        {form.values.education.length == 0 && (
          <Center p="xl">
            <Text size="xs">No record added yet</Text>
          </Center>
        )}

        {form.values.education?.map((_: any, index: any) => (
          <div key={index} style={{ position: "relative" }}>
            <ActionIcon
              onClick={() => form.removeListItem("education", index)}
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
            <SimpleGrid cols={3} spacing="xs">
              <Stack gap={0}>
                <TextInput
                  placeholder="e.g. Tribhuvan University"
                  {...form.getInputProps(`education.${index}.institution`)}
                  styles={styles.top}
                  leftSection={
                    <Text size="xs" fw={800}>
                      EN
                    </Text>
                  }
                />
                <TextInput
                  placeholder="例：トリブバン大学"
                  {...form.getInputProps(`education.${index}.jp_institution`)}
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
                  placeholder="e.g. BSc Computer Science"
                  {...form.getInputProps(`education.${index}.major_or_notes`)}
                  styles={styles.top}
                  leftSection={
                    <Text size="xs" fw={800}>
                      EN
                    </Text>
                  }
                />
                <TextInput
                  placeholder="例：コンピューターサイエンス学科"
                  {...form.getInputProps(
                    `education.${index}.jp_major_or_notes`
                  )}
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
                  placeholder="Select start date e.g. 2015"
                  {...form.getInputProps(`education.${index}.start_date`)}
                  styles={styles.top}
                />
                <TextInput
                  placeholder="Select end date e.g. 2018"
                  {...form.getInputProps(`education.${index}.end_date`)}
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
