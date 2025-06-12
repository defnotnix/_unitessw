"use client";

import {
  ActionIcon,
  Anchor,
  Breadcrumbs,
  Button,
  ButtonGroup,
  Center,
  ColorSwatch,
  Grid,
  Group,
  Paper,
  Select,
  Text,
} from "@mantine/core";
import {
  ArrowLeft,
  ArrowLeftIcon,
  House,
  HouseIcon,
  PrinterIcon,
} from "@phosphor-icons/react";
import { useState } from "react";
import { CV1 } from "./templates/cv1";
import { CV2 } from "./templates/cv2";
import { CV3 } from "./templates/cv3";
import { CV4 } from "./templates/cv4";
import { CV5 } from "./templates/cv5";
import { CV6 } from "./templates/cv6";

const bread = [
  {
    label: "KCA Admin",
  },
  {
    label: "Players Management",
  },
  { label: "Players" },
  {
    label: "Profile",
  },
];

const demoData = {
  id: 12,
  image: "https://cdn.example.com/cv/photo_kiran_dahal.jpg",
  furigana: "ダハル キラン",
  full_name: "Kiran Dahal",
  date_of_birth: "1996-08-15",
  gender: "Male",
  nationality: "Nepalese",
  jp_nationality: "ネパール",
  blood_type: "O+",
  religion: "Hindu",
  jp_religion: "ヒンドゥー教",
  martial_status: "Single",
  residence_status: "Trainee Visa",
  jp_residence_status: "技能実習ビザ",
  residence_expiry: "2026-10-01",
  jp_residence_expiry: "2026年10月1日",
  current_address: "Budhanilkantha, Kathmandu, Bagmati Province",
  jp_current_address: "バグマティ州カトマンズ、ブダニルカンタ",
  dominant_hand: "Right",
  eyesight_left: "1.2",
  eyesight_right: "1.5",
  height_cm: 168.0,
  weight_kg: 60.5,
  clothing_size: "M",
  shoe_size: 26.0,
  drinks_alcohol: false,
  smokes: false,
  japanese_level: "JLPT N4",
  email: "kiran.dahal1996@gmail.com",
  parent_relation: "Father",
  jp_parent_relation: "父",
  parent_contact: "+9779800001122",
  remark: "Ready to relocate and adjust to new environments.",
  jp_remark: "新しい環境に適応し、日本に移住する準備ができています。",
  personal_traits: "Hardworking, disciplined, quick learner",
  jp_personal_traits: "勤勉、規律正しい、学習が早い",
  motivation_statement:
    "I want to work in Japan to support my family and gain international experience.",
  jp_motivation_statement:
    "家族を支え、国際的な経験を積むために日本で働きたいです。",
  future_goals:
    "To become a skilled technician and start my own company in Nepal.",
  jp_future_goals:
    "熟練した技術者になり、ネパールで自分の会社を立ち上げたいです。",

  education: [
    {
      institution: "Golden Gate International College",
      jp_institution: "ゴールデンゲート国際大学",
      major_or_notes: "BSc in Microbiology",
      jp_major_or_notes: "微生物学",
      start_date: "2015-04-01",
      end_date: "2019-03-31",
    },
    {
      institution: "Kathmandu Model College",
      jp_institution: "カトマンズモデルカレッジ",
      major_or_notes: "Science - HSEB +2",
      jp_major_or_notes: "高等教育理科",
      start_date: "2013-05-01",
      end_date: "2015-03-01",
    },
    {
      institution: "Shree Amar Singh Secondary School",
      jp_institution: "シュリーアマルシン中学校",
      major_or_notes: "SLC - General Education",
      jp_major_or_notes: "中等教育卒業",
      start_date: "2002-05-01",
      end_date: "2013-03-01",
    },
  ],

  work_experience: [
    {
      company: "Nepal Dairy Pvt. Ltd.",
      jp_company: "ネパールデイリープライベートリミテッド",
      role: "Lab Technician",
      jp_role: "ラボ技術者",
      notes: "Performed quality control on dairy products",
      jp_notes: "乳製品の品質管理を担当",
      start_date: "2020-01-01",
      end_date: "2023-05-01",
    },
    {
      company: "Bajra Organic Farm",
      jp_company: "バジャラ有機農場",
      role: "Assistant Supervisor",
      jp_role: "アシスタントスーパーバイザー",
      notes: "Handled vegetable packaging and staff coordination",
      jp_notes: "野菜のパッケージングとスタッフ管理",
      start_date: "2018-03-01",
      end_date: "2019-12-31",
    },
    {
      company: "Namaste Construction",
      jp_company: "ナマステ建設",
      role: "Site Helper",
      jp_role: "現場補助員",
      notes: "Supported masonry and basic electrical wiring tasks",
      jp_notes: "左官と基本的な電気配線作業を支援",
      start_date: "2016-06-01",
      end_date: "2018-02-01",
    },
    {
      company: "Nepal Rairy Sanstha Pvt. Ltd.",
      jp_company: "ネパールデイリープライベートリミテッド",
      role: "Lab Technician",
      jp_role: "ラボ技術者",
      notes: "Performed quality control on dairy products",
      jp_notes: "乳製品の品質管理を担当",
      start_date: "2020-01-01",
      end_date: "2023-05-01",
    },
  ],

  licenses: [
    {
      name: "Driving License (2-Wheeler)",
      jp_name: "運転免許証（二輪）",
      status: true,
      date_received: "2018-06-15",
    },
    {
      name: "Japanese Language Proficiency N4",
      jp_name: "日本語能力試験N4",
      status: true,
      date_received: "2023-12-01",
    },
    {
      name: "Basic Welding Training Certificate",
      jp_name: "基礎溶接訓練証明書",
      status: true,
      date_received: "2022-08-10",
    },
  ],
};

