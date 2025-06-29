"use client";

import React, { useEffect, useState } from "react";
//next
import { usePathname, useRouter } from "next/navigation";

//mantine
import {
  ActionIcon,
  Anchor,
  Badge,
  Box,
  Breadcrumbs,
  Button,
  ButtonGroup,
  Center,
  CheckIcon,
  Container,
  Divider,
  Grid,
  Group,
  HoverCard,
  LoadingOverlay,
  Menu,
  Modal,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
  TextInput,
  Tooltip,
} from "@mantine/core";
//mantine
import { modals } from "@mantine/modals";
import { useDisclosure, useTimeout } from "@mantine/hooks";

//icons
import {
  ArrowLeft,
  ArrowLeftIcon,
  ArrowsClockwise,
  CaretDown,
  CaretDownIcon,
  Check,
  DotsThree,
  DotsThreeVertical,
  Export,
  Eye,
  GearSix,
  House,
  HouseIcon,
  MagnifyingGlass,
  PaintBucket,
  Pen,
  Plus,
  SlidersHorizontal,
  SmileyNervousIcon,
  Trash,
  Warning,
} from "@phosphor-icons/react";

//datatable
import { DataTable, DataTableSortStatus } from "mantine-datatable";
//context
import { FormHandler, useListHandlerContext } from "@vframework/core";
//func
import sortBy from "lodash/sortBy";
//type
import { PropModuleTableLayout } from "./ModuleTableLayout.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { triggerNotification } from "@vframework/ui";
import { ModuleModalFormLayout } from "../ModuleModalFormLayout";

