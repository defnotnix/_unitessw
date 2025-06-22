"use client";

import {
  ActionIcon,
  AspectRatio,
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Divider,
  Drawer,
  Grid,
  Group,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import { BagIcon, BookmarkIcon, CheckCircleIcon } from "@phosphor-icons/react";
import dayjs from "dayjs";
import { useLanguage } from "@/layouts/app/app.context";
import { useRouter } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiPersonalInformation } from "@/modules/applicantProfile/module.api";

// --------------------
// Type
// --------------------
type Applicant = any;

// --------------------
// i18n Map
// --------------------
const getTranslation = (lang: "en" | "jp") => ({
  verified: lang === "en" ? "Verified Applicant" : "認証済み応募者",
  viewCV: lang === "en" ? "View CV" : "プロフィールを見る",
  viewProfile: lang === "en" ? "View Profile" : "プロフィールを見る",
  bookCandidate: lang === "en" ? "Book Candidate" : "候補者を予約",
  saveCandidate: lang === "en" ? "Save Candidate" : "候補者を保存",
  height: lang === "en" ? "Height" : "身長",
  weight: lang === "en" ? "Weight" : "体重",
  dob: lang === "en" ? "Date of Birth" : "生年月日",
  married: lang === "en" ? "Married" : "既婚",
  unmarried: lang === "en" ? "Unmarried" : "未婚",
  male: lang === "en" ? "Male" : "男性",
  female: lang === "en" ? "Female" : "女性",
  other: lang === "en" ? "Other" : "その他",
  skill: lang === "en" ? "Certified Skill" : "認定スキル",
  langCert: lang === "en" ? "Language Certification" : "語学証明書",
  strongPoint: lang === "en" ? "Strong Point" : "長所",
  negativePoint: lang === "en" ? "Weak Point" : "短所",
  driving: lang === "en" ? "Has Driving License" : "運転免許あり",
  passport: lang === "en" ? "Has Passport" : "パスポートあり",
});

// --------------------
// Helper
// --------------------
const getLangValue = (primary: string, alt?: string, lang?: string) =>
  lang === "jp" && alt ? alt : primary;

