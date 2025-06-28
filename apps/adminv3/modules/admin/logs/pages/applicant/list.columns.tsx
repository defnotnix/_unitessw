import { Avatar, Badge, Group, Text } from "@mantine/core";
import dayjs from "dayjs";

export const columns = [
  {
    accessor: "created_at",
    title: "Date",
    render: (row: any) => (
      <Text size="xs">{dayjs(row.created_at).format("YYYY-MM-DD HH:mm")}</Text>
    ),
  },
  {
    accessor: "user",
    title: "User",
    render: (row: any) => (
      <Group wrap="nowrap">
        <Avatar size="sm" radius="xl" name={row.user_name} />
        <Text size="xs" fw={500}>
          {row.user_name}
        </Text>
      </Group>
    ),
  },
  {
    accessor: "applicant",
    title: "Applicant",
    render: (row: any) => (
      <Group wrap="nowrap">
        <Avatar size="sm" radius="xl" name={row.applicant_name} />
        <Text size="xs" fw={500}>
          {row.applicant_name}
        </Text>
      </Group>
    ),
  },
  {
    accessor: "action",
    title: "Action",
    render: (row: any) => (
      <Badge variant="light" color="blue">
        {row.action}
      </Badge>
    ),
  },
];
