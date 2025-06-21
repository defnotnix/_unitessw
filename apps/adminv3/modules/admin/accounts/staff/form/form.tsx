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
            <TextInput
              label="Name"
              description="Full name of the user (optional)."
              placeholder="Enter full name"
              {...form.getInputProps("name")}
            />

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

            <TextInput
              label="Recovery Email"
              description="Optional recovery email address."
              placeholder="Enter recovery email"
              {...form.getInputProps("recovery_email")}
            />

            <Divider my="sm" />

            <Text size="xs" c="brand.6" fw={600}>
              Account Permissions
            </Text>

            <SimpleGrid cols={2} spacing="xs">
              <Checkbox.Card
                px="xs"
                py="md"
                bg={
                  form.getValues().perm_applicant == true ? "brand.0" : "white"
                }
                onChange={(e) => form.setFieldValue("perm_applicant", e)}
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
                p="xs"
                bg={form.getValues().perm_cv == true ? "brand.0" : "white"}
                onChange={(e) => form.setFieldValue("perm_cv", e)}
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
          </Stack>
        </>
      );
  }
}
