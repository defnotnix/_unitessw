"use client";

import {
  ActionIcon,
  Avatar,
  Badge,
  Button,
  Grid,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import { BagIcon, BookmarkIcon, CheckCircleIcon } from "@phosphor-icons/react";
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

            <Grid align="center" py="xs">
              <Grid.Col span={{ base: 12, lg: 4 }}>
                <Group gap="xs" wrap="nowrap" mb="sm">
                  <Avatar size="md" src={applicant.image} color="brand">
                    XD
                  </Avatar>
                  <div>
                    <Text size="1.3rem" mb={4} fw={800}>
                      {getLangValue(applicant.name, applicant.jp_name, lang)}
                    </Text>
                    <Text size="xs" opacity={0.8} fw={600}>
                      {`${age} ${t.dob} / ${genderLabel[applicant.gender]} / ${
                        applicant.is_married ? t.married : t.unmarried
                      }`}
                    </Text>
                  </div>
                </Group>
              </Grid.Col>

              <Grid.Col span={{ base: 12, lg: 8 }}>
                <Text size="xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus delectus soluta placeat, veritatis eos blanditiis
                  consectetur fugiat et in. Labore ullam, iste enim nam aliquam
                  omnis fugit molestiae sapiente temporibus!
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
              <Tooltip label={t.saveCandidate}>
                <ActionIcon color="indigo">
                  <BookmarkIcon />
                </ActionIcon>
              </Tooltip>
            </Group>
          </Group>
        </Stack>

        {/* Detail Section */}
        <SimpleGrid cols={3} bg="gray.2" px="xl" py="sm" visibleFrom="lg">
          <Text size="xs" opacity={0.6} fw={600}>
            {`${t.height}`} : <b>{`${applicant.height} cm`}</b>
          </Text>
          <Text size="xs" opacity={0.6} fw={600}>
            {`${t.weight}`} : <b>{`${applicant.weight} kg`}</b>
          </Text>
          <Text size="xs" opacity={0.6} fw={600}>
            {`${t.skill} : `}{" "}
            <b>
              {`${getLangValue(
                applicant.certified_skill,
                applicant.jp_certified_skill,
                lang
              )}`}
            </b>
          </Text>
        </SimpleGrid>

        <SimpleGrid cols={3} bg="gray.0" px="xl" py="sm" visibleFrom="lg">
          <Text size="xs" opacity={0.6} fw={600}>
            {`${t.langCert}: `}{" "}
            <b>{`${getLangValue(
              applicant.language_certification,
              applicant.jp_language_certification,
              lang
            )}`}</b>
          </Text>
          <Text size="xs" opacity={0.6} fw={600}>
            {`${t.strongPoint}: `}{" "}
            <b>{`${getLangValue(
              applicant.strong_point,
              applicant.jp_strong_point,
              lang
            )}`}</b>
          </Text>
          <Text size="xs" opacity={0.6} fw={600}>
            {`${t.negativePoint}: `}{" "}
            <b>{`${getLangValue(
              applicant.negative_point,
              applicant.jp_negative_point,
              lang
            )}`}</b>
          </Text>
        </SimpleGrid>
      </Paper>
    </>
  );
}
