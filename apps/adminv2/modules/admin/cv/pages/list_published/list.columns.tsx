import { Avatar, Badge, Group, Stack, Text } from "@mantine/core";

export const columns = [
  {
    accessor: "name",
    title: "Name",
    width: 300,
    render: (record: any) => (
      <Group wrap="nowrap">
        <Avatar size="md" src={record.image} />
        <div>
          <Text size="xs" fw={600}>
            {record.name}
          </Text>
          <Text size="xs" opacity={0.5}>
            {record.jp_name}
          </Text>
        </div>
      </Group>
    ),
    sortable: true,
  },

  {
    accessor: "st",
    title: "Status",
    render: (record: any) => {
      return (
        <>
          <Group gap="xs">
            <Badge size="xs" color={record?.is_active ? "blue" : "orange"}>
              {record?.is_active ? "Active" : "Pending Request"}
            </Badge>
          </Group>
        </>
      );
    },
    sortable: true,
  },

  {
    accessor: "Address",
    title: "Address",
    render: (record: any) => (
      <div>
        <Text size="xs" fw={600}>
          {record.address}
        </Text>
        <Text size="xs" opacity={0.5}>
          {record.jp_address}
        </Text>
      </div>
    ),
  },

  {
    accessor: "gender",
    title: "Gender",
    render: (record: any) => (
      <Badge
        size="sm"
        variant="light"
        color={
          record?.gender == "M"
            ? "brand"
            : record?.gender == "F"
              ? "pink"
              : "orange"
        }
      >
        {record?.gender == "M"
          ? "Male"
          : record?.gender == "F"
            ? "Female"
            : "Other"}
      </Badge>
    ),
    sortable: true,
  },

  {
    accessor: "dob",
    title: "DOB",
  },
  {
    accessor: "date_of_passport_availability",
    title: "Date of Passport Availability",
  },
];
