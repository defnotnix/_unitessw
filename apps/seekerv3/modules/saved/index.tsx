"use client";

import { UserCard } from "@/components/UserCard/page";
import { useLanguage } from "@/layouts/app/app.context";
import {
  ActionIcon,
  Anchor,
  Avatar,
  Badge,
  Box,
  Breadcrumbs,
  Burger,
  Button,
  ButtonGroupSection,
  Center,
  CheckIcon,
  Container,
  Divider,
  Drawer,
  Grid,
  Group,
  Image,
  Loader,
  Menu,
  NumberInput,
  Pagination,
  Paper,
  Select,
  SimpleGrid,
  Stack,
  Switch,
  Text,
  TextInput,
  ThemeIcon,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import {
  ArrowClockwiseIcon,
  CaretDownIcon,
  CheckCircleIcon,
  MagnifyingGlassIcon,
} from "@phosphor-icons/react";
import { useQueries, useQuery } from "@tanstack/react-query";
import { moduleApiCall } from "@vframework/core";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getJobCategory } from "../home/module.api";
import { useRouter } from "next/navigation";

const inputStyle = {
  label: {
    fontSize: "var(--mantine-font-size-xs)",
    fontWeight: 700,
  },
  input: {
    background: "white",
    padding: "16px 0",
    border: "none",
  },
};

