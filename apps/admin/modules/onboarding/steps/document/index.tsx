"use client";

import React from "react";
//next

//mantine
import {
  Group,
  Paper,
  Select,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
} from "@mantine/core";
import { FormHandler } from "@vframework/core";
import { ImageUpload } from "@vframework/ui";
import { ExclamationMark } from "@phosphor-icons/react";
//mantine

//icons

//styles

//components

export function StepDocument() {
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
            Step : Official Documents
          </b>
          <br />
          <b>Let's begin by adding some official documents. 📃</b>
        </Text>

        <Text size="sm">What shall i call you?</Text>
        <TextInput
          size="lg"
          placeholder="e.g. Kabin Devkota"
          {...form.getInputProps("name")}
        />

        <Text size="sm">Personal Documents</Text>
        <Stack gap="xs">
          <ImageUpload
            label="Citizenship / Passport / Driving License"
            onChange={(image: any) =>
              form.setFieldValue("identification_document", image)
            }
            value={form.getValues()?.identification_document}
            {...form.getInputProps("identification_document")}
          />
          <SimpleGrid cols={2} spacing="xs">
            <Select
              placeholder="Select Identification Type"
              data={[
                {
                  value: "1",
                  label: "Driving License",
                },
                {
                  value: "2",
                  label: "Citizenship",
                },
                {
                  value: "3",
                  label: "Passport",
                },
                {
                  value: "4",
                  label: "Voter Card",
                },
              ]}
              size="lg"
              label="Identification Type"
              {...form.getInputProps("identification_type")}
            />
            <TextInput
              placeholder="e.g. 1413412312"
              size="lg"
              label="Identification Number"
              {...form.getInputProps("identification_number")}
            />
          </SimpleGrid>

          <Group wrap="nowrap" mt="md">
            <ThemeIcon variant="light">
              <ExclamationMark />
            </ThemeIcon>
            <Text size="xs" fw={600} c="brand.6">
              This is a crutial step to ensure authenticity of all applicants.
              Please submit accurate & official details only. Also make sure the
              uploaded images are clear to read.
            </Text>
          </Group>
        </Stack>
      </Stack>
    </>
  );
}
