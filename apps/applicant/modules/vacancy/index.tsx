"use client";

import { images } from "@/public/img";
import {
  ActionIcon,
  Button,
  Center,
  Container,
  Group,
  Image,
  Modal,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  ArrowUpRightIcon,
  CaretRightIcon,
  Icon,
  ScrollIcon,
  SmileyIcon,
} from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import { moduleApiCall } from "@vframework/core";
import { useRouter } from "next/navigation";

export function ModuleApplicantVacancy() {
  const Router = useRouter();

  const queryData = useQuery({
    queryKey: ["admin", "applicants", "vacancy"],
    queryFn: async () => {
      const res = await moduleApiCall.getRecords({
        endpoint: "/vacancy/info/",
      });
      console.log(res);
      return res;
    },
  });

  const VacancyCard = ({ data }: any) => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
      <>
        <Paper
          p={4}
          withBorder
          onClick={() => {
            open();
          }}
        >
          <Image src={data.image} h={300} fit="cover" />
        </Paper>

        <Modal
          size="xl"
          opened={opened}
          onClose={close}
          title={<Text size="xs">Vacancy</Text>}
        >
          <Image src={data.image} fit="cover" />
        </Modal>
      </>
    );
  };

  return (
    <>
      <section
        style={{
          background: "var(--mantine-color-gray-2)",
          minHeight: "100vh",
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

              <Group gap={6}>
                <Text size="xs" c="gray.0">
                  Explore Job Vacancies from different companies in Japan.
                </Text>
              </Group>
            </Group>
          </Container>
        </Paper>
        <Paper bg="gray.3">
          <Container py="md">
            <Group justify="space-between">
              <Text size="xl">Explore Job Vacancies</Text>
              <Text size="xl" opacity={0.2}>
                Vacancy feed from different companies in japan.
              </Text>
            </Group>
          </Container>
        </Paper>
        <Container py="md">
          <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="xs">
            {queryData?.data?.map((item: any, index: any) => (
              <VacancyCard data={item} key={index} />
            ))}
          </SimpleGrid>

          {queryData?.data?.length == 0 && (
            <Center h={400}>
              <Stack>
                <Group justify="center">
                  <SmileyIcon
                    size={100}
                    weight="duotone"
                    color="var(--mantine-color-brand-3)"
                  />
                </Group>
                <Text size="xl" ta="center">
                  Unfortunately, there are no active
                  <br /> vacancies at the moment. Please check back later!
                </Text>

                <Group justify="center">
                  <Button
                    onClick={() => {
                      Router.push("/myprofile");
                    }}
                  >
                    Go back
                  </Button>
                </Group>
              </Stack>
            </Center>
          )}
        </Container>
      </section>
    </>
  );
}
