"use client";

import { UserCard } from "@/components/UserCard/page";
import { useLanguage } from "@/layouts/app/app.context";
import {
  ActionIcon,
  Anchor,
  Avatar,
  Badge,
  Box,
  Breadcrumbs,
  Burger,
  Button,
  ButtonGroupSection,
  Center,
  CheckIcon,
  Container,
  Divider,
  Drawer,
  Grid,
  Group,
  Image,
  Loader,
  Menu,
  NumberInput,
  Pagination,
  Paper,
  Select,
  SimpleGrid,
  Stack,
  Switch,
  Text,
  TextInput,
  ThemeIcon,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import {
  ArrowClockwiseIcon,
  CaretDownIcon,
  CheckCircleIcon,
  MagnifyingGlassIcon,
} from "@phosphor-icons/react";
import { useQueries, useQuery } from "@tanstack/react-query";
import { moduleApiCall } from "@vframework/core";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getJobCategory } from "../home/module.api";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import { endpoint } from "@/layouts/app";

const inputStyle = {
  label: {
    fontSize: "var(--mantine-font-size-xs)",
    fontWeight: 700,
  },
  input: {
    background: "white",
    padding: "16px 0",
    border: "none",
  },
};

export function ModuleSeekerApplicantsSaved() {
  const { language } = useLanguage();

  const [opened, handleOpen] = useDisclosure();
  const Router = useRouter();

  const form = useForm({
    mode: "uncontrolled",
  });

  const [current, setCurrent] = useState(1);
  const [paginationData, setPaginationData] = useState<any>({});

  const Params = useSearchParams();

  const queryData = useQuery({
    queryKey: ["seeker", "saved"],
    queryFn: async () => {
      const tokenData: any = jwtDecode(
        sessionStorage.getItem("sswtoken") || ""
      );

      const res = await moduleApiCall.getRecords({
        endpoint: "/logs/seeker/applicant/" + tokenData?.user_id + "/",
        params: {
          ...Object.fromEntries(Params.entries()),
          page: current,
          pageSize: 20,
        },
      });
      console.log(res);

      return res.map((item: any) => {
        return {
          ...item.applicant,
          image: endpoint + item?.applicant?.image,
          mainId: item?.id,
        };
      });
    },
    initialData: [],
  });

  useEffect(() => {
    form.setValues(Object.fromEntries(Params.entries()));
  }, []);

  useEffect(() => {
    queryData.refetch();
  }, [Params, current]);

  if (queryData.isFetching) {
    return (
      <>
        <Center h={400}>
          <Loader size="xs" />
        </Center>
      </>
    );
  }

  return (
    <>
      <Paper>
        <Container size="xl" py="md">
          <Text size="sm" fw={900} ta="center">
            My Saved Canddiates
          </Text>
        </Container>
      </Paper>
      <Container size="xl" py="md">
        <Grid gutter="4px">
          <Grid.Col span={{ base: 12, lg: 8.5 }} offset={{ lg: 1.75 }}>
            <Group justify="space-between">
              <Group gap={2}>
                <ThemeIcon hiddenFrom="lg">
                  <Burger
                    size="xs"
                    color="white"
                    onClick={() => handleOpen.open()}
                  />
                </ThemeIcon>
              </Group>
            </Group>

            <Stack mt="lg" gap="4px">
              {queryData.data?.map((item: any, index: number) => (
                <UserCard
                  applicant={{
                    ...item,
                    ...item.a_personal,
                    ...item.a_background,
                    ...item.a_physical,
                  }}
                  onSuccess={queryData.refetch}
                  key={index}
                />
              ))}
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}
