"use client";

import React, { useEffect } from "react";
//next

//mantine
import {
  Divider,
  Group,
  Paper,
  PasswordInput,
  Select,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Textarea,
  TextInput,
  ThemeIcon,
} from "@mantine/core";
import { FormHandler } from "@vframework/core";
import { ImageUpload } from "@vframework/ui";
import { ExclamationMark } from "@phosphor-icons/react";
import { DateInput, DatePickerInput } from "@mantine/dates";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

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

export function FormOnboarding() {
  // * DEFINITIONS

  const form = FormHandler.useForm();
  const Params = useParams();

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
            <b>Account Onboarding</b>
            <br />
          </Text>
          <Text size="xs">
            Let's get some basic details in before you can start using your
            Admin Portal.
          </Text>
        </div>

        <Space h="md" />
        <ImageUpload
          {...form.getInputProps("image")}
          label="Profile Picture"
          description="Upload a recent passport-size photo"
          onChange={(image: any) => form.setFieldValue("image", image)}
          value={form.getValues()?.image}
        />

        <SimpleGrid cols={2} spacing="xs">
          <TextInput
            disabled
            label="Email"
            description="Primary email address (required)."
            placeholder="Enter email address"
            required
            {...form.getInputProps("email")}
          />

          <PasswordInput
            label="New-Password"
            description="Set a secure password (optional)."
            placeholder="Enter password"
            {...form.getInputProps("password")}
          />
        </SimpleGrid>

        <TextInput
          label="Full Name"
          placeholder="e.g. Taro Tanaka"
          description="Enter your full legal name as in passport"
          {...form.getInputProps("name")}
        />

        <Divider />

        <Text size="xs">General Details</Text>

        <SimpleGrid cols={2} spacing="xs">
          <Select
            label="Gender"
            description="Select gender"
            placeholder="Choose gender"
            data={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
              { label: "Other", value: "other" },
            ]}
            {...form.getInputProps("gender")}
          />

          <DateInput
            label="Date of Birth"
            description="User's birth date"
            placeholder="Select date of birth"
            {...form.getInputProps("date_of_birth")}
          />

          <TextInput
            label="Primary Contact"
            description="Main phone number"
            placeholder="Enter primary contact"
            {...form.getInputProps("contact1")}
          />

          <TextInput
            label="Secondary Contact"
            description="Alternate phone number"
            placeholder="Enter secondary contact"
            {...form.getInputProps("contact2")}
          />
        </SimpleGrid>

        <Textarea
          label="Address"
          description="User's current address"
          placeholder="Enter address"
          autosize
          minRows={2}
          {...form.getInputProps("address")}
        />
      </Stack>
    </>
  );
}
