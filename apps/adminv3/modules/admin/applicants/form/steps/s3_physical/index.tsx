"use client";

import React from "react";
//next

//mantine
import {
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
        <div>
          <Text size="2rem" lh="2.3rem">
            <b>Physical Information</b>
            <br />
          </Text>
          <Text size="xs">
            Next add physical & medical information of the person.
          </Text>
        </div>

        <SimpleGrid cols={2} spacing="xs">
          <Select
            label="Dominant Hand"
            placeholder="Select your dominant hand"
            data={[
              { value: "Right", label: "Right" },
              { value: "Left", label: "Left" },
              { value: "Ambidextrous", label: "Ambidextrous" },
            ]}
            {...form.getInputProps("dominant_hand")}
          />
          <Select
            label="Blood Group"
            placeholder="Select appropriate blood group"
            data={[
              { label: "A+", value: "A+" },
              { label: "A-", value: "A-" },
              { label: "B+", value: "B+" },
              { label: "B-", value: "B-" },
              { label: "AB+", value: "AB+" },
              { label: "AB-", value: "AB-" },
              { label: "O+", value: "O+" },
              { label: "O-", value: "O-" },
            ]}
            {...form.getInputProps("blood_type")}
          />
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

        <SimpleGrid cols={2} spacing="xs" my="md">
          <Switch
            label="Has Food Allergies"
            description="Indicate if you have food allergies"
            {...form.getInputProps("has_food_allergies", { type: "checkbox" })}
            styles={{
              label: {
                fontSize: "var(--mantine-font-size-xs)",
              },
            }}
          />
          <Switch
            label="Has Food Prohibitions"
            description="Indicate if you have food prohibitions"
            {...form.getInputProps("has_food_prohibitions", {
              type: "checkbox",
            })}
            styles={{
              label: {
                fontSize: "var(--mantine-font-size-xs)",
              },
            }}
          />
        </SimpleGrid>

        <Divider />

        <div>
          <Text size="2rem" lh="2.3rem">
            <b>Family Information</b>
            <br />
          </Text>
          <Text size="xs">
            Next add physical & medical information of the person.
          </Text>
        </div>

        <SimpleGrid cols={{ base: 1, lg: 2 }}>
          <Stack gap={0}>
            <TextInput
              label="Parent Name"
              placeholder="e.g. Ram Shrestha"
              description="Name of parent"
              {...form.getInputProps("family_name")}
              styles={styles.top}
              leftSection={
                <Text size="xs" fw={800}>
                  EN
                </Text>
              }
            />
            <TextInput
              placeholder="e.g. ネパール"
              {...form.getInputProps("jp_family_name")}
              styles={styles.bot}
              leftSection={
                <Text size="xs" fw={800}>
                  JP
                </Text>
              }
            />
          </Stack>

          <Stack gap={0}>
            <TextInput
              label="Parent Relation"
              placeholder="e.g. Father"
              description="Name of parent"
              {...form.getInputProps("family_relation")}
              styles={styles.top}
              leftSection={
                <Text size="xs" fw={800}>
                  EN
                </Text>
              }
            />
            <TextInput
              placeholder="e.g. ネパール"
              {...form.getInputProps("jp_family_relation")}
              styles={styles.bot}
              leftSection={
                <Text size="xs" fw={800}>
                  JP
                </Text>
              }
            />
          </Stack>
        </SimpleGrid>

        <TextInput
          label="Parent Contact"
          placeholder="e.g. +977 981123121"
          description="Your relationship to the contact person"
          {...form.getInputProps("family_contact")}
        />
      </Stack>
    </>
  );
}
