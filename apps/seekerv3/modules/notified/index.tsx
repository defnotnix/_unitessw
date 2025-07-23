"use client";

import { UserCard } from "@/components/UserCard/page";
import { useLanguage } from "@/layouts/app/app.context";
import {
  Center,
  Container,
  Grid,
  Group,
  Loader,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { SmileyIcon } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import { moduleApiCall } from "@vframework/core";
import { jwtDecode } from "jwt-decode";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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

export function ModuleApplicantNotified() {
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
        endpoint: "/logs/interest/",
      });
      

      return res;
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
            {language === "en"
              ? "Candidates that Manabiya HR Unity has been notified by you."
              : "Manabiya HR Unity が通知した候補者です。"}
          </Text>
        </Container>
      </Paper>
      <Container size="xl" py="md">
        <Grid gutter="4px">
          <Grid.Col span={{ base: 12, lg: 8.5 }} offset={{ lg: 1.75 }}>
            {queryData?.data?.length <= 0 && (
              <Center h={400}>
                <Stack gap="0">
                  <Group justify="center" opacity={0.2}>
                    <SmileyIcon
                      size={100}
                      weight="fill"
                      color="var(--mantine-color-brand-6)"
                    />
                  </Group>

                  <Text size="xl" fw={800} ta="center" mt="xs">
                    {language === "en"
                      ? "It looks like you haven’t notified any candidates yet."
                      : "まだ候補者に通知していないようです。"}
                  </Text>

                  <Text size="xs" fw={500} ta="center">
                    {language === "en"
                      ? "You can notify candidates as interested directly from their profiles."
                      : "プロフィールから直接、興味があることを候補者に通知できます。"}
                  </Text>
                </Stack>
              </Center>
            )}

            <Stack mt="lg" gap="4px">
              {queryData.data?.map((item: any, index: number) => (
                <UserCard
                  applicant={{
                    ...item,
                    ...item.a_personal,
                    ...item.a_background,
                    ...item.a_physical,
                  }}
                  onSuccessInterest={queryData.refetch}
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
