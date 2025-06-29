"use client";

//mantine
import { Stack, TextInput } from "@mantine/core";
//framework
import { FormHandler } from "@vframework/core";

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
            <TextInput
              label="Job Category"
              description="Specify the category or field this job belongs to (e.g., Hospitality, IT, Agriculture)."
              placeholder="e.g., Hospitality"
              required
              {...form.getInputProps("name")}
            />

            <TextInput
              label="Job Category (JP)"
              description="Enter the job category in Japanese for internal or partner reference."
              placeholder="例: ホスピタリティ"
              required
              {...form.getInputProps("jp_name")}
            />
          </Stack>
        </>
      );
  }
}
