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
          </Stack>
        </>
      );
  }
}
