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
import { FormHandler } from "@vframework/core";
import { FormElement, ImageUpload } from "@vframework/ui";
import { ExclamationMark, Plus, Trash } from "@phosphor-icons/react";
import { DateInput, YearPicker, YearPickerInput } from "@mantine/dates";
//mantine

//icons

//styles

//components

export function StepCompleted() {
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
          <b style={{ opacity: 0.5 }}>Phew! We're finally done. 😁</b>
          <br />
          <b>
            Your application has been sent for review. We'll reach out if
            anything's missing.
          </b>
        </Text>

        <Group wrap="nowrap" mt="md">
          <ThemeIcon variant="light">
            <ExclamationMark />
          </ThemeIcon>
          <Text size="xs" fw={600} c="brand.6">
            You can login to your account to view your application status.
          </Text>
        </Group>
      </Stack>
    </>
  );
}