export function ModuleTableLayout({
  /**
   * Breadcrumb navigation links
   */
  bread = [],
  tabs = [],

  /**
   * Module information
   */
  moduleName = "Enter Module Name",
  moduleDescription = "This is a module description that says something about the module.",
  moduleTerm,
  moduleTermPlural,

  /**
   * API handlers for CRUD operations
   */
  apiCreate = (d) => null,
  onCreateSuccess,
  apiDelete = (d) => null,
  onDeleteTrigger = () => {},
  onDeleteSuccess,
  apiEdit = (d) => null,
  onEditTrigger = (row) => row,
  onEditSuccess,
  disableSearch,

  /**
   * Table data configuration
   */
  idAccessor = "id",
  columns = [],
  extraActions,

  /**
   * Server-side configuration
   */
  hasServerSearch = false,

  /**
   * Table styling properties
   */
  rowColor,
  rowBackgroundColor,
  rowStyle,
  customCreate,

  /**
   * Tab settings
   */
  enableTabs = false,

  /**
   * Pagination settings
   */
  pageSizes = [20, 35, 50, 300],

  /**
   * Custom URL configurations
   */
  customNewUrl,
  customEditUrl,

  /**
   * Modal form configurations
   */
  hasModalForms = false,
  modalProps = { width: "md" },
  modalFormProps = {
    formProps: {
      initial: {},
      formType: "new",
      steps: [],
      stepType: "default",
      stepClickable: false,
      initialStep: 0,
      validation: [],
      submitFormData: false,
      submitProps: {
        keyIgnore: [],
        valueIgnore: [],
        stringify: false,
      },
    },
  },
  modalForm,
  modalEdit,
  onModalEditOpen,
  onModalNewOpen,

  /**
   * Additional content placement around the table
   */
  contentPreHeader,
  contentPreTable,
  contentPostTable,

  /**
   * TableHeaderOptions
   */
  withFilter = false,
  withColumnSelect = false,
  withAddExtra = false,
  disableAdd = false,
  disableDelete = false,
  disableEdit = false,
  disableActions = false,
  customRender,
  withBackButton,
  customCreateText,
  forceFilter,
}: PropModuleTableLayout) {
  // Create moduleConfig object to maintain compatibility

  const CustomRender = customRender;

  const moduleConfig = {
    moduleName,
    moduleDescriptions: { default: moduleDescription },
    prename: "",
    endpoint: "",
    moduleTerm,
    moduleTermPlural,
    moduleKey: [],
  };

  // * DEFINITIONS
  const Router = useRouter();
  const Pathname = usePathname();
  const QueryClient = useQueryClient();

  // * CONTEXT
  const {
    state,
    dispatch,
    //table
    data,
    isLoading,
    isFetching,
    refetch,
    //search
    searchVal,
    setSearchVal,
  } = useListHandlerContext();

  const {
    search,
    filters,
    tabActive,
    selectedRecords,
    page,
    pageSize,
    totalPages,
  } = state;

  // * STATE
  const [curPageValue, setCurPageValue] = useState<any>({});
  const [records, setRecords] = useState<any[]>([]);
  const [enableRowStyle, setEnableRowStyle] = useState(false);
  const [paginationData, setPaginationData] = useState<any>({});

  // > MODALS
  const [openFormModal, handlersFormModal] = useDisclosure(false);
  const [activeEdit, setActiveEdit] = useState<null | any>(null);
  const [editLoading, setEditLoading] = useState(false);

  // > SORTING
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus<any>>({
    columnAccessor: "name",
    direction: "asc",
  });

  // * FUNCTIONS
  useEffect(() => {
    if (!hasServerSearch) {
      const _data = sortBy(data, sortStatus.columnAccessor);
      setRecords(sortStatus.direction === "desc" ? _data.reverse() : _data);
    } else {
      setRecords(data);
    }
  }, [data, sortStatus]);

  useEffect(() => {
    if (page == curPageValue?.page && pageSize == curPageValue?.pageSize) {
      console.log("Same Page");
    } else {
      setTimeout(() => {
        refetch();
      }, 100);
      setCurPageValue({ page, pageSize });
    }
  }, [page, pageSize]);

  // * MUTATIONS
  const mutationSubmit = useMutation({
    mutationFn: async (delId) => {
      triggerNotification.form.isLoading({});
      const res = await apiDelete(delId, records);
      return res;
    },
    onSuccess: (res: any, delId: any) => {
      triggerNotification.form.isSuccess({});
      refetch();
      if (onDeleteSuccess) {
        onDeleteSuccess(delId);
      }
    },
    onError: (err: any) => {
      console.log(err);
      triggerNotification.form.isError({});
    },
  });

  const handleDelete = (id: any) => {
    modals.openConfirmModal({
      title: (
        <Group>
          <ActionIcon size="sm" color="red" variant="light">
            <Warning size={12} />
          </ActionIcon>
          <Text
            size="sm"
            style={{
              fontWeight: 600,
            }}
          >
            Please confirm your action
          </Text>
        </Group>
      ),
      children: (
        <>
          <Text size="xs" my="md">
            This might result in unexpected deletion of other dependent records
            under it.
            <br />
            <br />
            <span
              style={{
                fontWeight: 600,
              }}
            >
              Are you sure you want to proceed?
            </span>
          </Text>
          <Space h="6px" />
        </>
      ),
      labels: { confirm: "Confirm", cancel: "Cancel" },
      confirmProps: {
        color: "red",
        size: "xs",
      },
      cancelProps: {
        size: "xs",
      },
      onCancel: () => {},
      onConfirm: () => {
        mutationSubmit.mutate(id);
      },
      styles: {
        header: {
          background: "var(--mantine-color-red-1)",
        },
      },
      size: "sm",
    });
  };

  // * ACTION COMPONENTS

  const RenderEdit = ({ row, children }: any) => {
    const form = FormHandler.useForm();

    const handleEditOpen = async () => {
      setActiveEdit(row);
      handlersFormModal.open();
      setEditLoading(true);
      const _editData = await onEditTrigger(row);

      form.setValues(await _editData);
      setEditLoading(false);
    };

    return (
      <div
        onClick={async () => {
          if (hasModalForms) {
            handleEditOpen();
          } else {
            Router.push(Pathname + (customEditUrl || "/edit/") + row.id);
          }
        }}
      >
        {children}
      </div>
    );
  };

  // Define tableActions
  const tableActions = [
    {
      accessor: "actions",
      title: "Actions",
      width: 100,
      textAlign: "right",
      render: (row: any) => (
        <Menu>
          <Menu.Target>
            <ActionIcon variant="light">
              <DotsThreeVertical />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            {!disableEdit && (
              <RenderEdit row={row}>
                <Menu.Item leftSection={<Pen />}>Edit</Menu.Item>
              </RenderEdit>
            )}

            {extraActions && (
              <>
                <Menu.Divider />
                {extraActions({ row, refetch })}
                <Menu.Divider />
              </>
            )}

            <Menu.Item
              disabled={disableDelete}
              onClick={() => {
                handleDelete(row.id);
              }}
              leftSection={<Trash />}
              color="red"
            >
              Delete
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      ),
    },
  ];

  // Extract the width from modalProps for the modals
  const { width } = modalProps;

  return (
    <>
      <FormHandler
        formType={activeEdit ? "edit" : "new"}
        {...modalFormProps.formProps}
        apiSubmit={
          activeEdit
            ? apiEdit
            : (body: any) => {
                return apiCreate(body, records);
              }
        }
        onSubmitSuccess={(res: any) => {
          refetch();
          handlersFormModal.close();
          if (activeEdit && onEditSuccess) {
            onEditSuccess(res);
          } else if (!activeEdit && onCreateSuccess) {
            onCreateSuccess(res);
          }
        }}
      >
        <Paper>
          <Container py="sm">
            <Grid align="center">
              <Grid.Col span={{ base: 12, lg: 3 }}>
                <Group gap="xs">
                  {withBackButton && (
                    <ActionIcon
                      onClick={() => {
                        Router.back();
                      }}
                    >
                      <ArrowLeftIcon />
                    </ActionIcon>
                  )}

                  <Text size="xs" fw={700} tt="capitalize">
                    {moduleName}
                  </Text>
                  <Text size="xs" fw={700} opacity={0.6} c="gray.9">
                    {moduleDescription.substring(0, 30)}
                  </Text>
                </Group>
              </Grid.Col>

              <Grid.Col span={{ base: 12, lg: 9 }}>
                <Group gap={4} visibleFrom="lg" justify="flex-end">
                  {tabs.length > 0 && (
                    <>
                      <ButtonGroup>
                        {tabs.map((tab, index) => {
                          return (
                            <Button
                              leftSection={
                                tabActive == index ? (
                                  <CheckIcon size={8} />
                                ) : null
                              }
                              color={tabActive === index ? "dark" : "gray"}
                              key={index}
                              size="xs"
                              variant={index === tabActive ? "filled" : "light"}
                              onClick={() => {
                                dispatch({
                                  type: "SET_TAB_ACTIVE",
                                  payload: index,
                                });

                                QueryClient.setQueryData(
                                  moduleConfig?.moduleKey || [],
                                  async () => {
                                    return tab.getApi({
                                      searchValue: searchVal,
                                      page: page,
                                      pageSize: pageSize,
                                    });
                                  }
                                );
                              }}
                            >
                              {tab.label}
                            </Button>
                          );
                        })}
                      </ButtonGroup>

                      <Divider orientation="vertical" opacity={0.5} mx="sm" />
                    </>
                  )}
                  {!disableSearch && (
                    <TextInput
                      rightSection={<MagnifyingGlass />}
                      size="xs"
                      placeholder="Search"
                      w={{ base: "100%", md: "400" }}
                      onChange={(e) => {
                        setSearchVal(e.target.value);
                      }}
                    />
                  )}

                  {withFilter && (
                    <Button
                      leftSection={<SlidersHorizontal size={12} />}
                      variant="light"
                      size="xs"
                    >
                      Filters
                    </Button>
                  )}

                  {withColumnSelect && (
                    <Button
                      leftSection={<GearSix size={12} />}
                      variant="light"
                      size="xs"
                    >
                      Customize
                    </Button>
                  )}

                  <Menu
                    withArrow
                    styles={{
                      item: {
                        fontSize: "var(--mantine-font-size-xs)",
                      },
                    }}
                  >
                    <Menu.Target>
                      <Button variant="light" disabled={isFetching} size="xs">
                        <CaretDown />
                      </Button>
                    </Menu.Target>
                    <Menu.Dropdown w={200}>
                      {/* <Menu.Label>Bulk Actions</Menu.Label>
                  <Menu.Item leftSection={<Pen />}>Bulk Edit</Menu.Item>
                  <Menu.Item leftSection={<Trash />}>Bulk Delete</Menu.Item>
                  <Menu.Divider /> */}
                      <Menu.Label>General</Menu.Label>

                      <Menu.Item
                        leftSection={<ArrowsClockwise />}
                        onClick={() => {
                          refetch();
                        }}
                      >
                        Reload Table
                      </Menu.Item>
                      <Menu.Divider />
                      <Menu.Label>Export to CSV</Menu.Label>
                      <Menu.Item leftSection={<Export />}>Export All</Menu.Item>
                      <Menu.Item leftSection={<Check />}>
                        Export Selected
                      </Menu.Item>
                    </Menu.Dropdown>
                  </Menu>

                  <ButtonGroup>
                    <Button
                      disabled={disableAdd}
                      variant="filled"
                      size="xs"
                      leftSection={<Plus />}
                      onClick={() => {
                        if (customCreate) {
                          customCreate(records);
                        } else {
                          if (hasModalForms) {
                            setActiveEdit(null);
                            handlersFormModal.open();
                            if (onModalNewOpen) {
                              onModalNewOpen({});
                            }
                          } else {
                            Router.push(
                              customNewUrl ? customNewUrl : Pathname + "/new"
                            );
                          }
                        }
                      }}
                    >
                      {customCreateText || "Add " + moduleTerm || "Item"}
                    </Button>
                    {/* <Button
                  disabled={!withAddExtra}
                  variant="filled"
                  size="xs"
                  px="8"
                  ml={1}
                >
                  <CaretDown />
                </Button> */}
                  </ButtonGroup>
                </Group>
              </Grid.Col>
            </Grid>
          </Container>
        </Paper>

        {/* {!contentPreTable && <Divider mb={!enableTabs ? "md" : 0} />} */}

        {/* {enableTabs && (
          <>
            <Group
              justify="space-between"
              px="md"
              py="xs"
              bg="linear-gradient(to right, var(--mantine-color-gray-0), var(--mantine-color-brand-0))"
            >
              <Group gap="4px">
                {tabs.map((tab, index) => (
                  <Button
                    key={index}
                    size="xs"
                    variant={index === tabActive ? "filled" : "light"}
                    onClick={() => {
                      dispatch({
                        type: "SET_TAB_ACTIVE",
                        payload: index,
                      });
                    }}
                  >
                    {tab.label}
                  </Button>
                ))}
                {tabs.length === 0 && (
                  <>
                    <Button size="xs" variant="filled">
                      Active Users
                    </Button>
                    <Button size="xs" variant="light">
                      Inactive Users
                    </Button>
                  </>
                )}
              </Group>
            </Group>

            <Divider mb="sm" />
          </>
        )} */}

        {contentPreTable}

        {CustomRender ? (
          <CustomRender
            data={records}
            renderEdit={RenderEdit}
            handleDelete={handleDelete}
          />
        ) : (
          <Container py="md">
            <Paper radius="md" withBorder h={"calc(100vh - 205px)"}>
              <DataTable
                emptyState={
                  <Center>
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
                }
                //Loading
                fetching={isFetching}
                styles={{
                  header: {
                    background: "var(--mantine-color-gray-0)",
                  },
                }}
                //fonts
                fz="xs"
                fw={500}
                // styling
                highlightOnHover
                // spacing
                verticalSpacing="xs"
                horizontalSpacing="md"
                //Data
                idAccessor={idAccessor}
                records={forceFilter ? forceFilter(records) : records}
                columns={[
                  {
                    accessor: "#",
                    title: "#",
                    width: 50,
                    render: (row, index) => <>{index + 1}</>,
                  },
                  ...columns,
                  ...(disableActions ? [] : tableActions),
                ]}
                //Row Styling
                rowColor={rowColor}
                rowBackgroundColor={rowBackgroundColor}
                rowStyle={enableRowStyle ? rowStyle : undefined}
                //Sorting
                sortStatus={sortStatus}
                onSortStatusChange={setSortStatus}
                //Pagination
                totalRecords={
                  hasServerSearch ? totalPages * pageSize : records.length
                }
                page={page}
                onPageChange={(p) => {
                  dispatch({
                    type: "SET_PAGE",
                    payload: p,
                  });
                }}
                // > Pagination Size
                recordsPerPage={pageSize}
                recordsPerPageOptions={pageSizes}
                onRecordsPerPageChange={(e) => {
                  dispatch({
                    type: "SET_PAGE_DATA",
                    payload: {
                      pageSize: e,
                      page: 1,
                    },
                  });
                }}
                // Selection handling
                selectedRecords={selectedRecords}
                onSelectedRecordsChange={(e) => {
                  dispatch({
                    type: "SET_SELECTED_RECORDS",
                    payload: e,
                  });
                }}
                selectionTrigger="cell"
              />
            </Paper>
          </Container>
        )}

        {/* Modal for creating new items */}
        {hasModalForms && (
          <Modal
            size={modalFormProps?.width || "md"}
            opened={openFormModal && !activeEdit}
            onClose={() => {
              handlersFormModal.close();
            }}
            title={
              <Text tt="uppercase" size="xs" fw={700}>
                {`New ${moduleTerm || moduleName}`}
              </Text>
            }
          >
            <ModuleModalFormLayout
              variant="new"
              isLoading={false}
              moduleConfig={{
                ...moduleConfig,
                bread: [],
                moduleKey: ["form", "x"],
                moduleDescription,
                moduleTerm: "x",
                moduleTermPlural: "x",
                moduleName: "x",
              }}
            >
              {modalForm}
            </ModuleModalFormLayout>
          </Modal>
        )}

        {/* Modal for editing items */}
        {hasModalForms && (
          <Modal
            size={modalFormProps?.width || "md"}
            opened={openFormModal && !!activeEdit}
            onClose={() => {
              setActiveEdit(null);
              handlersFormModal.close();
            }}
            title={
              <Text tt="uppercase" size="xs" fw={700}>
                {`Edit ${moduleTerm || moduleName}`}
              </Text>
            }
          >
            <LoadingOverlay visible={editLoading} />
            <ModuleModalFormLayout
              variant="edit"
              isLoading={false}
              moduleConfig={{
                ...moduleConfig,
                bread: [],
                moduleKey: ["form", "x"],
                moduleDescription,
                moduleTerm: "x",
                moduleTermPlural: "x",
                moduleName: "x",
              }}
            >
              {modalEdit
                ? React.cloneElement(modalEdit, { preData: activeEdit })
                : modalForm}
            </ModuleModalFormLayout>
          </Modal>
        )}
      </FormHandler>
    </>
  );
}
