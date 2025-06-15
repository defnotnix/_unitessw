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
import { DateInput, YearPickerInput } from "@mantine/dates";

import { useQuery } from "@tanstack/react-query";

import classes from "./form.module.css";
import { Check } from "@phosphor-icons/react";

// Assuming you have these defined elsewhere

export function _FormAchievement() {
  // * DEFINITIONS

  const form = FormHandler.useForm();

  // * CONTEXT

  const { handleSubmit, current } = FormHandler.usePropContext();

  //  const current: number = 3;

  // * STATES

  const [category, setCategory] = useState<any[]>([]);

  // * PRELOADING

  // * FUNCTIONS

  // * COMPONENTS

  switch (current) {
    case 0:
      return (
        <>
          <Paper px="lg" py="md" withBorder>
            <FormElement.SectionTitle
              isTopElement
              title="Achievement Details"
              description="Comprehensive student information & details"
            />

            <TextInput
              label="Achievement Title"
              description="Enter the title of the achievement"
              placeholder="Enter achievement title"
              {...form.getInputProps("award")}
            />
            <TextInput
              label="Achievement Description"
              description="Enter any details"
              placeholder="Enter achievement title"
              {...form.getInputProps("extra_details")}
            />

            <DateInput
              label="Achievement Date"
              description="Enter the description of the achievement"
              placeholder="Enter achievement description"
              {...form.getInputProps("awarded_date")}
            />

            <Group justify="flex-end" mt="md">
              <Button
                color="teal"
                leftSection={<Check />}
                onClick={() => {
                  handleSubmit();
                }}
              >
                Submit
              </Button>
            </Group>
          </Paper>
        </>
      );
  }
}
