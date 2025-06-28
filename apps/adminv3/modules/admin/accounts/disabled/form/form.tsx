"use client";

//mantine
import {
  Checkbox,
  Divider,
  Group,
  PasswordInput,
  SimpleGrid,
  Stack,
  Text,
  TextInput
} from "@mantine/core";
//framework
import { FormHandler } from "@vframework/core";
import { ImageUpload } from "@vframework/ui";


import classes from "./form.module.css";

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

            <Text size="xs" fw={600}>
              Account Permissions
            </Text>

            <SimpleGrid cols={2} spacing="xs">
              <Checkbox.Card
                px="xs"
                py="md"
                bg={
                  form.getValues().perm_applicant == true ? "brand.0" : "white"
                }
                checked={form.getValues().perm_applicant}
                onChange={(e) => {
                  if (!e && !form.getValues().perm_cv) {
                    alert("At least one permission must be selected.");
                  } else {
                    form.setFieldValue("perm_applicant", e);
                  }
                }}
              >
                <Group wrap="nowrap" align="flex-start">
                  <Checkbox.Indicator size="xs" />
                  <div>
                    <Text size="xs" className={classes.label} fw={600}>
                      Can manage Applicants
                    </Text>
                    <Text
                      className={classes.description}
                      size="xs"
                      opacity={0.5}
                    >
                      Can list, create and review applicants.
                    </Text>
                  </div>
                </Group>
              </Checkbox.Card>

              <Checkbox.Card
                checked={form.getValues().perm_cv}
                p="xs"
                bg={form.getValues().perm_cv == true ? "brand.0" : "white"}
                onChange={(e) => {
                  if (!e && !form.getValues().perm_applicant) {
                    alert("At least one permission must be selected.");
                  } else {
                    form.setFieldValue("perm_cv", e);
                  }
                }}
              >
                <Group wrap="nowrap" align="flex-start">
                  <Checkbox.Indicator
                    size="xs"
                    {...form.getInputProps("perm_cv")}
                  />
                  <div>
                    <Text size="xs" className={classes.label} fw={600}>
                      Can manage CVs
                    </Text>
                    <Text
                      className={classes.description}
                      size="xs"
                      opacity={0.5}
                    >
                      Can list, create and review CV.
                    </Text>
                  </div>
                </Group>
              </Checkbox.Card>
            </SimpleGrid>

            <Divider my="sm" />
          </Stack>
        </>
      );
  }
}
