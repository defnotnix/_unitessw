import { apiDispatch, moduleApiCall } from "@vframework/core";
import { moduleConfig } from "./module.config";

const endpoint = moduleConfig.endpoint || "";

export const getRecords = async (props: any) => {
  console.log(props);
  const { searchValue, endpoint, ...rest } = props;
  return moduleApiCall.getRecords({
    ...rest,
    endpoint: "/cvmake/search/",
    params: props.searchValue,
  });
};

export const getDeletedRecords = ({
  endpoint,
  ...props
}: {
  endpoint?: string;
}) =>
  moduleApiCall.getRecords({
    endpoint: "/cvmake/personal/info/deleted/",
    ...props,
  });
export const getSingleRecord = moduleApiCall.getSingleRecord;
export const createRecord = (body: any) =>
  moduleApiCall.createRecord(endpoint, body);
export const updateRecord = (body: any, id: any) =>
  moduleApiCall.editRecord(endpoint, body, id);
export const restoreRecord = (body: any, id: any) =>
  moduleApiCall.editRecord("/cvmake/personal/info/restore/", body, id);
export const deleteRecord = (id: any) =>
  moduleApiCall.editRecord("/cvmake/personal/info/delete/", {}, id);
