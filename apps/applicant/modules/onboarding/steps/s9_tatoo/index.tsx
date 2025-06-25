"use client";

import React from "react";
//next

//mantine
import {
  ActionIcon,
  Button,
  Center,
  Divider,
  FileInput,
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

export function StepTatoo() {
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
            <b>Body Tatoo</b>
            <br />
          </Text>
          <Text size="xs">Mention if you have any body tatoo</Text>
        </div>

        <FormElement.SectionTitle
          title="Body Tatoo"
          description="Add your body tatoo"
          actionButton={
            <Button
              size="xs"
              variant="light"
              leftSection={<PlusIcon />}
              onClick={() => form.insertListItem("tatoo", {})}
            >
              Add Tatoo Entry
            </Button>
          }
        />

        <div>
          <Divider />
          <SimpleGrid cols={2} spacing="xs" my="sm">
            <Text size="sm" fw={600}>
              Position
            </Text>
            <Text size="sm" fw={600}>
              Image
            </Text>
          </SimpleGrid>
          <Divider />
        </div>

        {form.values?.tatoo.length == 0 && (
          <Center p="xl">
            <Text size="xs">No record added yet</Text>
          </Center>
        )}

        {form.values.tatoo?.map((_: any, index: any) => (
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
                      apiLicense.delete(_.id);
                      form.removeListItem("tatoo", index);
                    },
                  });
                } else {
                  form.removeListItem("tatoo", index);
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
              <TextInput
                placeholder="e.g. Left Arm"
                {...form.getInputProps(`licenses.${index}.name`)}
              />

              <FileInput
                placeholder="Upload image of your tatoo"
                {...form.getInputProps(`licenses.${index}.image`)}
              />
            </SimpleGrid>
            <Divider my="sm" />
          </div>
        ))}
      </Stack>
    </>
  );
}