export function ModuleSeekerApplicantsSaved() {
  const { language } = useLanguage();

  const [opened, handleOpen] = useDisclosure();
  const Router = useRouter();

  const form = useForm({
    mode: "uncontrolled",
  });

  const [current, setCurrent] = useState(1);
  const [paginationData, setPaginationData] = useState<any>({});

  const Params = useSearchParams();

  const queryJobCategory = useQuery({
    queryKey: ["seeker", "category"],
    queryFn: async () => {
      const res = await getJobCategory();
      console.log(res);
      return res;
    },
    initialData: [],
  });

  const queryData = useQuery({
    queryKey: ["seeker", "applicants"],
    queryFn: async () => {
      const res = await moduleApiCall.getRecords({
        endpoint: "/applicant/search/",
        params: {
          ...Object.fromEntries(Params.entries()),
          page: current,
          pageSize: 20,
        },
      });

      console.log(res);
      setPaginationData(res.pagination);

      return res.results;
    },
    initialData: [],
  });

  useEffect(() => {
    form.setValues(Object.fromEntries(Params.entries()));
  }, []);

  useEffect(() => {
    queryData.refetch();
  }, [Params, current]);

  function RenderFilter() {
    return (
      <>
        <Stack>
          <Text size="xs" opacity={0.5} fw={700}>
            {language === "en" ? "Search Filters" : "フィルターパラメーター"}
          </Text>
          <Stack gap="xs">
            <Select
              clearable
              data={queryJobCategory.data.map((item: any) => {
                return {
                  label: `${item.name} (${item.jp_name})`,
                  value: String(item.id),
                };
              })}
              label="Job Category"
              size="sm"
              placeholder="Select Job Category"
              radius="md"
              {...form.getInputProps("category")}
            />

            <SimpleGrid cols={1}>
              <Select
                clearable
                data={[
                  { value: "Male", label: "Male" },
                  { value: "Female", label: "Female" },
                  { value: "Other", label: "Other" },
                ]}
                label="Gender"
                size="sm"
                placeholder="Gender"
                radius="md"
                {...form.getInputProps("gender")}
              />
              <div>
                <Text size="xs" my={4}>
                  Age Range (Min - Max)
                </Text>
                <SimpleGrid cols={2} spacing={2}>
                  <NumberInput
                    hideControls
                    size="sm"
                    placeholder="Min"
                    radius="md"
                    {...form.getInputProps("min_age")}
                  />
                  <NumberInput
                    min={
                      form.getValues()?.min_age
                        ? form.getValues()?.min_age + 1
                        : null
                    }
                    hideControls
                    size="sm"
                    placeholder="Max"
                    radius="md"
                    {...form.getInputProps("max_age")}
                  />
                </SimpleGrid>
              </div>

              <TextInput
                label="Full Name (English)"
                size="sm"
                placeholder="Select Job Category"
                radius="md"
                {...form.getInputProps("full_name")}
              />
              <TextInput
                label="Full Name (Furigana)"
                size="sm"
                placeholder="Select Job Category"
                radius="md"
                {...form.getInputProps("furigana")}
              />
            </SimpleGrid>

            <div>
              <Text size="xs" my={4}>
                Weight (Min - Max)
              </Text>
              <SimpleGrid cols={2} spacing={2}>
                <NumberInput
                  hideControls
                  size="sm"
                  placeholder="Min"
                  radius="md"
                  {...form.getInputProps("min_weight")}
                  rightSectionWidth={50}
                  rightSection={<Text size="xs">kg</Text>}
                />
                <NumberInput
                  min={
                    form.getValues()?.min_weight
                      ? form.getValues()?.min_weight + 1
                      : null
                  }
                  hideControls
                  size="sm"
                  placeholder="Max"
                  radius="md"
                  {...form.getInputProps("max_weight")}
                  rightSectionWidth={50}
                  rightSection={<Text size="xs">kg</Text>}
                />
              </SimpleGrid>
            </div>
            <div>
              <Text size="xs" my={4}>
                Height (Min - Max)
              </Text>
              <SimpleGrid cols={2} spacing={2}>
                <NumberInput
                  hideControls
                  size="sm"
                  placeholder="Min"
                  radius="md"
                  {...form.getInputProps("min_height")}
                  rightSectionWidth={50}
                  rightSection={<Text size="xs">cm</Text>}
                />
                <NumberInput
                  min={
                    form.getValues()?.min_height
                      ? form.getValues()?.min_height + 1
                      : null
                  }
                  hideControls
                  size="sm"
                  placeholder="Max"
                  radius="md"
                  {...form.getInputProps("max_height")}
                  rightSectionWidth={50}
                  rightSection={<Text size="xs">cm</Text>}
                />
              </SimpleGrid>
            </div>
            <Select
              clearable
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
              label="Blood Group"
              size="sm"
              placeholder="Select"
              radius="md"
              {...form.getInputProps("blood_group")}
            />
            <Select
              data={[
                { value: "Male", label: "Male" },
                { value: "Female", label: "Female" },
                { value: "Other", label: "Other" },
              ]}
              label="Martial Status"
              size="sm"
              placeholder="Select"
              radius="md"
              {...form.getInputProps("martial_status")}
            />

            <Group grow>
              <Button
                onClick={() => {
                  const rawValues = form.getValues();

                  // Filter out null, undefined, or empty string values
                  const filteredValues = Object.fromEntries(
                    Object.entries(rawValues).filter(
                      ([, value]) =>
                        value !== null && value !== undefined && value !== ""
                    )
                  );

                  const params = new URLSearchParams(
                    filteredValues as Record<string, string>
                  ).toString();
                  Router.push("/applicants?" + params);
                }}
              >
                {language === "en" ? "Apply Filter" : "フィルターを適用"}
              </Button>
              <Button
                variant="subtle"
                onClick={() => {
                  form.reset();
                }}
              >
                {language === "en" ? "Clear Filter" : "フィルターをクリア"}
              </Button>
            </Group>
          </Stack>
        </Stack>
      </>
    );
  }

  if (queryData.isFetching) {
    return (
      <>
        <Center h={400}>
          <Loader size="xs" />
        </Center>
      </>
    );
  }

  return (
    <Container size="xl" py="md">
      <Text size="2rem" ta="center" py="md">
        Saved Candidates
      </Text>

      <Grid gutter="4px">
        <Grid.Col span={{ base: 12, lg: 8.5 }} offset={{ lg: 1.75 }}>
          <Group justify="space-between">
            <Group gap={2}>
              <ThemeIcon hiddenFrom="lg">
                <Burger
                  size="xs"
                  color="white"
                  onClick={() => handleOpen.open()}
                />
              </ThemeIcon>
            </Group>
          </Group>

          <Stack mt="lg" gap="4px">
            {queryData.data?.map((item: any, index: number) => (
              <UserCard
                applicant={{
                  ...item,
                  ...item.a_personal,
                  ...item.a_background,
                  ...item.a_physical,
                }}
                key={index}
              />
            ))}
          </Stack>
        </Grid.Col>
      </Grid>

      <Drawer
        opened={opened}
        onClose={() => handleOpen.close()}
        title={
          <Text tt="uppercase" size="xs" fw={700}>
            {" "}
            Candidate Finder
          </Text>
        }
      >
        <RenderFilter />
      </Drawer>
    </Container>
  );
}
