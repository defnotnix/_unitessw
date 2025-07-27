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
  Drawer,
  Grid,
  Group,
  Loader,
  Paper,
  Select,
  Text,
} from "@mantine/core";
import {
  ArrowLeftIcon,
  EyeIcon,
  HouseIcon,
  PenIcon,
  PrinterIcon,
} from "@phosphor-icons/react";
import { useRef, useState } from "react";

import { DateInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ApplicantProfile, CV } from "@vframework/ui";
import { useParams, useRouter } from "next/navigation";
import { useReactToPrint } from "react-to-print";
import { apiPersonalInformation } from "../../form/module.api";

const bread = [
  {
    label: "Admin",
  },
  { label: "CV" },
  {
    label: "View CV",
  },
];

const cvTypes = [
  { value: "1", label: "CV-1" },
  { value: "2", label: "CV-2" },
  { value: "3", label: "CV-3" },
  { value: "4", label: "CV-4" },
  { value: "5", label: "CV-5" },
  { value: "6", label: "CV-6" },
  { value: "7", label: "CV-Corporate" },
];

export function _CV() {
  const { CV1, CV2, CV3, CV4, CV5, CV6, CVCorp } = CV;

  // * DEFINITIONS
  const [language, setLanguage] = useState("en");
  const [cvType, setCvType] = useState("1");
  const [cvLogo, setCvLogo] = useState("us");
  const [cvColor, setCvColor] = useState<any>("brand");
  const Params: any = useParams();
  const Router = useRouter();
  const [opened, { open, close }] = useDisclosure();
  const [info, setInfo] = useState<any>({});

  const { mutate } = useMutation({
    mutationKey: ["admin", "cv"],
    mutationFn: async (id) => {
      const res: any = await apiPersonalInformation.get(id);

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

  const [date, setDate] = useState<Date>(new Date());

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

  const cvProps = {
    color: cvColor,
    data: data,
    language: language,
    printSt: printSt,
    logo: cvLogo,
    date: date,
  };

  const renderCVTemplate = () => {
    switch (cvType) {
      case "1":
        return <CV1 {...cvProps} />;
      case "2":
        return <CV2 {...cvProps} />;
      case "3":
        return <CV3 {...cvProps} />;
      case "4":
        return <CV4 {...cvProps} />;
      case "5":
        return <CV5 {...cvProps} />;
      case "6":
        return <CV6 {...cvProps} />;
      case "7":
        return <CVCorp {...cvProps} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Paper>
        <Container py="sm">
          <Grid align="center">
            <Grid.Col span={{ base: 12, lg: 4 }}>
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
                  {bread.map((breadinfo, index) => (
                    <Anchor
                      size="xs"
                      c={index === bread.length - 1 ? "dark.9" : "gray.5"}
                      fw={600}
                      key={index}
                    >
                      {breadinfo.label}
                    </Anchor>
                  ))}
                </Breadcrumbs>
              </Group>
            </Grid.Col>

            <Grid.Col span={{ base: 12, lg: 4 }}>
              <Text size="xs" ta="center" fw={600}>
                Applicant CV /{" "}
                <b>
                  {data?.first_name} {data?.middle_name} {data?.last_name}
                </b>
              </Text>
            </Grid.Col>

            <Grid.Col span={{ base: 12, lg: 4 }}>
              <Group justify="flex-end" gap="xs">
                <ButtonGroup>
                  <Button
                    size="xs"
                    onClick={() => setLanguage("en")}
                    variant={language === "en" ? "filled" : "light"}
                  >
                    EN
                  </Button>
                  <Button
                    size="xs"
                    onClick={() => setLanguage("jp")}
                    variant={language === "jp" ? "filled" : "light"}
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
                    Print CV (
                    {cvTypes.find((item: any) => item.value == cvType)?.label})
                  </Button>

                  <Button
                    leftSection={<PenIcon />}
                    variant="light"
                    size="xs"
                    onClick={() => {
                      Router.push("/admin/applicants/all/edit/" + Params.id);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    leftSection={<EyeIcon />}
                    variant="subtle"
                    size="xs"
                    onClick={async () => {
                      await mutate(Params.id);
                      open();
                    }}
                  >
                    Profile
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
            <DateInput
              value={date}
              onChange={(e: any) => setDate(e)}
              size="xs"
              leftSectionWidth={70}
              leftSection={<Text size="xs">Print Date</Text>}
            />
            <Select
              leftSectionWidth={70}
              leftSection={<Text size="xs">Template</Text>}
              w={150}
              value={cvType}
              onChange={(e: any) => setCvType(e)}
              size="xs"
              data={cvTypes}
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
            <Select
              leftSectionWidth={120}
              leftSection={<Text size="xs">Logo/Watermark</Text>}
              w={150}
              size="xs"
              data={[
                { value: "na", label: "None" },
                { value: "mb", label: "Manabiya" },
                { value: "us", label: "Manabiya HR Unity" },
              ]}
              value={cvLogo}
              onChange={(e: any) => setCvLogo(e)}
            />
          </Group>
        </Container>
      </Paper>

      <Center mt="md">
        {!cvType && (
          <Text my={100} size="xs">
            Please select a CV Template
          </Text>
        )}

        <Paper
          withBorder
          style={{
            wordWrap: "break-word",
          }}
        >
          <div ref={contentRef}>{renderCVTemplate()}</div>
        </Paper>
      </Center>

      <Drawer
        size="xl"
        opened={opened}
        onClose={close}
        position="right"
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
        <ApplicantProfile info={info} lang="en" />
      </Drawer>
    </>
  );
}
