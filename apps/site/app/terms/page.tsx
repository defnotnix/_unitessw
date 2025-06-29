"use client";

import {
  ActionIcon,
  Anchor,
  AspectRatio,
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
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  ArrowRightIcon,
  MapPinIcon,
  PhoneIcon,
  CheckIcon,
} from "@phosphor-icons/react";
import { Carousel } from "@mantine/carousel";

import imgApplicantOnboarding from "@/assets/img/onboarding.png";
import imgApplicantVerification from "@/assets/img/verification.png";
import imgApplicantBooked from "@/assets/img/hired.png";

import imgP1 from "@/assets/img/p1.png";
import imgP2 from "@/assets/img/p2.png";
import imgP3 from "@/assets/img/p3.png";
import imgP4 from "@/assets/img/p4.png";
import imgP5 from "@/assets/img/p5.png";
import imgP6 from "@/assets/img/p6.png";
import imgP7 from "@/assets/img/p7.png";

import imgLogo from "@/assets/img/logo.png";
import { LayoutSiteFooter } from "@/components/footer";
import { chunk } from "lodash";

const companyStats = [
  {
    title: { en: "Company Name", jp: "会社名" },
    details: {
      en: "Manabiya Nepal Institutions Consultancy Pvt. Ltd.",
      jp: "マナビヤ・ネパール・インスティチューションズ・コンサルタンシー・プライベート・リミテッド",
    },
  },
  {
    title: { en: "Establishment", jp: "設立" },
    details: { en: "2022-06-03 A.D.", jp: "2022年6月3日" },
  },
  {
    title: { en: "Representative Director", jp: "代表取締役名" },
    details: { en: "Mr. Pukar Shrestha", jp: "プカール・シュレスタ氏" },
  },
  {
    title: { en: "Telephone", jp: "電話番号" },
    details: {
      en: "+977-9802376205",
      jp: "+977-9802376205",
    },
  },
  {
    title: { en: "Business Description", jp: "事業内容" },
    details: {
      en: "Manabiya Nepal, affiliated with Manabiya Co., Ltd., specializes in guiding students for higher education in Japan. Since our establishment in 2020, we have collaborated directly with our Japanese head office to ensure that students are well-prepared academically, culturally, and socially for their journey.",
      jp: "マナビヤ・ネパールは、マナビヤ株式会社と提携し、日本での高等教育を目指す学生のサポートを専門としています。2020年に設立され、日本の本社と直接連携し、学生が学問的、文化的、社会的に準備万端で日本へ出発できるようにしています。",
    },
  },
  {
    title: { en: "Corporate Philosophy", jp: "企業理念" },
    details: {
      en: '"Empowering Dreams, Bridging Cultures" – At Manabiya Nepal, we strive to foster a seamless transition for students seeking academic and personal growth in Japan.',
      jp: '"夢を力に、文化を橋渡し" – マナビヤ・ネパールでは、日本での学問的および個人的な成長を目指す学生が円滑に移行できるようサポートします。',
    },
  },
  {
    title: { en: "Core Values", jp: "基本価値観" },
    details: {
      en: "Integrity, Excellence, Cultural Harmony",
      jp: "誠実、優秀、文化の調和",
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
      en: "+977 9851338205, +977 15917178",
      jp: "+977 9851338205、+977 15917178",
    },
  },
  {
    title: { en: "Email", jp: "メールアドレス" },
    details: {
      en: "info@manabiyanepal.com.np",
      jp: "info@manabiyanepal.com.np",
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
      en: "7",
      jp: "7",
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
      en: "7:00 AM - 5:00 PM",
      jp: "午前7時～午後5時",
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
      en: '"Your journey, our commitment."',
      jp: '"あなたの旅路、私たちの誓い。"',
    },
  },
  {
    title: { en: "Certifications & Recognitions", jp: "認証および認定" },
    details: {
      en: "Certified by [Insert Relevant Accrediting Bodies], Recognized by the Japanese Embassy in Nepal",
      jp: "[挿入関連認定機関] によって認定、日本大使館ネパール支部に認められています",
    },
  },
  {
    title: { en: "Social Responsibility", jp: "社会的責任" },
    details: {
      en: "Manabiya Nepal is committed to community development through scholarships and educational support programs for underprivileged students.",
      jp: "マナビヤ・ネパールは、恵まれない学生への奨学金および教育支援プログラムを通じて、地域社会の発展に貢献しています。",
    },
  },
];

