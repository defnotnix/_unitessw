"use client";

import { StatCard } from "@/components/StatCard";
import {
  Anchor,
  Badge,
  Box,
  Breadcrumbs,
  Divider,
  Grid,
  Paper,
  SimpleGrid,
  Table,
  Text,
} from "@mantine/core";
import { House, HouseIcon } from "@phosphor-icons/react";

export function ModuleAdminDashboard() {
  return (
    <div>
      <Box p="md">
        <Breadcrumbs
          separatorMargin={4}
          separator={
            <Text size="xs" c="gray.5">
              /
            </Text>
          }
        >
          <House
            weight="duotone"
            size={12}
            color="var(--mantine-color-brand-5)"
          />
          <Anchor size="xs" c={"gray.5"} fw={600}>
            Unite SSW Admin
          </Anchor>
          <Anchor size="xs" c={"dark.9"} fw={600}>
            Dashboard
          </Anchor>
        </Breadcrumbs>

        <Text size="xl" mt="md" fw={700}>
          My Dashboard
        </Text>
      </Box>

      <SimpleGrid cols={{ base: 2, lg: 5 }} px="sm" spacing="xs">
        <StatCard
          title="Total Applicants"
          description="total applicants involved."
          value="12,345"
          icon={HouseIcon}
        />
        <StatCard
          title="Total Seekers"
          description="total seekers involved."
          value="12,345"
          color="teal"
          icon={HouseIcon}
        />
        <StatCard
          title="Total Applicants"
          description="total applicants involved."
          value="12,345"
          icon={HouseIcon}
        />
        <StatCard
          title="Total Seekers"
          description="total seekers involved."
          value="12,345"
          color="teal"
          icon={HouseIcon}
        />
        <StatCard
          title="Total Seekers"
          description="total seekers involved."
          value="12,345"
          color="teal"
          icon={HouseIcon}
        />
      </SimpleGrid>

      <Grid gutter="xs" px="sm" mt="sm">
        <Grid.Col span={{ base: 12, lg: 7.2 }}>
          <Paper withBorder>
            <Paper p="md" bg="brand.0">
              <Text size="sm" fw={600}>
                Applicant Booking Requests
              </Text>
            </Paper>

            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>#</Table.Th>
                  <Table.Th>Date</Table.Th>
                  <Table.Th>Seeker</Table.Th>
                  <Table.Th>Applicant</Table.Th>
                  <Table.Th>Status</Table.Th>
                </Table.Tr>

                <Table.Tr>
                  <Table.Td>
                    <Text size="xs">1</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text size="xs">23 February, 2025 (1 day ago)</Text>
                  </Table.Td>
                  <Table.Td>
                    <Anchor size="xs">Konnichiwa MFERS Group</Anchor>
                  </Table.Td>
                  <Table.Td>
                    <Anchor size="xs">Kabin Devkota</Anchor>
                  </Table.Td>
                  <Table.Td>
                    <Badge size="sm">Pending</Badge>
                  </Table.Td>
                </Table.Tr>

                <Table.Tr>
                  <Table.Td>
                    <Text size="xs">1</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text size="xs">23 February, 2025 (1 day ago)</Text>
                  </Table.Td>
                  <Table.Td>
                    <Anchor size="xs">Konnichiwa MFERS Group</Anchor>
                  </Table.Td>
                  <Table.Td>
                    <Anchor size="xs">Kabin Devkota</Anchor>
                  </Table.Td>
                  <Table.Td>
                    <Badge size="sm">Pending</Badge>
                  </Table.Td>
                </Table.Tr>

                <Table.Tr>
                  <Table.Td>
                    <Text size="xs">1</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text size="xs">23 February, 2025 (1 day ago)</Text>
                  </Table.Td>
                  <Table.Td>
                    <Anchor size="xs">Konnichiwa MFERS Group</Anchor>
                  </Table.Td>
                  <Table.Td>
                    <Anchor size="xs">Kabin Devkota</Anchor>
                  </Table.Td>
                  <Table.Td>
                    <Badge size="sm">Pending</Badge>
                  </Table.Td>
                </Table.Tr>

                <Table.Tr>
                  <Table.Td>
                    <Text size="xs">1</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text size="xs">23 February, 2025 (1 day ago)</Text>
                  </Table.Td>
                  <Table.Td>
                    <Anchor size="xs">Konnichiwa MFERS Group</Anchor>
                  </Table.Td>
                  <Table.Td>
                    <Anchor size="xs">Kabin Devkota</Anchor>
                  </Table.Td>
                  <Table.Td>
                    <Badge size="sm">Pending</Badge>
                  </Table.Td>
                </Table.Tr>

                <Table.Tr>
                  <Table.Td>
                    <Text size="xs">1</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text size="xs">23 February, 2025 (1 day ago)</Text>
                  </Table.Td>
                  <Table.Td>
                    <Anchor size="xs">Konnichiwa MFERS Group</Anchor>
                  </Table.Td>
                  <Table.Td>
                    <Anchor size="xs">Kabin Devkota</Anchor>
                  </Table.Td>
                  <Table.Td>
                    <Badge size="sm">Pending</Badge>
                  </Table.Td>
                </Table.Tr>

                <Table.Tr>
                  <Table.Td>
                    <Text size="xs">1</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text size="xs">23 February, 2025 (1 day ago)</Text>
                  </Table.Td>
                  <Table.Td>
                    <Anchor size="xs">Konnichiwa MFERS Group</Anchor>
                  </Table.Td>
                  <Table.Td>
                    <Anchor size="xs">Kabin Devkota</Anchor>
                  </Table.Td>
                  <Table.Td>
                    <Badge size="sm">Pending</Badge>
                  </Table.Td>
                </Table.Tr>
              </Table.Thead>
            </Table>
          </Paper>
        </Grid.Col>
        <Grid.Col span={{ base: 12, lg: 4.8 }}>
          <Paper withBorder>
            <Paper p="md" bg="teal.0">
              <Text size="sm" fw={600}>
                New Applications
              </Text>
            </Paper>

            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>#</Table.Th>
                  <Table.Th>Date</Table.Th>
                  <Table.Th>Applicant</Table.Th>
                  <Table.Th>Status</Table.Th>
                </Table.Tr>

                <Table.Tr>
                  <Table.Td>
                    <Text size="xs">1</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text size="xs">23 February, 2025 (1 day ago)</Text>
                  </Table.Td>
                  <Table.Td>
                    <Anchor size="xs">Kabin Devkota</Anchor>
                  </Table.Td>
                  <Table.Td>
                    <Badge size="sm">Pending</Badge>
                  </Table.Td>
                </Table.Tr>

                <Table.Tr>
                  <Table.Td>
                    <Text size="xs">1</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text size="xs">23 February, 2025 (1 day ago)</Text>
                  </Table.Td>
                  <Table.Td>
                    <Anchor size="xs">Kabin Devkota</Anchor>
                  </Table.Td>
                  <Table.Td>
                    <Badge size="sm">Pending</Badge>
                  </Table.Td>
                </Table.Tr>
              </Table.Thead>
            </Table>
          </Paper>
        </Grid.Col>
      </Grid>
    </div>
  );
}
