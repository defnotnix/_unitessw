"use client";

import {
  AspectRatio,
  Divider,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Table,
  Text,
} from "@mantine/core";
import React, { useEffect } from "react";
import { Watermark } from "./watermar";
import { personalDetails } from "./personalDetails";

export function CV1({
  color = "brand",
  data,
  language,
  printSt,
  logo,
  date,
}: {
  color: any;
  data: any;
  language: any;
  printSt: boolean;
  logo?: any;
  date: Date;
}) {
  useEffect(() => {}, [color]);

  return (
    <Paper
      h={"11.7in"}
      w={"8.5in"}
      pos="relative"
      style={{
        overflow: "none",
      }}
    >
      <Watermark logo={logo} />
      <Grid gutter={0}>
        <Grid.Col span={4} p="xl" bg={color + ".1"} h="11.7in">
          <Stack gap="xl">
            <Stack gap="xs">
              <Text size="2.5rem" fw={800}>
                {language === "en"
                  ? `${data?.first_name} ${data?.middle_name || ""} ${data?.last_name}`
                  : `${data?.jp_first_name} ${data?.jp_middle_name || ""} ${data?.jp_last_name}`}
              </Text>
            </Stack>

            <Image src={data?.image} />

            {!printSt && data?.youtube_link && (
              <AspectRatio ratio={16 / 9} mt={-16}>
                <iframe
                  src={data?.youtube_link}
                  title="YouTube video player"
                  style={{ border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </AspectRatio>
            )}

            <div>
              <Text size="xs" fw={800}>
                {language === "en" ? "PROFILE" : "プロフィール"}
              </Text>

              <SimpleGrid cols={2} spacing="xs" mt="xl">
                <React.Fragment>
                  <Text size="xs" fw={800}>
                    {language === "jp" ? "名前" : "Name"}
                  </Text>
                  <Text size="xs">
                    {language === "en"
                      ? `${data?.first_name} ${data?.middle_name} ${data?.last_name}`
                      : `${data?.jp_last_name} ${data?.jp_first_name} ${data?.jp_middle_name}`}
                  </Text>
                </React.Fragment>

                {personalDetails.map((item, index) => (
                  <React.Fragment key={index}>
                    <Text size="xs" fw={800}>
                      {language === "jp" ? item.label_jp : item.label}
                    </Text>
                    <Text size="xs">
                      {language === "jp" ? data[item.jpKey] : data[item.enKey]}{" "}
                      {item?.unit || ""}
                    </Text>
                  </React.Fragment>
                ))}
              </SimpleGrid>
            </div>
          </Stack>
        </Grid.Col>

        <Grid.Col span={8} p="xl">
          <Group justify="space-between">
            <Text size="xs" fw={800}>
              {language === "en" ? "About Me" : "自己紹介"}
            </Text>
            <Text size="10px" fw={700}>
              {language == "en" ? "Printed" : "印刷日時"} :{" "}
              {language == "en"
                ? new Date(date).toLocaleDateString()
                : new Date(date).toLocaleDateString("ja")}
            </Text>
          </Group>

          <Text size="10px" lh="13px" mt="md">
            {language === "en" ? data?.remark : data?.jp_remark}
          </Text>

          <Divider my="md" />

          <SimpleGrid cols={2} spacing="xs">
            <div>
              <Text size="11px" fw={800}>
                {language === "en" ? "My Personal Traits" : "個人特徴"}
              </Text>
              <Text size="10px" lh="13px" mt="sm">
                {language === "en"
                  ? data?.personal_traits
                  : data?.jp_personal_traits}
              </Text>
            </div>

            <div>
              <Text size="11px" fw={800}>
                {language === "en" ? "What motivates me." : "動機とは"}
              </Text>
              <Text size="10px" lh="13px" mt="sm">
                {language === "en"
                  ? data?.motivation_statement
                  : data?.jp_motivation_statement}
              </Text>
            </div>

            {data?.strong_point && data?.weakpoint ? (
              <>
                <div>
                  <Text size="11px" fw={800}>
                    {language === "en" ? "Strong Points" : "動機とは"}
                  </Text>
                  <Text size="10px" lh="13px" mt="sm">
                    {language === "en"
                      ? data?.strong_point
                      : data?.jp_strong_point}
                  </Text>
                </div>

                <div>
                  <Text size="11px" fw={800}>
                    {language === "en" ? "Weak Points" : "動機とは"}
                  </Text>
                  <Text size="10px" lh="13px" mt="sm">
                    {language === "en" ? data?.weak_point : data?.jp_weak_point}
                  </Text>
                </div>
              </>
            ) : (
              <></>
            )}
          </SimpleGrid>

          <Divider my="md" />

          <Text size="xs" fw={800}>
            {language === "en" ? "Academics" : "学歴"}
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
                    {`${item.start_month}, ${item.start_year} - ${item?.end_year ? `${item.end_month}, ${item.end_year}` : "Ongoing"}`}
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
            {language === "en" ? "Work History" : "勤務履歴"}
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
                    {`${item.start_month}, ${item.start_year} - ${item?.end_year ? `${item.end_month}, ${item.end_year}` : "Ongoing"}`}
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

          <Divider my="md" />
          <Text size="xs" fw={800}>
            {language === "en" ? "License Qualification" : "証明書"}
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
                  {language === "en" ? "Date" : "日付"}
                </Table.Th>
                <Table.Th w={150}>
                  {language === "en" ? "License/Qualification" : "証明書"}
                </Table.Th>
                <Table.Th>{language === "en" ? "Status" : "状態"}</Table.Th>
              </Table.Tr>
            </Table.Thead>

            <Table.Tbody>
              {data?.licenses?.map((item: any, index: number) => (
                <Table.Tr key={index}>
                  <Table.Td>{index + 1}</Table.Td>
                  <Table.Td>{`${item.month}, ${item.year} `}</Table.Td>
                  <Table.Td>
                    <b>{language === "en" ? item.name : item.jp_name}</b>
                  </Table.Td>
                  <Table.Td>{item?.status ? "Active" : "Expired"}</Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Grid.Col>
      </Grid>
    </Paper>
  );
}
