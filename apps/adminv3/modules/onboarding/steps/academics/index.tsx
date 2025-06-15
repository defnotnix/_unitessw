"use client";

import React, { useEffect } from "react";
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
  TextInput,
  ThemeIcon,
} from "@mantine/core";
import { apiDispatch, FormHandler } from "@vframework/core";
import { FormElement, ImageUpload } from "@vframework/ui";
import { ExclamationMark, Plus, Trash } from "@phosphor-icons/react";
import { DateInput, YearPicker, YearPickerInput } from "@mantine/dates";
//mantine
import { jwtDecode } from "jwt-decode";
//icons

//styles

//components

export function StepAcademics() {
  // * DEFINITIONS

  const form = FormHandler.useForm();

  // * CONTEXT

  // * STATE

  useEffect(() => {
    const decoded: any = jwtDecode(sessionStorage.getItem("sswtoken") || "");
    apiDispatch
      .get({
        endpoint: "/applicant/get/id/",
        params: {
          user_id: decoded?.user_id,
        },
      })
      .then((res: any) => {
        console.log(res);
        if (!res.err) {
          form.setFieldValue("id", res.data?.id);
        }
      });
  }, []);

  // * FUNCTIONS

  // * COMPONENTS

  // * ANIMATIONS

  return (
    <>
      <Stack gap="md">
        <Text size="2rem" lh="2.3rem">
          <b style={{ opacity: 0.5 }}>Orthodontics info saved.</b>
          <br />
          <b>Next, List your academics records. 📚</b>
        </Text>

        <Group wrap="nowrap" mt="md">
          <ThemeIcon variant="light">
            <ExclamationMark />
          </ThemeIcon>
          <Text size="xs" fw={600} c="brand.6">
            Fill in the details in both English & Japanese. The First field for
            each record is in English & Next is Japanese
          </Text>
        </Group>

        <Stack gap="xs">
          <FormElement.SectionTitle
            isTopElement
            title="Academics"
            description="Add Entry"
            actionButton={
              <Button
                size="xs"
                variant="light"
                leftSection={<Plus />}
                onClick={() => form.insertListItem("academics", {})}
              >
                Add New
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
                Location
              </Text>
              <Text size="sm" fw={600}>
                Enroll (From - To)
              </Text>
            </SimpleGrid>
            <Divider />
          </div>

          {form.values.academics.length == 0 && (
            <Center p="xl">
              <Text size="xs">No record added yet</Text>
            </Center>
          )}

          {form.values.academics.map((_: any, index: number) => (
            <div
              key={index}
              style={{
                position: "relative",
              }}
            >
              <ActionIcon
                onClick={() => {
                  form.removeListItem("academics", index);
                }}
                size="md"
                variant="light"
                color="red"
                style={{
                  position: "absolute",
                  zIndex: 99,
                  right: -30,
                  top: 4,
                }}
              >
                <Trash />
              </ActionIcon>

              <SimpleGrid cols={3} spacing="xs">
                <Stack gap="xs">
                  <TextInput
                    placeholder="Institute Name in EN"
                    {...form.getInputProps(`academics.${index}.institute`)}
                  />
                  <TextInput
                    placeholder="Institute Name in JP"
                    {...form.getInputProps(`academics.${index}.jp_institute`)}
                  />
                </Stack>

                <Stack gap="xs">
                  <TextInput
                    placeholder="e.g. Kathmandu"
                    {...form.getInputProps(`academics.${index}.place`)}
                  />
                  <TextInput
                    placeholder="e.g. カトマンズ"
                    {...form.getInputProps(`academics.${index}.jp_place`)}
                  />
                </Stack>
                <YearPickerInput
                  type="range"
                  placeholder="Pick dates range"
                  {...form.getInputProps(`academics.${index}.year`)}
                />
              </SimpleGrid>
              <Divider my="sm" />
            </div>
          ))}
        </Stack>
      </Stack>
    </>
  );
}