export function _CV() {
  // * DEFINITIONS
  const [language, setLanguage] = useState("en");
  const [cvType, setCvType] = useState("1");
  const [cvColor, setCvColor] = useState<any>("brand");

  return (
    <>
      <Grid p="md" gutter="xs">
        <Grid.Col span={6}>
          <Group gap="xs">
            <ActionIcon size="sm" variant="light">
              <ArrowLeftIcon size={12} />
            </ActionIcon>
            <Breadcrumbs
              separatorMargin={4}
              separator={
                <Text size="xs" c="gray.5">
                  /
                </Text>
              }
            >
              <HouseIcon
                weight="duotone"
                size={12}
                color="var(--mantine-color-brand-5)"
              />
              {bread.map((breadinfo: any, index: number) => (
                <Anchor
                  size="xs"
                  c={index == bread.length - 1 ? "dark.9" : "gray.5"}
                  fw={600}
                  key={index}
                >
                  {breadinfo.label}
                </Anchor>
              ))}
            </Breadcrumbs>
          </Group>
        </Grid.Col>

        <Grid.Col span={6}>
          <Group justify="flex-end" gap="xs">
            <Select
              w={100}
              leftSection={<ColorSwatch size={12} color={cvColor} />}
              value={cvColor}
              onChange={(e: any) => setCvColor(e)}
              size="xs"
              data={[
                {
                  value: "brand",
                  label: "Default",
                },

                {
                  value: "blue",
                  label: "Blue",
                },
                {
                  value: "cyan",
                  label: "Cyan",
                },
                {
                  value: "pink",
                  label: "Pink",
                },
                {
                  value: "grape",
                  label: "Grape",
                },
                {
                  value: "indigo",
                  label: "Indigo",
                },
                {
                  value: "teal",
                  label: "Teal",
                },
                {
                  value: "green",
                  label: "Green",
                },
                {
                  value: "lime",
                  label: "Lime",
                },
                {
                  value: "yellow",
                  label: "Yellow",
                },
                {
                  value: "orange",
                  label: "Orange",
                },
                {
                  value: "red",
                  label: "Red",
                },
                {
                  value: "gray",
                  label: "Gray",
                },
              ]}
            />

            <Select
              w={100}
              value={cvType}
              onChange={(e: any) => setCvType(e)}
              size="xs"
              data={[
                { value: "1", label: "CV-1" },
                { value: "2", label: "CV-2" },
                { value: "3", label: "CV-3" },
                { value: "4", label: "CV-4" },
                { value: "5", label: "CV-5" },
                { value: "6", label: "CV-6" },
              ]}
            />
            <Button size="xs" leftSection={<PrinterIcon />}>
              Print Corporate CV
            </Button>

            <ButtonGroup>
              <Button
                size="xs"
                onClick={() => {
                  setLanguage("en");
                }}
                variant={language == "en" ? "filled" : "light"}
              >
                EN
              </Button>
              <Button
                size="xs"
                onClick={() => {
                  setLanguage("jp");
                }}
                variant={language == "jp" ? "filled" : "light"}
              >
                JP
              </Button>
            </ButtonGroup>
          </Group>
        </Grid.Col>
      </Grid>

      <Center mt="md">
        {!cvType && (
          <>
            <Text my={100} size="xs">
              Please select a CV Template
            </Text>
          </>
        )}

        <Paper withBorder>
          {cvType == "1" && (
            <CV1 color={cvColor} data={demoData} language={language} />
          )}

          {cvType == "2" && (
            <CV2 color={cvColor} data={demoData} language={language} />
          )}

          {cvType == "3" && (
            <CV3 color={cvColor} data={demoData} language={language} />
          )}

          {cvType == "4" && (
            <CV4 color={cvColor} data={demoData} language={language} />
          )}

          {cvType == "5" && (
            <CV5 color={cvColor} data={demoData} language={language} />
          )}

          {cvType == "6" && (
            <CV6 color={cvColor} data={demoData} language={language} />
          )}
        </Paper>
      </Center>
    </>
  );
}
