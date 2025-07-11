"use client";

import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  Group,
  Image,
  Text,
} from "@mantine/core";
import { PropsWithChildren } from "react";

//assets
import imgLogo from "@/assets/img/sswmini.png";
import { DoorOpenIcon } from "@phosphor-icons/react";

export function LayoutSeeker({ children }: PropsWithChildren) {
  return (
    <>
      <section
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(to bottom,var(--mantine-color-brand-1),var(--mantine-color-pink-0))",
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
                    Manabiya HR Unity{" "}
                    <span
                      style={{
                        opacity: 0.5,
                      }}
                    >
                      | SEEKER PORTAL
                    </span>
                  </Text>
                </Group>
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Group justify="center" gap={0}>
                <Button size="xs" variant="light">
                  Home
                </Button>
                <Button size="xs" variant="subtle" c="dark.2">
                  Browse Employees
                </Button>
                <Button size="xs" variant="subtle" c="dark.2">
                  Booked Candidates
                </Button>
                <Button size="xs" variant="subtle" c="dark.2">
                  Hired Candidates
                </Button>
                <Button size="xs" variant="subtle" c="dark.2">
                  Contact
                </Button>
              </Group>
            </Grid.Col>

            <Grid.Col span={{ base: 12, lg: 3 }}>
              <Group justify="flex-end" gap="xs">
                <ButtonGroup>
                  <Button size="xs">EN</Button>
                  <Button size="xs" variant="light">
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

        {children}
      </section>
    </>
  );
}
