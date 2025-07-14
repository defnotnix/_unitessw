/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  ActionIcon,
  AspectRatio,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Group,
  Image,
  Menu,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import {
  ArrowRightIcon,
  BuildingOfficeIcon,
  CaretDownIcon,
  CheckIcon,
  MapPinIcon,
  PhoneIcon,
  UserIcon,
} from "@phosphor-icons/react";

import imgApplicantBooked from "@/assets/img/hired.png";
import imgApplicantOnboarding from "@/assets/img/onboarding.png";
import imgApplicantVerification from "@/assets/img/verification.png";

import imgP1 from "@/assets/img/p1.png";
import imgP2 from "@/assets/img/p2.png";
import imgP3 from "@/assets/img/p3.png";
import imgP4 from "@/assets/img/p4.png";
import imgP5 from "@/assets/img/p5.png";
import imgP6 from "@/assets/img/p6.png";
import imgP7 from "@/assets/img/p7.png";

import imgLogo from "@/assets/img/logo.png";
import { LayoutSiteFooter } from "@/components/footer";
import { useScrollIntoView } from "@mantine/hooks";
import { chunk } from "lodash";
import { useRouter } from "next/navigation";
import { useState } from "react";

const companyStats = [
  {
    title: { en: "Company Name", jp: "会社名" },
    details: {
      en: "Manabiya H.R. Unity Pvt. Ltd.",
      jp: "マナビヤ・H.R・ユニティ株式会社",
    },
  },
  {
    title: { en: "Establishment", jp: "設立" },
    details: {
      en: "2025-06-25 A.D.",
      jp: "2025年6月25日",
    },
  },
  {
    title: { en: "Representative Director", jp: "代表取締役名" },
    details: {
      en: "Mrs. Nabina Dallakoti Burlakoti",
      jp: "ナビナ・ダラコティ・ブルラコティ氏",
    },
  },
  {
    title: { en: "Telephone", jp: "電話番号" },
    details: {
      en: "+977-9768896744",
      jp: "+977-9768896744",
    },
  },
  {
    title: { en: "Business Description", jp: "事業内容" },
    details: {
      en: "Manabiya H.R. Unity Pvt. Ltd. is dedicated to connecting skilled, semi-skilled, and unskilled workers with the right opportunities across the international market. We meet the unique demands of various industries including construction, hospitality, healthcare, manufacturing, agriculture, airport ground handling, and more.",
      jp: "マナビヤ・H.R・ユニティ株式会社は、熟練・準熟練・未熟練労働者を国際市場の適切な機会と結びつけることに注力しています。建設、ホスピタリティ、医療、製造業、農業、空港地上業務など、さまざまな業界のニーズに応えています。",
    },
  },
  {
    title: { en: "Corporate Philosophy", jp: "企業理念" },
    details: {
      en: "", // If you have the philosophy, I can fill it in.
      jp: "",
    },
  },
  {
    title: { en: "Address", jp: "住所" },
    details: {
      en: "New Plaza, Putalisadak, Kathmandu, Nepal",
      jp: "ニュープラザ、プタリサダク、カトマンズ、ネパール",
    },
  },
  {
    title: { en: "Phone", jp: "電話番号" },
    details: {
      en: "", // Leave blank if not provided
      jp: "",
    },
  },
  {
    title: { en: "Email", jp: "メールアドレス" },
    details: {
      en: "", // Leave blank if not provided
      jp: "",
    },
  },
  {
    title: { en: "Parking Location", jp: "駐車場の場所" },
    details: {
      en: "Head Office Building, Side Parking",
      jp: "本社ビル、サイド駐車場",
    },
  },
  {
    title: { en: "Total Staff", jp: "総スタッフ数" },
    details: {
      en: "5",
      jp: "5",
    },
  },
  {
    title: { en: "Opening Days", jp: "営業日" },
    details: {
      en: "Sunday to Friday",
      jp: "日曜～金曜",
    },
  },
  {
    title: { en: "Opening Hours", jp: "営業時間" },
    details: {
      en: "9:00 AM - 5:00 PM",
      jp: "午前9時～午後5時",
    },
  },
  {
    title: { en: "Affiliated With", jp: "提携先" },
    details: {
      en: "Manabiya Co., Ltd.",
      jp: "マナビヤ株式会社",
    },
  },
  {
    title: { en: "Corporate Motto", jp: "企業のモットー" },
    details: {
      en: "", // Add if you have the motto
      jp: "",
    },
  },
];

