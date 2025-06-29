import { apiDispatch, moduleApiCall } from "@vframework/core";
import { moduleConfig } from "./module.config";

const endpoint = moduleConfig.endpoint || "";

export const getRecords = async (props: any) => {
  console.log(props);
  const { searchValue, endpoint, ...rest } = props;
  return moduleApiCall.getRecords({
    ...rest,
    endpoint: "/applicant/search/",
    params: props.searchValue,
  });
};

export const getUnpublished = (props: any) => {
  console.log(props);
  return moduleApiCall.getRecords({
    endpoint: "/applicant/unpublished/",
  });
};
export const getJobCategory = () =>
  moduleApiCall.getRecords({
    endpoint: "/applicant/category/",
  });

export const getSingleRecord = (id: any) =>
  moduleApiCall.getSingleRecord(endpoint, id);
export const createRecord = (body: any) =>
  moduleApiCall.createRecord(endpoint, body);
export const updateRecord = (body: any, id: any) =>
  moduleApiCall.editRecord(endpoint, body, id);
export const publishRecord = (body: any, id: any) =>
  moduleApiCall.editRecord("/applicant/toggle/publish/", {}, id);
export const deleteRecord = (id: any) =>
  moduleApiCall.deleteRecord(endpoint, id);