// --------------------
// Component
// --------------------
export function UserCard({ applicant }: { applicant: Applicant }) {
  const { language } = useLanguage();
  const lang = language === "jp" ? "jp" : "en";
  const t = getTranslation(lang);
  const Router = useRouter();

  const [opened, { open, close }] = useDisclosure();

  const genderLabel: any = {
    M: t.male,
    F: t.female,
    O: t.other,
  };

  const age = dayjs().diff(applicant.dob, "year");

  const [info, setInfo] = useState<any>({});

  const { data, isPending, mutate } = useMutation({
    mutationKey: ["admin", "cv"],
    mutationFn: async () => {
      const res: any = await apiPersonalInformation.get(applicant.id);
      console.log(res?.data);
      if (!res.err) {
        setInfo({
          ...res?.data,
          ...res?.data?.a_background,

          ...res?.data?.a_physical,
          ...res?.data?.a_story,
          ...res?.data?.a_identification,
          category: String(res?.data?.category),
          education: res?.data?.a_education,
          work_experience: res?.data?.a_work_experience,
          licenses: res?.data?.a_license_qualification,
        });
        return {};
      } else {
        return {};
      }
    },
  });

  const personalDetails = {
    basicInfo: [
      {
        label: "Furigana",
        label_jp: "ふりがな",
        enKey: "furigana",
        jpKey: "furigana",
      },
      {
        label: "Full Name",
        label_jp: "氏名",
        enKey: "full_name",
        jpKey: "full_name",
      },
      {
        label: "Date of Birth",
        label_jp: "生年月日",
        enKey: "date_of_birth",
        jpKey: "date_of_birth",
      },
      {
        label: "Gender",
        label_jp: "性別",
        enKey: "gender",
        jpKey: "gender",
      },
      {
        label: "Nationality",
        label_jp: "国籍",
        enKey: "nationality",
        jpKey: "jp_nationality",
      },
      {
        label: "Address",
        label_jp: "国籍",
        enKey: "current_address",
        jpKey: "jp_current_address",
      },
    ],
    physicalInfo: [
      {
        label: "Dominant Hand",
        label_jp: "身長",
        enKey: "dominant_hand",
        jpKey: "dominant_hand",
      },
      {
        label: "Height",
        label_jp: "身長",
        enKey: "height_cm",
        jpKey: "height_cm",
      },
      {
        label: "Weight",
        label_jp: "体重",
        enKey: "weight_kg",
        jpKey: "weight_kg",
      },
      {
        label: "Blood Type",
        label_jp: "血液型",
        enKey: "blood_type",
        jpKey: "blood_type",
      },
      {
        label: "Clothing Size",
        label_jp: "血液型",
        enKey: "clothing_size",
        jpKey: "clothing_size",
      },
      {
        label: "Shoe Size",
        label_jp: "血液型",
        enKey: "shoe_size",
        jpKey: "shoe_size",
      },
      {
        label: "Eyesight (Left)",
        label_jp: "血液型",
        enKey: "eyesight_left",
        jpKey: "eyesight_left",
      },
      {
        label: "Eyesight (Right)",
        label_jp: "血液型",
        enKey: "eyesight_right",
        jpKey: "eyesight_right",
      },
    ],
    backgroundInfo: [
      {
        label: "Religion",
        label_jp: "宗教",
        enKey: "religion",
        jpKey: "jp_religion",
      },
      {
        label: "Marital Status",
        label_jp: "配偶者の有無",
        enKey: "martial_status",
        jpKey: "martial_status",
      },
      {
        label: "Japanese Level",
        label_jp: "日本語の勉強度",
        enKey: "japanese_level",
        jpKey: "japanese_level",
      },
    ],
    contactInfo: [
      {
        label: "Current Address",
        label_jp: "現在の住所",
        enKey: "current_address",
        jpKey: "jp_current_address",
      },
      {
        label: "Email",
        label_jp: "メールアドレス",
        enKey: "email",
        jpKey: "email",
      },
      {
        label: "Contact Number",
        label_jp: "連絡先",
        enKey: "contact",
        jpKey: "contact",
      },
    ],
  };

  return (
    <>
      <Paper
        withBorder
        radius="md"
        style={{
          overflow: "hidden",
        }}
      >
        <Stack gap="lg" p="lg">
          {/* Top Section */}

          <Stack gap={0}>
            <Group justify="space-between">
              <Group gap="xs" mb="xs">
                <Badge
                  color="teal"
                  variant="light"
                  tt="none"
                  leftSection={<CheckCircleIcon weight="fill" />}
                >
                  {t.verified}
                </Badge>
                <Badge
                  color="indigo"
                  variant="light"
                  tt="none"
                  leftSection={<BagIcon weight="fill" />}
                >
                  Looing for jobs in Hospitality
                </Badge>
              </Group>

              <Group gap={"4px"} mt={-16} visibleFrom="lg">
                <Button
                  size="xs"
                  variant="light"
                  onClick={async () => {
                    await mutate();
                    open();
                  }}
                >
                  {t.viewProfile}
                </Button>
                <Button
                  size="xs"
                  variant="light"
                  onClick={() => {
                    Router.push("/applicants/" + applicant.id);
                  }}
                >
                  {t.viewCV}
                </Button>
                <Tooltip label={t.saveCandidate}>
                  <ActionIcon color="indigo">
                    <BookmarkIcon />
                  </ActionIcon>
                </Tooltip>
              </Group>
            </Group>

            <Grid align="center" py="xs">
              <Grid.Col span={{ base: 12, lg: 4 }}>
                <Group gap="xs" wrap="nowrap" mb="sm">
                  <Avatar size="md" src={applicant.image} color="brand">
                    XD
                  </Avatar>
                  <div>
                    <Text size="1.3rem" mb={4} fw={800}>
                      {getLangValue(
                        applicant.full_name,
                        applicant.furigana,
                        lang
                      )}
                    </Text>
                    <Text size="xs" opacity={0.8} fw={600}>
                      {`${age} ${applicant.date_of_birth} / ${genderLabel[applicant.gender]} / ${
                        applicant.is_married ? t.married : t.unmarried
                      }`}
                    </Text>
                  </div>
                </Group>
              </Grid.Col>

              <Grid.Col span={{ base: 12, lg: 8 }}>
                <Text size="xs">
                  {getLangValue(applicant.remark, applicant.jp_remark, lang)}
                </Text>
              </Grid.Col>
            </Grid>
          </Stack>

          <Group gap={"4px"} justify="space-between" hiddenFrom="lg">
            <Badge variant="dot" size="xs" color="teal">
              Available
            </Badge>

            <Group gap={"4px"}>
              <Button
                size="xs"
                variant="light"
                onClick={() => {
                  Router.push("/applicants/" + applicant.id);
                }}
              >
                {t.viewProfile}
              </Button>
              <Button
                size="xs"
                variant="light"
                onClick={() => {
                  Router.push("/applicants/" + applicant.id);
                }}
              >
                {t.viewProfile}
              </Button>
              <Tooltip label={t.saveCandidate}>
                <ActionIcon color="indigo">
                  <BookmarkIcon />
                </ActionIcon>
              </Tooltip>
            </Group>
          </Group>
        </Stack>

        {/* Detail Section */}
        <SimpleGrid cols={3} bg="gray.2" px="xl" py="sm" visibleFrom="lg">
          <Text size="xs" opacity={0.6} fw={600}>
            {`${t.height}`} : <b>{`${applicant.height} cm`}</b>
          </Text>
          <Text size="xs" opacity={0.6} fw={600}>
            {`${t.weight}`} : <b>{`${applicant.weight} kg`}</b>
          </Text>
          <Text size="xs" opacity={0.6} fw={600}>
            {`${t.skill} : `}{" "}
            <b>
              {`${getLangValue(
                applicant.certified_skill,
                applicant.jp_certified_skill,
                lang
              )}`}
            </b>
          </Text>
        </SimpleGrid>

        <SimpleGrid cols={3} bg="gray.0" px="xl" py="sm" visibleFrom="lg">
          <Text size="xs" opacity={0.6} fw={600}>
            {`${t.langCert}: `}{" "}
            <b>{`${getLangValue(
              applicant.language_certification,
              applicant.jp_language_certification,
              lang
            )}`}</b>
          </Text>
          <Text size="xs" opacity={0.6} fw={600}>
            {`${t.strongPoint}: `}{" "}
            <b>{`${getLangValue(
              applicant.strong_point,
              applicant.jp_strong_point,
              lang
            )}`}</b>
          </Text>
          <Text size="xs" opacity={0.6} fw={600}>
            {`${t.negativePoint}: `}{" "}
            <b>{`${getLangValue(
              applicant.negative_point,
              applicant.jp_negative_point,
              lang
            )}`}</b>
          </Text>
        </SimpleGrid>
      </Paper>

      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        size="xl"
        title={
          <Text size="xs" tt="uppercase">
            Applicant Profile
          </Text>
        }
        styles={{
          body: {
            padding: 0,
            background: "var(--mantine-color-gray-2)",
          },
        }}
      >
        <Paper bg={"brand.2"}>
          <Stack py="2rem">
            <Center>
              <Avatar size="100" src={info.image} name={info.full_name} />
            </Center>

            <Text ta="center" size="xl" fw={800}>
              {lang === "en" ? info.full_name : info.furigana}
            </Text>
          </Stack>
        </Paper>
        <Stack p="sm">
          <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="xs">
            {/* Left Side */}
            <Stack gap="xs">
              {/* About Me */}
              <Paper withBorder>
                <Text
                  px="lg"
                  py="xs"
                  bg="brand.2"
                  opacity={0.5}
                  fw={800}
                  size="xs"
                >
                  {lang === "en" ? "About Me" : "プロフィール"}
                </Text>

                <Box px="lg" py="md">
                  <Text size="xs">
                    {lang === "en" ? info.remark : info.jp_remark}
                  </Text>
                </Box>
              </Paper>

              {/* YouTube Video */}
              <Paper withBorder style={{ overflow: "hidden" }}>
                <AspectRatio ratio={16 / 9} mb={-16}>
                  <iframe
                    src={info.youtube_link}
                    title="YouTube video player"
                    style={{ border: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </AspectRatio>
              </Paper>

              {/* Traits, Goals, Motivation, Hobbies */}
              <Paper withBorder>
                {[
                  {
                    label: "Personal Traits",
                    jp: "個人特徴",
                    key: "personal_traits",
                  },
                  {
                    label: "Future Goals",
                    jp: "未来の目標",
                    key: "future_goals",
                  },
                  {
                    label: "Motivation Statement",
                    jp: "動機",
                    key: "motivation_statement",
                  },
                  { label: "Hobbies", jp: "趣味", key: "hobbies" },
                ].map((section, idx) => (
                  <React.Fragment key={idx}>
                    <Text
                      opacity={0.5}
                      fw={800}
                      size="xs"
                      bg="brand.2"
                      px="lg"
                      py="xs"
                    >
                      {lang === "en" ? section.label : section.jp}
                    </Text>
                    <Text size="xs" px="lg" py="md">
                      {lang === "en"
                        ? info[section.key]
                        : info[`jp_${section.key}`]}
                    </Text>
                  </React.Fragment>
                ))}
              </Paper>

              {/* Strength & Weakness */}
              <Paper withBorder>
                <Text
                  opacity={0.5}
                  fw={800}
                  size="xs"
                  px="lg"
                  py="xs"
                  bg="brand.2"
                >
                  {lang === "en" ? "Strong Point" : "長所"}
                </Text>
                <Text size="xs" px="lg" py="md">
                  {lang === "en" ? info.strong_point : info.jp_strong_point}
                </Text>

                <Text
                  opacity={0.5}
                  fw={800}
                  size="xs"
                  px="lg"
                  py="xs"
                  bg="brand.2"
                >
                  {lang === "en" ? "Negative Point" : "短所"}
                </Text>
                <Text size="xs" px="lg" py="md">
                  {lang === "en" ? info.weak_point : info.jp_weak_point}
                </Text>
              </Paper>
            </Stack>

            {/* Right Side */}
            <Stack gap="xs">
              <Paper withBorder p="lg">
                {/* Personal Details */}
                <Text fw={800} size="xs" opacity={0.5} mb="md">
                  {lang === "en" ? "Personal Details" : "基本情報"}
                </Text>
                <SimpleGrid cols={2} spacing="xs">
                  {personalDetails.basicInfo.map((item, index) => (
                    <React.Fragment key={index}>
                      <Text size="xs" fw={800}>
                        {lang === "jp" ? item.label_jp : item.label}
                      </Text>
                      <Text size="xs">
                        {lang === "jp" ? info[item.jpKey] : info[item.enKey]}
                      </Text>
                    </React.Fragment>
                  ))}
                </SimpleGrid>

                <Divider my="sm" />

                {/* Background Details */}
                <Text fw={800} size="xs" opacity={0.5} mb="md">
                  {lang === "en" ? "Background Details" : "背景"}
                </Text>
                <SimpleGrid cols={2} spacing="xs">
                  {personalDetails.backgroundInfo.map((item, index) => (
                    <React.Fragment key={index}>
                      <Text size="xs" fw={800}>
                        {lang === "jp" ? item.label_jp : item.label}
                      </Text>
                      <Text size="xs">
                        {lang === "jp"
                          ? info.a_background?.[item.jpKey]
                          : info.a_background?.[item.enKey]}
                      </Text>
                    </React.Fragment>
                  ))}

                  <Text size="xs" fw={800}>
                    {lang === "en" ? "Drinks Alcohol" : "酒類"}
                  </Text>
                  <Text size="xs">
                    {info.drinks_alcohol
                      ? lang === "en"
                        ? "Yes"
                        : "はい"
                      : lang === "en"
                        ? "No"
                        : "いいえ"}
                  </Text>

                  <Text size="xs" fw={800}>
                    {lang === "en" ? "Smokes Tobacco" : "タバコ"}
                  </Text>
                  <Text size="xs">
                    {info.smokes
                      ? lang === "en"
                        ? "Yes"
                        : "はい"
                      : lang === "en"
                        ? "No"
                        : "いいえ"}
                  </Text>
                </SimpleGrid>

                <Divider my="sm" />

                {/* Physical Info */}
                <Text fw={800} size="xs" opacity={0.5} mb="md">
                  {lang === "en" ? "Physical" : "身体情報"}
                </Text>
                <SimpleGrid cols={2} spacing="xs">
                  {personalDetails.physicalInfo.map((item, index) => (
                    <React.Fragment key={index}>
                      <Text size="xs" fw={800}>
                        {lang === "jp" ? item.label_jp : item.label}
                      </Text>
                      <Text size="xs">
                        {lang === "jp"
                          ? info.a_physical?.[item.jpKey]
                          : info.a_physical?.[item.enKey]}
                      </Text>
                    </React.Fragment>
                  ))}

                  <Text size="xs" fw={800}>
                    {lang === "en" ? "Has Food Allergies" : "食物アレルギー"}
                  </Text>
                  <Text size="xs">
                    {info.has_food_allergy
                      ? lang === "en"
                        ? "Yes"
                        : "はい"
                      : lang === "en"
                        ? "No"
                        : "いいえ"}
                  </Text>

                  <Text size="xs" fw={800}>
                    {lang === "en" ? "Has Food Prohibitions" : "食事制限"}
                  </Text>
                  <Text size="xs">
                    {info.has_food_prohibition
                      ? lang === "en"
                        ? "Yes"
                        : "はい"
                      : lang === "en"
                        ? "No"
                        : "いいえ"}
                  </Text>
                </SimpleGrid>
              </Paper>
            </Stack>
          </SimpleGrid>

          <Divider my="xs" />
        </Stack>
      </Drawer>
    </>
  );
}
