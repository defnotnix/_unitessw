"use client";

import {
  AspectRatio,
  Divider,
  Grid,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Table,
  Text,
} from "@mantine/core";
import React, { useEffect } from "react";

const personalDetails = [
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
    label: "Blood Type",
    label_jp: "血液型",
    enKey: "blood_type",
    jpKey: "blood_type",
  },
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
    label: "Current Address",
    label_jp: "現在の住所",
    enKey: "current_address",
    jpKey: "jp_current_address",
  },
  {
    label: "Residence Status",
    label_jp: "在留資格",
    enKey: "residence_status",
    jpKey: "jp_residence_status",
  },
  {
    label: "Residence Expiry",
    label_jp: "在留期限",
    enKey: "residence_expiry",
    jpKey: "jp_residence_expiry",
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
];

const additionalDetails = [
  {
    label: "Clothing Size",
    label_jp: "服のサイズ",
    enKey: "clothing_size",
    jpKey: "clothing_size",
  },
  {
    label: "Shoe Size",
    label_jp: "靴のサイズ",
    enKey: "shoe_size",
    jpKey: "shoe_size",
  },
  {
    label: "Dominant Hand",
    label_jp: "利き手",
    enKey: "dominant_hand",
    jpKey: "dominant_hand",
  },
  {
    label: "Eyesight (Left)",
    label_jp: "視力（左）",
    enKey: "eyesight_left",
    jpKey: "eyesight_left",
  },
  {
    label: "Eyesight (Right)",
    label_jp: "視力（右）",
    enKey: "eyesight_right",
    jpKey: "eyesight_right",
  },
  {
    label: "Email",
    label_jp: "メールアドレス",
    enKey: "email",
    jpKey: "email",
  },
  {
    label: "Parent Relation",
    label_jp: "続柄",
    enKey: "parent_relation",
    jpKey: "jp_parent_relation",
  },
  {
    label: "Parent Contact",
    label_jp: "保護者の連絡先",
    enKey: "parent_contact",
    jpKey: "parent_contact",
  },
];

