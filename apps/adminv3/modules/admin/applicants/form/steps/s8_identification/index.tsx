"use client";

import React, { useEffect } from "react";
//next

//mantine
import {
  Group,
  Paper,
  Select,
  SimpleGrid,
  Space,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
} from "@mantine/core";
import { FormHandler } from "@vframework/core";
import { ImageUpload } from "@vframework/ui";
import { ExclamationMark } from "@phosphor-icons/react";
import { DatePickerInput } from "@mantine/dates";
import { useParams } from "next/navigation";
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

export function StepIdentification() {
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
            <b>Identity & Contact Details</b>
            <br />
          </Text>
          <Text size="xs">
            Let's begin by adding the identity of the person and some general
            details.
          </Text>
        </div>

        <Space h="md" />
        <ImageUpload
          {...form.getInputProps("image")}
          label="Passport Image"
          description="Upload a recent passport-size photo"
          onChange={(image: any) => form.setFieldValue("image", image)}
          value={form.getValues()?.image}
        />

        <ImageUpload
          {...form.getInputProps("passport")}
          label="Passport Image"
          description="Upload a recent passport-size photo"
          onChange={(image: any) => form.setFieldValue("passport", image)}
          value={form.getValues()?.image}
        />

        <ImageUpload
          {...form.getInputProps("l_cert_image")}
          label="Passport Image"
          description="Upload a recent passport-size photo"
          onChange={(image: any) => form.setFieldValue("l_cert_image", image)}
          value={form.getValues()?.image}
        />

        <ImageUpload
          {...form.getInputProps("ssw_cert_image")}
          label="Passport Image"
          description="Upload a recent passport-size photo"
          onChange={(image: any) => form.setFieldValue("ssw_cert_image", image)}
          value={form.getValues()?.image}
        />
      </Stack>
    </>
  );
}
