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

export function ModuleSeekerApplicants() {
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

  const allTranslations = {
    en: {
      filters: "Search Filters",
      candidateCode: "Candidate Code",
      candidateCodeDesc: "Only searches for exact code",
      jobCategory: "Job Category",
      jobCategoryPlaceholder: "Select Job Category",
      gender: "Gender",
      genderPlaceholder: "Gender",
      ageRange: "Age Range (Min - Max)",
      name: "Name",
      middleName: "Middle Name (English)",
      lastName: "Last Name (English)",
      furigana: "Full Name (Furigana)",
      min: "Min",
      max: "Max",
      weightRange: "Weight (Min - Max)",
      heightRange: "Height (Min - Max)",
      kg: "kg",
      cm: "cm",
      bloodGroup: "Blood Group",
      bloodGroupPlaceholder: "Select",
      maritalStatus: "Marital Status",
      applyFilter: "Apply Filter",
      clearFilter: "Clear Filter",
      candidateFinder: "Candidate Finder",
    },
    jp: {
      filters: "フィルターパラメーター",
      candidateCode: "候補者コード",
      candidateCodeDesc: "正確なコードでのみ検索されます",
      jobCategory: "職種カテゴリ",
      jobCategoryPlaceholder: "職種を選択",
      gender: "性別",
      genderPlaceholder: "性別を選択",
      ageRange: "年齢範囲（最小 - 最大）",
      name: "氏名",
      middleName: "氏名（英語）",
      lastName: "氏名（英語）",
      furigana: "氏名（フリガナ）",
      min: "最小",
      max: "最大",
      weightRange: "体重（最小 - 最大）",
      heightRange: "身長（最小 - 最大）",
      kg: "kg",
      cm: "cm",
      bloodGroup: "血液型",
      bloodGroupPlaceholder: "選択",
      maritalStatus: "配偶者の有無",
      applyFilter: "フィルターを適用",
      clearFilter: "フィルターをクリア",
      candidateFinder: "候補者検索",
    },
  };

  const translations = allTranslations[language as "en" | "jp"];

  function RenderFilter() {
    return (
      <>
        <Stack>
          <Text size="xs" opacity={0.5} fw={700}>
            {translations.filters}
          </Text>

          <Stack gap="xs">
            <TextInput
              label={translations.candidateCode}
              description={translations.candidateCodeDesc}
              size="sm"
              placeholder={translations.candidateCode}
              radius="md"
              {...form.getInputProps("code")}
            />

            <Select
              clearable
              data={queryJobCategory.data.map((item: any) => ({
                label: `${item.name} (${item.jp_name})`,
                value: String(item.id),
              }))}
              label={translations.jobCategory}
              size="sm"
              placeholder={translations.jobCategoryPlaceholder}
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
                label={translations.gender}
                size="sm"
                placeholder={translations.genderPlaceholder}
                radius="md"
                {...form.getInputProps("gender")}
              />
              <div>
                <Text size="xs" my={4}>
                  {translations.ageRange}
                </Text>
                <SimpleGrid cols={2} spacing={2}>
                  <NumberInput
                    hideControls
                    size="sm"
                    placeholder={translations.min}
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
                    placeholder={translations.max}
                    radius="md"
                    {...form.getInputProps("max_age")}
                  />
                </SimpleGrid>
              </div>

              <TextInput
                label={translations.name}
                size="sm"
                placeholder={translations.name}
                radius="md"
                {...form.getInputProps("name")}
              />
            </SimpleGrid>

            <div>
              <Text size="xs" my={4}>
                {translations.weightRange}
              </Text>
              <SimpleGrid cols={2} spacing={2}>
                <NumberInput
                  hideControls
                  size="sm"
                  placeholder={translations.min}
                  radius="md"
                  {...form.getInputProps("min_weight")}
                  rightSectionWidth={50}
                  rightSection={<Text size="xs">{translations.kg}</Text>}
                />
                <NumberInput
                  min={
                    form.getValues()?.min_weight
                      ? form.getValues()?.min_weight + 1
                      : null
                  }
                  hideControls
                  size="sm"
                  placeholder={translations.max}
                  radius="md"
                  {...form.getInputProps("max_weight")}
                  rightSectionWidth={50}
                  rightSection={<Text size="xs">{translations.kg}</Text>}
                />
              </SimpleGrid>
            </div>

            <div>
              <Text size="xs" my={4}>
                {translations.heightRange}
              </Text>
              <SimpleGrid cols={2} spacing={2}>
                <NumberInput
                  hideControls
                  size="sm"
                  placeholder={translations.min}
                  radius="md"
                  {...form.getInputProps("min_height")}
                  rightSectionWidth={50}
                  rightSection={<Text size="xs">{translations.cm}</Text>}
                />
                <NumberInput
                  min={
                    form.getValues()?.min_height
                      ? form.getValues()?.min_height + 1
                      : null
                  }
                  hideControls
                  size="sm"
                  placeholder={translations.max}
                  radius="md"
                  {...form.getInputProps("max_height")}
                  rightSectionWidth={50}
                  rightSection={<Text size="xs">{translations.cm}</Text>}
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
              label={translations.bloodGroup}
              size="sm"
              placeholder={translations.bloodGroupPlaceholder}
              radius="md"
              {...form.getInputProps("blood_group")}
            />

            <Select
              data={[
                { value: "Male", label: "Male" },
                { value: "Female", label: "Female" },
                { value: "Other", label: "Other" },
              ]}
              label={translations.maritalStatus}
              size="sm"
              placeholder={translations.maritalStatus}
              radius="md"
              {...form.getInputProps("martial_status")}
            />

            <Group grow>
              <Button
                onClick={() => {
                  const rawValues = form.getValues();
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
                {translations.applyFilter}
              </Button>
              <Button variant="subtle" onClick={() => form.reset()}>
                {translations.clearFilter}
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
      <Grid gutter="4px">
        <Grid.Col span={{ base: 12, lg: 3.5 }} visibleFrom="lg">
          <Group justify="space-between" visibleFrom="lg">
            <Text size="xs" fw={800}>
              Candidate Finder
            </Text>
            <ActionIcon variant="light">
              <ArrowClockwiseIcon />
            </ActionIcon>
          </Group>

          <Paper
            withBorder
            p="lg"
            mt="xs"
            radius="md"
            style={{
              position: "sticky",
              top: "1rem",
            }}
          >
            <RenderFilter />
          </Paper>
        </Grid.Col>

        <Grid.Col span={{ base: 12, lg: 8.5 }}>
          <Group justify="space-between">
            <Text size="xs" pl={{ base: 0, lg: "xl" }}>
              {language === "en"
                ? `Showing ${(current - 1) * 20 + 1} - ${
                    (current - 1) * 20 + queryData.data.length
                  } of ${paginationData.total_items}`
                : `全 ${paginationData.total_items} 名中 ${(current - 1) * 20 + 1} ～ ${
                    (current - 1) * 20 + queryData.data.length
                  } を表示中`}
            </Text>
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

          <Group justify="center" my="xl">
            <Pagination
              size="xs"
              total={paginationData.total_pages}
              value={current}
              onChange={setCurrent}
            />
          </Group>
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
