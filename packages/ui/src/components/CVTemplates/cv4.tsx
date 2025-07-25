"use client";

import {
  AspectRatio,
  Avatar,
  Box,
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

export function CV4({
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
        overflow: "hidden",
      }}
    >
      <Watermark logo={logo} />
      <Paper radius={0} pos="absolute" w="100%" h=".05in" bg={color + ".6"} />

      <Grid gutter={0}>
        <Grid.Col span={12}>
          <Paper bg={color + ".0"} p="xl">
            <Grid gutter={"lg"} align="center">
              <Grid.Col span={8}>
                <Text size="2.5rem" fw={800}>
                  {language === "en"
                    ? `${data?.first_name} ${data?.middle_name} ${data?.last_name}`
                    : `${data?.jp_last_name} ${data?.jp_first_name} ${data?.jp_middle_name}`}
                </Text>

                <Text size="10px" lh="12px" fw={800} mt="xl">
                  {language === "en" ? "About Me" : "自己紹介"}
                </Text>

                <Text size="10px" lh="12px" mt="md">
                  {language === "en" ? data?.remark : data?.jp_remark}
                </Text>

                <SimpleGrid cols={2} spacing="xs" mt="xl">
                  <div>
                    <Text size="11px" fw={800}>
                      My Personal Traits
                    </Text>
                    <Text size="10px" lh="12px" mt="sm">
                      {language === "en"
                        ? data?.personal_traits
                        : data?.jp_personal_traits}
                    </Text>
                  </div>

                  <div>
                    <Text size="11px" fw={800}>
                      What motivates me.
                    </Text>
                    <Text size="10px" lh="12px" mt="sm">
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
                          {language === "en"
                            ? data?.weak_point
                            : data?.jp_weak_point}
                        </Text>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </SimpleGrid>
              </Grid.Col>
              <Grid.Col span={3} offset={1}>
                <Text size="10px" fw={700} ta="right" mt={-24} mb={24}>
                  Printed :{" "}
                  {language == "en"
                    ? new Date(date).toLocaleDateString()
                    : new Date(date).toLocaleDateString("ja")}
                </Text>
                <Image src={data?.image} />
              </Grid.Col>
            </Grid>
          </Paper>
        </Grid.Col>
        <Grid.Col span={8} p="xl">
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
                <Table.Th w={100}>
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
                <Table.Th w={100}>
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

        <Grid.Col
          span={4}
          p="xl"
          //  bg={color + ".0"}
          h="10.35in"
        >
          <Stack gap="xs">
            <div>
              <Text size="xs" fw={800}>
                {language === "en" ? "Profile" : "プロフィール"}
              </Text>

              <SimpleGrid cols={2} spacing="xs" mt="md">
                {personalDetails.map((item, index) => (
                  <React.Fragment key={index}>
                    <Text size="xs" fw={800}>
                      {language === "jp" ? item.label_jp : item.label}
                    </Text>
                    <Text size="xs">
                      {language === "jp" ? data[item.jpKey] : data[item.enKey]}
                    </Text>
                  </React.Fragment>
                ))}
              </SimpleGrid>
            </div>

            <Divider />

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
          </Stack>
        </Grid.Col>
      </Grid>
    </Paper>
  );
}
