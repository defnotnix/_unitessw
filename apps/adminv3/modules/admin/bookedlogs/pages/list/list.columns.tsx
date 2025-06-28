import { Avatar, Badge, Button, Group, Stack, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import { CheckIcon } from "@phosphor-icons/react";
import { toggleLogStatus } from "../../module.api";
import { triggerNotification } from "@vframework/ui";
import { useState } from "react";

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
      <Badge variant="light" size="sm">
        Pending Review
      </Badge>
    ),
    sortable: true,
  },
];
