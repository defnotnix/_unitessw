"use client";

//styles
import {
  ActionIcon,
  Avatar,
  Button,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import classes from "./footer.module.css";

import {
  FacebookLogo,
  InstagramLogo,
  MapTrifold,
  ThreadsLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";

import imgLogo from "@/assets/img/logo.png";

import { useRouter } from "next/navigation";

export function LayoutSiteFooter() {
  const Router = useRouter();

  const state = {
    language: "en",
  };

  return (
    <section className={classes.root}>
      <Container>
        <Divider opacity={0.2} py={32} />
        <Space h={100} />

        <Grid>
          <Grid.Col span={{ base: 12, lg: 5 }}>
            <Text size="2rem" lh="2.5rem" c="gray.0" visibleFrom="lg">
              {state.language == "en"
                ? " We help you seamlessly transition from preparing in Nepal to settling in Japan for your studies."
                : " ネパールでの準備から日本での生活への移行をサポートします。あなたの"}
            </Text>
            <Text size="xl" c="gray.0" hiddenFrom="lg" mb="xl" ta="center">
              {state.language == "en"
                ? " We help you seamlessly transition from preparing in Nepal to settling in Japan for your studies."
                : " ネパールでの準備から日本での生活への移行をサポートします。あなたの"}
            </Text>
          </Grid.Col>
          <Grid.Col span={{ base: 6, lg: 2 }} offset={{ base: 0, lg: 1 }}>
            <Text
              size="xs"
              tt="uppercase"
              opacity={0.5}
              c="gray.0"
              onClick={() => {
                Router.push("/company");
              }}
              style={{ cursor: "pointer" }} // Add cursor pointer here
            >
              {state.language == "en" ? "COMPANY" : "会社概要"}
            </Text>
            <Stack mt="md" gap="xs">
              <Text
                size="md"
                c="gray.0"
                style={{ cursor: "pointer" }} // Add cursor pointer here
                onClick={() => {
                  Router.push("/company"); // or appropriate path
                }}
              >
                {state.language == "en" ? "Company Profile" : "会社の概要"}
              </Text>
              <Text
                size="md"
                c="gray.0"
                style={{ cursor: "pointer" }} // Add cursor pointer here
                onClick={() => {
                  Router.push("/about"); // or appropriate path
                }}
              >
                {state.language == "en" ? "About" : "会社概要"}
              </Text>
              <Text
                size="md"
                c="gray.0"
                style={{ cursor: "pointer" }} // Add cursor pointer here
                onClick={() => {
                  Router.push("/contact"); // or appropriate path
                }}
              >
                {state.language == "en" ? "Contact" : "お問い合わせ"}
              </Text>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 6, lg: 2 }}>
            <Text
              size="xs"
              tt="uppercase"
              opacity={0.5}
              c="gray.0"
              style={{ cursor: "pointer" }} // Add cursor pointer here
            >
              {state.language == "en" ? "FOR STUDENTS" : "学生向け"}
            </Text>
            <Stack mt="md" gap="xs">
              <Text
                size="md"
                c="gray.0"
                style={{ cursor: "pointer" }} // Add cursor pointer here
                onClick={() => {
                  Router.push("/services"); // or appropriate path
                }}
              >
                {state.language == "en" ? "Courses" : "コース"}
              </Text>
            </Stack>
          </Grid.Col>

          {/* <Grid.Col span={{ base: 6, lg: 2 }}>
            <Text size="xs" tt="uppercase" opacity={0.5} c="gray.0">
              {state.language == "en" ? "INTAKES" : "入居制度"}
            </Text>
            <Stack mt="md" gap="xs">
              <Text size="md" c="gray.0">
                {state.language == "en" ? "April Intakes" : "4月の入居制度"}
              </Text>
              <Text size="md" c="gray.0">
                {state.language == "en" ? "September Intakes" : "9月の入居制度"}
              </Text>
            </Stack>
          </Grid.Col> */}
          <Grid.Col span={12}>
            <Space h={50} />
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 5 }}>
            <Group wrap="nowrap">
              <Image src={imgLogo.src} h={32} w={54} fit="contain" />
              <div>
                <Text size="xl" c="gray.0" tt="uppercase">
                  {state.language == "en" ? "Unite SSW" : "マナビヤネパール"}
                </Text>
              </div>
            </Group>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 2 }} offset={{ base: 0, lg: 1 }}>
            <Text size="xs" tt="uppercase" opacity={0.5} c="gray.0">
              {state.language == "en" ? "CONTACT" : "お問い合わせ"}
            </Text>
            <Stack mt="md" gap="xs">
              <Text size="md" c="gray.0">
                {state.language == "en"
                  ? "New Plaza, Putalisadak,"
                  : "新しいプラザ, プトリサダク,"}
                <br />{" "}
                {state.language == "en" ? "Kathmandu, Nepal" : "カトマンド"}
              </Text>

              <Group>
                <Button
                  mt="sm"
                  color="gray"
                  size="xs"
                  justify="flex-start"
                  variant="light"
                  rightSection={<MapTrifold />}
                  onClick={() => {
                    Router.push("https://maps.app.goo.gl/DUGsbLUadTqXsz6Y6");
                  }}
                >
                  Open in Google Maps
                </Button>
              </Group>

              <Group mt={50} gap={"md"}>
                <ActionIcon
                  variant="subtle"
                  c="gray.0"
                  onClick={() => {
                    Router.push("https://www.facebook.com/manabiyanepal/");
                  }}
                >
                  <FacebookLogo size={24} weight="fill" />
                </ActionIcon>

                <ActionIcon variant="subtle" c="gray.0">
                  <InstagramLogo size={24} weight="fill" />
                </ActionIcon>
                <ActionIcon variant="subtle" c="gray.0">
                  <ThreadsLogo size={24} weight="fill" />
                </ActionIcon>
                <ActionIcon variant="subtle" c="gray.0">
                  <WhatsappLogo size={24} weight="fill" />
                </ActionIcon>
              </Group>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 2 }}>
            <Text size="xs" tt="uppercase" opacity={0.5} c="gray.0">
              FOR STUDENTS
            </Text>
            <Stack mt="md" gap="xs">
              <Text size="md" c="gray.0">
                +977 9851338205
                <br />
                +977 15917178
              </Text>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 2 }}>
            <Text size="xs" tt="uppercase" opacity={0.5} c="gray.0">
              EMAIL
            </Text>
            <Stack mt="md" gap="xs">
              <Text size="md" c="gray.0">
                info@manabiyanepal.com.np
              </Text>
            </Stack>
          </Grid.Col>
        </Grid>
        <Space h={100} />

        <Divider opacity={0.2} my={32} />

        <Group justify="space-between">
          <Text size="xs" c="gray.0" opacity={0.5}>
            {state?.language == "en"
              ? "All rights reserved by Unite SSW."
              : "マナビヤネパールが全ての権利を保有しています。"}
          </Text>
          <Text size="xs" c="gray.0" opacity={0.5}>
            {state?.language == "en"
              ? "No part of this material may be reproduced without permission. © " +
                new Date().getFullYear() +
                " Unite SSW."
              : "この資料の一部も許可なく複製することはできません。© " +
                new Date().getFullYear() +
                " マナビヤネパール。"}
          </Text>
        </Group>
        <Space h={100} />
      </Container>
    </section>
  );
}
