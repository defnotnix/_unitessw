"use client";

import { useState, useEffect, ReactNode } from "react";
import { jwtDecode } from "jwt-decode";
import { Center, Text, Loader, Paper, Group, Stack } from "@mantine/core";
import { LockIcon } from "@phosphor-icons/react";

interface SessionData {
  [key: string]: boolean;
}

export function RBACCheck({
  children,
  allowList = [],
  noRender = false,
  customRender,
}: {
  children: React.ReactNode;
  allowList: string[];
  noRender?: boolean;
  customRender?: ReactNode;
}) {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const token = sessionStorage.getItem("sswtoken");

      if (!token) {
        setIsAuthorized(false);
        return;
      }

      const tokenData: any = jwtDecode<SessionData>(token);

      const hasAccess = allowList.some(
        (role) => tokenData[`is_${role}`] == "True"
      );
      setIsAuthorized(hasAccess);
    } catch (err) {
      console.error("RBAC token error:", err);
      setIsAuthorized(false);
    }
  }, [allowList]);

  if (isAuthorized === null) {
    return (
      <Center h={400}>
        <Loader size={16} />
      </Center>
    );
  }

  if (!isAuthorized) {
    if (noRender) return <></>;
    if (customRender) return <>{customRender}</>;

    return (
      <Center h={400}>
        <Stack gap="0">
          <Group justify="center" opacity={0.2}>
            <LockIcon
              size={100}
              weight="fill"
              color="var(--mantine-color-brand-6)"
            />
          </Group>

          <Text size="xl" fw={800} ta="center" mt="xs">
            Content Locked
          </Text>

          <Text size="xs" fw={500} ta="center">
            You do not have permission to view this content.
          </Text>
        </Stack>
      </Center>
    );
  }

  return <>{children}</>;
}
