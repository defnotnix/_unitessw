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
  SegmentedControl,
  Select,
  SimpleGrid,
  Stack,
  Switch,
  TableOfContents,
  Text,
  Textarea,
  TextInput,
  VisuallyHidden,
} from "@mantine/core";
//framework
import { FormHandler } from "@vframework/core";
import { FormElement, ImageUpload } from "@vframework/ui";
import { DateInput, TimeInput, YearPickerInput } from "@mantine/dates";

import { useQuery } from "@tanstack/react-query";

import classes from "./form.module.css";
import {
  CircleIcon,
  Plus,
  Trash,
  XIcon,
  CheckIcon,
  CaretRightIcon,
} from "@phosphor-icons/react";

// Assuming you have these defined elsewhere

export function _Form() {
  // * DEFINITIONS

  const form = FormHandler.useForm();

  // * CONTEXT

  const { current } = FormHandler.usePropContext();
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  //  const current: number = 3;

  // * STATES

  // * PRELOADING

  // * FUNCTIONS

  // * COMPONENTS

  switch (current) {
    case 0:
      return (
        <>
          <Grid gutter={0}>
            <Grid.Col span={{ base: 12, lg: 4 }} pos="relative">
              <Box
                p="md"
                style={{
                  position: "sticky",
                  top: "3.76rem",
                }}
              >
                <Text size="xs" tt="uppercase" opacity={0.5} fw={600}>
                  Permission Groups
                </Text>

                <Stack gap={0} mt="md">
                  <Button
                    size="xs"
                    justify="space-between"
                    variant={category === "all" ? "filled" : "subtle"}
                    rightSection={
                      category === "all" ? <CaretRightIcon /> : null
                    }
                  >
                    All Permission Groups
                  </Button>
                  <Button
                    size="xs"
                    justify="flex-start"
                    variant={category === "1" ? "filled" : "subtle"}
                  >
                    Applicant Job Category
                  </Button>
                  <Button
                    size="xs"
                    justify="flex-start"
                    variant={category === "2" ? "filled" : "subtle"}
                  >
                    Applicants
                  </Button>
                  <Button
                    size="xs"
                    justify="flex-start"
                    variant={category === "3" ? "filled" : "subtle"}
                  >
                    CV
                  </Button>
                  <Button
                    size="xs"
                    justify="flex-start"
                    variant={category === "4" ? "filled" : "subtle"}
                  >
                    Accounts
                  </Button>
                </Stack>
              </Box>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 8 }}>
              <Box px="md" pt="md">
                <TextInput placeholder="Search Permissions" />
              </Box>
              <Stack>
                {Array.from(Array(10).keys()).map((i) => (
                  <Box p="md" key={i}>
                    <Text
                      size="xs"
                      c="brand"
                      tt="uppercase"
                      mb="md"
                      fw={600}
                      id="rolesection"
                    >
                      Applicant Permissions{" "}
                    </Text>

                    <Stack gap={0}>
                      <Box>
                        <Group wrap="nowrap" justify="space-between">
                          <div>
                            <Text size="xs" fw={600}>
                              Add Applicants
                            </Text>
                            <Text size="xs" opacity={0.5}>
                              Allow user to list and view applicants.
                            </Text>
                          </div>
                          <Switch size="xs" />
                        </Group>
                        <Divider my="sm" />
                      </Box>

                      <Box>
                        <Group wrap="nowrap" justify="space-between">
                          <div>
                            <Text size="xs" fw={600}>
                              Create Applicants
                            </Text>
                            <Text size="xs" opacity={0.5}>
                              Allow user to list and view applicants.
                            </Text>
                          </div>
                          <Switch size="xs" />
                        </Group>
                        <Divider my="sm" />
                      </Box>

                      <Box>
                        <Group wrap="nowrap" justify="space-between">
                          <div>
                            <Text size="xs" fw={600}>
                              Delete Applicants
                            </Text>
                            <Text size="xs" opacity={0.5}>
                              Allow user to list and view applicants.
                            </Text>
                          </div>
                          <Switch size="xs" />
                        </Group>
                        <Divider my="sm" />
                      </Box>

                      <Box>
                        <Group wrap="nowrap" justify="space-between">
                          <div>
                            <Text size="xs" fw={600}>
                              Accept/Reject Applicant Requests.
                            </Text>
                            <Text size="xs" opacity={0.5}>
                              Allow user to list and view applicants.
                            </Text>
                          </div>
                          <Switch size="xs" />
                        </Group>
                        <Divider my="sm" />
                      </Box>

                      <Box>
                        <Group wrap="nowrap" justify="space-between">
                          <div>
                            <Text size="xs" fw={600}>
                              List Applicants
                            </Text>
                            <Text size="xs" opacity={0.5}>
                              Allow user to list and view applicants.
                            </Text>
                          </div>
                          <Switch size="xs" />
                        </Group>
                        <Divider mt="sm" />
                      </Box>
                    </Stack>
                  </Box>
                ))}
              </Stack>
            </Grid.Col>
          </Grid>
        </>
      );
  }
}