export default function PageHome() {
  const Router = useRouter();
  const [language, setLanguage] = useState("en");

  const state = {
    language: "en",
  };

  const scroll = {
    hero: useScrollIntoView<HTMLDivElement>({
      offset: 0,
    }),
    about: useScrollIntoView<HTMLDivElement>({
      offset: 0,
    }),
    forJobSeekers: useScrollIntoView<HTMLDivElement>({
      offset: 0,
    }),
    forEnterprise: useScrollIntoView<HTMLDivElement>({
      offset: 0,
    }),
    company: useScrollIntoView<HTMLDivElement>({
      offset: 0,
    }),
    contact: useScrollIntoView<HTMLDivElement>({
      offset: 0,
    }),
  };

  const translations = {
    platformTagline: {
      en: "A platform to bridge career opportunities in Japan",
      jp: "日本でのキャリアの機会をつなぐプラットフォーム",
    },
    platformMission: {
      en: `We are building a dynamic platform designed to bridge the gap between skilled individuals actively seeking meaningful work and companies eager to discover top-tier talent. Whether you're a craftsman, technician, creative, or specialist, our mission is to help you showcase your expertise and connect with organizations that value your skills.`,
      jp: `私たちは、意欲的に意味のある仕事を求める優秀な人材と、優れた才能を求める企業とのギャップを埋めるための、ダイナミックなプラットフォームを構築しています。あなたが職人、技術者、クリエイター、または専門職であれ、私たちの使命は、あなたの専門性を発信し、それを必要とする企業とつなぐことです。`,
    },
    applyProcessIntro: {
      en: "Submit an online application with all crucial information about you and your background.",
      jp: "あなたとあなたの背景に関する全ての重要な情報をオンラインで申し込む",
    },
    aboutPlatformShort: {
      en: `A platform that connects skilled workers seeking opportunities with companies in search of qualified candidates`,
      jp: `意欲的に意味のある仕事を求める優秀な人材と企業とのギャップを埋めるためのプラットフォーム`,
    },
  };

  const t = (key: keyof typeof translations, lang: string) =>
    translations[key][lang as "en" | "jp"] ?? "";

  return (
    <>
      <header>
        <Container py="xl">
          <Group justify="space-between">
            <Group>
              <Group gap={"xs"}>
                <Image alt="" h={24} w={24} fit="contain" src={imgLogo.src} />
                <Text size="sm" fw={800}>
                  Manabiya HR Unity
                </Text>

                <Text size="sm" fw={800} opacity={0.3}>
                  {t("platformTagline", language)}
                </Text>
              </Group>

              <Space w="xl" />
            </Group>

            <Group gap="xs">
              <Group gap="6px" visibleFrom="lg">
                <MapPinIcon weight="duotone" />
                <Text size="xs" fw={800}>
                  New plaza,Putalisadak,Kathmandu,Nepal
                </Text>
              </Group>

              <Group gap="6px" visibleFrom="lg">
                <PhoneIcon weight="duotone" />
                <Text size="xs" fw={800}>
                  +977 9768896744
                </Text>
              </Group>

              <Space w="xs" />

              <ButtonGroup>
                <Button
                  size="xs"
                  variant={language == "en" ? "filled" : "light"}
                  onClick={() => {
                    setLanguage("en");
                  }}
                >
                  EN
                </Button>
                <Button
                  size="xs"
                  variant={language == "jp" ? "filled" : "light"}
                  onClick={() => {
                    setLanguage("jp");
                  }}
                >
                  JP
                </Button>
              </ButtonGroup>

              <Menu trigger="hover">
                <Menu.Target>
                  <Button rightSection={<CaretDownIcon />} size="xs">
                    {language == "en"
                      ? "Sign In / Register"
                      : "ログイン / 登録"}
                  </Button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item
                    leftSection={<UserIcon />}
                    onClick={() => {
                      Router.push("https://applicant.unitessw.com");
                    }}
                  >
                    {language == "en" ? "Applicant Portal" : "応募者ポータル"}
                  </Menu.Item>
                  <Menu.Item
                    leftSection={<BuildingOfficeIcon />}
                    onClick={() => {
                      Router.push("https://seeker.unitessw.com");
                    }}
                  >
                    {language == "en" ? "Seeker Portal" : "募集者ポータル"}
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
          </Group>
        </Container>
      </header>

      <section ref={scroll.hero.targetRef}>
        <Container py={50}>
          <Grid>
            <Grid.Col span={{ base: 12, lg: 2 }}>
              <Text size="3rem" fw={800} pt="xs" visibleFrom="lg">
                特<br />
                定<br />
                技<br />能
              </Text>
              <Text size="2rem" fw={800} pt="xs" hiddenFrom="lg">
                特定技能
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 7 }}>
              <Stack>
                <Text size="4rem" fw={700} visibleFrom="lg">
                  {language == "en"
                    ? "Where skilled workers meet opportunity — connecting talent with companies in Japan."
                    : "日本でのキャリアの機会をつなぐプラットフォーム"}
                </Text>

                <Text size="3rem" fw={700} hiddenFrom="lg">
                  {language == "en"
                    ? "Where skilled workers meet opportunity — connecting talent with companies in Japan."
                    : "日本でのキャリアの機会をつなぐプラットフォーム"}
                </Text>

                <Group gap="xs" my="md">
                  <Button radius="xl" size="lg" onClick={() => {}}>
                    {language == "en"
                      ? "How does it work?"
                      : "どのように動作するか"}
                  </Button>
                  <Button
                    radius="xl"
                    size="lg"
                    onClick={() => {
                      Router.push("https://applicant.unitessw.com");
                    }}
                  >
                    {language == "en" ? "Apply Now" : "申し込む"}
                  </Button>
                  <ActionIcon variant="light" size={48} radius="xl">
                    <ArrowRightIcon />
                  </ActionIcon>
                </Group>
              </Stack>
            </Grid.Col>
          </Grid>

          <Space h={100} />

          <Grid align="flex-end">
            <Grid.Col span={{ base: 12, lg: 2 }}>
              <Text size="xs" fw={800}>
                {language == "en"
                  ? "What Manabiya HR Unity is."
                  : "Manabiya HR Unityとは"}
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 5 }}>
              <Text size="sm" fw={800}>
                {language == "en"
                  ? ` We are building a dynamic platform designed to bridge the gap
                between skilled individuals actively seeking meaningful work and
                companies eager to discover top-tier talent. Whether you&apos;re
                a craftsman, technician, creative, or specialist, our mission is
                to help you showcase your expertise and connect with
                organizations that value your skills.`
                  : `私たちは、意欲的に意味のある仕事を求める優秀な人材と、優れた才能を求める企業とのギャップを埋めるための、ダイナミックなプラットフォームを構築しています。あなたが職人、技術者、クリエイター、または専門職であれ、私たちの使命は、あなたの専門性を発信し、それを必要とする企業とつなぐことです。`}
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 2 }} offset={{ lg: 3 }}>
              <Text size="xs" fw={800}>
                {language == "en" ? "Watch Showreel" : "ショーラーを見る"}
              </Text>
            </Grid.Col>
          </Grid>
        </Container>
      </section>

      <Container py={32}>
        <AspectRatio ratio={16 / 9}>
          <iframe
            src="https://www.youtube.com/embed/faC4p0SH7I4?si=Ayk_czqpFoG6YVY0"
            title="YouTube video player"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </AspectRatio>
      </Container>

      <section ref={scroll.about.targetRef}>
        <Container py={{ base: 100 }}>
          <Grid>
            <Grid.Col span={{ base: 12, lg: 2 }}>
              <Text size="md" fw={800}>
                {language == "en" ? "About" : "Manabiya HR Unityとは"}
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Stack>
                <Text size="3rem" fw={700} visibleFrom="lg">
                  {t("aboutPlatformShort", language)}
                </Text>

                <Text size="2rem" fw={700} hiddenFrom="lg">
                  {t("aboutPlatformShort", language)}
                </Text>

                <Text size="sm" fw={700} maw={500}>
                  {t("platformMission", language)}
                </Text>

                <Text size="xs" fw={700} maw={500}>
                  {language == "en"
                    ? ` We are building a dynamic platform designed to bridge the gap
                between skilled individuals actively seeking meaningful work and
                companies eager to discover top-tier talent. Whether you&apos;re
                a craftsman, technician, creative, or specialist, our mission is
                to help you showcase your expertise and connect with
                organizations that value your skills.`
                    : `私たちは、意欲的に意味のある仕事を求める優秀な人材と、優れた才能を求める企業とのギャップを埋めるための、ダイナミックなプラットフォームを構築しています。あなたが職人、技術者、クリエイター、または専門職であれ、私たちの使命は、あなたの専門性を発信し、それを必要とする企業とつなぐことです。`}
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 4 }}>
              <Stack>
                <Text size="xs" fw={700} maw={200}>
                  {language == "en"
                    ? `We are building a dynamic platform designed to bridge the gap
                  between skilled individuals actively.`
                    : `私たちは、意欲的に活躍する熟練した人材と社会とのギャップを埋めるための、ダイナミックなプラットフォームを構築しています。`}
                </Text>

                <Image
                  alt=""
                  src="https://images.unsplash.com/photo-1514336979248-0d11928b751d?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />

                {/* <Text size="xs" fw={700} maw={200}>
                  {language == "en"
                    ? "We are building a dynamic platform."
                    : `私たちは、ダイナミックなプラットフォームを構築しています。`}
                </Text> */}
              </Stack>
            </Grid.Col>
          </Grid>
        </Container>
      </section>

      <section
        style={{
          background:
            "linear-gradient(-120deg,var(--mantine-color-gray-9),var(--mantine-color-dark-9))",
        }}
        ref={scroll.forJobSeekers.targetRef}
      >
        <Container py={{ base: 100, lg: 160 }}>
          <Grid>
            <Grid.Col span={{ base: 12, lg: 2 }}>
              <Text size="md" fw={800} c="gray.0">
                {language == "en"
                  ? "For Job Seekers"
                  : "募集者のためのサポート"}
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Stack>
                <Text size="3rem" fw={600} c="gray.0" mt={-8} visibleFrom="lg">
                  {language == "en"
                    ? `  Ready to take your career to Japan? Here's how we help
                  make it happen.`
                    : `日本でキャリアを築く準備はできていますか？私たちは、その実現を全力でサポートし`}
                </Text>
                <Text
                  size="2rem"
                  fw={600}
                  c="gray.0"
                  mt={-8}
                  hiddenFrom="lg
                "
                >
                  {language == "en"
                    ? `  Ready to take your career to Japan? Here&apos;s how we help
                  make it happen.`
                    : `日本でキャリアを築く準備はできていますか？私たちは、その実現を全力でサポートし`}
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 4 }}>
              <Stack>
                <Text size="sm" fw={600} c="gray.0" opacity={0.6}>
                  {language == "en"
                    ? `  From job matching and interview preparation to visa guidance
                  and cultural support — we provide end-to-end assistance to
                  help skilled professionals like you start a successful career
                  in Japan.`
                    : `求人マッチングや面接対策から、ビザ取得のサポート、文化的な適応支援まで —
私たちは、あなたのような熟練したプロフェッショナルが日本でキャリアを成功させるために、トータルでサポートします。`}
                </Text>
              </Stack>
            </Grid.Col>
          </Grid>

          <SimpleGrid cols={{ base: 1, lg: 3 }} my={64} spacing={4}>
            <Paper>
              <Paper bg="gray.1" h={300}>
                <Image alt="" src={imgApplicantOnboarding.src} h={300} />
              </Paper>

              <SimpleGrid cols={2} p="xl">
                <Text size="lg" fw={800}>
                  {language == "en"
                    ? "Fill an Online Application"
                    : "オンライン申し込みを完了する"}
                </Text>

                <Text size="xs" fw={600}>
                  {language == "en"
                    ? "Submit an online application with all crutial information about you and your background."
                    : "あなたとあなたの背景に関する全ての重要な情報をオンラインで申し込む"}
                </Text>
              </SimpleGrid>
            </Paper>

            <Paper>
              <Paper bg="gray.1" h={300}>
                <Image alt="" src={imgApplicantVerification.src} h={300} />
              </Paper>
              <SimpleGrid cols={2} p="xl">
                <Text size="lg" fw={800}>
                  {language == "en"
                    ? "Get Verified & Published"
                    : "検証と公開を受ける"}
                </Text>

                <Text size="xs" fw={600}>
                  {language == "en"
                    ? "Submit an online application with all crutial information about you and your background."
                    : "あなたとあなたの背景に関する全ての重要な情報をオンラインで申し込む"}
                </Text>
              </SimpleGrid>
            </Paper>

            <Paper>
              <Paper bg="gray.1" h={300}>
                <Image alt="" src={imgApplicantBooked.src} h={300} />
              </Paper>
              <SimpleGrid cols={2} p="xl">
                <Text size="lg" fw={800}>
                  {language == "en"
                    ? "Get Scouted by Companies."
                    : "企業によってスクウェットされる"}
                </Text>

                <Text size="xs" fw={600}>
                  {language == "en"
                    ? "Submit an online application with all crutial information about you and your background."
                    : "あなたとあなたの背景に関する全ての重要な情報をオンラインで申し込む"}
                </Text>
              </SimpleGrid>
            </Paper>
          </SimpleGrid>

          <Grid align="center">
            <Grid.Col span={{ base: 12, lg: 2 }}></Grid.Col>
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Text size="xl" fw={500} c="gray.0">
                {language === "en"
                  ? "Ready to become part of the Manabiya HR Unity family? Start your journey today!"
                  : "Manabiya HR Unityファミリーの一員になる準備はできていますか？さあ、今日から旅を始めましょう！"}
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 4 }}>
              <Group justify="flex-end" gap="xs">
                <Button
                  rightSection={<ArrowRightIcon />}
                  size="lg"
                  onClick={() => {
                    Router.push("https://applicant.unitessw.com");
                  }}
                >
                  {language == "en" ? "Register Now" : "現在登録する"}
                </Button>
              </Group>
            </Grid.Col>
          </Grid>
        </Container>
      </section>

      <section
        style={{
          background: "#232b6b",
        }}
        ref={scroll.forEnterprise.targetRef}
      >
        <Container py={{ base: 100, lg: 160 }}>
          <Grid gutter="xl">
            <Grid.Col span={{ base: 12, lg: 5 }}>
              <Stack gap="xl" py="xl">
                <Text size="md" fw={800} c="gray.0">
                  {language == "en" ? "For Enterprise" : "企業のためのサポート"}
                </Text>

                <Text size="3rem" fw={600} c="gray.0" mt={-8} visibleFrom="lg">
                  {language == "en"
                    ? "Where companies find skilled & verified talents."
                    : "企業が熟練したキャリアを発見するためのサポート"}
                </Text>
                <Text size="2rem" fw={600} c="gray.0" mt={-8} hiddenFrom="lg">
                  {language == "en"
                    ? "Where companies find skilled & verified talents."
                    : "企業が熟練したキャリアを発見するためのサポート"}
                </Text>

                <Text size="sm" fw={600} c="gray.0" opacity={0.6}>
                  {language == "en"
                    ? `  Filter through a comprehensive database of verified SSW
                  candidates to find the right match for your company’s needs.
                  Our platform allows you to search based on specific
                  requirements, ensuring a more targeted and efficient
                  recruitment process. Once the ideal candidates are identified,
                  you can seamlessly proceed with the next steps — from
                  interview scheduling to onboarding — all managed through our
                  integrated system. We simplify the hiring journey, so you can
                  focus on building the right team.`
                    : `貴社のニーズに合った人材を見つけるために、認証済みの特定技能（SSW）候補者の包括的なデータベースから絞り込み検索が可能です。当プラットフォームでは、具体的な条件に基づいた検索ができるため、より的確で効率的な採用プロセスを実現します。 理想的な候補者が見つかった後は、面接の日程調整から入社手続きまで、すべてを統合されたシステム上でスムーズに進めることができます。 私たちは採用のプロセスをシンプルにし、貴社が最適なチームづくりに専念できるようサポートします。`}
                </Text>

                <Stack>
                  <Group>
                    <CheckIcon color="white" />
                    <Text size="sm" fw={600} c="gray.0">
                      {language == "en"
                        ? "Expert talent to fill critical skill gaps"
                        : "熟練した人材でクリティカルなスキルギャップを補充する"}
                    </Text>
                  </Group>

                  <Group>
                    <CheckIcon color="white" />
                    <Text size="sm" fw={600} c="gray.0">
                      {language == "en"
                        ? "Verified candidates with proper background checks."
                        : "正しい背景の確認を受けた確認済みの候補者。"}
                    </Text>
                  </Group>

                  <Group>
                    <CheckIcon color="white" />
                    <Text size="sm" fw={600} c="gray.0">
                      {language == "en"
                        ? "Browse skilled workforce based on your preferences."
                        : "好きなようにキャリアを発見する"}
                    </Text>
                  </Group>

                  <Group>
                    <CheckIcon color="white" />
                    <Text size="sm" fw={600} c="gray.0">
                      {language == "en"
                        ? "Pin or Book candidates for hire directly through the web portal."
                        : "ウェブポータルから直接候補者をピンまたはブックマークする"}
                    </Text>
                  </Group>

                  <Group>
                    <CheckIcon color="white" />
                    <Text size="sm" fw={600} c="gray.0">
                      {language == "en"
                        ? "Full support for onboarding selected candidates to your place."
                        : "選択した候補者をあなたの場所にオンボーディングするためのサポート"}
                    </Text>
                  </Group>

                  <Group>
                    <CheckIcon color="white" />
                    <Text size="sm" fw={600} c="gray.0">
                      {language == "en"
                        ? "Easy Vacancy Posts"
                        : "簡単な応募投事"}
                    </Text>
                  </Group>
                </Stack>

                <Group gap="xs">
                  <Button
                    size="lg"
                    color="white"
                    radius="xl"
                    onClick={() => {
                      scroll.contact.scrollIntoView();
                    }}
                  >
                    {language == "en" ? "Contact Us" : "私たちに連絡する"}
                  </Button>
                </Group>

                <Text size="xs" fw={600} c="gray.0" opacity={0.5}>
                  **{" "}
                  {language == "en"
                    ? "Contact us to register your company."
                    : "私たちは、あなたの企業を登録するために連絡してください。"}
                </Text>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, lg: 6 }} offset={{ base: 0, lg: 1 }}>
              <SimpleGrid cols={{ base: 2, lg: 3 }} spacing={4}>
                <Paper h={250}>
                  <Image alt="" src={imgP1.src} h={250} fit="cover" />
                </Paper>
                <Paper h={250}>
                  <Image alt="" src={imgP2.src} h={250} fit="cover" />
                </Paper>
                <Paper h={250}>
                  <Image alt="" src={imgP3.src} h={250} fit="cover" />
                </Paper>
                <Paper h={250}>
                  <Image alt="" src={imgP4.src} h={250} fit="cover" />
                </Paper>
                <Paper h={250}>
                  <Image alt="" src={imgP5.src} h={250} fit="cover" />
                </Paper>
                <Paper h={250}>
                  <Image alt="" src={imgP6.src} h={250} fit="cover" />
                </Paper>
                <Paper h={250}>
                  <Image alt="" src={imgP7.src} h={250} fit="cover" />
                </Paper>
                <Paper bg="none">
                  <Group h={250} justify="flex-end" align="flex-end">
                    <Text size="1.5rem" c="gray.0" ta="right">
                      {language == "en"
                        ? "Find your next employee."
                        : "あなたの次の従業員を見つける"}
                    </Text>
                  </Group>
                </Paper>{" "}
              </SimpleGrid>
            </Grid.Col>
          </Grid>
        </Container>
      </section>

      <section ref={scroll.company.targetRef}>
        <Container py={{ base: 100, lg: 160 }}>
          <Grid>
            <Grid.Col span={{ base: 12, lg: 2 }}>
              <Text size="md" fw={800}>
                {language == "en" ? "Company Profile" : "企業のプロフィール"}
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 10 }}>
              <Stack>
                <Text size="3rem" fw={600} mt={-8}>
                  {language == "en"
                    ? "A deep dive into company statistics."
                    : "企業の統計情報を深く掘り下げる"}
                  <br />{" "}
                  {language == "en"
                    ? "company statistics."
                    : "企業の統計情報。"}
                </Text>

                <SimpleGrid cols={{ base: 1, lg: 2 }} spacing={0} my="xl">
                  {chunk(companyStats, 2).map((pair: any, rowIndex: any) =>
                    pair.map((info: any, index: number) => (
                      <Paper
                        key={rowIndex * 2 + index}
                        radius={0}
                        bg={rowIndex % 2 ? "none" : "gray.0"}
                        p="md"
                      >
                        <Grid>
                          <Grid.Col span={4}>
                            <Text fw={600} size="xs">
                              {state?.language === "en"
                                ? info.title?.en
                                : info.title?.jp}
                            </Text>
                          </Grid.Col>
                          <Grid.Col span={6}>
                            <Text size="xs">
                              {state?.language === "en"
                                ? info.details?.en
                                : info.details?.jp}
                            </Text>
                          </Grid.Col>
                        </Grid>
                      </Paper>
                    ))
                  )}
                </SimpleGrid>
              </Stack>
            </Grid.Col>
          </Grid>
        </Container>
      </section>

      <section ref={scroll.contact.targetRef}>
        <LayoutSiteFooter />
      </section>
    </>
  );
}
