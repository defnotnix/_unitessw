import { Badge, Group, Text } from "@mantine/core";

export const columns = [
  {
    accessor: "seeker.id",
    title: "Seeker",
    render: (record: any) => (
      <Group wrap="nowrap">
        <Text size="xs" fw={600}>
          {record.seeker?.name}
        </Text>
        <Text size="xs" opacity={0.5}>
          {record.seeker?.email}
        </Text>
      </Group>
    ),
    sortable: true,
  },
  {
    accessor: "applicant.id",
    title: "Interested Applicant",
    render: (record: any) => (
      <Group wrap="nowrap">
        <Text size="xs" fw={600}>
          {record.applicant?.name}
        </Text>
        <Text size="xs" opacity={0.5}>
          {record.applicant?.email}
        </Text>
      </Group>
    ),
    sortable: true,
  },
  {
    accessor: "intent",
    title: "Intent",
    render: (record: any) => {
      return (
        <>
          {record.intent == "Interview" ? (
            <Badge color="indigo" variant="filled" size="sm">
              For Interview
            </Badge>
          ) : (
            <Badge color="indigo" variant="filled" size="sm">
              Interested
            </Badge>
          )}
        </>
      );
    },
    sortable: true,
  },
  {
    accessor: "status",
    title: "Status",
    render: () => (
      <Badge variant="filled" color="teal.7" size="sm">
        Request Accepted
      </Badge>
    ),
    sortable: true,
  },
];
