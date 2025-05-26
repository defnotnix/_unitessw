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

export function StepWork() {
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
          <b style={{ opacity: 0.5 }}>work details saved.</b>
          <br />
          <b>Now, let’s add your work history.</b>
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
            title="work"
            description="Add Entry"
            actionButton={
              <Button
                size="xs"
                variant="light"
                leftSection={<Plus />}
                onClick={() => form.insertListItem("work", {})}
              >
                Add New
              </Button>
            }
          />

          <div>
            <Divider />
            <SimpleGrid cols={3} spacing="xs" my="sm">
              <Text size="sm" fw={600}>
                Work Address
              </Text>
              <Text size="sm" fw={600}>
                Salary
              </Text>
              <Text size="sm" fw={600}>
                Year (From - To)
              </Text>
            </SimpleGrid>
            <Divider />
          </div>

          {form.values.work.length == 0 && (
            <Center p="xl">
              <Text size="xs">No record added yet</Text>
            </Center>
          )}

          {form.values.work.map((_: any, index: number) => (
            <div
              key={index}
              style={{
                position: "relative",
              }}
            >
              <ActionIcon
                onClick={() => {
                  form.removeListItem("work", index);
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
                    placeholder="Work Address in EN"
                    {...form.getInputProps(`work.${index}.address`)}
                  />
                  <TextInput
                    placeholder="Work Address in JP"
                    {...form.getInputProps(`work.${index}.jp_address`)}
                  />
                </Stack>

                <NumberInput
                  leftSection={<Text size="xs">Rs.</Text>}
                  hideControls
                  placeholder="Salary Amount"
                  type="number"
                  {...form.getInputProps(`work.${index}.salary`)}
                />

                <YearPickerInput
                  type="range"
                  placeholder="Pick dates range"
                  {...form.getInputProps(`work.${index}.year`)}
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
