"use client";

import React, { useState } from "react";
//next

//mantine
import {
  AspectRatio,
  Avatar,
  Box,
  Drawer,
  Group,
  Menu,
  Paper,
  SimpleGrid,
  Stack,
  Table,
  Tabs,
  Text,
} from "@mantine/core";
import { ListHandler } from "@vframework/core";
import { ModuleTableLayout, triggerNotification } from "@vframework/ui";
import { columns } from "./list.columns";

//mantine

//icons

//styles

//components

//api
import { modals } from "@mantine/modals";
import { CheckIcon, ScrollIcon } from "@phosphor-icons/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { deleteRecord, getUnpublished, publishRecord } from "../../module.api";
import { moduleConfig } from "../../module.config";

import { useDisclosure } from "@mantine/hooks";
import { apiPersonalInformation } from "../../form/module.api";

import { personalDetails } from "../list";

export function _ListPending() {
  // * DEFINITIONS

  const Router = useRouter();

  // * CONTEXT

  // * STATE

  const [tab, setTab] = useState("all");

  const queryPlayerData = useQuery({
    queryKey: ["player", "playerData"],
    queryFn: async () => {
      return {};
    },
    initialData: {},
  });

  // const queryStats = useQuery({
  //   queryKey: ["dashboard", "stats"],
  //   queryFn: async () => {
  //     const res = [];
  //     console.log(res);
  //     return res;
  //   },
  // });

  // * FUNCTIONS

  const language: any = "en";
  const lang: any = "en";

  // * COMPONENTS
  const [info, setInfo] = useState<any>({});
  const [opened, { open, close }] = useDisclosure();

  const { data, isPending, mutate } = useMutation({
    mutationKey: ["admin", "cv"],
    mutationFn: async (id) => {
      const res: any = await apiPersonalInformation.get(id);

      console.log(res);

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
          mainId: res?.data?.id,
          pastvisits: res?.data?.a_japan_visit,
        });
        return {};
      } else {
        return {};
      }
    },
  });

  const RenderTable = () => {
    return (
      <ModuleTableLayout
        {...moduleConfig}
        moduleName="Pending Applicants"
        moduleDescription="Applicants not approved yet."
        moduleKey={[...moduleConfig.moduleKey, "pending"]}
        forceFilter={(records: any) => {
          if (tab === "all") {
            return records;
          } else if (tab === "active") {
            return records.filter((item: any) => {
              return (
                new Date(item.expiry_date) >
                new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)
              );
            });
          } else if (tab === "expiring") {
            return records.filter((item: any) => {
              const expiryDate = new Date(item.expiry_date);
              const now = new Date();
              return (
                expiryDate > now &&
                expiryDate <= new Date(now.getTime() + 10 * 24 * 60 * 60 * 1000)
              );
            });
          } else if (tab === "expired") {
            return records.filter((item: any) => {
              return new Date(item.expiry_date) <= new Date();
            });
          }
        }}
        apiDelete={deleteRecord}
        //Data
        columns={columns}
        //styles
        rowStyle={({ gender }: any) => {
          switch (gender) {
            case "male":
              return {
                background: "var(--mantine-color-indigo-0)",
              };

            default:
              return {};
          }
        }}
        // * EXTRA ACTIONS
        extraActions={({ row, refetch }) => (
          <>
            {" "}
            <Menu.Item
              leftSection={<ScrollIcon />}
              onClick={async () => {
                await mutate(row.id);
                open();
              }}
            >
              View Profile
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                Router.push(`/admin/applicants/all/${row.id}`);
              }}
              leftSection={<ScrollIcon />}
            >
              Generate CV
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                modals.openConfirmModal({
                  title: (
                    <Group>
                      <Text
                        size="sm"
                        style={{
                          fontWeight: 600,
                        }}
                      >
                        Are you sure you want to publish this applicant?
                      </Text>
                    </Group>
                  ),
                  children: (
                    <>
                      <Text size="xs" my="md">
                        This will make this profile visible to all registered
                        seekers.
                      </Text>
                    </>
                  ),
                  styles: {
                    header: {
                      background: "var(--mantine-color-brand-0)",
                    },
                  },
                  labels: {
                    confirm: "Publish",
                    cancel: "Cancel",
                  },
                  confirmProps: {
                    color: "brand",
                  },
                  onConfirm: async () => {
                    triggerNotification.form.isLoading({
                      title: "Publishing",
                      message: "Publishing in progress...",
                    });

                    publishRecord({}, row.id)
                      .then((res) => {
                        if (!res.err) {
                          triggerNotification.form.isSuccess({
                            title: "Published",
                            message: "Applicant has been published.",
                          });
                          refetch();
                        }
                      })
                      .catch((err) => {
                        triggerNotification.form.isError({
                          title: "Error",
                          message: err.message,
                        });
                      });
                  },
                });
              }}
              leftSection={<CheckIcon />}
            >
              Publish Applicant
            </Menu.Item>
          </>
        )}
      />
    );
  };

  // * ANIMATIONS

  return (
    <>
      <ListHandler
        endpoint={moduleConfig.endpoint}
        moduleKey={moduleConfig.moduleKey}
        enableServerPagination
        enableServerSearch
        getRecords={getUnpublished}
      >
        <Tabs value={tab} onChange={(e: any) => setTab(e)}>
          <RenderTable />
        </Tabs>
      </ListHandler>

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
                {lang === "en" ? info.full_name : info.furigana}
              </Text>
              <Text size="md" fw={600} c="white" opacity={0.5} mt={-8}>
                {lang === "en" ? "Registration Code : " : "候補者コード : "}
                {info.code}
              </Text>
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
          <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="xs">
            {/* Left Side */}
            <Stack gap="xs">
              {/* About Me */}
              <Paper withBorder>
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
          </SimpleGrid>

          <Text size="xl" fw={800} px="lg">
            {lang === "en" ? "Academics" : "学歴"}
          </Text>

          <Paper withBorder>
            <Table
              striped
              withTableBorder
              style={{
                fontSize: "var(--mantine-font-size-xs)",
              }}
            >
              <Table.Thead>
                <Table.Tr>
                  <Table.Th w={50}>#</Table.Th>
                  <Table.Th w={200}>
                    {language === "en" ? "Period" : "期間"}
                  </Table.Th>
                  <Table.Th w={200}>
                    {language === "en" ? "Institution" : "学校名"}
                  </Table.Th>
                  <Table.Th>
                    {language === "en" ? "Major / Notes" : "専攻・備考"}
                  </Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {info?.education?.map((item: any, index: any) => (
                  <Table.Tr key={index}>
                    <Table.Td>{index + 1}</Table.Td>
                    <Table.Td>
                      {`${item.start_month}, ${item.start_year} - ${item.end_month}, ${item.end_year}`}
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
          </Paper>

          <Text size="xl" fw={800} px="lg">
            {lang === "en" ? "Work History" : "勤務履歴"}
          </Text>

          <Paper withBorder>
            <Table
              striped
              withTableBorder
              style={{
                fontSize: "var(--mantine-font-size-xs)",
              }}
            >
              <Table.Thead>
                <Table.Tr>
                  <Table.Th w={50}>#</Table.Th>
                  <Table.Th w={200}>
                    {language === "en" ? "Period" : "期間"}
                  </Table.Th>
                  <Table.Th w={200}>
                    {language === "en" ? "Company" : "会社名"}
                  </Table.Th>
                  <Table.Th>
                    {language === "en" ? "Role / Notes" : "職種・備考"}
                  </Table.Th>
                </Table.Tr>
              </Table.Thead>

              <Table.Tbody>
                {info?.work_experience?.map((item: any, index: number) => (
                  <Table.Tr key={index}>
                    <Table.Td>{index + 1}</Table.Td>
                    <Table.Td>
                      {`${item.start_month}, ${item.start_year} - ${item.end_month}, ${item.end_year}`}
                    </Table.Td>
                    <Table.Td>
                      <b>
                        {language === "en" ? item.company : item.jp_company}
                      </b>
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
          </Paper>

          <Text size="xl" fw={800} px="lg">
            {lang === "en" ? "License Qualification" : "証明書"}
          </Text>

          <Paper withBorder>
            <Table
              striped
              withTableBorder
              style={{
                fontSize: "var(--mantine-font-size-xs)",
              }}
            >
              <Table.Thead>
                <Table.Tr>
                  <Table.Th w={50}>#</Table.Th>
                  <Table.Th w={120}>
                    {language === "en" ? "Date" : "日付"}
                  </Table.Th>
                  <Table.Th w={200}>
                    {language === "en" ? "License/Qualification" : "証明書"}
                  </Table.Th>
                  <Table.Th>{language === "en" ? "Status" : "状態"}</Table.Th>
                </Table.Tr>
              </Table.Thead>

              <Table.Tbody>
                {info?.licenses?.map((item: any, index: number) => (
                  <Table.Tr key={index}>
                    <Table.Td>{index + 1}</Table.Td>
                    <Table.Td>{item?.date_received}</Table.Td>
                    <Table.Td>
                      <b>{language === "en" ? item.name : item.jp_name}</b>
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

          <Text size="xl" fw={800} px="lg">
            {lang === "en" ? "Prevous Japan Visits" : "前回到日本の訪問履歴"}
          </Text>

          <Paper withBorder>
            <Table
              striped
              withTableBorder
              style={{
                fontSize: "var(--mantine-font-size-xs)",
              }}
            >
              <Table.Thead>
                <Table.Tr>
                  <Table.Th w={50}>#</Table.Th>
                  <Table.Th w={120}>
                    {language === "en" ? "Date" : "日付"}
                  </Table.Th>
                  <Table.Th w={200}>
                    {language === "en" ? "Purpose" : "目的"}
                  </Table.Th>
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
                      <b>
                        {language === "en" ? item.purpose : item.jp_purpose}
                      </b>
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Paper>
        </Stack>
      </Drawer>
    </>
  );
}
