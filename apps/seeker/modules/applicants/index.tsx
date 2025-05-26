"use client";

import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Menu,
  NumberInput,
  Paper,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import {
  ArrowClockwiseIcon,
  CaretDownIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react";

export function ModuleSeekerApplicants() {
  return (
    <>
      <Container size="xl" py="xl">
        <Grid>
          <Grid.Col span={{ base: 12, lg: 3.5 }}>
            <Group justify="space-between">
              <Text size="xs">Showing XX of XX Applicants</Text>
              <ActionIcon variant="light">
                <ArrowClockwiseIcon />
              </ActionIcon>
            </Group>

            <Paper withBorder p="lg" mt="lg" radius="lg">
              <Stack>
                <Text size="xs" tt="uppercase" opacity={0.5}>
                  Filter Parameters
                </Text>
                <Stack gap="xs">
                  <Select
                    data={[]}
                    styles={{
                      input: {
                        background: "white",
                        padding: "16px 0",
                        border: "none",
                      },
                    }}
                    variant="filled"
                    label="Job Category"
                    placeholder="Select Job Category"
                  />
                  <Select
                    data={[]}
                    styles={{
                      input: {
                        background: "white",
                        padding: "16px 0",
                        border: "none",
                      },
                    }}
                    variant="filled"
                    label="Gender"
                    placeholder="Select Job Category"
                  />

                  <SimpleGrid spacing="xs" cols={2}>
                    <NumberInput
                      hideControls
                      styles={{
                        input: {
                          background: "white",
                          padding: "16px 0",
                          border: "none",
                        },
                      }}
                      variant="filled"
                      label="Min Age"
                      placeholder="Minium Age"
                    />
                    <NumberInput
                      hideControls
                      styles={{
                        input: {
                          background: "white",
                          padding: "16px 0",
                          border: "none",
                        },
                      }}
                      variant="filled"
                      label="Max Age"
                      placeholder="Minium Age"
                    />
                  </SimpleGrid>

                  <Select
                    data={[]}
                    styles={{
                      input: {
                        background: "white",
                        padding: "16px 0",
                        border: "none",
                      },
                    }}
                    variant="filled"
                    label="Job Category"
                    placeholder="Select Job Category"
                  />
                  <Select
                    data={[]}
                    styles={{
                      input: {
                        background: "white",
                        padding: "16px 0",
                        border: "none",
                      },
                    }}
                    variant="filled"
                    label="Gender"
                    placeholder="Select Job Category"
                  />

                  <Select
                    data={[]}
                    styles={{
                      input: {
                        background: "white",
                        padding: "16px 0",
                        border: "none",
                      },
                    }}
                    variant="filled"
                    label="Job Category"
                    placeholder="Select Job Category"
                  />
                  <Select
                    data={[]}
                    styles={{
                      input: {
                        background: "white",
                        padding: "16px 0",
                        border: "none",
                      },
                    }}
                    variant="filled"
                    label="Gender"
                    placeholder="Select Job Category"
                  />

                  <Button variant="light">Apply Filter</Button>
                </Stack>
              </Stack>
            </Paper>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 7.5 }}>
            <Group justify="space-between">
              <Text size="xs">Showing XX of XX Applicants</Text>
              <Menu>
                <Menu.Target>
                  <Button
                    variant="white"
                    rightSection={<CaretDownIcon size={12} />}
                    size="xs"
                  >
                    Sort By : Registered Date
                  </Button>
                </Menu.Target>
              </Menu>
            </Group>

            <Stack mt="lg">
              <Paper withBorder radius="lg">
                <Stack gap="lg" p="lg">
                  <Group justify="space-between">
                    <Group>
                      <Avatar
                        size="xl"
                        src="https://images.squarespace-cdn.com/content/v1/54f62cc5e4b03dc2ab4c1f4b/1630379950747-QT5HD9JKQ3JVZC9RPP2R/Passport+size+photo.JPEG"
                      />

                      <Stack gap={0}>
                        <Group gap={"xs"} mb="xs">
                          <Text size="sm">Nepal</Text>
                          <Badge
                            color="teal"
                            variant="light"
                            tt="none"
                            leftSection={<CheckCircleIcon />}
                          >
                            Verified Applicant
                          </Badge>
                          <Badge color="indigo" variant="light" tt="none">
                            Seeking on : Hospitality
                          </Badge>
                        </Group>

                        <Text size="1.5rem">Ram Kumar Shrestha</Text>
                        <Text size="xs" opacity={0.5}>
                          Proficient in English, Nepali, Hindi, and Urdu
                        </Text>
                      </Stack>
                    </Group>

                    <Button size="md" radius="lg" variant="light">
                      View Profile
                    </Button>
                  </Group>

                  <SimpleGrid cols={6}>
                    <Text size="sm" opacity={0.6} fw={600}>
                      24 Years Old
                    </Text>
                    <Text size="sm" opacity={0.6} fw={600}>
                      Height : 113cm
                    </Text>
                    <Text size="sm" opacity={0.6} fw={600}>
                      Weight : 60kg
                    </Text>
                    <Text size="sm" opacity={0.6} fw={600}>
                      Male / Unmarried
                    </Text>

                    <Text size="sm" opacity={0.6} fw={600}>
                      Has Language Certificate
                    </Text>
                    <Text size="sm" opacity={0.6} fw={600}>
                      Has Driving License
                    </Text>
                  </SimpleGrid>
                </Stack>

                <Divider />

                <SimpleGrid cols={2} p="lg">
                  <div>
                    <Text size="xs" opacity={0.5}>
                      Recent Education
                    </Text>

                    <Text size="lg" fw={600}>
                      Bachelors in Hospitality
                    </Text>
                    <Text size="xs">2016-2020</Text>
                    <Text size="xs">
                      Kansas Hospitality School, Kathmandu, Nepal.
                    </Text>
                  </div>

                  <div>
                    <Text opacity={0.5} size="xs">
                      Recent Work History
                    </Text>

                    <Text size="lg" fw={600}>
                      Guest Attending Staff
                    </Text>
                    <Text size="xs">2016-2020</Text>
                    <Text size="xs">Soaltee Hotel, Kathmandu, Nepal.</Text>
                  </div>
                </SimpleGrid>
              </Paper>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}
