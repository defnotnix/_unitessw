"use client";

import { useLanguage } from "@/layouts/app/app.context";
import {
  ActionIcon,
  Badge,
  Button,
  Container,
  Divider,
  Group,
  NumberInput,
  Paper,
  Select,
  SimpleGrid,
  Spoiler,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  ArrowRightIcon,
  CaretDownIcon,
  CaretUpIcon,
} from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { getJobCategory } from "./module.api";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "@mantine/form";

export function ModuleSeekerHome() {
  const { language } = useLanguage();

  const form = useForm({
    mode: "uncontrolled",
  });

  const [openedAdvanced, handlersAdvance] = useDisclosure();

  const Router = useRouter();

  const queryJobCategory = useQuery({
    queryKey: ["seeker", "category"],
    queryFn: async () => {
      const res = await getJobCategory();
      console.log(res);
      return res;
    },
    initialData: [],
  });

  return (
    <>
      <Container size="lg" py={100}>
        <Stack gap="md">
          <Text size="xs" ta="center">
            UNITE SSW
          </Text>
          <Title size="4rem" lh="4.3rem" ta="center" visibleFrom="lg">
            {language === "en" ? (
              <>
                Find <i>employees</i> that
                <br /> meet your <i>standard</i>.
              </>
            ) : (
              <>
                あなたの<i>基準</i>に合った
                <br /> <i>従業員</i>を見つけましょう。
              </>
            )}
          </Title>

          <Title size="3rem" lh="3.3rem" ta="center" hiddenFrom="lg">
            {language === "en" ? (
              <>
                Find <i>employees</i> that meet your <i>standard</i>.
              </>
            ) : (
              <>
                あなたの<i>基準</i>に合った
                <br /> <i>従業員</i>を見つけましょう。
              </>
            )}
          </Title>

          <Text size="xs" ta="center">
            {language === "en"
              ? "Discover verified workers from all over Nepal."
              : "ネパール全土から認証済みの労働者を見つけましょう。"}
          </Text>
        </Stack>

        <Group justify="center" my="xl">
          <Button
            color="dark"
            radius="xl"
            size="xl"
            rightSection={<ArrowRightIcon />}
            onClick={() => {
              Router.push("/applicants");
            }}
          >
            {language === "en"
              ? "Browse all employees manually"
              : "すべての従業員を手動で閲覧する"}
          </Button>
        </Group>

        <Group justify="center" mb="lg">
          <Text size="xs" fw={600}>
            There are{" "}
            <b
              style={{
                color: "var(--mantine-color-brand-6)",
              }}
            >
              2,233
            </b>{" "}
            applicants available, representing{" "}
            <b
              style={{
                color: "var(--mantine-color-brand-6)",
              }}
            >
              23
            </b>{" "}
            distinct job categories.
          </Text>
        </Group>

        <Paper p="xl" withBorder shadow="md" radius="lg">
          <Group justify="space-between">
            <Text size="sm" fw={800}>
              {language === "en"
                ? "What are you looking for? "
                : "お探しのものは何ですか？"}
            </Text>
            <Text size="sm" c="gray.5">
              {language === "en"
                ? "Detailed employee search"
                : "従業員の詳細検索"}
            </Text>
          </Group>

          <Stack gap="xs">
            <SimpleGrid cols={{ base: 1, lg: 2 }} mt="xl">
              <Select
                data={queryJobCategory.data.map((item: any) => {
                  return {
                    label: `${item.name} (${item.jp_name})`,
                    value: String(item.id),
                  };
                })}
                label="Job Category"
                variant="filled"
                size="xl"
                placeholder="Select Job Category"
                radius="md"
                {...form.getInputProps("category")}
              />
              <SimpleGrid cols={{ base: 1, lg: 2 }}>
                <Select
                  data={[
                    { value: "Male", label: "Male" },
                    { value: "Female", label: "Female" },
                    { value: "Other", label: "Other" },
                  ]}
                  label="Gender"
                  variant="filled"
                  size="xl"
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
                      variant="filled"
                      size="xl"
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
                      variant="filled"
                      size="xl"
                      placeholder="Max"
                      radius="md"
                      {...form.getInputProps("max_age")}
                    />
                  </SimpleGrid>
                </div>
              </SimpleGrid>
            </SimpleGrid>

            <div
              style={{
                transition: ".3s ease-in-out",
                maxHeight: openedAdvanced ? 500 : 0,
                overflow: "hidden",
              }}
            >
              <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="xs">
                <TextInput
                  label="Full Name (English)"
                  variant="filled"
                  size="xl"
                  placeholder="Select Job Category"
                  radius="md"
                  {...form.getInputProps("full_name")}
                />
                <TextInput
                  label="Full Name (Furigana)"
                  variant="filled"
                  size="xl"
                  placeholder="Select Job Category"
                  radius="md"
                  {...form.getInputProps("furigana")}
                />
              </SimpleGrid>
              <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }} mt="xs">
                <div>
                  <Text size="xs" my={4}>
                    Weight (Min - Max)
                  </Text>
                  <SimpleGrid cols={2} spacing={2}>
                    <NumberInput
                      hideControls
                      variant="filled"
                      size="xl"
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
                      variant="filled"
                      size="xl"
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
                      variant="filled"
                      size="xl"
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
                      variant="filled"
                      size="xl"
                      placeholder="Max"
                      radius="md"
                      {...form.getInputProps("max_height")}
                      rightSectionWidth={50}
                      rightSection={<Text size="xs">cm</Text>}
                    />
                  </SimpleGrid>
                </div>
                <Select
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
                  variant="filled"
                  size="xl"
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
                  variant="filled"
                  size="xl"
                  placeholder="Select"
                  radius="md"
                  {...form.getInputProps("martial_status")}
                />
              </SimpleGrid>
            </div>
          </Stack>

          <Group justify="space-between" wrap="nowrap" mt="xl">
            <Button
              size="xs"
              radius="xl"
              leftSection={
                openedAdvanced ? (
                  <CaretUpIcon size={12} />
                ) : (
                  <CaretDownIcon size={12} />
                )
              }
              variant="light"
              onClick={() => {
                handlersAdvance.toggle();
              }}
            >
              EnableAdvanced Search Options
            </Button>

            <Group gap="xs">
              <ActionIcon
                size="xl"
                radius="xl"
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
                <ArrowRightIcon />
              </ActionIcon>
            </Group>
          </Group>
        </Paper>
      </Container>
    </>
  );
}
