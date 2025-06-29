"use client";

//mantine
import { Select, Stack } from "@mantine/core";
//framework
import { FormHandler } from "@vframework/core";
import { ImageUpload } from "@vframework/ui";

import { useQuery } from "@tanstack/react-query";

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
