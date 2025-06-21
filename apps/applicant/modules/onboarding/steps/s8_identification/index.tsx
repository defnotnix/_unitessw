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
  Switch,
  Text,
  TextInput,
  ThemeIcon,
} from "@mantine/core";
import { FormHandler } from "@vframework/core";
import { ImageUpload } from "@vframework/ui";
import { ExclamationMark } from "@phosphor-icons/react";
import { DateInput, DatePickerInput } from "@mantine/dates";
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
          {...form.getInputProps("passport")}
          label="Passport Image"
          description="Upload a recent passport-size photo"
          onChange={(image: any) => form.setFieldValue("passport", image)}
          value={form.getValues()?.passport}
        />

        <ImageUpload
          {...form.getInputProps("l_cert_image")}
          label="Language Certification"
          description="Upload a recent passport-size photo"
          onChange={(image: any) => form.setFieldValue("l_cert_image", image)}
          value={form.getValues()?.l_cert_image}
        />

        <ImageUpload
          {...form.getInputProps("ssw_cert_image")}
          label="SSW Certificate"
          description="Upload a recent passport-size photo"
          onChange={(image: any) => form.setFieldValue("ssw_cert_image", image)}
          value={form.getValues()?.ssw_cert_image}
        />

        <SimpleGrid cols={2} spacing="xs">
          <Switch
            label="Has Passport"
            description="Indicate if applicant has a passport"
            {...form.getInputProps("has_passport", { type: "checkbox" })}
            styles={{
              label: {
                fontSize: "var(--mantine-font-size-xs)",
                fontWeight: 600,
              },
            }}
          />
          <Switch
            label="Has Driving License"
            description="Indicate if applicant has driving license"
            {...form.getInputProps("has_driving_license", {
              type: "checkbox",
            })}
            styles={{
              label: {
                fontSize: "var(--mantine-font-size-xs)",
                fontWeight: 600,
              },
            }}
          />
          <DateInput
            label="Date of Passport Availability"
            placeholder="Select Date"
            description="Your date of birth in YYYY-MM-DD format"
            {...form.getInputProps("date_of_passport_availability")}
          />
        </SimpleGrid>
      </Stack>
    </>
  );
}
