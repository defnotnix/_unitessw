import { Avatar, Badge, Group } from "@mantine/core";

export const columns = [
  {
    accessor: "image",
    title: "Staff",
    width: 300,
    render: ({ name, image }: { name: string; image: string }) => (
      <Group gap="xs">
        <Avatar src={image} name={name} color={image ? "brand" : "initials"} />
        {name}
      </Group>
    ),
  },

  {
    accessor: "Account Type",
    width: 150,
    title: "Permissions",
    render: (record: any) => {
      if (record.is_admin) return <Badge size="xs">Admin</Badge>;
      if (record.is_staff1)
        return (
          <Badge color="teal" size="xs">
            Staff
          </Badge>
        );
      if (record.is_staff2)
        return (
          <Badge color="teal" size="xs">
            Staff
          </Badge>
        );
      if (record.is_staff3)
        return (
          <Badge color="teal" size="xs">
            Staff
          </Badge>
        );
      if (record.is_seeker)
        return (
          <Badge color="pink" size="xs">
            Seeker
          </Badge>
        );
      return "—";
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
    sortable: true,
  },
  {
    accessor: "contact2",
    title: "Secondary Contact",
    sortable: true,
  },
  {
    accessor: "address",
    title: "Address",
    sortable: false,
  },
  {
    accessor: "last_login",
    title: "Last Login",
    sortable: true,
    render: ({ last_login }: { last_login: any }) => {
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
