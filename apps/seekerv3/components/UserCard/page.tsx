"use client";

import {
  ActionIcon,
  AspectRatio,
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Divider,
  Drawer,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Table,
  Text,
  Tooltip,
} from "@mantine/core";
import {
  BagIcon,
  BellIcon,
  BookmarkIcon,
  CameraIcon,
  CheckCircleIcon,
  HeartIcon,
  XIcon,
} from "@phosphor-icons/react";
import dayjs from "dayjs";
import { useLanguage } from "@/layouts/app/app.context";
import { usePathname, useRouter } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiPersonalInformation } from "@/modules/applicantProfile/module.api";
import { moduleApiCall } from "@vframework/core";
import { triggerNotification } from "@vframework/ui";
import { jwtDecode } from "jwt-decode";
import { modals } from "@mantine/modals";
import { apiCancelInterview, apiUnnotify, markInterested } from "./module.api";

// --------------------
// Type
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
  onSuccess,
  onSuccessInterest,
  onSuccessBooking,
  onSuccessWishlist,
}: {
  applicant: Applicant;
  onSuccess?: any;
  onSuccessInterest?: any;
  onSuccessBooking?: any;
  onSuccessWishlist?: any;
}) {
  const tokenData: any = jwtDecode(sessionStorage.getItem("sswtoken") || "");

  const { language } = useLanguage();
  const lang = language === "jp" ? "jp" : "en";
  const t = getTranslation(lang);
  const Router = useRouter();

  const [opened, { open, close }] = useDisclosure();

  const Pathname = usePathname();

  const genderLabel: any = {
    M: t.male,
    F: t.female,
    O: t.other,
  };

  const age = dayjs().diff(applicant.dob, "year");

  const [info, setInfo] = useState<any>({});

  const { data, isPending, mutate } = useMutation({
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

  const personalDetails = {
    basicInfo: [
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
                  <Image h={120} w={100} src={applicant.image} />
                  <div>
                    <Text size="1.xs" mb={4} fw={800}>
                      {applicant?.code}
                    </Text>
                    <Text size="1.3rem" mb={4} fw={800}>
                      {getLangValue(
                        applicant.full_name,
                        applicant.furigana,
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

              <Group gap="2px">
                <Button
                  variant={!info?.interest ? "filled" : "white"}
                  size="xs"
                  leftSection={<BellIcon />}
                  onClick={() => {
                    const isNotified = info?.interest;
                    const titleText = isNotified
                      ? lang === "en"
                        ? "Remove Notification?"
                        : "通知を削除しますか？"
                      : lang === "en"
                        ? "Notify Candidate?"
                        : "候補者に通知しますか？";

                    const bodyText = isNotified
                      ? lang === "en"
                        ? "This candidate will be removed from your notification list."
                        : "この候補者は通知リストから削除されます。"
                      : lang === "en"
                        ? "The Unite SSW team will be notified of your interest in this candidate."
                        : "Unite SSW チームにあなたの関心が通知されます。";

                    const confirmText = isNotified
                      ? lang === "en"
                        ? "Remove"
                        : "削除"
                      : lang === "en"
                        ? "Notify"
                        : "通知";

                    modals.openConfirmModal({
                      title: (
                        <Group wrap="nowrap">
                          <ActionIcon size="sm" color="brand" variant="light">
                            <BellIcon />
                          </ActionIcon>
                          <Text size="sm" fw={600}>
                            {titleText}
                          </Text>
                        </Group>
                      ),
                      children: (
                        <Text size="xs" my="md">
                          {bodyText}
                          <br />
                          <br />
                          <b>
                            {lang === "en"
                              ? "Proceed with this action?"
                              : "この操作を実行しますか？"}
                          </b>
                        </Text>
                      ),
                      labels: {
                        confirm: confirmText,
                        cancel: lang === "en" ? "Cancel" : "キャンセル",
                      },
                      confirmProps: { color: "brand", size: "xs" },
                      cancelProps: { size: "xs" },
                      size: "sm",
                      styles: {
                        header: {
                          background: "var(--mantine-color-brand-1)",
                        },
                      },
                      onConfirm: async () => {
                        triggerNotification.form.isLoading({});

                        if (!isNotified) {
                          // Notify
                          try {
                            const res = await markInterested({
                              intent: "Interested",
                              seeker: tokenData?.user_id,
                              applicant: info?.mainId,
                            });
                            if (!res.error) {
                              setInfo({ ...info, interest: true });
                              triggerNotification.form.isSuccess({
                                message:
                                  lang === "en"
                                    ? "Candidate notified!"
                                    : "候補者に通知しました！",
                              });
                            } else {
                              throw new Error();
                            }
                          } catch {
                            triggerNotification.form.isError({
                              message:
                                lang === "en"
                                  ? "Notification failed!"
                                  : "通知に失敗しました！",
                            });
                          }
                        } else {
                          // Remove notification
                          try {
                            const res = await apiUnnotify(info?.mainId);
                            if (!res.error) {
                              if (onSuccessInterest) {
                                onSuccessInterest();
                              }
                              setInfo({ ...info, interest: false });
                              triggerNotification.form.isSuccess({
                                message:
                                  lang === "en"
                                    ? "Candidate removed from your notify list!"
                                    : "候補者は通知リストから削除されました！",
                              });
                            } else {
                              throw new Error();
                            }
                          } catch {
                            triggerNotification.form.isError({
                              message:
                                lang === "en"
                                  ? "Already Removed"
                                  : "すでに削除されています",
                            });
                          }
                        }
                      },
                    });
                  }}
                >
                  {!info?.interest
                    ? lang === "en"
                      ? "Notify"
                      : "候補者に通知する"
                    : lang === "en"
                      ? "Remove Notify"
                      : "通知を削除する"}
                </Button>

                <Button
                  size="xs"
                  leftSection={<CameraIcon />}
                  variant={!info?.interview ? "filled" : "white"}
                  onClick={() => {
                    const isBooked = info?.interview;

                    const titleText = isBooked
                      ? lang === "en"
                        ? "Cancel Interview?"
                        : "面接をキャンセルしますか？"
                      : lang === "en"
                        ? "Book for Interview?"
                        : "面接を予約しますか？";

                    const bodyText = isBooked
                      ? lang === "en"
                        ? "This will cancel the interview request for this candidate."
                        : "この候補者の面接リクエストをキャンセルします。"
                      : lang === "en"
                        ? "The Unite SSW team will be notified to arrange an interview with this candidate."
                        : "Unite SSW チームに面接の手配を依頼します。";

                    const confirmText = isBooked
                      ? lang === "en"
                        ? "Cancel"
                        : "キャンセル"
                      : lang === "en"
                        ? "Book"
                        : "予約";

                    modals.openConfirmModal({
                      title: (
                        <Group wrap="nowrap">
                          <ActionIcon size="sm" color="brand" variant="light">
                            <CameraIcon />
                          </ActionIcon>
                          <Text size="sm" fw={600}>
                            {titleText}
                          </Text>
                        </Group>
                      ),
                      children: (
                        <Text size="xs" my="md">
                          {bodyText}
                          <br />
                          <br />
                          <b>
                            {lang === "en"
                              ? "Proceed with this action?"
                              : "この操作を実行しますか？"}
                          </b>
                        </Text>
                      ),
                      labels: {
                        confirm: confirmText,
                        cancel: lang === "en" ? "Cancel" : "キャンセル",
                      },
                      confirmProps: { color: "brand", size: "xs" },
                      cancelProps: { size: "xs" },
                      size: "sm",
                      styles: {
                        header: {
                          background: "var(--mantine-color-brand-1)",
                        },
                      },
                      onConfirm: async () => {
                        triggerNotification.form.isLoading({});

                        try {
                          const res = isBooked
                            ? await apiCancelInterview(info?.mainId)
                            : await markInterested({
                                intent: "Interview",
                                seeker: tokenData?.user_id,
                                applicant: info?.mainId,
                              });

                          if (!res?.error) {
                            setInfo({ ...info, interview: !isBooked });
                            if (onSuccessBooking) {
                              onSuccessBooking();
                            }
                            triggerNotification.form.isSuccess({
                              message: isBooked
                                ? lang === "en"
                                  ? "Interview cancelled."
                                  : "面接はキャンセルされました。"
                                : lang === "en"
                                  ? "Interview booked!"
                                  : "面接を予約しました！",
                            });
                          } else {
                            throw new Error();
                          }
                        } catch {
                          triggerNotification.form.isError({
                            message:
                              lang === "en"
                                ? "Action failed."
                                : "操作に失敗しました。",
                          });
                        }
                      },
                    });
                  }}
                >
                  {lang === "en"
                    ? info?.interview
                      ? "Cancel Interview"
                      : "Book for Interview"
                    : info?.interview
                      ? "面接をキャンセルする"
                      : "面接を予約する"}
                </Button>

                <Button
                  leftSection={
                    !info?.wishlist ? (
                      <HeartIcon weight="duotone" size={12} />
                    ) : (
                      <XIcon weight="duotone" size={12} />
                    )
                  }
                  size="xs"
                  color="pink"
                  onClick={() => {
                    if (!info?.wishlist) {
                      triggerNotification.form.isLoading({
                        message: "Adding to Wishlist",
                      });

                      moduleApiCall
                        .createRecord("/logs/seeker/wishlist/", {
                          seeker: tokenData?.user_id,
                          applicant: info?.mainId,
                        })
                        .then((res) => {
                          setInfo({
                            ...info,
                            wishlist: true,
                          });
                          if (onSuccessWishlist) {
                            onSuccessWishlist();
                          }
                          triggerNotification.form.isSuccess({
                            message: "Added to Wishlist",
                          });
                        })
                        .catch((err) => {
                          triggerNotification.form.isInfo({
                            message:
                              "This applicant has already been added to your wishlist",
                          });
                        });
                    } else {
                      triggerNotification.form.isLoading({
                        message: "Removing from Wishlist",
                      });

                      moduleApiCall
                        .deleteRecord("/logs/discard/wishlist/", info?.mainId)
                        .then((res) => {
                          setInfo({
                            ...info,
                            wishlist: false,
                          });
                          triggerNotification.form.isSuccess({
                            message: "Removed from Wishlist",
                          });
                          if (onSuccessWishlist) {
                            onSuccessWishlist();
                          }
                        })
                        .catch((err) => {
                          triggerNotification.form.isInfo({
                            message:
                              "This applicant has already been removed from your wishlist",
                          });
                        });
                    }
                  }}
                >
                  {!info?.wishlist
                    ? lang == "en"
                      ? "Bookmark"
                      : "ブックマーク"
                    : lang == "en"
                      ? "Remove from Saved"
                      : "保存から削除"}
                </Button>
              </Group>
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