export function CV6({
  color = "brand",
  data,
  language,
}: {
  color: any;
  data: any;
  language: any;
}) {
  useEffect(() => {}, [color]);

  return (
    <Paper h={"11.7in"} w={"8.5in"} pos="relative" p="md">
      <Grid gutter={0}>
        <Grid.Col
          span={12}
          p="xl"
          mb="-2in"
          bg={`
                linear-gradient(to bottom, var(--mantine-color-${color}-1) 0%,white 50%)
            `}
          style={{
            borderRadius: ".1in",
          }}
        >
          <SimpleGrid cols={2}>
            <Text size="2.5rem" fw={800}>
              {language === "en" ? data?.full_name : data?.furigana}
            </Text>
            <Text size="xs">
              {language === "en"
                ? "Looking for jobs on"
                : "求職者が探している職業"}
              <br />{" "}
              <b>{language === "en" ? "Hospitality" : "ホスピタリティ"}</b>
            </Text>
          </SimpleGrid>
        </Grid.Col>
        <Grid.Col span={{ base: 12, lg: 8 }} p="xl" pt="1in">
          <Divider my="md" />

          <Text size="xs" fw={800}>
            {language === "en" ? "About Me" : "自己紹介"}
          </Text>

          <Text size="xs" mt="md">
            {language === "en"
              ? "I am Ram Prasad Shrestha, a dedicated professional from Lalitpur, Nepal, with a strong background in hospitality. With a warm personality and excellent teamwork skills, I strive to provide the best service in every role. I am adaptable, eager to learn, and passionate about working in Japan to expand my skills and contribute meaningfully."
              : "私はネパール・ラリトプル出身のラム・プラサード・シュレスタです。ホスピタリティ分野での経験があり、明るい性格と優れたチームワークを活かして、常に最高のサービスを提供することを目指しています。日本で働きながら自分のスキルをさらに伸ばし、社会に貢献したいと考えています。"}
          </Text>

          <Divider my="md" />

          <SimpleGrid cols={2} spacing="xs">
            <div>
              <Text size="xs" fw={800}>
                My Personal Traits
              </Text>
              <Text size="xs" mt="sm">
                {language === "en"
                  ? data?.personal_traits
                  : data?.jp_personal_traits}
              </Text>
            </div>

            <div>
              <Text size="xs" fw={800}>
                What motivates me.
              </Text>
              <Text size="xs" mt="sm">
                {language === "en"
                  ? data?.motivation_statement
                  : data?.jp_motivation_statement}
              </Text>
            </div>
          </SimpleGrid>

          <Divider my="md" />

          <Text size="xs" fw={800}>
            Academics
          </Text>

          <Table
            withColumnBorders
            striped
            withTableBorder
            mt="sm"
            style={{
              fontSize: "10px",
            }}
          >
            <Table.Thead>
              <Table.Tr>
                <Table.Th w={50}>#</Table.Th>
                <Table.Th w={120}>
                  {language === "en" ? "Period" : "期間"}
                </Table.Th>
                <Table.Th w={150}>
                  {language === "en" ? "Institution" : "学校名"}
                </Table.Th>
                <Table.Th>
                  {language === "en" ? "Major / Notes" : "専攻・備考"}
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {data?.education?.map((item: any, index: any) => (
                <Table.Tr key={index}>
                  <Table.Td>{index + 1}</Table.Td>
                  <Table.Td>
                    {item.start_date && item.end_date
                      ? `${item.start_date} - ${item.end_date}`
                      : "-"}
                  </Table.Td>
                  <Table.Td>
                    <b>
                      {language === "en"
                        ? item.institution || "-"
                        : item.jp_institution || "-"}
                    </b>
                  </Table.Td>
                  <Table.Td>
                    {language === "en"
                      ? item.major_or_notes || "-"
                      : item.jp_major_or_notes || "-"}
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>

          <Divider my="md" />
          <Text size="xs" fw={800}>
            Work History
          </Text>

          <Table
            withColumnBorders
            striped
            withTableBorder
            mt="sm"
            style={{
              fontSize: "10px",
            }}
          >
            <Table.Thead>
              <Table.Tr>
                <Table.Th w={50}>#</Table.Th>
                <Table.Th w={120}>
                  {language === "en" ? "Period" : "期間"}
                </Table.Th>
                <Table.Th w={150}>
                  {language === "en" ? "Company" : "会社名"}
                </Table.Th>
                <Table.Th>
                  {language === "en" ? "Role / Notes" : "職種・備考"}
                </Table.Th>
              </Table.Tr>
            </Table.Thead>

            <Table.Tbody>
              {data?.work_experience?.map((item: any, index: number) => (
                <Table.Tr key={index}>
                  <Table.Td>{index + 1}</Table.Td>
                  <Table.Td>
                    {item.start_date && item.end_date
                      ? `${item.start_date} - ${item.end_date}`
                      : "-"}
                  </Table.Td>
                  <Table.Td>
                    <b>{language === "en" ? item.company : item.jp_company}</b>
                  </Table.Td>
                  <Table.Td>
                    {language === "en"
                      ? `${item.role || "-"} / ${item.notes || "-"}`
                      : `${item.jp_role || "-"} / ${item.jp_notes || "-"}`}
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Grid.Col>

        <Grid.Col
          style={{
            borderRadius: ".1in",
          }}
          span={{ base: 12, lg: 4 }}
          p="xl"
          bg={`linear-gradient(to bottom, var(--mantine-color-${color}-6) 0%, var(--mantine-color-${color}-9) 100%)`}
          h="11.7in"
        >
          <Stack gap="xl">
            <Image
              src={
                "https://r2.erweima.ai/imgcompressed/compressed_37c94e20cb613116de36841ba02309d2.webp"
              }
            />

            <AspectRatio ratio={16 / 9} mt={-16}>
              <iframe
                src="https://www.youtube.com/embed/nBydCvT195k?si=OgzJYNdx5yQkgNaZ"
                title="YouTube video player"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </AspectRatio>

            <div>
              <Text size="xs" fw={800} c="gray.0">
                {language === "en" ? "PROFILE" : "プロフィール"}
              </Text>

              <SimpleGrid cols={2} spacing="xs" mt="xl">
                {personalDetails.map((item, index) => (
                  <React.Fragment key={index}>
                    <Text size="xs" fw={800} c="gray.0">
                      {language === "jp" ? item.label_jp : item.label}
                    </Text>
                    <Text size="xs" c="gray.0">
                      {language === "jp" ? data[item.jpKey] : data[item.enKey]}
                    </Text>
                  </React.Fragment>
                ))}
              </SimpleGrid>
            </div>
          </Stack>
        </Grid.Col>
      </Grid>
    </Paper>
  );
}
