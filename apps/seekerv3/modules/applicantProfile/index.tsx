"use client";

import {
  ActionIcon,
  Anchor,
  Breadcrumbs,
  Button,
  ButtonGroup,
  Center,
  ColorSwatch,
  Container,
  Divider,
  Grid,
  Group,
  Loader,
  Paper,
  Select,
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

import { CV } from "@vframework/ui";

import { useReactToPrint } from "react-to-print";

import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { apiPersonalInformation } from "./module.api";

const bread = [
  {
    label: "Admin",
  },

  { label: "CV" },
  {
    label: "View CV",
  },
];

export function ModuleApplicantProfile() {
  const Router = useRouter();

  const { CV1, CV2, CV3, CV4, CV5, CV6, CVCorp } = CV;

  // * DEFINITIONS
  const [language, setLanguage] = useState("en");
  const [cvType, setCvType] = useState("1");
  const [cvLogo, setCvLogo] = useState("mb");
  const [cvColor, setCvColor] = useState<any>("brand");
  const Params = useParams();

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

  const { data, isLoading } = useQuery({
    queryKey: ["admin", "cv", String(Params.id)],
    queryFn: async () => {
      const res: any = await apiPersonalInformation.get(Params.id);
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
      <Paper>
        <Container size="xl" py="sm">
          <Grid align="center">
            <Grid.Col span={{ base: 12, lg: 3 }}>
              <Group wrap="nowrap">
                <ActionIcon
                  size="sm"
                  variant="light"
                  onClick={() => {
                    Router.back();
                  }}
                >
                  <ArrowLeftIcon size={12} />
                </ActionIcon>
                <Text size="sm" fw={800}>
                  Applicant CV
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

                <Divider mx="md" orientation="vertical" color="brand.4" />

                <Text size="xs">Print :</Text>

                <ButtonGroup>
                  <Button size="xs" onClick={reactToPrintFn}>
                    Current CV
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
    </>
  );
}
