import { Avatar, Badge, Group } from "@mantine/core";

export const columns = [
  {
    accessor: "image",
    title: "User",
    width: 200,
    render: ({ name, image }: { name: string; image: string }) => (
      <Group gap="xs">
        <Avatar
          src={image || undefined}
          alt={name}
          radius="xl"
          size="sm"
          color={!image ? "blue" : undefined}
        >
          {!image && name?.[0]}
        </Avatar>
        {name || "—"}
      </Group>
    ),
  },
  {
    accessor: "gender",
    title: "Gender",
    render: ({ gender }: { gender: string }) => gender || "—",
  },
  {
    accessor: "company",
    title: "Company",
    width: 200,
    render: ({ company }: { company: string }) => company || "—",
  },
  {
    accessor: "roles",
    title: "Role",
    width: 100,
    render: (record: any) => {
      return (
        <Badge size="xs" color={record.is_seeker ? "blue" : "gray"}>
          {record.is_seeker ? "Seeker" : "—"}
        </Badge>
      );
    },
    sortable: false,
  },
  {
    accessor: "email",
    title: "Email Address",
    sortable: true,
  },
  {
    accessor: "contact1",
    title: "Primary Contact",
    render: ({ contact1 }: { contact1: string }) => contact1 || "—",
    sortable: true,
  },
  {
    accessor: "contact2",
    title: "Secondary Contact",
    render: ({ contact2 }: { contact2: string }) => contact2 || "—",
    sortable: true,
  },
  {
    accessor: "address",
    title: "Address",
    render: ({ address }: { address: string }) => address || "—",
    sortable: false,
  },
  {
    accessor: "valid_till",
    title: "Valid Till",
    render: ({ valid_till }: { valid_till: string }) =>
      valid_till ? new Date(valid_till).toLocaleDateString() : "—",
    sortable: true,
  },
  {
    accessor: "last_login",
    title: "Last Login",
    sortable: true,
    render: ({ last_login }: { last_login: string | null }) => {
      if (!last_login) return "Never";
      const loginDate = new Date(last_login);
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - loginDate.getTime());
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      return diffDays === 0
        ? "Today"
        : `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
    },
  },
];
