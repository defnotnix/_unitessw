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
  ScrollArea,
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
import { DateInput } from "@mantine/dates";

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
  const [cvLogo, setCvLogo] = useState("us");
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
            <Grid.Col span={{ base: 4, lg: 6 }}>
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
                  Applicant
                </Text>
              </Group>
            </Grid.Col>

            <Grid.Col span={{ base: 8, lg: 6 }}>
              <Group justify="flex-end" gap="xs">
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
                </ButtonGroup>
              </Group>
            </Grid.Col>
          </Grid>
        </Container>
      </Paper>

      <Paper withBorder>
        <Container py="sm" size="xl">
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

      <Center mt="md">
        {!cvType && (
          <>
            <Text my={100} size="xs">
              Please select a CV Template
            </Text>
          </>
        )}

        <Paper
          visibleFrom="lg"
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

            {cvType == "7" && (
              <CVCorp
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

        <ScrollArea hiddenFrom="lg">
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

              {cvType == "7" && (
                <CVCorp
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
        </ScrollArea>
      </Center>
    </>
  );
}
