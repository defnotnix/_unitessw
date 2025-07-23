"use client";

import { ListHandler } from "@vframework/core";
import { ModuleTableLayout, triggerNotification } from "@vframework/ui";
import { useRouter } from "next/navigation";
import {
  createRecord,
  deleteRecord,
  getRecords,
  toggleLogStatus,
  updateRecord,
} from "../../module.api";

import {
  ActionIcon,
  AspectRatio,
  Avatar,
  Badge,
  Box,
  Drawer,
  Group,
  Menu,
  Paper,
  SimpleGrid,
  Stack,
  Table,
  Text,
} from "@mantine/core";
import { ArrowUpRightIcon, Pen } from "@phosphor-icons/react";
import { moduleConfig } from "../../module.config";

import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { _Form as Form } from "../../form/form";
import { formProps } from "../../form/form.config";

import { apiPersonalInformation } from "@/modules/admin/applicants/form/module.api";
import { personalDetails } from "@vframework/ui";

import { modals } from "@mantine/modals";
import { useMutation } from "@tanstack/react-query";
import React from "react";

export function _List() {
  const router = useRouter();

  // * State

  const language: any = "en";
  const lang: any = "en";

  const [info, setInfo] = useState<any>({});
  const [opened, { open, close }] = useDisclosure();

  const { mutate } = useMutation({
    mutationKey: ["admin", "cv"],
    mutationFn: async (id) => {
      const res: any = await apiPersonalInformation.get(id);

      

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

  return (
    <>
      <ListHandler
        endpoint={moduleConfig.endpoint}
        moduleKey={moduleConfig.moduleKey}
        getRecords={getRecords}
        enableServerPagination
        enableServerSearch
      >
        <ModuleTableLayout
          {...moduleConfig}
          idAccessor="id"
          disableAdd
          disableDelete
          disableEdit
          apiEdit={updateRecord}
          apiCreate={createRecord}
          apiDelete={deleteRecord}
          columns={[
            {
              accessor: "seeker.id",
              title: "Seeker",
              render: (record: any) => (
                <Group wrap="nowrap">
                  <Text size="xs" fw={600}>
                    {record.seeker?.name}
                  </Text>
                  <Text size="xs" opacity={0.5}>
                    {record.seeker?.email}
                  </Text>
                </Group>
              ),
              sortable: true,
            },
            {
              accessor: "applicant.id",
              title: "Interested Applicant",
              render: (record: any) => (
                <Group wrap="nowrap">
                  <Text size="xs" fw={600}>
                    {record.applicant?.name}
                  </Text>
                  <Text size="xs" opacity={0.5}>
                    {record.applicant?.email}
                  </Text>
                  <ActionIcon
                    variant="subtle"
                    onClick={async () => {
                      await mutate(record.applicant?.id);
                      open();
                    }}
                  >
                    <ArrowUpRightIcon />
                  </ActionIcon>
                </Group>
              ),
              sortable: true,
            },
            {
              accessor: "intent",
              title: "Intent",
              render: (record: any) => {
                return (
                  <>
                    {record.intent == "Interview" ? (
                      <Badge color="indigo" variant="filled" size="sm">
                        For Interview
                      </Badge>
                    ) : (
                      <Badge color="indigo" variant="filled" size="sm">
                        Interested
                      </Badge>
                    )}
                  </>
                );
              },
              sortable: true,
            },
            {
              accessor: "status",
              title: "Status",
              render: () => (
                <Badge variant="light" size="sm">
                  Pending Review
                </Badge>
              ),
              sortable: true,
            },
          ]}
          // * TABS

          // * TABLE PROPS
          //tableprops={{ height: "calc(100vh - 200px)" }}
          // * ROW COLORS
          rowStyle={({ gender }: any) => ({
            background:
              gender === "male" ? "var(--mantine-color-indigo-0)" : "",
          })}
          // * EXTRA ACTIONS
          extraActions={({ row, refetch }) => (
            <>
              <Menu.Item
                leftSection={<Pen />}
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
                          Are you sure you want to accept this request?
                        </Text>
                      </Group>
                    ),
                    children: (
                      <>
                        <Text size="xs" my="md">
                          This will mark this request as accepted for both you
                          and the seeker account.
                        </Text>
                      </>
                    ),
                    labels: {
                      confirm: "Confirm",
                      cancel: "Cancel",
                    },
                    confirmProps: {
                      color: "brand",
                    },
                    onConfirm: () => {
                      triggerNotification.form.isLoading({});

                      toggleLogStatus(row.id)
                        .then((res) => {
                          if (!res.err) {
                            refetch();
                            triggerNotification.form.isSuccess({
                              message: "Request Accepted",
                            });
                          }
                        })
                        .catch((err) => {
                          
                          triggerNotification.form.isError({
                            message: "Request Rejected",
                          });
                        });
                    },
                    styles: {
                      header: {
                        background: "var(--mantine-color-brand-0)",
                      },
                    },
                    size: "sm",
                  });
                }}
              >
                Accept Request
              </Menu.Item>
            </>
          )}
          // * MODAL CONFIG
          hasModalForms
          modalFormProps={{ width: "lg", formProps }}
          modalForm={<Form />}
          hasServerSearch
        />
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
