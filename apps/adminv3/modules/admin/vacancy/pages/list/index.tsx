"use client";

import { ListHandler } from "@vframework/core";
import { ModuleTableLayout } from "@vframework/ui";
import { useRouter } from "next/navigation";
import {
  createRecord,
  deleteRecord,
  getRecords,
  updateRecord,
} from "../../module.api";

import {
  ActionIcon,
  Center,
  Container,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { PenIcon, SmileyNervousIcon, TrashIcon } from "@phosphor-icons/react";
import { moduleConfig } from "../../module.config";
import { columns } from "./list.columns";

import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { _Form as Form } from "../../form/form";
import { formProps } from "../../form/form.config";

export function _List() {
  const router = useRouter();

  // * State

  const [openFormModalPlayer, handlersFormModalPlayer] = useDisclosure(false);
  const [openFormModalAttendance, handlersFormModalAttendance] =
    useDisclosure(false);
  const [openFormModalAttendanceNew, handlersFormModalAttendanceNew] =
    useDisclosure(false);
  const [active, setActive] = useState(null);

  return (
    <>
      <ListHandler
        endpoint={moduleConfig.endpoint}
        moduleKey={moduleConfig.moduleKey}
        getRecords={getRecords}
      >
        <ModuleTableLayout
          {...moduleConfig}
          idAccessor="id"
          apiEdit={updateRecord}
          apiCreate={createRecord}
          apiDelete={deleteRecord}
          columns={columns}
          // * TABS

          // * TABLE PROPS
          //tableprops={{ height: "calc(100vh - 200px)" }}
          // * ROW COLORS
          rowStyle={({ gender }: any) => ({
            background:
              gender === "male" ? "var(--mantine-color-indigo-0)" : "",
          })}
          // * EXTRA ACTIONS

          // * MODAL CONFIG
          hasModalForms
          modalFormProps={{ width: "lg", formProps }}
          modalForm={<Form />}
          customRender={({ data, handleDelete, renderEdit }: any) => {
            const RenderEdit = renderEdit;
            return (
              <Container py="md">
                {data?.length == 0 && (
                  <Center py={200}>
                    <Stack>
                      <Center>
                        <SmileyNervousIcon
                          size={48}
                          weight="duotone"
                          color="var(--mantine-color-brand-2)"
                        />
                      </Center>

                      <div>
                        <Text size="lg" c="gray.4" ta="center">
                          Seems like you have not added any{" "}
                          {moduleConfig.moduleTerm} yet.
                        </Text>
                        <Text size="xs" c="gray.4" ta="center">
                          Start by adding from "New {moduleConfig.moduleTerm}"
                          above
                        </Text>
                      </div>
                    </Stack>
                  </Center>
                )}

                <SimpleGrid spacing="xs" cols={{ base: 1, lg: 3 }}>
                  {data?.map((item: any, index: any) => {
                    return (
                      <Paper
                        key={index}
                        p="xs"
                        bg="brand.0"
                        radius="lg"
                        mb="md"
                        pos="relative"
                      >
                        <Image h={300} fit="contain" src={item.image} />

                        <Group
                          gap={0}
                          p="xs"
                          pos="absolute"
                          style={{
                            top: 0,
                            right: 0,
                          }}
                        >
                          <RenderEdit row={item}>
                            <ActionIcon variant="light">
                              <PenIcon />
                            </ActionIcon>
                          </RenderEdit>
                          <ActionIcon
                            color="red"
                            onClick={() => {
                              handleDelete(item.id);
                            }}
                          >
                            <TrashIcon />
                          </ActionIcon>
                        </Group>
                      </Paper>
                    );
                  })}
                </SimpleGrid>
              </Container>
            );
          }}
        />
      </ListHandler>
    </>
  );
}
