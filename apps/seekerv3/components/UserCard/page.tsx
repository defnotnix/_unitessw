"use client";

import {
  Avatar,
  Badge,
  Button,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { CheckCircleIcon } from "@phosphor-icons/react";
import dayjs from "dayjs";
import { useLanguage } from "@/layouts/app/app.context";
import { useRouter } from "next/navigation";

// --------------------
// Type
// --------------------
type Applicant = any;

// --------------------
// i18n Map
// --------------------
const getTranslation = (lang: "en" | "jp") => ({
  verified: lang === "en" ? "Verified Applicant" : "認証済み応募者",
  viewProfile: lang === "en" ? "View Profile" : "プロフィールを見る",
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

  const genderLabel: any = {
    M: t.male,
    F: t.female,
    O: t.other,
  };

  const age = dayjs().diff(applicant.dob, "year");

  return (
    <Paper
      withBorder
      radius="md"
      style={{
        overflow: "hidden",
      }}
    >
      <Stack gap="lg" p="lg">
        {/* Top Section */}
        <Group justify="space-between">
          <Group>
            <Avatar size="xl" src={applicant.image} />
            <Stack gap={0}>
              <Group gap="xs" mb="xs">
                <Text size="xs">
                  {getLangValue(applicant.address, applicant.jp_address, lang)}
                </Text>
                <Badge
                  color="teal"
                  variant="light"
                  tt="none"
                  leftSection={<CheckCircleIcon />}
                >
                  {t.verified}
                </Badge>
              </Group>

              <Text size="1.3rem" mb={4}>
                {getLangValue(applicant.name, applicant.jp_name, lang)}
              </Text>
              <Text size="xs" opacity={0.5}>
                {`${age} ${t.dob} | ${genderLabel[applicant.gender]} / ${
                  applicant.is_married ? t.married : t.unmarried
                }`}
              </Text>
            </Stack>
          </Group>

          <Button
            size="md"
            radius="md"
            variant="light"
            onClick={() => {
              Router.push("/applicants/" + applicant.id);
            }}
          >
            {t.viewProfile}
          </Button>
        </Group>
      </Stack>

      {/* Detail Section */}
      {/* <SimpleGrid cols={3} bg="brand.0" px="xl" py="sm">
        <Text size="sm" opacity={0.6} fw={600}>
          {`${t.height}: ${applicant.height} cm`}
        </Text>
        <Text size="sm" opacity={0.6} fw={600}>
          {`${t.weight}: ${applicant.weight} kg`}
        </Text>
        <Text size="sm" opacity={0.6} fw={600}>
          {`${t.skill}: ${getLangValue(
            applicant.certified_skill,
            applicant.jp_certified_skill,
            lang
          )}`}
        </Text>
      </SimpleGrid> */}

      <SimpleGrid cols={3} bg="gray.0" px="xl" py="sm">
        <Text size="sm" opacity={0.6} fw={600}>
          {`${t.langCert}: ${getLangValue(
            applicant.language_certification,
            applicant.jp_language_certification,
            lang
          )}`}
        </Text>
        <Text size="sm" opacity={0.6} fw={600}>
          {`${t.strongPoint}: ${getLangValue(
            applicant.strong_point,
            applicant.jp_strong_point,
            lang
          )}`}
        </Text>
        <Text size="sm" opacity={0.6} fw={600}>
          {`${t.negativePoint}: ${getLangValue(
            applicant.negative_point,
            applicant.jp_negative_point,
            lang
          )}`}
        </Text>
      </SimpleGrid>
      {/* <SimpleGrid cols={3} bg="brand.0" px="xl" py="sm">
        {applicant.has_driving_license && (
          <Text size="sm" opacity={0.6} fw={600}>
            {t.driving}
          </Text>
        )}
        {applicant.has_passport && (
          <Text size="sm" opacity={0.6} fw={600}>
            {t.passport}
          </Text>
        )}
      </SimpleGrid> */}
    </Paper>
  );
}
