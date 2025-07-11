/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useLanguage } from "@/layouts/app/app.context";
import { apiPersonalInformation } from "@/modules/applicantProfile/module.api";
import {
  ActionIcon,
  Badge,
  Button,
  Drawer,
  Grid,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { BagIcon, BookmarkIcon, CheckCircleIcon } from "@phosphor-icons/react";
import { useMutation } from "@tanstack/react-query";
import { ApplicantProfile } from "@vframework/ui";
import dayjs from "dayjs";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// --------------------
// TypeO
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
export function UserCard({
  applicant,
  onSuccessInterest,
  onSuccessBooking,
  onSuccessWishlist,
}: {
  applicant: Applicant;
  onSuccessInterest?: any;
  onSuccessBooking?: any;
  onSuccessWishlist?: any;
}) {
  const [tokenData, setTokenData] = useState<any>(null);

  useEffect(() => {
    const token = sessionStorage.getItem("sswtoken");
    if (token) {
      setTokenData(jwtDecode(token));
    }
  }, []);

  const { language } = useLanguage();
  const lang = language === "jp" ? "jp" : "en";
  const t = getTranslation(lang);
  const Router = useRouter();

  const [opened, { open, close }] = useDisclosure();

  const [info, setInfo] = useState<any>({});

  const { mutate } = useMutation({
    mutationKey: ["admin", "cv"],
    mutationFn: async () => {
      const res: any = await apiPersonalInformation.get(applicant.id);

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
              </Group>
            </Group>

            <Grid align="center" py="xs">
              <Grid.Col span={{ base: 12, lg: 5 }}>
                <Group gap="md" wrap="nowrap" mb="sm">
                  <Image h={120} w={100} src={applicant.image} alt="x" />
                  <div>
                    <Text size="1.xs" mb={4} fw={800}>
                      {applicant?.code}
                    </Text>
                    <Text size="1.3rem" mb={4} fw={800}>
                      {getLangValue(
                        `${applicant.first_name} ${applicant.middle_name} ${applicant.last_name}`,
                        `${applicant.jp_first_name} ${applicant.jp_middle_name} ${applicant.jp_last_name}`,
                        lang
                      )}
                    </Text>
                    <Text size="xs" opacity={0.8} fw={600}>
                      {`${dayjs().diff(dayjs(applicant.date_of_birth), "year")} ${lang === "en" ? "years old" : "歳"}`}
                      <br />
                      {`${
                        lang === "en"
                          ? applicant.gender
                          : applicant.gender === "Male"
                            ? "男"
                            : applicant.gender === "Female"
                              ? "女性"
                              : "その他"
                      } / ${applicant.is_married ? t.married : t.unmarried}`}
                    </Text>
                  </div>
                </Group>
              </Grid.Col>

              <Grid.Col span={{ base: 12, lg: 7 }}>
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
        <ApplicantProfile info={info} lang={lang} />
      </Drawer>
    </>
  );
}
