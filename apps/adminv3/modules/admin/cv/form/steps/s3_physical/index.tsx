"use client";

//next

//mantine
import { NumberInput, Select, SimpleGrid, Stack, Text } from "@mantine/core";
import { FormHandler } from "@vframework/core";
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
      </Stack>
    </>
  );
}
