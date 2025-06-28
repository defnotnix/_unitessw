import { Badge, Stack, Text } from "@mantine/core";
import dayjs from "dayjs";

export const columns = [
  {
    accessor: "seeker",
    title: "Seeker",
    render: (row: any) => (
      <Stack gap={0}>
        <Text fw={600} size="xs">
          {row.seeker_name}
        </Text>
        <Text size="xs" opacity={0.6}>
          {row.seeker_email}
        </Text>
      </Stack>
    ),
  },
  {
    accessor: "applicant",
    title: "Applicant",
    render: (row: any) => (
      <Stack gap={0}>
        <Text fw={600} size="xs">
          {row.applicant_name}
        </Text>
        <Text size="xs" opacity={0.6}>
          {row.applicant_email}
        </Text>
      </Stack>
    ),
  },
  {
    accessor: "intent",
    title: "Intent",
    render: (row: any) => (
      <Badge color="blue" variant="light">
        {row.intent}
      </Badge>
    ),
  },
  {
    accessor: "status",
    title: "Status",
    render: (row: any) => (
      <Badge color={row.status ? "green" : "red"} variant="light">
        {row.status ? "Confirmed" : "Pending"}
      </Badge>
    ),
  },
  {
    accessor: "updated_at",
    title: "Updated",
    render: (row: any) => (
      <Text size="xs">{dayjs(row.updated_at).format("YYYY-MM-DD HH:mm")}</Text>
    ),
  },
];
