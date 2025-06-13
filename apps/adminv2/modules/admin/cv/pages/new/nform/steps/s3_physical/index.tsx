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
import { DatePickerInput } from "@mantine/dates";
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
  },
  bot: {
    input: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      fontSize: "var(--mantine-font-size-xs)",
    },
  },
};

export function StepPhysical() {
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
            Step 3 : Physical Info
          </b>
          <br />
          <b>
            Let's begin by adding the identity of the person and some general
            details.📃
          </b>
        </Text>

        <Select
          label="Dominant Hand"
          placeholder="Select your dominant hand"
          description="Specify your preferred writing or working hand"
          data={[
            { value: "Right", label: "Right" },
            { value: "Left", label: "Left" },
            { value: "Ambidextrous", label: "Ambidextrous" },
          ]}
          {...form.getInputProps("dominant_hand")}
        />
        <SimpleGrid cols={2} spacing="xs">
          <NumberInput
            label="Eyesight Left"
            placeholder="e.g. 1.0"
            description="Visual acuity of your left eye"
            {...form.getInputProps("eyesight_left")}
          />
          <NumberInput
            label="Eyesight Right"
            placeholder="e.g. 1.2"
            description="Visual acuity of your right eye"
            {...form.getInputProps("eyesight_right")}
          />
          <NumberInput
            label="Height (cm)"
            placeholder="e.g. 170"
            description="Your height in centimeters"
            {...form.getInputProps("height_cm")}
          />
          <NumberInput
            label="Weight (kg)"
            placeholder="e.g. 65"
            description="Your body weight in kilograms"
            {...form.getInputProps("weight_kg")}
          />

          <Select
            label="Clothing Size"
            placeholder="Select clothing size"
            description="Your general clothing size"
            data={["S", "M", "L", "XL", "XXL", "XXXL"].map((s) => ({
              value: s,
              label: s,
            }))}
            {...form.getInputProps("clothing_size")}
          />
          <NumberInput
            label="Shoe Size"
            placeholder="e.g. 26.5"
            description="Your shoe size in centimeters"
            {...form.getInputProps("shoe_size")}
          />
        </SimpleGrid>
      </Stack>
    </>
  );
}
