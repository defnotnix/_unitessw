import {
  Paper,
  SimpleGrid,
  Stack,
  Avatar,
  AspectRatio,
  Box,
  Table,
  Text,
} from "@mantine/core";
import { info } from "console";
import React, { ReactNode } from "react";

export const personalDetails = {
  basicInfo: [
    {
      label: "First Name",
      label_jp: "名",
      enKey: "first_name",
      jpKey: "jp_first_name",
    },
    {
      label: "Middle Name",
      label_jp: "みんなの名",
      enKey: "middle_name",
      jpKey: "jp_middle_name",
    },
    {
      label: "Last Name",
      label_jp: "姓",
      enKey: "last_name",
      jpKey: "jp_last_name",
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

export function ApplicantProfile({
  info,
  lang,
  extra,
}: {
  info: any;
  lang: string;
  extra?: ReactNode;
}) {
  return (
    <>
      <Paper
        bg={
          "linear-gradient(90deg, var(--mantine-color-dark-9), var(--mantine-color-gray-9))"
        }
        py="3rem"
        px="xl"
      >
        <SimpleGrid cols={{ base: 1, lg: 2 }}>
          <Stack>
            <Avatar size="120" src={info.image} name={info.full_name} />

            <Text size="2rem" fw={800} c="white">
              {lang === "en"
                ? `${info.first_name} ${info.middle_name} ${info.last_name}`
                : `${info.jp_first_name} ${info.jp_middle_name} ${info.jp_last_name}`}
            </Text>
            <Text size="md" fw={600} c="white" opacity={0.5} mt={-8}>
              {lang === "en" ? "Registration Code : " : "候補者コード : "}
              {info.code}
            </Text>

            {extra}
          </Stack>

          {/* YouTube Video */}
          <AspectRatio ratio={16 / 9}>
            <iframe
              src={info.youtube_link}
              title="YouTube video player"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </AspectRatio>
        </SimpleGrid>
      </Paper>
      <Stack p="sm">
        <Paper>
          <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="0">
            {/* Left Side */}

            {/* Right Side */}
            <Stack gap="xs">
              <Paper withBorder>
                {/* Personal Details */}
                <Text fw={800} size="xs" px="lg" py="xs" bg="gray.1">
                  {lang === "en" ? "Personal Details" : "基本情報"}
                </Text>
                <SimpleGrid cols={2} spacing="xs" px="lg" py="sm">
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

                {/* Background Details */}
                <Text fw={800} size="xs" px="lg" py="xs" bg="gray.1">
                  {lang === "en" ? "Background Details" : "背景"}
                </Text>
                <SimpleGrid cols={2} spacing="xs" px="lg" py="sm">
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

                {/* Physical Info */}
                <Text fw={800} size="xs" px="lg" py="xs" bg="gray.1">
                  {lang === "en" ? "Physical" : "身体情報"}
                </Text>
                <SimpleGrid cols={2} spacing="xs" px="lg" py="sm">
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
                    {lang === "en" ? "Food Allergies" : "食物アレルギー"}
                  </Text>
                  <Text size="xs">
                    {lang === "en"
                      ? info.food_allergy_desc
                      : info.jp_food_allergies_desc}
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

                  <Text size="xs" fw={800}>
                    {lang === "en" ? "Food Prohibitions" : "食事制限"}
                  </Text>
                  <Text size="xs">
                    {lang === "en"
                      ? info.food_prohibition_desc
                      : info.jp_food_prohibitions_desc}
                  </Text>

                  <Text size="xs" fw={800}>
                    {lang === "en" ? "Has Tatoo" : "タトゥー"}
                  </Text>
                  <Text size="xs">
                    {info.has_tatoo
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

            <Stack gap="xs">
              {/* About Me */}
              <Paper>
                <Text px="lg" py="xs" bg="gray.1" fw={800} size="xs">
                  {lang === "en" ? "About Me" : "プロフィール"}
                </Text>

                <Box px="lg" py="md">
                  <Text size="xs">
                    {lang === "en" ? info.remark : info.jp_remark}
                  </Text>
                </Box>
              </Paper>

              {/* Traits, Goals, Motivation, Hobbies */}
              <Paper>
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
                    <Text fw={800} size="xs" bg="gray.1" px="lg" py="xs">
                      {lang === "en" ? section.label : section.jp}
                    </Text>
                    <Text size="xs" px="lg" py="md">
                      {lang === "en"
                        ? info[section.key]
                        : info[`jp_${section.key}`]}
                    </Text>
                  </React.Fragment>
                ))}

                <Text fw={800} size="xs" px="lg" py="xs" bg="gray.1">
                  {lang === "en" ? "Strong Point" : "長所"}
                </Text>
                <Text size="xs" px="lg" py="md">
                  {lang === "en" ? info.strong_point : info.jp_strong_point}
                </Text>

                <Text fw={800} size="xs" px="lg" py="xs" bg="gray.1">
                  {lang === "en" ? "Negative Point" : "短所"}
                </Text>
                <Text size="xs" px="lg" py="md">
                  {lang === "en" ? info.weak_point : info.jp_weak_point}
                </Text>
              </Paper>
            </Stack>
          </SimpleGrid>
        </Paper>

        <Text size="lg" fw={800} px="lg">
          {lang === "en" ? "Academics" : "学歴"}
        </Text>

        <Paper withBorder>
          <Table
            striped
            withTableBorder
            withColumnBorders
            style={{
              fontSize: "var(--mantine-font-size-xs)",
            }}
          >
            <Table.Thead>
              <Table.Tr>
                <Table.Th w={50}>#</Table.Th>
                <Table.Th w={200}>{lang == "en" ? "Period" : "期間"}</Table.Th>
                <Table.Th w={200}>
                  {lang == "en" ? "Institution" : "学校名"}
                </Table.Th>
                <Table.Th>
                  {lang == "en" ? "Major / Notes" : "専攻・備考"}
                </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {info?.education?.map((item: any, index: any) => (
                <Table.Tr key={index}>
                  <Table.Td>{index + 1}</Table.Td>
                  <Table.Td>
                    {`${item.start_month}, ${item.start_year} - ${item?.end_year ? `${item.end_month}, ${item.end_year}` : "Ongoing"}`}
                  </Table.Td>
                  <Table.Td>
                    <b>
                      {lang == "en"
                        ? item.institution || "-"
                        : item.jp_institution || "-"}
                    </b>
                  </Table.Td>
                  <Table.Td>
                    {lang == "en"
                      ? item.major_or_notes || "-"
                      : item.jp_major_or_notes || "-"}
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Paper>

        <Text size="lg" fw={800} px="lg">
          {lang === "en" ? "Work History" : "勤務履歴"}
        </Text>

        <Paper withBorder>
          <Table
            striped
            withTableBorder
            withColumnBorders
            style={{
              fontSize: "var(--mantine-font-size-xs)",
            }}
          >
            <Table.Thead>
              <Table.Tr>
                <Table.Th w={50}>#</Table.Th>
                <Table.Th w={200}>{lang == "en" ? "Period" : "期間"}</Table.Th>
                <Table.Th w={200}>
                  {lang == "en" ? "Company" : "会社名"}
                </Table.Th>
                <Table.Th>
                  {lang == "en" ? "Role / Notes" : "職種・備考"}
                </Table.Th>
              </Table.Tr>
            </Table.Thead>

            <Table.Tbody>
              {info?.work_experience?.map((item: any, index: number) => (
                <Table.Tr key={index}>
                  <Table.Td>{index + 1}</Table.Td>
                  <Table.Td>
                    {`${item.start_month}, ${item.start_year} - ${item?.end_year ? `${item.end_month}, ${item.end_year}` : "Ongoing"}`}
                  </Table.Td>
                  <Table.Td>
                    <b>{lang == "en" ? item.company : item.jp_company}</b>
                  </Table.Td>
                  <Table.Td>
                    {lang == "en"
                      ? `${item.role || "-"} / ${item.notes || "-"}`
                      : `${item.jp_role || "-"} / ${item.jp_notes || "-"}`}
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Paper>

        <Text size="lg" fw={800} px="lg">
          {lang === "en" ? "License Qualification" : "証明書"}
        </Text>

        <Paper withBorder>
          <Table
            striped
            withColumnBorders
            withTableBorder
            style={{
              fontSize: "var(--mantine-font-size-xs)",
            }}
          >
            <Table.Thead>
              <Table.Tr>
                <Table.Th w={50}>#</Table.Th>
                <Table.Th w={200}>{lang == "en" ? "Date" : "日付"}</Table.Th>
                <Table.Th w={200}>
                  {lang == "en" ? "License/Qualification" : "証明書"}
                </Table.Th>
                <Table.Th>{lang == "en" ? "Status" : "状態"}</Table.Th>
              </Table.Tr>
            </Table.Thead>

            <Table.Tbody>
              {info?.licenses?.map((item: any, index: number) => (
                <Table.Tr key={index}>
                  <Table.Td>{index + 1}</Table.Td>
                  <Table.Td>{`${item.month}, ${item.year} `}</Table.Td>
                  <Table.Td>
                    <b>{lang == "en" ? item.name : item.jp_name}</b>
                  </Table.Td>
                  <Table.Td>
                    {item?.status
                      ? lang == "en"
                        ? "Active"
                        : "有効"
                      : lang == "en"
                        ? "Expired"
                        : "失効"}
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Paper>

        <Text size="lg" fw={800} px="lg">
          {lang === "en" ? "Prevous Japan Visits" : "前回到日本の訪問履歴"}
        </Text>

        <Paper withBorder>
          <Table
            striped
            withColumnBorders
            withTableBorder
            style={{
              fontSize: "var(--mantine-font-size-xs)",
            }}
          >
            <Table.Thead>
              <Table.Tr>
                <Table.Th w={50}>#</Table.Th>
                <Table.Th w={120}>{lang == "en" ? "Date" : "日付"}</Table.Th>
                <Table.Th w={200}>{lang == "en" ? "Purpose" : "目的"}</Table.Th>
              </Table.Tr>
            </Table.Thead>

            <Table.Tbody>
              {info?.pastvisits?.map((item: any, index: number) => (
                <Table.Tr key={index}>
                  <Table.Td>{index + 1}</Table.Td>
                  <Table.Td>
                    {`${item.from_month}, ${item.start_year} - ${item.to_month}, ${item.end_year}`}
                  </Table.Td>
                  <Table.Td>
                    <b>{lang == "en" ? item.purpose : item.jp_purpose}</b>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Paper>
      </Stack>
    </>
  );
}
