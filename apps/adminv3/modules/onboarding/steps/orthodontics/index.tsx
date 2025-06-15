"use client";

import React, { useEffect } from "react";
//next

//mantine
import {
  ActionIcon,
  Button,
  Center,
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
import { apiDispatch, FormHandler } from "@vframework/core";
import { FormElement, ImageUpload } from "@vframework/ui";
import { ExclamationMark, Plus, Trash } from "@phosphor-icons/react";
import { DateInput } from "@mantine/dates";
//mantine
import { jwtDecode } from "jwt-decode";

//icons

//styles

//components

export function StepOrthodontics() {
  // * DEFINITIONS

  const form = FormHandler.useForm();

  // * CONTEXT

  // * STATE

  useEffect(() => {
    const decoded: any = jwtDecode(sessionStorage.getItem("sswtoken") || "");
    apiDispatch
      .get({
        endpoint: "/applicant/get/id/",
        params: {
          user_id: decoded?.user_id,
        },
      })
      .then((res: any) => {
        console.log(res);
        if (!res.err) {
          form.setFieldValue("id", res.data?.id);
        }
      });
  }, []);

  // * FUNCTIONS

  // * COMPONENTS

  // * ANIMATIONS

  return (
    <>
      <Stack gap="md">
        <Text size="2rem" lh="2.3rem">
          <b style={{ opacity: 0.5 }}>Medical info saved.</b>
          <br />
          <b>Next, orthodontic appliance. 🦷</b>
        </Text>

        <Stack gap="xs">
          <FormElement.SectionTitle
            isTopElement
            title="Orthodontic Appliances"
            description="Add appliance"
            actionButton={
              <Button
                size="xs"
                variant="light"
                leftSection={<Plus />}
                onClick={() => form.insertListItem("orthodontics", {})}
              >
                Add New
              </Button>
            }
          />

          <div>
            <Divider />
            <SimpleGrid cols={2} spacing="xs" my="sm">
              <Text size="sm" fw={600}>
                Teeth
              </Text>
              <SimpleGrid cols={2} spacing="xs">
                <Text size="sm" fw={600}>
                  Appliance(JP)
                </Text>
                <Text size="sm" fw={600}>
                  Appliance(JP)
                </Text>
              </SimpleGrid>
            </SimpleGrid>
            <Divider />
          </div>

          {form.values.orthodontics.length == 0 && (
            <Center p="xl">
              <Text size="xs">No appliances added yet</Text>
            </Center>
          )}

          {form.values.orthodontics.map((_: any, index: number) => (
            <div
              key={index}
              style={{
                position: "relative",
              }}
            >
              <ActionIcon
                onClick={() => {
                  form.removeListItem("orthodontics", index);
                }}
                size="md"
                variant="light"
                color="red"
                style={{
                  position: "absolute",
                  zIndex: 99,
                  right: -30,
                  top: 4,
                }}
              >
                <Trash />
              </ActionIcon>

              <SimpleGrid cols={2}>
                <Select
                  placeholder="e.g. Upper Right First Molar"
                  data={[
                    {
                      value: "1",
                      label: "Upper Right Third Molar (上右第三大臼歯)",
                    },
                    {
                      value: "2",
                      label: "Upper Right Second Molar (上右第二大臼歯)",
                    },
                    {
                      value: "3",
                      label: "Upper Right First Molar (上右第一大臼歯)",
                    },
                    {
                      value: "4",
                      label: "Upper Right Second Premolar (上右第二小臼歯)",
                    },
                    {
                      value: "5",
                      label: "Upper Right First Premolar (上右第一小臼歯)",
                    },
                    { value: "6", label: "Upper Right Canine (上右犬歯)" },
                    {
                      value: "7",
                      label: "Upper Right Lateral Incisor (上右側切歯)",
                    },
                    {
                      value: "8",
                      label: "Upper Right Central Incisor (上右中切歯)",
                    },
                    {
                      value: "9",
                      label: "Upper Left Central Incisor (上左中切歯)",
                    },
                    {
                      value: "10",
                      label: "Upper Left Lateral Incisor (上左側切歯)",
                    },
                    { value: "11", label: "Upper Left Canine (上左犬歯)" },
                    {
                      value: "12",
                      label: "Upper Left First Premolar (上左第一小臼歯)",
                    },
                    {
                      value: "13",
                      label: "Upper Left Second Premolar (上左第二小臼歯)",
                    },
                    {
                      value: "14",
                      label: "Upper Left First Molar (上左第一大臼歯)",
                    },
                    {
                      value: "15",
                      label: "Upper Left Second Molar (上左第二大臼歯)",
                    },
                    {
                      value: "16",
                      label: "Upper Left Third Molar (上左第三大臼歯)",
                    },
                    {
                      value: "17",
                      label: "Lower Left Third Molar (下左第三大臼歯)",
                    },
                    {
                      value: "18",
                      label: "Lower Left Second Molar (下左第二大臼歯)",
                    },
                    {
                      value: "19",
                      label: "Lower Left First Molar (下左第一大臼歯)",
                    },
                    {
                      value: "20",
                      label: "Lower Left Second Premolar (下左第二小臼歯)",
                    },
                    {
                      value: "21",
                      label: "Lower Left First Premolar (下左第一小臼歯)",
                    },
                    { value: "22", label: "Lower Left Canine (下左犬歯)" },
                    {
                      value: "23",
                      label: "Lower Left Lateral Incisor (下左側切歯)",
                    },
                    {
                      value: "24",
                      label: "Lower Left Central Incisor (下左中切歯)",
                    },
                    {
                      value: "25",
                      label: "Lower Right Central Incisor (下右中切歯)",
                    },
                    {
                      value: "26",
                      label: "Lower Right Lateral Incisor (下右側切歯)",
                    },
                    { value: "27", label: "Lower Right Canine (下右犬歯)" },
                    {
                      value: "28",
                      label: "Lower Right First Premolar (下右第一小臼歯)",
                    },
                    {
                      value: "29",
                      label: "Lower Right Second Premolar (下右第二小臼歯)",
                    },
                    {
                      value: "30",
                      label: "Lower Right First Molar (下右第一大臼歯)",
                    },
                    {
                      value: "31",
                      label: "Lower Right Second Molar (下右第二大臼歯)",
                    },
                    {
                      value: "32",
                      label: "Lower Right Third Molar (下右第三大臼歯)",
                    },
                  ]}
                  {...form.getInputProps(
                    `orthodontics.${index}.teeth_position`
                  )}
                />
                <SimpleGrid cols={2}>
                  <TextInput
                    placeholder="e.g. Brackets with archwire"
                    {...form.getInputProps(`orthodontics.${index}.appliance`)}
                  />
                  <TextInput
                    placeholder="e.g. ブラケットとアーチワイヤー"
                    {...form.getInputProps(
                      `orthodontics.${index}.jp_appliance`
                    )}
                  />
                </SimpleGrid>
              </SimpleGrid>
            </div>
          ))}
        </Stack>
      </Stack>
    </>
  );
}
