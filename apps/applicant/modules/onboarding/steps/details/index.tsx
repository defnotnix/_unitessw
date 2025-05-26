"use client";

import React from "react";
//next

//mantine
import {
  Group,
  NumberInput,
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
import { DateInput } from "@mantine/dates";
//mantine

//icons

//styles

//components

export function StepDetails() {
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
          <b style={{ opacity: 0.5 }}>Documents added.</b>
          <br />
          <b>Next, your personal details. 🪪</b>
        </Text>

        <Stack gap="xs">
          <ImageUpload
            label="Passport Size Photo"
            onChange={(image: any) => form.setFieldValue("image", image)}
            value={form.getValues()?.image}
            {...form.getInputProps("image")}
          />
          <TextInput
            label="Official Name"
            description="Registered name in your official documents."
            placeholder="e.g. Kabin Devkota"
            {...form.getInputProps("name")}
          />
          <TextInput
            label="Name(Japanese)"
            description="Optional Japanese name translation."
            placeholder="e.g. ラム・クマール・タパ"
            {...form.getInputProps("jp_name")}
          />

          <SimpleGrid cols={2} spacing="xs">
            <Select
              label="Gender"
              description="Select applicant's gender."
              placeholder="Select gender"
              required
              data={[
                { value: "M", label: "Male" },
                { value: "F", label: "Female" },
                { value: "O", label: "Other" },
              ]}
              {...form.getInputProps("gender")}
            />

            <Select
              label="Martial Status"
              description="Select applicant' martial status."
              placeholder="Select"
              required
              data={[
                { value: "1", label: "Married" },
                { value: "0", label: "Not-Married" },
              ]}
              {...form.getInputProps("is_married")}
            />
          </SimpleGrid>

          <DateInput
            label="Date of Birth"
            description="Provide date of birth."
            placeholder="Select date"
            required
            {...form.getInputProps("dob")}
          />

          <TextInput
            label="Address"
            description="Applicant's permanent district."
            placeholder="e.g. City, District, Province"
            required
            {...form.getInputProps("address")}
          />
          <TextInput
            label="Address(Japanese)"
            description="Optional Japanese translation of district."
            placeholder="e.g. カトマンズ"
            {...form.getInputProps("jp_address")}
          />

          <SimpleGrid spacing="xs" cols={2}>
            <NumberInput
              label="Height (cm)"
              description="Enter height in centimeters."
              placeholder="e.g. 167.50"
              precision={2}
              required
              {...form.getInputProps("height")}
            />
            <NumberInput
              label="Weight (kg)"
              description="Enter weight in kilograms."
              placeholder="e.g. 60.00"
              precision={2}
              required
              {...form.getInputProps("weight")}
            />
          </SimpleGrid>
        </Stack>
      </Stack>
    </>
  );
}
