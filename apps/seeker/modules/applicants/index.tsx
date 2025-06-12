"use client";

import { UserCard } from "@/components/UserCard/page";
import { useLanguage } from "@/layouts/app/app.context";
import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Menu,
  NumberInput,
  Paper,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import {
  ArrowClockwiseIcon,
  CaretDownIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react";

export function ModuleSeekerApplicants() {
  const { language } = useLanguage();

  return (
    <Container size="xl" py="xl">
      <Grid gutter="xs">
        <Grid.Col span={{ base: 12, lg: 3.5 }}>
          <Group justify="space-between">
            <Text size="xs">
              {language === "en"
                ? "Showing XX of XX Applicants"
                : "応募者 XX 名中 XX 名を表示中"}
            </Text>
            <ActionIcon variant="light">
              <ArrowClockwiseIcon />
            </ActionIcon>
          </Group>

          <Paper
            withBorder
            p="lg"
            mt="lg"
            radius="md"
            style={{
              position: "sticky",
              top: "1rem",
            }}
          >
            <Stack>
              <Text size="xs" tt="uppercase" opacity={0.5}>
                {language === "en"
                  ? "Filter Parameters"
                  : "フィルターパラメーター"}
              </Text>
              <Stack gap="xs">
                <Select
                  data={[]}
                  styles={{
                    input: {
                      background: "white",
                      padding: "16px 0",
                      border: "none",
                    },
                  }}
                  variant="filled"
                  label={language === "en" ? "Job Category" : "職種"}
                  placeholder={
                    language === "en"
                      ? "Select Job Category"
                      : "職種を選択してください"
                  }
                />
                <Select
                  data={[]}
                  styles={{
                    input: {
                      background: "white",
                      padding: "16px 0",
                      border: "none",
                    },
                  }}
                  variant="filled"
                  label={language === "en" ? "Gender" : "性別"}
                  placeholder={
                    language === "en"
                      ? "Select Gender"
                      : "性別を選択してください"
                  }
                />

                <SimpleGrid spacing="xs" cols={2}>
                  <NumberInput
                    hideControls
                    styles={{
                      input: {
                        background: "white",
                        padding: "16px 0",
                        border: "none",
                      },
                    }}
                    variant="filled"
                    label={language === "en" ? "Min Age" : "最低年齢"}
                    placeholder={
                      language === "en" ? "Minimum Age" : "最低年齢を入力"
                    }
                  />
                  <NumberInput
                    hideControls
                    styles={{
                      input: {
                        background: "white",
                        padding: "16px 0",
                        border: "none",
                      },
                    }}
                    variant="filled"
                    label={language === "en" ? "Max Age" : "最高年齢"}
                    placeholder={
                      language === "en" ? "Maximum Age" : "最高年齢を入力"
                    }
                  />
                </SimpleGrid>

                <Button variant="light">
                  {language === "en" ? "Apply Filter" : "フィルターを適用"}
                </Button>
              </Stack>
            </Stack>
          </Paper>
        </Grid.Col>

        <Grid.Col span={{ base: 12, lg: 7.5 }}>
          <Group justify="space-between">
            <Text size="xs">
              {language === "en"
                ? "Showing XX of XX Applicants"
                : "応募者 XX 名中 XX 名を表示中"}
            </Text>
            <Menu>
              <Menu.Target>
                <Button
                  variant="white"
                  rightSection={<CaretDownIcon size={12} />}
                  size="xs"
                >
                  {language === "en"
                    ? "Sort By : Registered Date"
                    : "並び替え：登録日"}
                </Button>
              </Menu.Target>
            </Menu>
          </Group>

          <Stack mt="lg" gap="xs">
            <UserCard
              applicant={{
                name: "Ram Kumar Shrestha",
                jp_name: "ラム・クマール・シュレスタ",
                gender: "M",
                is_married: false,
                dob: "2000-01-01",
                address: "Kathmandu, Nepal",
                jp_address: "ネパール・カトマンズ",
                height: "170",
                weight: "60",
                dominant_hand: "R",
                naked_eye_left_power: 0.0,
                naked_eye_right_power: -0.5,
                naked_eye_both_power: -0.25,
                corrective_eye_left_power: -1.0,
                corrective_eye_right_power: -1.25,
                corrective_eye_both_power: -1.12,
                has_food_allergy: true,
                has_food_prohibition: false,
                strong_point: "Team player with discipline",
                jp_strong_point: "チーム意識があり、規律正しい",
                negative_point: "Sometimes overthinks",
                jp_negative_point: "考えすぎることがある",
                has_driving_license: true,
                has_passport: true,
                date_of_passport_availability: "2024-07-01",
                language_training_year: "2023",
                certified_skill: "Caregiver",
                jp_certified_skill: "介護福祉士",
                language_certification: "JLPT N4",
                jp_language_certification: "JLPT N4",
                youtube_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                image:
                  "https://tibetanencounter.com/wp-content/uploads/2019/04/my-passport-size-photo.jpg",
              }}
            />
            <UserCard
              applicant={{
                name: "Ram Kumar Shrestha",
                jp_name: "ラム・クマール・シュレスタ",
                gender: "M",
                is_married: false,
                dob: "2000-01-01",
                address: "Kathmandu, Nepal",
                jp_address: "ネパール・カトマンズ",
                height: "170",
                weight: "60",
                dominant_hand: "R",
                naked_eye_left_power: 0.0,
                naked_eye_right_power: -0.5,
                naked_eye_both_power: -0.25,
                corrective_eye_left_power: -1.0,
                corrective_eye_right_power: -1.25,
                corrective_eye_both_power: -1.12,
                has_food_allergy: true,
                has_food_prohibition: false,
                strong_point: "Team player with discipline",
                jp_strong_point: "チーム意識があり、規律正しい",
                negative_point: "Sometimes overthinks",
                jp_negative_point: "考えすぎることがある",
                has_driving_license: true,
                has_passport: true,
                date_of_passport_availability: "2024-07-01",
                language_training_year: "2023",
                certified_skill: "Caregiver",
                jp_certified_skill: "介護福祉士",
                language_certification: "JLPT N4",
                jp_language_certification: "JLPT N4",
                youtube_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                image:
                  "https://tibetanencounter.com/wp-content/uploads/2019/04/my-passport-size-photo.jpg",
              }}
            />
            <UserCard
              applicant={{
                name: "Ram Kumar Shrestha",
                jp_name: "ラム・クマール・シュレスタ",
                gender: "M",
                is_married: false,
                dob: "2000-01-01",
                address: "Kathmandu, Nepal",
                jp_address: "ネパール・カトマンズ",
                height: "170",
                weight: "60",
                dominant_hand: "R",
                naked_eye_left_power: 0.0,
                naked_eye_right_power: -0.5,
                naked_eye_both_power: -0.25,
                corrective_eye_left_power: -1.0,
                corrective_eye_right_power: -1.25,
                corrective_eye_both_power: -1.12,
                has_food_allergy: true,
                has_food_prohibition: false,
                strong_point: "Team player with discipline",
                jp_strong_point: "チーム意識があり、規律正しい",
                negative_point: "Sometimes overthinks",
                jp_negative_point: "考えすぎることがある",
                has_driving_license: true,
                has_passport: true,
                date_of_passport_availability: "2024-07-01",
                language_training_year: "2023",
                certified_skill: "Caregiver",
                jp_certified_skill: "介護福祉士",
                language_certification: "JLPT N4",
                jp_language_certification: "JLPT N4",
                youtube_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                image:
                  "https://tibetanencounter.com/wp-content/uploads/2019/04/my-passport-size-photo.jpg",
              }}
            />
            <UserCard
              applicant={{
                name: "Ram Kumar Shrestha",
                jp_name: "ラム・クマール・シュレスタ",
                gender: "M",
                is_married: false,
                dob: "2000-01-01",
                address: "Kathmandu, Nepal",
                jp_address: "ネパール・カトマンズ",
                height: "170",
                weight: "60",
                dominant_hand: "R",
                naked_eye_left_power: 0.0,
                naked_eye_right_power: -0.5,
                naked_eye_both_power: -0.25,
                corrective_eye_left_power: -1.0,
                corrective_eye_right_power: -1.25,
                corrective_eye_both_power: -1.12,
                has_food_allergy: true,
                has_food_prohibition: false,
                strong_point: "Team player with discipline",
                jp_strong_point: "チーム意識があり、規律正しい",
                negative_point: "Sometimes overthinks",
                jp_negative_point: "考えすぎることがある",
                has_driving_license: true,
                has_passport: true,
                date_of_passport_availability: "2024-07-01",
                language_training_year: "2023",
                certified_skill: "Caregiver",
                jp_certified_skill: "介護福祉士",
                language_certification: "JLPT N4",
                jp_language_certification: "JLPT N4",
                youtube_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                image:
                  "https://tibetanencounter.com/wp-content/uploads/2019/04/my-passport-size-photo.jpg",
              }}
            />
            <UserCard
              applicant={{
                name: "Ram Kumar Shrestha",
                jp_name: "ラム・クマール・シュレスタ",
                gender: "M",
                is_married: false,
                dob: "2000-01-01",
                address: "Kathmandu, Nepal",
                jp_address: "ネパール・カトマンズ",
                height: "170",
                weight: "60",
                dominant_hand: "R",
                naked_eye_left_power: 0.0,
                naked_eye_right_power: -0.5,
                naked_eye_both_power: -0.25,
                corrective_eye_left_power: -1.0,
                corrective_eye_right_power: -1.25,
                corrective_eye_both_power: -1.12,
                has_food_allergy: true,
                has_food_prohibition: false,
                strong_point: "Team player with discipline",
                jp_strong_point: "チーム意識があり、規律正しい",
                negative_point: "Sometimes overthinks",
                jp_negative_point: "考えすぎることがある",
                has_driving_license: true,
                has_passport: true,
                date_of_passport_availability: "2024-07-01",
                language_training_year: "2023",
                certified_skill: "Caregiver",
                jp_certified_skill: "介護福祉士",
                language_certification: "JLPT N4",
                jp_language_certification: "JLPT N4",
                youtube_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                image:
                  "https://tibetanencounter.com/wp-content/uploads/2019/04/my-passport-size-photo.jpg",
              }}
            />
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
