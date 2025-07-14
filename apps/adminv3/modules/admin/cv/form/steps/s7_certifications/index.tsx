"use client";

//next

//mantine
import {
  ActionIcon,
  Button,
  Center,
  Divider,
  Group,
  NumberInput,
  Select,
  SimpleGrid,
  Stack,
  Switch,
  Text,
  TextInput,
} from "@mantine/core";
import { modals } from "@mantine/modals";
import { PlusIcon, TrashIcon } from "@phosphor-icons/react";
import { FormHandler } from "@vframework/core";
import { FormElement } from "@vframework/ui";
import { apiLicense } from "../../module.api";
//mantine

//icons

//styles

//components

const styles = {
  top: {
    input: {
      borderBottom: "none",
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      fontSize: "var(--mantine-font-size-xs)",
    },
    label: {
      fontSize: "var(--mantine-font-size-xs)",
    },
  },
  bot: {
    input: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      fontSize: "var(--mantine-font-size-xs)",
    },
    label: {
      fontSize: "var(--mantine-font-size-xs)",
    },
  },
};

export function StepCertificates() {
  // * DEFINITIONS

  const form = FormHandler.useForm();

  // * CONTEXT

  // * STATE

  // * FUNCTIONS

  // * COMPONENTS

  // * ANIMATIONS

  return (
    <>
      <Stack gap="md">
        <div>
          <Text size="2rem" lh="2.3rem">
            <b>Licenses</b>
            <br />
          </Text>
          <Text size="xs">Next add official licenses of the person.</Text>
        </div>

        <FormElement.SectionTitle
          title="Certificates History"
          description="Add your academic background"
          actionButton={
            <Button
              size="xs"
              variant="light"
              leftSection={<PlusIcon />}
              onClick={() => form.insertListItem("licenses", {})}
            >
              Add License
            </Button>
          }
        />

        <div>
          <Divider />
          <SimpleGrid cols={2} spacing="xs" my="sm">
            <Text size="sm" fw={600}>
              License
            </Text>
            <SimpleGrid cols={2} spacing="xs">
              <Text size="sm" fw={600}>
                Date Recieved
              </Text>
              <Text size="sm" fw={600}>
                Status
              </Text>
            </SimpleGrid>
          </SimpleGrid>
          <Divider />
        </div>

        {form.values.licenses.length == 0 && (
          <Center p="xl">
            <Text size="xs">No record added yet</Text>
          </Center>
        )}

        {form.values.licenses?.map((_: any, index: any) => (
          <div key={index} style={{ position: "relative" }}>
            <ActionIcon
              onClick={() => {
                if (_.id) {
                  modals.openConfirmModal({
                    title: (
                      <Group>
                        <Text
                          size="sm"
                          style={{
                            fontWeight: 600,
                          }}
                        >
                          Are you sure you want to delete this record?
                        </Text>
                      </Group>
                    ),
                    children: (
                      <>
                        <Text size="xs" my="md">
                          This will completely remove this record from this
                          section.{" "}
                        </Text>
                      </>
                    ),
                    styles: {
                      header: {
                        background: "var(--mantine-color-brand-0)",
                      },
                    },
                    labels: {
                      confirm: "Delete",
                      cancel: "Cancel",
                    },
                    confirmProps: {
                      color: "red",
                    },
                    onConfirm: () => {
                      apiLicense.delete(_.id);
                      form.removeListItem("licenses", index);
                    },
                  });
                } else {
                  form.removeListItem("licenses", index);
                }
              }}
              size="md"
              variant="light"
              color="red"
              style={{
                position: "absolute",
                zIndex: 1,
                right: -30,
                top: 4,
              }}
            >
              <TrashIcon />
            </ActionIcon>
            <SimpleGrid cols={2} spacing="xs">
              <Stack gap={0}>
                <TextInput
                  placeholder="e.g. Driving License"
                  {...form.getInputProps(`licenses.${index}.name`)}
                  styles={styles.top}
                  leftSection={
                    <Text size="xs" fw={800}>
                      EN
                    </Text>
                  }
                />
                <TextInput
                  placeholder="例：コンピューターサイエンス学科"
                  {...form.getInputProps(`licenses.${index}.jp_name`)}
                  styles={styles.bot}
                  leftSection={
                    <Text size="xs" fw={800}>
                      JP
                    </Text>
                  }
                />
              </Stack>

              <SimpleGrid cols={2} spacing="xs">
                <Stack gap={0}>
                  <NumberInput
                    hideControls
                    placeholder="Select End Year"
                    {...form.getInputProps(`licenses.${index}.year`)}
                  />
                  <Select
                    data={[
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December",
                    ]}
                    placeholder="Select Month"
                    {...form.getInputProps(`licenses.${index}.month`)}
                  />
                </Stack>

                <Switch
                  label={
                    form.getValues()?.licenses[index].status
                      ? "Active"
                      : "Expired"
                  }
                  {...form.getInputProps(`licenses.${index}.status`, {
                    type: "checkbox",
                  })}
                />
              </SimpleGrid>
            </SimpleGrid>
            <Divider my="sm" />
          </div>
        ))}
      </Stack>
    </>
  );
}
