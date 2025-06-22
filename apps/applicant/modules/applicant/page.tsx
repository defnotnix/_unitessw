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
  Divider,
  Grid,
  Group,
  Image,
  Loader,
  Paper,
  Select,
  Space,
  Text,
} from "@mantine/core";
import {
  ArrowLeft,
  ArrowLeftIcon,
  House,
  HouseIcon,
  PrinterIcon,
} from "@phosphor-icons/react";
import { useRef, useState } from "react";
import { CV1 } from "./templates/cv1";
import { CV2 } from "./templates/cv2";
import { CV3 } from "./templates/cv3";
import { CV4 } from "./templates/cv4";
import { CV5 } from "./templates/cv5";
import { CV6 } from "./templates/cv6";

import imgLogo from "@/assets/img/sswmini.png";
import { useReactToPrint } from "react-to-print";
import { CVCorp } from "./templates/cv-corp";
import { useQuery } from "@tanstack/react-query";
import { apiPersonalInformation } from "./applicant.api";
import { useParams, useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import { endpoint } from "@/layouts/app";

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
  // * DEFINITIONS
  const [language, setLanguage] = useState("en");
  const [cvType, setCvType] = useState("1");
  const [cvLogo, setCvLogo] = useState("mb");
  const [cvColor, setCvColor] = useState<any>("brand");
  const Params = useParams();

  const contentRef = useRef<HTMLDivElement>(null);
  const Router = useRouter();

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

  const { data, isLoading } = useQuery({
    queryKey: ["admin", "cv", String(Params.id)],
    queryFn: async () => {
      const token: any = jwtDecode(sessionStorage.getItem("sswtoken") || "");
      const res: any = await apiPersonalInformation.get(token.user_id);
      console.log(res?.data);
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
      <section
        style={{
          background: "var(--mantine-color-gray-1)",
        }}
      >
        <Paper bg="dark.9" radius={0}>
          <Container size="lg" py={"xs"}>
            <Group justify="space-between">
              <Group gap="xs">
                <Image
                  src={imgLogo.src}
                  h={24}
                  w={32}
                  style={{
                    objectFit: "contain",
                  }}
                />
                <Text size="xs" c="white" fw={600}>
                  Unite SSW{" "}
                  <span
                    style={{
                      opacity: 0.5,
                    }}
                  >
                    {" "}
                    | Applicant Portal
                  </span>
                </Text>
              </Group>

              <Group justify="space-between" gap="xs">
                {data?.is_published ? (
                  <Badge
                    radius="sm"
                    size={"30"}
                    px="xs"
                    variant="light"
                    tt="none"
                    color="teal"
                  >
                    <Text size="xs">Your profile is verified & published.</Text>
                  </Badge>
                ) : (
                  <Badge
                    radius="sm"
                    size={"30"}
                    px="xs"
                    variant="light"
                    tt="none"
                    color="orange"
                  >
                    <Text size="xs">Your profile is pending verification.</Text>
                  </Badge>
                )}
                <Button
                  size="xs"
                  color="indigo"
                  disabled={data?.is_published}
                  onClick={() => {
                    Router.push("/onboarding");
                  }}
                >
                  Edit Profile
                </Button>
                <Button size="xs">Sign Out</Button>
              </Group>
            </Group>
          </Container>
        </Paper>
        <Paper bg="white" radius={0}>
          <Container size="lg" py="sm">
            <Grid align="center">
              <Grid.Col span={{ base: 12, lg: 3 }}>
                <Group wrap="nowrap" gap="xs">
                  <Text size="sm" fw={700}>
                    {language == "en" ? "Profile" : "プロフィール"}
                  </Text>
                  <Text size="sm" fw={700} c="brand.6">
                    {language == "en" ? data?.full_name : data?.furigana}
                  </Text>
                </Group>
              </Grid.Col>

              <Grid.Col span={{ base: 12, lg: 9 }}>
                <Group justify="flex-end" gap="xs">
                  <Group gap={0}>
                    {cvType == "7" && (
                      <Select
                        leftSection={<Text size="xs">L:</Text>}
                        onChange={(e: any) => setCvLogo(e)}
                        w={150}
                        size="xs"
                        data={[
                          { value: "mb", label: "Manabiya" },
                          { value: "us", label: "UniteSSW" },
                        ]}
                      />
                    )}
                    <Select
                      leftSection={<Text size="xs">T:</Text>}
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
                        { value: "7", label: "CV-Corporate" },
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
                      onChange={(e: any) => setCvColor(e)}
                      size="xs"
                      data={[
                        {
                          value: "brand",
                          label: "Default",
                        },

                        {
                          value: "blue",
                          label: "Blue",
                        },
                        {
                          value: "cyan",
                          label: "Cyan",
                        },
                        {
                          value: "pink",
                          label: "Pink",
                        },
                        {
                          value: "grape",
                          label: "Grape",
                        },
                        {
                          value: "indigo",
                          label: "Indigo",
                        },
                        {
                          value: "teal",
                          label: "Teal",
                        },
                        {
                          value: "green",
                          label: "Green",
                        },
                        {
                          value: "lime",
                          label: "Lime",
                        },
                        {
                          value: "yellow",
                          label: "Yellow",
                        },
                        {
                          value: "orange",
                          label: "Orange",
                        },
                        {
                          value: "red",
                          label: "Red",
                        },
                        {
                          value: "gray",
                          label: "Gray",
                        },
                      ]}
                    />
                  </Group>

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

                  <Divider
                    mx="xs"
                    opacity={0.2}
                    orientation="vertical"
                    color="brand.4"
                  />

                  <ButtonGroup>
                    <Button size="xs" onClick={reactToPrintFn}>
                      Print CV
                    </Button>
                  </ButtonGroup>
                </Group>
              </Grid.Col>
            </Grid>
          </Container>
        </Paper>

        <Center mt="md">
          {!cvType && (
            <>
              <Text my={100} size="xs">
                Please select a CV Template
              </Text>
            </>
          )}

          <Paper withBorder>
            <div ref={contentRef}>
              {cvType == "1" && (
                <CV1
                  color={cvColor}
                  data={data}
                  language={language}
                  printSt={printSt}
                />
              )}

              {cvType == "2" && (
                <CV2
                  color={cvColor}
                  data={data}
                  language={language}
                  printSt={printSt}
                />
              )}

              {cvType == "3" && (
                <CV3
                  color={cvColor}
                  data={data}
                  language={language}
                  printSt={printSt}
                />
              )}

              {cvType == "4" && (
                <CV4
                  color={cvColor}
                  data={data}
                  language={language}
                  printSt={printSt}
                />
              )}

              {cvType == "5" && (
                <CV5
                  color={cvColor}
                  data={data}
                  language={language}
                  printSt={printSt}
                />
              )}

              {cvType == "6" && (
                <CV6
                  color={cvColor}
                  data={data}
                  language={language}
                  printSt={printSt}
                />
              )}

              {cvType == "7" && (
                <CVCorp
                  color={cvColor}
                  data={data}
                  language={language}
                  printSt={printSt}
                  logo={cvLogo}
                />
              )}
            </div>
          </Paper>
        </Center>
        <Space h={"xl"} />
      </section>
    </>
  );
}
