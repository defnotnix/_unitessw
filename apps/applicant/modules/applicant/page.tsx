"use client";

import {
  ActionIcon,
  Anchor,
  Badge,
  Breadcrumbs,
  Button,
  ButtonGroup,
  Center,
  ColorSwatch,
  Container,
  Grid,
  Group,
  Image,
  Loader,
  Paper,
  ScrollArea,
  Select,
  Stack,
  Text,
} from "@mantine/core";
import {
  ArrowLeftIcon,
  CaretRightIcon,
  HouseIcon,
  PencilIcon,
  PowerIcon,
  PrinterIcon,
} from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

import { CV } from "@vframework/ui";

import { useReactToPrint } from "react-to-print";

import { endpoint } from "@/layouts/app";
import { images } from "@/public/img";
import { useQuery } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { useParams, useRouter } from "next/navigation";
import { apiPersonalInformation } from "./applicant.api";

import { DateInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import { motion } from "framer-motion";

const bread = [
  {
    label: "Admin",
  },

  { label: "CV" },
  {
    label: "View CV",
  },
];

export function ModuleApplicant() {
  const { CV1, CV2, CV3, CV4, CV5, CV6, CVCorp } = CV;

  // * DEFINITIONS
  const [language, setLanguage] = useState("en");
  const [cvType, setCvType] = useState("1");
  const [cvLogo, setCvLogo] = useState("mb");
  const [cvColor, setCvColor] = useState<any>("brand");
  const Params = useParams();

  const Router = useRouter();

  const [tokenData, setTokenData] = useState<any>(null);

  useEffect(() => {
    const token = sessionStorage.getItem("sswtoken");
    if (token) {
      setTokenData(jwtDecode(token));
    }
  }, []);

  const contentRef = useRef<HTMLDivElement>(null);

  const [printSt, setPrintSt] = useState(false);

  const reactToPrintFn = useReactToPrint({
    contentRef,
    onBeforePrint: async () => {
      setPrintSt(true);
    },
    onAfterPrint: () => {
      setPrintSt(false);
    },
  });

  const [openedPassword, handlePassword] = useDisclosure();

  const RenderCV = () => {
    return (
      <Paper
        withBorder
        style={{
          wordWrap: "break-word",
        }}
      >
        <div ref={contentRef}>
          {cvType == "1" && (
            <CV1
              logo="us"
              date={new Date()}
              color={cvColor}
              data={data}
              language={language}
              printSt={printSt}
            />
          )}

          {cvType == "2" && (
            <CV2
              logo="us"
              date={new Date()}
              color={cvColor}
              data={data}
              language={language}
              printSt={printSt}
            />
          )}

          {cvType == "3" && (
            <CV3
              logo="us"
              date={new Date()}
              color={cvColor}
              data={data}
              language={language}
              printSt={printSt}
            />
          )}

          {cvType == "4" && (
            <CV4
              logo="us"
              date={new Date()}
              color={cvColor}
              data={data}
              language={language}
              printSt={printSt}
            />
          )}

          {cvType == "5" && (
            <CV5
              logo="us"
              date={new Date()}
              color={cvColor}
              data={data}
              language={language}
              printSt={printSt}
            />
          )}

          {cvType == "6" && (
            <CV6
              logo="us"
              date={new Date()}
              color={cvColor}
              data={data}
              language={language}
              printSt={printSt}
            />
          )}
        </div>
      </Paper>
    );
  };

  const { data, isLoading } = useQuery({
    queryKey: ["admin", "cv", String(Params.id)],
    queryFn: async () => {
      const _td: any = jwtDecode(sessionStorage.getItem("sswtoken") || "");
      const res: any = await apiPersonalInformation.get(_td?.user_id);
 
      if (!res.err) {
        return {
          ...res?.data,
          ...res?.data?.a_background,

          ...res?.data?.a_physical,
          ...res?.data?.a_story,
          ...res?.data?.a_identification,

          category: String(res?.data?.category),
          education: res?.data?.a_education,
          work_experience: res?.data?.a_work_experience,
          licenses: res?.data?.a_license_qualification,

          image: res?.data?.image ? endpoint + res?.data?.image : null,
          passport: res?.data?.a_identification?.passport
            ? endpoint + res?.data?.a_identification?.passport
            : null,
          l_cert_image: res?.data?.a_identification?.l_cert_image
            ? endpoint + res?.data?.a_identification?.l_cert_image
            : null,
          ssw_cert_image: res?.data?.a_identification?.ssw_cert_image
            ? endpoint + res?.data?.a_identification?.ssw_cert_image
            : null,
        };
      } else {
        return {};
      }
    },
    initialData: {
      education: [],
      work_experience: [],
      licenses: [],
    },
  });

  if (isLoading) {
    return (
      <Center h={400}>
        <Loader size={16} />
      </Center>
    );
  }

  return (
    <>
      <motion.div
        style={{
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: 0,
          zIndex: 999,
        }}
        initial={{
          opacity: 1,
        }}
        animate={{
          opacity: 0,
          display: "none",
          transition: {
            duration: 0.5,
            delay: 0.5,
          },
        }}
      >
        <Center h={"100vh"} bg="dark.9">
          <Paper p="md" bg="none">
            <Stack>
              <Image src={images.logoMini} />

              <Center>
                <Loader color="white" size="xs" />
              </Center>
            </Stack>
          </Paper>
        </Center>
      </motion.div>

      <section
        style={{
          background: "var(--mantine-color-gray-2)",
        }}
      >
        <Paper bg="dark.9" radius={0}>
          <Container py="xs">
            <Group justify="space-between">
              <Group>
                <Image h={24} w={24} fit="contain" src={images.logoMini} />
                <Text size="xs" c="gray.0">
                  Manabiya HR Unity
                </Text>
                <Text size="xs" c="gray.0" opacity={0.5}>
                  Applicant Portal
                </Text>
              </Group>

              <Group gap={6} visibleFrom="lg">
                <Text size="xs" c="gray.0">
                  Explore Job Vacancies from different companies in Japan.
                </Text>
                <Button
                  size="xs"
                  p={0}
                  h={24}
                  px="xs"
                  rightSection={<CaretRightIcon size={12} />}
                  color="indigo.6"
                  onClick={() => {
                    Router.push("/vacancy");
                  }}
                >
                  Explore Job Vacancy
                </Button>
                <Button
                  size="xs"
                  p={0}
                  h={24}
                  px="xs"
                  leftSection={<PowerIcon size={12} />}
                  variant="outline"
                  c="brand.3"
                  onClick={() => {
                    sessionStorage.removeItem("sswtoken");
                    Router.push("/");
                  }}
                >
                  Sign Out
                </Button>
              </Group>
            </Group>
          </Container>
        </Paper>
        <Paper>
          <Container py="sm">
            <Grid align="center">
              <Grid.Col span={{ base: 12, lg: 3 }}>
                <Group wrap="nowrap">
                  <ActionIcon size="sm" variant="light">
                    <ArrowLeftIcon size={12} />
                  </ActionIcon>
                  <Breadcrumbs
                    separatorMargin={4}
                    separator={
                      <Text size="xs" c="gray.5">
                        /
                      </Text>
                    }
                  >
                    <HouseIcon
                      weight="duotone"
                      size={12}
                      color="var(--mantine-color-brand-5)"
                    />
                    {bread.map((breadinfo: any, index: number) => (
                      <Anchor
                        size="xs"
                        c={index == bread.length - 1 ? "dark.9" : "gray.5"}
                        fw={600}
                        key={index}
                      >
                        {breadinfo.label}
                      </Anchor>
                    ))}
                  </Breadcrumbs>

                  {data?.is_published ? (
                    <Badge color="teal">Published</Badge>
                  ) : (
                    <Badge color="red">Not Published</Badge>
                  )}
                </Group>
              </Grid.Col>

              <Grid.Col span={{ base: 12, lg: 9 }}>
                <Group justify="flex-end" gap="xs" visibleFrom="lg">
                  <ButtonGroup>
                    <Button
                      size="xs"
                      onClick={() => {
                        setLanguage("en");
                      }}
                      variant={language == "en" ? "filled" : "light"}
                    >
                      EN
                    </Button>
                    <Button
                      size="xs"
                      onClick={() => {
                        setLanguage("jp");
                      }}
                      variant={language == "jp" ? "filled" : "light"}
                    >
                      JP
                    </Button>
                  </ButtonGroup>

                  <ButtonGroup>
                    <Button
                      size="xs"
                      onClick={reactToPrintFn}
                      leftSection={<PrinterIcon />}
                    >
                      Print CV
                    </Button>
                    <Button
                      size="xs"
                      onClick={() => {
                        Router.push("/myprofile/edit");
                      }}
                      disabled={data?.is_published}
                      variant="light"
                      leftSection={<PencilIcon />}
                    >
                      Update Profile
                    </Button>
                  </ButtonGroup>
                </Group>

                <Group justify="space-between" gap="xs" hiddenFrom="lg">
                  <ButtonGroup>
                    <Button
                      size="xs"
                      onClick={() => {
                        setLanguage("en");
                      }}
                      variant={language == "en" ? "filled" : "light"}
                    >
                      EN
                    </Button>
                    <Button
                      size="xs"
                      onClick={() => {
                        setLanguage("jp");
                      }}
                      variant={language == "jp" ? "filled" : "light"}
                    >
                      JP
                    </Button>
                  </ButtonGroup>

                  <ButtonGroup>
                    <Button
                      size="xs"
                      onClick={reactToPrintFn}
                      leftSection={<PrinterIcon />}
                    >
                      Print CV
                    </Button>
                    <Button
                      size="xs"
                      onClick={() => {
                        Router.push("/myprofile/edit");
                      }}
                      disabled={data?.is_published}
                      variant="light"
                      leftSection={<PencilIcon />}
                    >
                      Update Profile
                    </Button>
                  </ButtonGroup>
                </Group>
              </Grid.Col>
            </Grid>
          </Container>
        </Paper>

        <Paper withBorder>
          <Container py="sm">
            <Group grow gap="xs">
              <Select
                leftSectionWidth={70}
                leftSection={<Text size="xs">Template</Text>}
                w={150}
                value={cvType}
                onChange={(e: any) => setCvType(e)}
                size="xs"
                data={[
                  { value: "1", label: "CV-1" },
                  { value: "2", label: "CV-2" },
                  { value: "3", label: "CV-3" },
                  { value: "4", label: "CV-4" },
                  { value: "5", label: "CV-5" },
                  { value: "6", label: "CV-6" },
                ]}
              />
              <Select
                w={150}
                leftSection={
                  <ColorSwatch
                    size={12}
                    color={`var(--mantine-color-${cvColor}-5)`}
                  />
                }
                value={cvColor}
                onChange={setCvColor}
                size="xs"
                data={[
                  { value: "brand", label: "Default" },
                  { value: "blue", label: "Blue" },
                  { value: "cyan", label: "Cyan" },
                  { value: "pink", label: "Pink" },
                  { value: "grape", label: "Grape" },
                  { value: "indigo", label: "Indigo" },
                  { value: "teal", label: "Teal" },
                  { value: "green", label: "Green" },
                  { value: "lime", label: "Lime" },
                  { value: "yellow", label: "Yellow" },
                  { value: "orange", label: "Orange" },
                  { value: "red", label: "Red" },
                  { value: "gray", label: "Gray" },
                  { value: "gray.0", label: "White" },
                ]}
              />
            </Group>
          </Container>
        </Paper>

        <Center mt="md" visibleFrom="lg">
          {!cvType && (
            <>
              <Text my={100} size="xs">
                Please select a CV Template
              </Text>
            </>
          )}
          <RenderCV />
        </Center>

        <ScrollArea hiddenFrom="lg">
          {!cvType && (
            <>
              <Text my={100} size="xs">
                Please select a CV Template
              </Text>
            </>
          )}
          <RenderCV />
        </ScrollArea>

        <Paper p="xl" bg="gray.9" radius={0}>
          <Group justify="center">
            <Group gap={6} hiddenFrom="lg">
              <Button
                size="xs"
                p={0}
                h={24}
                px="xs"
                rightSection={<CaretRightIcon size={12} />}
                color="indigo.6"
                onClick={() => {
                  Router.push("/vacancy");
                }}
              >
                Explore Job Vacancy
              </Button>
              <Button
                size="xs"
                p={0}
                h={24}
                px="xs"
                leftSection={<PowerIcon size={12} />}
                variant="outline"
                c="brand.3"
                onClick={() => {
                  sessionStorage.removeItem("sswtoken");
                  Router.push("/");
                }}
              >
                Sign Out
              </Button>
            </Group>
          </Group>
        </Paper>
      </section>
    </>
  );
}
