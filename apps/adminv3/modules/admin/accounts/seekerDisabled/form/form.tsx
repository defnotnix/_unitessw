"use client";

import React, { useState } from "react";
//mantine
import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Center,
  Checkbox,
  Divider,
  FileButton,
  FileInput,
  Grid,
  Group,
  Image,
  MultiSelect,
  NumberInput,
  Paper,
  PasswordInput,
  Pill,
  PillsInput,
  Radio,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
//framework
import { FormHandler } from "@vframework/core";
import { FormElement, ImageUpload } from "@vframework/ui";
import { DateInput, TimeInput, YearPickerInput } from "@mantine/dates";

import { useQuery } from "@tanstack/react-query";

import classes from "./form.module.css";
import { Plus, Trash } from "@phosphor-icons/react";

// Assuming you have these defined elsewhere

export function _Form() {
  // * DEFINITIONS

  const form = FormHandler.useForm();

  // * CONTEXT

  const { current } = FormHandler.usePropContext();

  //  const current: number = 3;

  // * STATES

  // * PRELOADING

  // * FUNCTIONS

  // * COMPONENTS

  switch (current) {
    case 0:
      return (
        <>
          <Stack gap="xs" p="md">
            <ImageUpload
              {...form.getInputProps("image")}
              label="Profile Picture"
              description="Staff's Profile Picture (optional)."
              onChange={(image: any) => form.setFieldValue("image", image)}
              value={form.getValues()?.image}
            />
            <TextInput
              label="Name"
              description="Full name of the user (optional)."
              placeholder="Enter full name"
              {...form.getInputProps("name")}
            />

            <SimpleGrid cols={2} spacing="xs">
              <TextInput
                label="Email"
                description="Primary email address (required)."
                placeholder="Enter email address"
                required
                {...form.getInputProps("email")}
              />

              <PasswordInput
                label="Password"
                description="Set a secure password (optional)."
                placeholder="Enter password"
                {...form.getInputProps("password")}
              />
            </SimpleGrid>

            <SimpleGrid cols={2} spacing="xs">
              <TextInput
                label="Recovery Email"
                description="Backup email for password recovery"
                placeholder="Enter recovery email"
                type="email"
                {...form.getInputProps("recovery_email")}
              />

              <DateInput
                label="Valid Till"
                description="Account validity expiration date"
                placeholder="Select date"
                {...form.getInputProps("valid_till")}
              />
            </SimpleGrid>

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

              <Textarea
                label="Address"
                description="User's current address"
                placeholder="Enter address"
                autosize
                minRows={2}
                {...form.getInputProps("address")}
              />

              <TextInput
                label="Company"
                description="Company name (optional)"
                placeholder="Enter company name"
                {...form.getInputProps("company")}
              />
            </SimpleGrid>
          </Stack>
        </>
      );
  }
}
