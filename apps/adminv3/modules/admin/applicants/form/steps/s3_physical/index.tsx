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

        <SimpleGrid cols={{ base: 1, lg: 3 }} spacing="xs" my="md">
          <Switch
            label="Has Tatoo"
            description="Indicate if you have any tatoo"
            {...form.getInputProps("has_tatoo", { type: "checkbox" })}
            styles={{
              label: {
                fontSize: "var(--mantine-font-size-xs)",
              },
            }}
          />
          <Switch
            label="Has Food Allergies"
            description="Indicate if you have food allergies"
            {...form.getInputProps("has_food_allergy", { type: "checkbox" })}
            styles={{
              label: {
                fontSize: "var(--mantine-font-size-xs)",
              },
            }}
          />

          <Switch
            label="Has Food Prohibitions"
            description="Indicate if you have food prohibitions"
            {...form.getInputProps("has_food_prohibition", {
              type: "checkbox",
            })}
            styles={{
              label: {
                fontSize: "var(--mantine-font-size-xs)",
              },
            }}
          />
        </SimpleGrid>

        {form.getValues().has_food_allergy && (
          <Stack gap={0}>
            <TextInput
              rows={3}
              label="Food Allergy Description"
              placeholder="e.g. Peanuts, dairy, shellfish"
              description="Mention any known food allergies"
              {...form.getInputProps("food_allergy_desc")}
              styles={styles.top}
              leftSection={
                <Text size="xs" fw={800}>
                  EN
                </Text>
              }
            />
            <TextInput
              rows={3}
              placeholder="例：ピーナッツ、乳製品、甲殻類など"
              {...form.getInputProps("jp_food_allergy_desc")}
              styles={styles.bot}
              leftSection={
                <Text size="xs" fw={800}>
                  JP
                </Text>
              }
            />
          </Stack>
        )}

        {form.getValues().has_food_prohibition && (
          <Stack gap={0}>
            <TextInput
              rows={3}
              label="Food Prohibition Description"
              placeholder="e.g. Pork, beef, alcohol"
              description="Foods the applicant is restricted from consuming"
              {...form.getInputProps("food_prohibition_desc")}
              styles={styles.top}
              leftSection={
                <Text size="xs" fw={800}>
                  EN
                </Text>
              }
            />
            <TextInput
              rows={3}
              placeholder="例：豚肉、牛肉、アルコールなど"
              {...form.getInputProps("jp_food_prohibition_desc")}
              styles={styles.bot}
              leftSection={
                <Text size="xs" fw={800}>
                  JP
                </Text>
              }
            />
          </Stack>
        )}

        <Divider />

        <div>
          <Text size="2rem" lh="2.3rem">
            <b>Emergency Contact</b>
            <br />
          </Text>
          <Text size="xs">
            Next add physical & medical information of the person.
          </Text>
        </div>

        <SimpleGrid cols={{ base: 1, lg: 2 }}>
          <Stack gap={0}>
            <TextInput
              label="Contact Owner"
              placeholder="e.g. Ram Shrestha"
              description="Name of Emergency Contact Person"
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
              label="Contact Relation"
              placeholder="e.g. Father"
              description="Relation of Emergency Contact Person"
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
          label="Emergency Contact"
          placeholder="e.g. +977 981123121"
          description="Emergency Phone Number"
          {...form.getInputProps("family_contact")}
        />
      </Stack>
    </>
  );
}
