import { apiDispatch, moduleApiCall } from "@vframework/core";
import { moduleConfig } from "./module.config";

const endpoint = moduleConfig.endpoint || "";

export const getRecords = moduleApiCall.getRecords;
export const getUnpublished = () =>
  moduleApiCall.getRecords({
    endpoint: "/applicant/unpublished/",
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
