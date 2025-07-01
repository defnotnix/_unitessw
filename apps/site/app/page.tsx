/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  ActionIcon,
  Anchor,
  AspectRatio,
  Burger,
  Button,
  Container,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import {
  ArrowRightIcon,
  CheckIcon,
  MapPinIcon,
  PhoneIcon,
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

export default function PageHome() {
  const Router = useRouter();

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

  return (
    <>
      <header>
        <Container py="xl">
          <Group justify="space-between">
            <Group>
              <Group gap={"xs"}>
                <Image alt="" h={24} w={24} fit="contain" src={imgLogo.src} />
                <Text size="sm" fw={800}>
                  Unite SSW
                </Text>
              </Group>

              <Space w="xl" />

              <Anchor
                c="dark"
                size="sm"
                fw={600}
                visibleFrom="lg"
                onClick={() => {
                  scroll.hero.scrollIntoView();
                }}
              >
                Home
              </Anchor>

              <Anchor
                c="gray.6"
                size="sm"
                fw={600}
                visibleFrom="lg"
                onClick={() => {
                  scroll.about.scrollIntoView();
                }}
              >
                About
              </Anchor>
              <Anchor
                c="gray.6"
                size="sm"
                fw={600}
                visibleFrom="lg"
                onClick={() => {
                  scroll.forJobSeekers.scrollIntoView();
                }}
              >
                For Job Seekers
              </Anchor>
              <Anchor
                c="gray.6"
                size="sm"
                fw={600}
                visibleFrom="lg"
                onClick={() => {
                  scroll.forEnterprise.scrollIntoView();
                }}
              >
                For Enterprise
              </Anchor>
              <Anchor
                c="gray.6"
                size="sm"
                fw={600}
                visibleFrom="lg"
                onClick={() => {
                  scroll.company.scrollIntoView();
                }}
              >
                Company
              </Anchor>
              <Anchor
                c="gray.6"
                size="sm"
                fw={600}
                visibleFrom="lg"
                onClick={() => {
                  scroll.contact.scrollIntoView();
                }}
              >
                Contact
              </Anchor>
            </Group>

            <Group gap="xs">
              <Group gap="xs" visibleFrom="lg">
                <MapPinIcon weight="duotone" />
                <Text size="xs" fw={600}>
                  Satdobato, Kathmandu, Nepal.
                </Text>
              </Group>

              <Group gap="xs" visibleFrom="lg">
                <PhoneIcon weight="duotone" />
                <Text size="xs" fw={600}>
                  +977 9813512312
                </Text>
              </Group>

              <Space w="xs" />

              <Button size="xs">Sign In / Register</Button>
              <Burger size="xs" />
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
                  Where skilled workers meet opportunity — connecting talent
                  with companies in Japan.
                </Text>

                <Text size="3rem" fw={700} hiddenFrom="lg">
                  Where skilled workers meet opportunity — connecting talent
                  with companies in Japan.
                </Text>

                <Group gap="xs" my="md">
                  <Button radius="xl" size="lg" onClick={() => {}}>
                    How does it work?
                  </Button>
                  <Button
                    radius="xl"
                    size="lg"
                    onClick={() => {
                      Router.push("https://applicant.unitessw.com");
                    }}
                  >
                    Apply Now
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
                What Unite SSW is.
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 5 }}>
              <Text size="xs" fw={800}>
                We are building a dynamic platform designed to bridge the gap
                between skilled individuals actively seeking meaningful work and
                companies eager to discover top-tier talent. Whether you&apos;re
                a craftsman, technician, creative, or specialist, our mission is
                to help you showcase your expertise and connect with
                organizations that value your skills.
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 2 }} offset={{ lg: 3 }}>
              <Text size="xs" fw={800}>
                Watch Showreel
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
                About
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Stack>
                <Text size="3rem" fw={700} visibleFrom="lg">
                  A platform that connects skilled workers seeking opportunities
                  with companies in search of qualified candidates
                </Text>

                <Text size="2rem" fw={700} hiddenFrom="lg">
                  A platform that connects skilled workers seeking opportunities
                  with companies in search of qualified candidates
                </Text>

                <Text size="xs" fw={700} maw={500}>
                  We are building a dynamic platform designed to bridge the gap
                  between skilled individuals actively seeking meaningful work
                  and companies eager to discover top-tier talent. Whether
                  you&apos;re a craftsman, technician, creative, or specialist,
                  our mission is to help you showcase your expertise and connect
                  with organizations that value your skills.
                </Text>

                <Text size="xs" fw={700} maw={500}>
                  We are building a dynamic platform designed to bridge the gap
                  between skilled individuals actively seeking meaningful work
                  and companies eager to discover top-tier talent. Whether
                  you&apos;re a craftsman, technician, creative, or specialist,
                  our mission is to help you showcase your expertise and connect
                  with organizations that value your skills.
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 4 }}>
              <Stack>
                <Text size="xs" fw={700} maw={200}>
                  We are building a dynamic platform designed to bridge the gap
                  between skilled individuals actively.
                </Text>

                <Image
                  alt=""
                  src="https://images.unsplash.com/photo-1514336979248-0d11928b751d?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />

                <Text size="xs" fw={700} maw={200}>
                  We are building a dynamic platform.
                </Text>
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
                For Job Seekers
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Stack>
                <Text size="3rem" fw={600} c="gray.0" mt={-8} visibleFrom="lg">
                  Ready to take your career to Japan? Here&apos;s how we help
                  make it happen.
                </Text>
                <Text
                  size="2rem"
                  fw={600}
                  c="gray.0"
                  mt={-8}
                  hiddenFrom="lg
                "
                >
                  Ready to take your career to Japan? Here&apos;s how we help
                  make it happen.
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 4 }}>
              <Stack>
                <Text size="xs" fw={600} c="gray.0" opacity={0.6}>
                  From job matching and interview preparation to visa guidance
                  and cultural support — we provide end-to-end assistance to
                  help skilled professionals like you start a successful career
                  in Japan.
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
                  Fill an Online Application
                </Text>

                <Text size="xs" fw={600}>
                  Submit an online application with all crutial information
                  about you and your background.
                </Text>
              </SimpleGrid>
            </Paper>

            <Paper>
              <Paper bg="gray.1" h={300}>
                <Image alt="" src={imgApplicantVerification.src} h={300} />
              </Paper>
              <SimpleGrid cols={2} p="xl">
                <Text size="lg" fw={800}>
                  Get Verified & Published
                </Text>

                <Text size="xs" fw={600}>
                  Submit an online application with all crutial information
                  about you and your background.
                </Text>
              </SimpleGrid>
            </Paper>

            <Paper>
              <Paper bg="gray.1" h={300}>
                <Image alt="" src={imgApplicantBooked.src} h={300} />
              </Paper>
              <SimpleGrid cols={2} p="xl">
                <Text size="lg" fw={800}>
                  Get Scouted by Companies.
                </Text>

                <Text size="xs" fw={600}>
                  Submit an online application with all crutial information
                  about you and your background.
                </Text>
              </SimpleGrid>
            </Paper>
          </SimpleGrid>

          <Grid align="center">
            <Grid.Col span={{ base: 12, lg: 2 }}></Grid.Col>
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Text size="lg" fw={500} c="gray.0" opacity={0.5}>
                Ready to join the Unite SSW family? Get started today!
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
                  Register Now
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
                  For Enterprise
                </Text>

                <Text size="3rem" fw={600} c="gray.0" mt={-8} visibleFrom="lg">
                  Where companies find skilled & verified talents.
                </Text>
                <Text size="2rem" fw={600} c="gray.0" mt={-8} hiddenFrom="lg">
                  Where companies find skilled & verified talents.
                </Text>

                <Text size="sm" fw={600} c="gray.0" opacity={0.6}>
                  Filter through a comprehensive database of verified SSW
                  candidates to find the right match for your company’s needs.
                  Our platform allows you to search based on specific
                  requirements, ensuring a more targeted and efficient
                  recruitment process. Once the ideal candidates are identified,
                  you can seamlessly proceed with the next steps — from
                  interview scheduling to onboarding — all managed through our
                  integrated system. We simplify the hiring journey, so you can
                  focus on building the right team.
                </Text>

                <Stack>
                  <Group>
                    <CheckIcon color="white" />
                    <Text size="sm" fw={600} c="gray.0">
                      Expert talent to fill critical skill gaps
                    </Text>
                  </Group>

                  <Group>
                    <CheckIcon color="white" />
                    <Text size="sm" fw={600} c="gray.0">
                      Verified candidates with proper background checks.
                    </Text>
                  </Group>

                  <Group>
                    <CheckIcon color="white" />
                    <Text size="sm" fw={600} c="gray.0">
                      Browse skilled workforce based on your preferences.
                    </Text>
                  </Group>

                  <Group>
                    <CheckIcon color="white" />
                    <Text size="sm" fw={600} c="gray.0">
                      Pin or Book candidates for hire directly through the web
                      portal.
                    </Text>
                  </Group>

                  <Group>
                    <CheckIcon color="white" />
                    <Text size="sm" fw={600} c="gray.0">
                      Full support for onboarding selected candidates to your
                      place.
                    </Text>
                  </Group>

                  <Group>
                    <CheckIcon color="white" />
                    <Text size="sm" fw={600} c="gray.0">
                      Easy Vacancy Posts
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
                    Contact Us
                  </Button>
                </Group>

                <Text size="xs" fw={600} c="gray.0" opacity={0.5}>
                  ** Contact us to register your company.
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
                      Find your next employee.
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
                Company Profile
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 10 }}>
              <Stack>
                <Text size="3rem" fw={600} mt={-8}>
                  A deep dive into
                  <br /> company statistics.
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
