import { apiDispatch, moduleApiCall } from "@vframework/core";
import { moduleConfig } from "./module.config";

const endpoint = moduleConfig.endpoint || "";

export const getRecords = () =>
  moduleApiCall.getRecords({
    endpoint: "/logs/notifications/",
  });

export const getSeekerReqRecords = () =>
  moduleApiCall.getRecords({
    endpoint: "/logs/notifications/",
  });

export const getRecordsResponded = () =>
  moduleApiCall.getRecords({
    endpoint: "/logs/responded/",
  });

export const getSingleRecord = moduleApiCall.getSingleRecord;
export const createRecord = (body: any) =>
  moduleApiCall.createRecord(endpoint, body);
export const updateRecord = (body: any, id: any) =>
  moduleApiCall.editRecord(endpoint, body, id);
export const deleteRecord = (id: any) =>
  moduleApiCall.deleteRecord(endpoint, id);

export const toggleLogStatus = async (id: any) => {
  return await moduleApiCall.createRecord("/logs/toggle/book/" + id + "/", {});
};
