"use client";

import {
  ActionIcon,
  AspectRatio,
  Badge,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Table,
  Text,
  Timeline,
} from "@mantine/core";

//assets
import imgLogo from "@/assets/img/sswmini.png";
import React from "react";
import { ArrowLeftIcon, BookIcon, CheckIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/layouts/app/app.context";

import classes from "./_.module.css";

export function ModuleApplicantProfile() {
  const { language } = useLanguage();
  const Router = useRouter();

  const data: any = {
    name: "Ram Prasad Shrestha",
    name_jp: "ラム・プラサード・シュレスタ",
    email: "ram@example.com",
    phone: "021-7250834",
    location: "Lalitpur, Nepal",
    location_jp: "ネパール、ラリトプル",
    job: "Hospitality",
    job_jp: "ホスピタリティ",
    gender: "Male",
    gender_jp: "男性",
    age: "26",
    age_jp: "26歳",
    dob: "26 February 1998",
    dob_jp: "1998年2月26日",
    height: "161cm",
    height_jp: "161cm",
    weight: "76kg",
    weight_jp: "76kg",
    marital: "Married",
    marital_jp: "既婚",
  };

  const personal = [
    {
      label: "Name",
      label_jp: "氏名",
      key: "name",
    },
    {
      label: "Email",
      label_jp: "メールアドレス",
      key: "email",
    },
    {
      label: "Phone",
      label_jp: "電話番号",
      key: "phone",
    },
    {
      label: "Location",
      label_jp: "住所",
      key: "location",
    },
    {
      label: "Job",
      label_jp: "職種",
      key: "job",
    },
    {
      label: "Gender",
      label_jp: "性別",
      key: "gender",
    },
    {
      label: "Age",
      label_jp: "年齢",
      key: "age",
    },
    {
      label: "Date of Birth",
      label_jp: "生年月日",
      key: "dob",
    },
    {
      label: "Height",
      label_jp: "身長",
      key: "height",
    },
    {
      label: "Weight",
      label_jp: "体重",
      key: "weight",
    },
    {
      label: "Marital Status",
      label_jp: "配偶者の有無",
      key: "marital",
    },
  ];

  const academics = [
    {
      index: 1,
      year_range: "1975-1978",
      degree: "Diploma in Caregiving",
      degree_jp: "介護のディプロマ",
      institution: "Tribhuvan University, Nepal.",
      institution_jp: "トリブバン大学（ネパール）",
    },
    {
      index: 2,
      year_range: "1972-1975",
      degree: "Diploma in Hotel Management",
      degree_jp: "ホテルマネジメントのディプロマ",
      institution: "Kathmandu University, Nepal.",
      institution_jp: "カトマンズ大学（ネパール）",
    },
    {
      index: 3,
      year_range: "1992-1995",
      degree: "Bachelors in Education",
      degree_jp: "教育学士",
      institution: "Nepal Academy of Tourism and Hotel Management, Nepal.",
      institution_jp: "ネパール観光ホテル経営学院（ネパール）",
    },
    {
      index: 4,
      year_range: "1979-1982",
      degree: "Bachelors in Business Studies",
      degree_jp: "経営学士",
      institution: "Tribhuvan University, Nepal.",
      institution_jp: "トリブバン大学（ネパール）",
    },
    {
      index: 5,
      year_range: "2017-2019",
      degree: "Certificate in Elderly Care",
      degree_jp: "高齢者介護の修了証",
      institution: "Nepal Academy of Tourism and Hotel Management, Nepal.",
      institution_jp: "ネパール観光ホテル経営学院（ネパール）",
    },
  ];
  const work = [
    {
      index: 1,
      year_range: "1999-2000",
      company: "Grande International Hospital",
      company_jp: "グランデ・インターナショナル病院",
      location: "Rs. 8000",
      location_jp: "月給：Rs. 8000",
    },
    {
      index: 2,
      year_range: "1970-1973",
      company: "Nepal Japan Care Center",
      company_jp: "ネパール日本ケアセンター",
      location: "Rs. 12000",
      location_jp: "月給：Rs. 12000",
    },
    {
      index: 3,
      year_range: "1972-1973",
      company: "Soaltee Crowne Plaza",
      company_jp: "ソルティ・クラウンプラザ",
      location: "Rs. 20000",
      location_jp: "月給：Rs. 20000",
    },
    {
      index: 4,
      year_range: "2023-2024",
      company: "Grande International Hospital",
      company_jp: "グランデ・インターナショナル病院",
      location: "Rs. 32000",
      location_jp: "月給：Rs. 32000",
    },
  ];

  return (
    <>
      <section>
        <Container size="lg" py={32}>
          <Group justify="space-between" mb="xl">
            <Group gap="xs">
              <ActionIcon
                onClick={() => {
                  Router.back();
                }}
              >
                <ArrowLeftIcon />
              </ActionIcon>
              <Text size="xl">Applicant CV. </Text>
            </Group>
            <Badge
              radius="sm"
              size={"30"}
              px="xs"
              variant="filled"
              tt="none"
              color="teal"
              leftSection={<CheckIcon size={12} />}
            >
              <Text size="xs">Verified & Published</Text>
            </Badge>
          </Group>

          <Center>
            <Paper h={"11.7in"} w={"8.5in"}>
              <Grid gutter={0}>
                <Grid.Col
                  span={{ base: 12, lg: 4 }}
                  p="xl"
                  bg="brand.0"
                  h="11.7in"
                >
                  <Stack gap="xl">
                    <Stack gap="xs">
                      <Text size="2.5rem" fw={800}>
                        {language === "en"
                          ? "Ram Prasad Shrestha"
                          : "ラム・プラサード・シュレスタ"}
                      </Text>
                      <Text size="xs">
                        {language === "en"
                          ? "Looking for jobs on"
                          : "求職者が探している職業"}
                        <br />{" "}
                        <b>
                          {language === "en" ? "Hospitality" : "ホスピタリティ"}
                        </b>
                      </Text>
                    </Stack>

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
                      <Text size="xs" fw={800}>
                        {language === "en" ? "PROFILE" : "プロフィール"}
                      </Text>

                      <SimpleGrid cols={2} spacing="xs" mt="xl">
                        {personal.map((item) => (
                          <React.Fragment key={item.key}>
                            <Text size="xs" fw={800}>
                              {language === "jp" ? item.label_jp : item.label}
                            </Text>
                            <Text size="xs">
                              {language === "jp"
                                ? data[`${item.key}_jp`] || data[item.key]
                                : data[item.key]}
                            </Text>
                          </React.Fragment>
                        ))}
                      </SimpleGrid>
                    </div>
                  </Stack>
                </Grid.Col>
                <Grid.Col span={{ base: 12, lg: 8 }} p="xl">
                  <Text size="xs" fw={800}>
                    {language === "en" ? "About Me" : "自己紹介"}
                  </Text>

                  <Text size="xs" mt="md">
                    {language === "en"
                      ? "I am Ram Prasad Shrestha, a dedicated professional from Lalitpur, Nepal, with a strong background in hospitality. With a warm personality and excellent teamwork skills, I strive to provide the best service in every role. I am adaptable, eager to learn, and passionate about working in Japan to expand my skills and contribute meaningfully."
                      : "私はネパール・ラリトプル出身のラム・プラサード・シュレスタです。ホスピタリティ分野での経験があり、明るい性格と優れたチームワークを活かして、常に最高のサービスを提供することを目指しています。日本で働きながら自分のスキルをさらに伸ばし、社会に貢献したいと考えています。"}
                  </Text>
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
                          {language === "en" ? "Year" : "年"}
                        </Table.Th>
                        <Table.Th w={200}>
                          {language === "en" ? "Institute" : "卒業先"}
                        </Table.Th>
                        <Table.Th>
                          {language === "en" ? "Location" : "卒業地"}
                        </Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      {academics.map((item, index) => (
                        <Table.Tr key={index}>
                          <Table.Td>{item.index}</Table.Td>
                          <Table.Td>{item.year_range}</Table.Td>
                          <Table.Td>
                            <b>
                              {language == "en" ? item.degree : item.degree_jp}
                            </b>
                          </Table.Td>
                          <Table.Td>
                            {language == "en"
                              ? item.institution
                              : item.institution_jp}
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
                          {language === "en" ? "Year" : "年"}
                        </Table.Th>
                        <Table.Th w={300}>
                          {language === "en" ? "Organization" : "会社名"}
                        </Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      {work.map((item, index) => (
                        <Table.Tr key={index}>
                          <Table.Td>{item.index}</Table.Td>
                          <Table.Td>{item.year_range}</Table.Td>
                          <Table.Td>
                            <b>
                              {language == "en"
                                ? item.company
                                : item.company_jp}
                            </b>
                          </Table.Td>
                        </Table.Tr>
                      ))}
                    </Table.Tbody>
                  </Table>

                  <Divider my="md" />

                  <Text size="xs" fw={800}>
                    {language === "en" ? "Medical Details" : "医療情報"}
                  </Text>

                  <SimpleGrid cols={3} spacing="xs" mt="md">
                    <div>
                      <Text size="xs" fw={600} my="xs" c="brand.6">
                        {language === "en"
                          ? "Optical Characteristics  (Natural Eye)"
                          : "光学性質 (自然的)"}{" "}
                      </Text>
                      <Stack mt="md">
                        <SimpleGrid cols={2}>
                          <Text size="xs" fw={600}>
                            {language === "en"
                              ? "Left Power"
                              : "左側の光学性質"}
                          </Text>
                          <Text size="xs" c="dimmed">
                            0.00
                          </Text>
                        </SimpleGrid>
                      </Stack>
                    </div>

                    <div>
                      <Text size="xs" fw={600} my="xs" c="brand.6">
                        {language === "en"
                          ? "Optical Characteristics  (Corrected Eye)"
                          : "光学性質 (正確な)"}
                      </Text>
                      <Stack mt="md">
                        <SimpleGrid cols={2}>
                          <Text size="xs" fw={600}>
                            {language === "en"
                              ? "Left Power"
                              : "左側の光学性質"}
                          </Text>
                          <Text size="xs" c="dimmed">
                            0.00
                          </Text>
                        </SimpleGrid>
                      </Stack>
                    </div>
                  </SimpleGrid>
                </Grid.Col>
              </Grid>
            </Paper>
          </Center>

          <Center mt="md">
            <Paper h={"11.7in"} w={"8.5in"}>
              <Grid gutter={0}>
                <Grid.Col span={{ base: 12, lg: 8 }} p="xl">
                  <Text size="xs" fw={800}>
                    {language === "en" ? "About Me" : "自己紹介"}
                  </Text>

                  <Text size="xs" mt="md">
                    {language === "en"
                      ? "I am Ram Prasad Shrestha, a dedicated professional from Lalitpur, Nepal, with a strong background in hospitality. With a warm personality and excellent teamwork skills, I strive to provide the best service in every role. I am adaptable, eager to learn, and passionate about working in Japan to expand my skills and contribute meaningfully."
                      : "私はネパール・ラリトプル出身のラム・プラサード・シュレスタです。ホスピタリティ分野での経験があり、明るい性格と優れたチームワークを活かして、常に最高のサービスを提供することを目指しています。日本で働きながら自分のスキルをさらに伸ばし、社会に貢献したいと考えています。"}
                  </Text>
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
                          {language === "en" ? "Year" : "年"}
                        </Table.Th>
                        <Table.Th w={200}>
                          {language === "en" ? "Institute" : "卒業先"}
                        </Table.Th>
                        <Table.Th>
                          {language === "en" ? "Location" : "卒業地"}
                        </Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      {academics.map((item, index) => (
                        <Table.Tr key={index}>
                          <Table.Td>{item.index}</Table.Td>
                          <Table.Td>{item.year_range}</Table.Td>
                          <Table.Td>
                            <b>
                              {language == "en" ? item.degree : item.degree_jp}
                            </b>
                          </Table.Td>
                          <Table.Td>
                            {language == "en"
                              ? item.institution
                              : item.institution_jp}
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
                          {language === "en" ? "Year" : "年"}
                        </Table.Th>
                        <Table.Th w={300}>
                          {language === "en" ? "Organization" : "会社名"}
                        </Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      {work.map((item, index) => (
                        <Table.Tr key={index}>
                          <Table.Td>{item.index}</Table.Td>
                          <Table.Td>{item.year_range}</Table.Td>
                          <Table.Td>
                            <b>
                              {language == "en"
                                ? item.company
                                : item.company_jp}
                            </b>
                          </Table.Td>
                        </Table.Tr>
                      ))}
                    </Table.Tbody>
                  </Table>

                  <Divider my="md" />

                  <Text size="xs" fw={800}>
                    {language === "en" ? "Medical Details" : "医療情報"}
                  </Text>

                  <SimpleGrid cols={3} spacing="xs" mt="md">
                    <div>
                      <Text size="xs" fw={600} my="xs" c="brand.6">
                        {language === "en"
                          ? "Optical Characteristics  (Natural Eye)"
                          : "光学性質 (自然的)"}{" "}
                      </Text>
                      <Stack mt="md">
                        <SimpleGrid cols={2}>
                          <Text size="xs" fw={600}>
                            {language === "en"
                              ? "Left Power"
                              : "左側の光学性質"}
                          </Text>
                          <Text size="xs" c="dimmed">
                            0.00
                          </Text>
                        </SimpleGrid>
                      </Stack>
                    </div>

                    <div>
                      <Text size="xs" fw={600} my="xs" c="brand.6">
                        {language === "en"
                          ? "Optical Characteristics  (Corrected Eye)"
                          : "光学性質 (正確な)"}
                      </Text>
                      <Stack mt="md">
                        <SimpleGrid cols={2}>
                          <Text size="xs" fw={600}>
                            {language === "en"
                              ? "Left Power"
                              : "左側の光学性質"}
                          </Text>
                          <Text size="xs" c="dimmed">
                            0.00
                          </Text>
                        </SimpleGrid>
                      </Stack>
                    </div>
                  </SimpleGrid>
                </Grid.Col>
                <Grid.Col
                  span={{ base: 12, lg: 4 }}
                  p="xl"
                  bg="brand.0"
                  h="11.7in"
                >
                  <Stack gap="xl">
                    <Stack gap="xs">
                      <Text size="2.5rem" fw={800}>
                        {language === "en"
                          ? "Ram Prasad Shrestha"
                          : "ラム・プラサード・シュレスタ"}
                      </Text>
                      <Text size="xs">
                        {language === "en"
                          ? "Looking for jobs on"
                          : "求職者が探している職業"}
                        <br />{" "}
                        <b>
                          {language === "en" ? "Hospitality" : "ホスピタリティ"}
                        </b>
                      </Text>
                    </Stack>

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
                      <Text size="xs" fw={800}>
                        {language === "en" ? "PROFILE" : "プロフィール"}
                      </Text>

                      <SimpleGrid cols={2} spacing="xs" mt="xl">
                        {personal.map((item) => (
                          <React.Fragment key={item.key}>
                            <Text size="xs" fw={800}>
                              {language === "jp" ? item.label_jp : item.label}
                            </Text>
                            <Text size="xs">
                              {language === "jp"
                                ? data[`${item.key}_jp`] || data[item.key]
                                : data[item.key]}
                            </Text>
                          </React.Fragment>
                        ))}
                      </SimpleGrid>
                    </div>
                  </Stack>
                </Grid.Col>
              </Grid>
            </Paper>
          </Center>

          <Center mt="md">
            <Paper h={"11.7in"} w={"8.5in"} pos="relative">
              <Paper bg="brand.9" h={5} radius={0} />
              <Paper
                bg="brand.9"
                h={5}
                radius={0}
                style={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                }}
              />

              <Paper bg="blue.0t" p=".5in">
                <Grid gutter={"lg"}>
                  <Grid.Col span={9}>
                    <Stack gap="xs">
                      <Text size="2.5rem" fw={800}>
                        {language === "en"
                          ? "Ram Prasad Shrestha"
                          : "ラム・プラサード・シュレスタ"}
                      </Text>

                      <Text size="xs" fw={800}>
                        {language === "en"
                          ? "Looking for jobs on"
                          : "求職者が探している職業"}{" "}
                        <b>
                          {language === "en" ? "Hospitality" : "ホスピタリティ"}
                        </b>
                      </Text>

                      <Text size="xs">
                        {language === "en"
                          ? "I am Ram Prasad Shrestha, a dedicated professional from Lalitpur, Nepal, with a strong background in hospitality. With a warm personality and excellent teamwork skills, I strive to provide the best service in every role. I am adaptable, eager to learn, and passionate about working in Japan to expand my skills and contribute meaningfully."
                          : "私はネパール・ラリトプル出身のラム・プラサード・シュレスタです。ホスピタリティ分野での経験があり、明るい性格と優れたチームワークを活かして、常に最高のサービスを提供することを目指しています。日本で働きながら自分のスキルをさらに伸ばし、社会に貢献したいと考えています。"}
                      </Text>
                    </Stack>

                    <SimpleGrid cols={2} spacing="xl">
                      <SimpleGrid cols={2} spacing="xs" mt="xl">
                        {personal.slice(0, 5).map((item) => (
                          <React.Fragment key={item.key}>
                            <Text size="xs" fw={800}>
                              {language === "jp" ? item.label_jp : item.label}
                            </Text>
                            <Text size="xs">
                              {language === "jp"
                                ? data[`${item.key}_jp`] || data[item.key]
                                : data[item.key]}
                            </Text>
                          </React.Fragment>
                        ))}
                      </SimpleGrid>

                      <SimpleGrid cols={2} spacing="xs" mt="xl">
                        {personal.slice(6, 11).map((item) => (
                          <React.Fragment key={item.key}>
                            <Text size="xs" fw={800}>
                              {language === "jp" ? item.label_jp : item.label}
                            </Text>
                            <Text size="xs">
                              {language === "jp"
                                ? data[`${item.key}_jp`] || data[item.key]
                                : data[item.key]}
                            </Text>
                          </React.Fragment>
                        ))}
                      </SimpleGrid>
                    </SimpleGrid>
                  </Grid.Col>
                  <Grid.Col span={3}>
                    <Stack>
                      <Image
                        radius="lg"
                        src={
                          "https://r2.erweima.ai/imgcompressed/compressed_37c94e20cb613116de36841ba02309d2.webp"
                        }
                      />

                      <Paper
                        radius="lg"
                        style={{
                          overflow: "hidden",
                        }}
                      >
                        <AspectRatio ratio={16 / 9}>
                          <iframe
                            src="https://www.youtube.com/embed/nBydCvT195k?si=OgzJYNdx5yQkgNaZ"
                            title="YouTube video player"
                            style={{ border: 0 }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </AspectRatio>
                      </Paper>
                    </Stack>
                  </Grid.Col>
                </Grid>
              </Paper>

              <Box p=".5in">
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
                        {language === "en" ? "Year" : "年"}
                      </Table.Th>
                      <Table.Th w={200}>
                        {language === "en" ? "Institute" : "卒業先"}
                      </Table.Th>
                      <Table.Th>
                        {language === "en" ? "Location" : "卒業地"}
                      </Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {academics.map((item, index) => (
                      <Table.Tr key={index}>
                        <Table.Td>{item.index}</Table.Td>
                        <Table.Td>{item.year_range}</Table.Td>
                        <Table.Td>
                          <b>
                            {language == "en" ? item.degree : item.degree_jp}
                          </b>
                        </Table.Td>
                        <Table.Td>
                          {language == "en"
                            ? item.institution
                            : item.institution_jp}
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
                        {language === "en" ? "Year" : "年"}
                      </Table.Th>
                      <Table.Th w={300}>
                        {language === "en" ? "Organization" : "会社名"}
                      </Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {work.map((item, index) => (
                      <Table.Tr key={index}>
                        <Table.Td>{item.index}</Table.Td>
                        <Table.Td>{item.year_range}</Table.Td>
                        <Table.Td>
                          <b>
                            {language == "en" ? item.company : item.company_jp}
                          </b>
                        </Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>

                <Divider my="md" />

                <Text size="xs" fw={800}>
                  {language === "en" ? "Medical Details" : "医療情報"}
                </Text>

                <SimpleGrid cols={3} spacing="xs" mt="md">
                  <div>
                    <Text size="xs" fw={600} my="xs" c="brand.6">
                      {language === "en"
                        ? "Optical Characteristics  (Natural Eye)"
                        : "光学性質 (自然的)"}{" "}
                    </Text>
                    <Stack mt="md">
                      <SimpleGrid cols={2}>
                        <Text size="xs" fw={600}>
                          {language === "en" ? "Left Power" : "左側の光学性質"}
                        </Text>
                        <Text size="xs" c="dimmed">
                          0.00
                        </Text>
                      </SimpleGrid>
                    </Stack>
                  </div>

                  <div>
                    <Text size="xs" fw={600} my="xs" c="brand.6">
                      {language === "en"
                        ? "Optical Characteristics  (Corrected Eye)"
                        : "光学性質 (正確な)"}
                    </Text>
                    <Stack mt="md">
                      <SimpleGrid cols={2}>
                        <Text size="xs" fw={600}>
                          {language === "en" ? "Left Power" : "左側の光学性質"}
                        </Text>
                        <Text size="xs" c="dimmed">
                          0.00
                        </Text>
                      </SimpleGrid>
                    </Stack>
                  </div>
                </SimpleGrid>
              </Box>
            </Paper>
          </Center>
        </Container>

        <Center pb="xl">
          <Paper h={"11.7in"} w={"8.5in"} p="1in">
            <table className={classes.cvtable}>
              <tbody>
                <tr>
                  <td
                    style={{
                      height: ".5in",
                    }}
                  >
                    <b>MT307</b>
                  </td>
                  <td></td>
                  <td colSpan={5}>
                    <b>履歴書</b>
                  </td>
                  <td colSpan={2}>2025年5月27日 現在</td>
                  <td colSpan={2} rowSpan={3}>
                    <img src="https://r2.erweima.ai/imgcompressed/compressed_37c94e20cb613116de36841ba02309d2.webp" />
                  </td>
                </tr>

                <tr>
                  <td className={classes.tdHighlight}>フリガナ</td>
                  <td colSpan={8}> サリップ　ヒダヤットゥラ－</td>
                </tr>

                <tr>
                  <td
                    style={{
                      height: ".4in",
                    }}
                    className={classes.tdHighlight}
                  >
                    氏名{" "}
                  </td>
                  <td colSpan={8}>{`SARIP HIDAYATULLAH`}</td>
                </tr>

                <tr>
                  <td className={classes.tdHighlight}>生年月日 </td>
                  <td colSpan={2}>2000年08月06日</td>
                  <td className={classes.tdHighlight}>年齢</td>
                  <td>24</td>
                  <td className={classes.tdHighlight}>性別</td>
                  <td>男</td>
                  <td className={classes.tdHighlight}>国籍</td>
                  <td colSpan={2}>インドネシア</td>
                </tr>

                <tr>
                  <td
                    style={{
                      width: "10%",
                    }}
                    className={classes.tdHighlight}
                  >
                    視力{" "}
                  </td>
                  <td
                    style={{
                      width: "9%",
                    }}
                    className={classes.tdHighlight}
                  >
                    左{" "}
                  </td>
                  <td
                    style={{
                      width: "9%",
                    }}
                  >
                    正常
                  </td>
                  <td
                    style={{
                      width: "9%",
                    }}
                    className={classes.tdHighlight}
                  >
                    右
                  </td>
                  <td
                    style={{
                      width: "9%",
                    }}
                  >
                    正常
                  </td>
                  <td
                    style={{
                      width: "9%",
                    }}
                    className={classes.tdHighlight}
                  >
                    身長
                  </td>
                  <td
                    style={{
                      width: "9%",
                    }}
                  >
                    167
                  </td>
                  <td
                    style={{
                      width: "10%",
                    }}
                    className={classes.tdHighlight}
                  >
                    体重
                  </td>
                  <td colSpan={2}>80</td>
                </tr>

                <tr>
                  <td className={classes.tdHighlight}>洋服サイズ</td>
                  <td colSpan={2}>XL</td>
                  <td className={classes.tdHighlight}>靴サイズ</td>
                  <td>27.5</td>
                  <td className={classes.tdHighlight}>飲酒</td>
                  <td>飲まない</td>
                  <td className={classes.tdHighlight}>喫煙</td>
                  <td
                    style={{
                      width: "11%",
                    }}
                  >
                    吸わない
                  </td>
                  <td
                    style={{
                      width: "13%",
                    }}
                    className={classes.tdHighlight}
                  >
                    在留資格
                  </td>
                </tr>

                <tr>
                  <td className={classes.tdHighlight} rowSpan={2}>
                    現在地
                  </td>
                  <td colSpan={2}>〒45166</td>
                  <td colSpan={4}>西ジャワ インドネシア</td>
                  <td className={classes.tdHighlight}>利き手 </td>
                  <td>右</td>
                  <td></td>
                </tr>

                <tr>
                  <td colSpan={6}>JAWA BARAT INDONESIA</td>
                  <td className={classes.tdHighlight}>血液型</td>
                  <td>AB型</td>
                  <td className={classes.tdHighlight}>在留期限</td>
                </tr>

                <tr>
                  <td className={classes.tdHighlight}>日本語レベル：</td>
                  <td colSpan={3}>JFT A2</td>
                  <td className={classes.tdHighlight}>宗教 </td>
                  <td colSpan={2}>イスラム</td>
                  <td className={classes.tdHighlight}>既婚状況 </td>
                  <td>未婚</td>
                  <td></td>
                </tr>

                <tr>
                  <td
                    className={classes.tdHighlight}
                    colSpan={2}
                    style={{
                      textAlign: "left",
                    }}
                  >
                    緊急連絡先
                  </td>
                  <td colSpan={3}></td>
                  <td
                    colSpan={3}
                    className={classes.tdHighlight}
                    style={{
                      textAlign: "left",
                    }}
                  >
                    EMAIL
                  </td>
                  <td
                    colSpan={2}
                    className={classes.tdHighlight}
                    style={{
                      textAlign: "left",
                    }}
                  >
                    連絡先
                  </td>
                </tr>

                <tr>
                  <td
                    className={classes.tdHighlight}
                    colSpan={2}
                    style={{
                      textAlign: "left",
                    }}
                  >
                    名前
                  </td>
                  <td
                    colSpan={3}
                    style={{
                      textAlign: "left",
                    }}
                  >
                    NUR AZIZAH
                  </td>
                  <td
                    colSpan={3}
                    rowSpan={2}
                    style={{
                      textAlign: "left",
                    }}
                  ></td>
                  <td
                    colSpan={2}
                    rowSpan={2}
                    style={{
                      textAlign: "left",
                    }}
                  ></td>
                </tr>

                <tr>
                  <td className={classes.tdHighlight} colSpan={2}>
                    続柄
                  </td>
                  <td colSpan={3}>姉</td>
                </tr>

                {/* Academics */}

                <tr>
                  <td className={classes.tdHighlight} colSpan={10}>
                    学歴
                  </td>
                </tr>

                <tr>
                  <td>2015</td>
                  <td>7</td>
                  <td
                    colSpan={7}
                    style={{
                      textAlign: "left",
                    }}
                  >
                    【インドネシア】ススカン第 1国立職業高等学校
                  </td>
                  <td>入学</td>
                </tr>

                <tr>
                  <td></td>
                  <td></td>
                  <td
                    colSpan={8}
                    style={{
                      borderRight: "none!important",
                      textAlign: "right",
                      paddingRight: ".9in",
                    }}
                  >
                    以上
                  </td>
                </tr>

                {/* Work */}

                <tr className={classes.hidden}>
                  <td>-</td>
                </tr>

                <tr>
                  <td className={classes.tdHighlight} colSpan={10}>
                    学歴
                  </td>
                </tr>

                <tr>
                  <td>2015</td>
                  <td>7</td>
                  <td
                    colSpan={7}
                    style={{
                      textAlign: "left",
                    }}
                  >
                    【インドネシア】ススカン第 1国立職業高等学校
                  </td>
                  <td>入学</td>
                </tr>

                <tr>
                  <td></td>
                  <td></td>
                  <td
                    colSpan={8}
                    style={{
                      borderRight: "none!important",
                      textAlign: "right",
                      paddingRight: ".9in",
                    }}
                  >
                    以上
                  </td>
                </tr>

                {/* Work */}

                <tr className={classes.hidden}>
                  <td>-</td>
                </tr>

                <tr>
                  <td className={classes.tdHighlight} colSpan={10}>
                    学歴
                  </td>
                </tr>

                <tr>
                  <td>2015</td>
                  <td>7</td>
                  <td
                    colSpan={8}
                    style={{
                      textAlign: "left",
                    }}
                  >
                    【インドネシア】ススカン第 1国立職業高等学校
                  </td>
                </tr>

                <tr className={classes.hidden}>
                  <td>-</td>
                </tr>

                <tr>
                  <td className={classes.tdHighlight} colSpan={10}>
                    学歴
                  </td>
                </tr>

                <tr>
                  <td
                    colSpan={10}
                    style={{
                      textAlign: "left",
                      padding: ".1in 4px",
                    }}
                  >
                    <p>
                      私は責任感が強く、さまざまな仕事に柔軟に対応できる性格です。大学卒業後は銀行でカスタマーサービスとして勤務し、お客様への丁寧な対応や対人スキルを身に
                      つけました。その後、日本に来てからはスシローのキッチンでアルバイトを経験し、初めての現場でも積極的に学ぶ姿勢を大切にしながら、日本語の環境にもスムーズに
                      適応することができました。
                      <br />
                      <br />
                      私の姉は日本で介護の仕事をしており、彼女から仕事内容や大変さ、やりがいについて多くの話を聞きました。その話を通じて、私も人の役に立つ仕事に魅力を感じ、
                      介護の仕事に興味を持つようになりました。現在は介護について勉強しており、将来的には介護福祉士の資格を取得したいと考えています。高齢者の方々が安心して
                      暮らせるよう、心のこもった支援ができる介護職員を目指しています。
                    </p>
                  </td>
                </tr>

                <tr className={classes.hidden}>
                  <td>-</td>
                </tr>

                <tr>
                  <td className={classes.tdHighlight} colSpan={10}>
                    学歴
                  </td>
                </tr>
                <tr>
                  <td colSpan={10}></td>
                </tr>
              </tbody>
            </table>
          </Paper>
        </Center>
      </section>
    </>
  );
}
