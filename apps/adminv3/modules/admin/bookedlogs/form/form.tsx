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
import { DateInput, TimeInput, YearPickerInput } from "@mantine/dates";

import { useQuery } from "@tanstack/react-query";

import classes from "./form.module.css";
import { Plus, Trash } from "@phosphor-icons/react";
import { getRecords as getCategories } from "../../vacancy-category/module.api";

// Assuming you have these defined elsewhere

export function _Form() {
  // * DEFINITIONS

  const form = FormHandler.useForm();

  // * CONTEXT

  const { current } = FormHandler.usePropContext();

  //  const current: number = 3;

  // * STATES

  // * PRELOADING

  const queryCategory = useQuery({
    queryKey: ["vacancy", "category"],
    queryFn: async () => {
      const res = await getCategories();
      console.log(res);
      return res;
    },
    initialData: [],
  });

  // * FUNCTIONS

  // * COMPONENTS

  switch (current) {
    case 0:
      return (
        <>
          <Stack gap="xs" p="md">
            <Select
              label="Vacancy Category"
              placeholder="Select a category"
              data={queryCategory.data.map((item: any) => {
                return {
                  label: `${item.name} (${item.jp_name})`,
                  value: String(item.id),
                };
              })}
              {...form.getInputProps("category")}
            />
            <ImageUpload
              {...form.getInputProps("image")}
              label="Vacancy Post"
              description="Upload a photo of the vacancy"
              onChange={(image: any) => form.setFieldValue("image", image)}
              value={form.getValues()?.image}
            />
          </Stack>
        </>
      );
  }
}
