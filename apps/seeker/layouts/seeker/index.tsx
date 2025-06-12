"use client";

import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Text,
} from "@mantine/core";
import { PropsWithChildren } from "react";

//assets
import imgLogo from "@/assets/img/sswmini.png";
import { DoorOpenIcon } from "@phosphor-icons/react";
import { useLanguage } from "../app/app.context";
import { useRouter } from "next/navigation";

export function LayoutSeeker({ children }: PropsWithChildren) {
  const { language, setLanguage } = useLanguage();
  const Router = useRouter();

  return (
    <>
      <section
        style={{
          minHeight: "100vh",
          background: "var(--mantine-color-gray-2)",
        }}
      >
        <Container size="lg">
          <Grid py="md">
            <Grid.Col span={{ base: 12, lg: 3 }}>
              <div>
                <Group gap="xs">
                  <Image
                    src={imgLogo.src}
                    h={24}
                    w={32}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                  <Text size="xs" fw={800}>
                    UNITE SSW{" "}
                    <span
                      style={{
                        opacity: 0.5,
                      }}
                    >
                      {language === "en"
                        ? "| SEEKER PORTAL"
                        : "| 求職者ポータル"}
                    </span>
                  </Text>
                </Group>
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Group justify="center" gap={0}>
                <Button
                  size="xs"
                  variant="light"
                  onClick={() => {
                    Router.push("/home");
                  }}
                >
                  {language === "en" ? "Home" : "ホーム"}
                </Button>
                <Button
                  size="xs"
                  variant="subtle"
                  c="dark.2"
                  onClick={() => {
                    Router.push("/applicants");
                  }}
                >
                  {language === "en" ? "Browse Employees" : "従業員を閲覧"}
                </Button>
                {/* <Button size="xs" variant="subtle" c="dark.2">
                  {language === "en" ? "Booked Candidates" : "予約済み候補者"}
                </Button>
                <Button size="xs" variant="subtle" c="dark.2">
                  {language === "en" ? "Hired Candidates" : "採用済み候補者"}
                </Button> */}
                <Button size="xs" variant="subtle" c="dark.2">
                  {language === "en" ? "Contact" : "お問い合わせ"}
                </Button>
              </Group>
            </Grid.Col>

            <Grid.Col span={{ base: 12, lg: 3 }}>
              <Group justify="flex-end" gap="xs">
                <ButtonGroup>
                  <Button
                    size="xs"
                    variant={language == "en" ? undefined : "light"}
                    onClick={() => setLanguage("en")}
                  >
                    EN
                  </Button>
                  <Button
                    size="xs"
                    variant={language == "jp" ? undefined : "light"}
                    onClick={() => setLanguage("jp")}
                  >
                    JP
                  </Button>
                </ButtonGroup>

                <Button size="xs" leftSection={<DoorOpenIcon />}>
                  Sign Out
                </Button>
              </Group>
            </Grid.Col>
          </Grid>
        </Container>

        <Divider
          style={{
            borderColor: "rgba(0,0,0,.1)",
          }}
        />

        {children}
      </section>
    </>
  );
}