export default function () {
  const state = {
    language: "en",
  };

  function Section({ title, children }: { title: string; children: any }) {
    return (
      <Box>
        <Title order={4} mb="xs">
          {title}
        </Title>
        <Text size="sm" lh={1.6}>
          {children}
        </Text>
      </Box>
    );
  }

  return (
    <>
      <header>
        <Container py="xl">
          <Group justify="space-between">
            <Group>
              <Group gap={"xs"}>
                <Image h={24} w={24} fit="contain" src={imgLogo.src} />
                <Text size="sm" fw={800}>
                  Unite SSW
                </Text>
              </Group>

              <Space w="xl" />

              <Anchor c="dark" size="sm" fw={600}>
                Home
              </Anchor>
              <Anchor c="dark" size="sm" fw={600}>
                Showreel
              </Anchor>
              <Anchor c="dark" size="sm" fw={600}>
                About
              </Anchor>
              <Anchor c="dark" size="sm" fw={600}>
                How to Apply
              </Anchor>
              <Anchor c="dark" size="sm" fw={600}>
                Company
              </Anchor>
              <Anchor c="dark" size="sm" fw={600}>
                Contact
              </Anchor>
            </Group>

            <Group gap="xs">
              <Group gap="xs">
                <MapPinIcon weight="duotone" />
                <Text size="xs" fw={600}>
                  Satdobato, Kathmandu, Nepal.
                </Text>
              </Group>

              <Group gap="xs">
                <PhoneIcon weight="duotone" />
                <Text size="xs" fw={600}>
                  +977 9813512312
                </Text>
              </Group>

              <Space w="xs" />
              <Button size="xs">Sign In / Register</Button>
            </Group>
          </Group>
        </Container>
      </header>

      <Container size="md" py={100}>
        <Text size="3rem" mb="sm">Privacy Policy</Text>

        <Stack gap="lg">
          <Text size="sm" c="dimmed">
            <strong>Effective Date:</strong> [Insert Date] <br />
            <strong>Governing Law:</strong> Privacy Act, 2075 (2018), Nepal
          </Text>

          <Divider />

          <Section title="1. Definitions">
            Personal Data includes any identifying information such as: name,
            contact, ID/passport details, education, medical and biometric data,
            communication records, and sensitive data (e.g., religion, politics,
            health, sexuality).
          </Section>

          <Section title="2. Legal Basis for Collection">
            We collect your data only: with consent, by law, for public
            interest, during emergencies, or to provide contractual services.
          </Section>

          <Section title="3. Information We Collect">
            - Identity and contact info
            <br />
            - Uploaded documents or IDs
            <br />
            - Website usage and device/browser metadata
            <br />- Financial/payment data (if applicable)
          </Section>

          <Section title="4. Use of Your Data">
            Your data is used for service delivery, personalization, legal
            compliance, and safety. We do <strong>not</strong> sell or misuse
            your data.
          </Section>

          <Section title="5. Data Sharing">
            We only share data with your consent or when required by law,
            investigation, or emergency. We ensure confidentiality and
            minimization.
          </Section>

          <Section title="6. Digital & Communication Privacy">
            Your messages and emails are private. No monitoring, forwarding, or
            interception without consent or legal warrant.
          </Section>

          <Section title="7. Data Storage & Security">
            We use encryption, secure storage, access controls, and audit
            systems to protect your data.
          </Section>

          <Section title="8. Video Surveillance (CCTV)">
            CCTV is limited to public areas. No recording in bathrooms, changing
            rooms, or private spaces. Drone use is restricted.
          </Section>

          <Section title="9. Your Rights">
            - Request access or correction
            <br />
            - Withdraw consent
            <br />
            - Ask for deletion
            <br />- File complaints or claim damages
          </Section>

          <Section title="10. Data of Minors and Incapacitated Persons">
            Consent must come from guardians if you're under 18 or mentally
            incapable.
          </Section>

          <Section title="11. Sensitive Information">
            Includes health, religion, ethnicity, and sexuality. Only processed
            with your written consent or for essential services.
          </Section>

          <Section title="12. Third-Party Services">
            Third-party tools (e.g., payments, analytics) must follow this
            policy and Nepal's laws.
          </Section>

          <Section title="13. Limitation of Liability">
            We are not liable for lawful disclosures via court, public interest
            journalism, or government authorities under section 34 of the Act.
          </Section>

          <Section title="14. Complaints and Legal Action">
            You can file a complaint with the District Court within 3 months of
            violation. You may also claim compensation for privacy breaches.
          </Section>

          <Section title="📬 Contact Information">
            <strong>Unite SSW Data Protection Officer</strong>
            <br />
            Email: [Insert Email]
            <br />
            Phone: [Insert Phone]
            <br />
            Address: [Insert Address]
          </Section>

          <Section title="⚖️ Legal Compliance">
            This policy complies with all sections of the Privacy Act, 2075
            including protections for personal, biometric, communication,
            digital, and institutional data.
          </Section>
        </Stack>
      </Container>

      <LayoutSiteFooter />
    </>
  );
}
