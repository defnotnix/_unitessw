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
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { ArrowRightIcon, CaretDownIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

export function ModuleSeekerHome() {
  const { language } = useLanguage();
  const Router = useRouter();

  return (
    <>
      <Container size="lg" py={100}>
        <Stack gap="md">
          <Text size="xs" ta="center">
            UNITE SSW
          </Text>
          <Title size="4rem" lh="4.3rem" ta="center">
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
          >
            {language === "en"
              ? "Browse all employees manually"
              : "すべての従業員を手動で閲覧する"}
          </Button>
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

          <SimpleGrid cols={2} mt="xl">
            <TextInput
              label="Job Category"
              variant="filled"
              size="xl"
              placeholder="Select Job Category"
              radius="md"
            />
            <SimpleGrid cols={2}>
              <Select
                label="Gender"
                variant="filled"
                size="xl"
                placeholder="Gender"
                radius="md"
              />
              <div>
                <Text size="xs" my={4}>
                  Age Range
                </Text>
                <SimpleGrid cols={2} spacing={"xs"}>
                  <Select
                    variant="filled"
                    size="xl"
                    placeholder="Min"
                    radius="md"
                  />
                  <Select
                    variant="filled"
                    size="xl"
                    placeholder="Maximum Age"
                    radius="md"
                  />
                </SimpleGrid>
              </div>
            </SimpleGrid>
          </SimpleGrid>

          {/* <Divider my="md" />

          <Text size="xs" fw={800} c="brand.6">
            General Details
          </Text>

          <SimpleGrid cols={4} mt="xs">
            <NumberInput
              label="Weight"
              variant="filled"
              size="xl"
              placeholder="Select"
              radius="md"
            />
            <NumberInput
              label="Height"
              variant="filled"
              size="xl"
              placeholder="Select"
              radius="md"
            />
            <Select
              label="Martial Status"
              variant="filled"
              size="xl"
              placeholder="Select"
              radius="md"
            />
          </SimpleGrid>

          <SimpleGrid cols={4} mt="xs">
            <Select
              label="Has Driving License"
              variant="filled"
              size="xl"
              placeholder="Select"
              radius="md"
            />
            <Select
              label="Has Passport"
              variant="filled"
              size="xl"
              placeholder="Select"
              radius="md"
            />
            <Select
              label="Has Language Certificate"
              variant="filled"
              size="xl"
              placeholder="Select"
              radius="md"
            />
            <Select
              label=""
              variant="filled"
              size="xl"
              placeholder="Select"
              radius="md"
            />
          </SimpleGrid> */}

          <Group justify="space-between" wrap="nowrap" mt="xl">
            <Group gap="xs">
              <Text size="xs">Trending Searches</Text>
              <Badge color="gray" size="md" tt="none" variant="light">
                Hospitality
              </Badge>
              <Badge color="gray" size="md" tt="none" variant="light">
                Cook
              </Badge>
              <Badge color="gray" size="md" tt="none" variant="light">
                Engineers
              </Badge>
              <Badge color="gray" size="md" tt="none" variant="light">
                Nurse
              </Badge>
            </Group>

            <Group gap="xs">
              <Button
                size="xs"
                radius="xl"
                leftSection={<CaretDownIcon size={12} />}
                variant="light"
              >
                EnableAdvanced Search Options
              </Button>

              <ActionIcon
                size="xl"
                radius="xl"
                onClick={() => {
                  Router.push("/applicants");
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
