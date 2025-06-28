import { moduleApiCall } from "@vframework/core";
import { moduleConfig } from "./module.config";

const endpoint = moduleConfig.endpoint || "";

export const getRecordApplicant = () =>
  moduleApiCall.getRecords({
    endpoint: "/applicant/publish/log/",
  });

export const getRecordSeeker = () =>
  moduleApiCall.getRecords({
    endpoint: "/logs/responses/",
  });

export const getSingleRecord = moduleApiCall.getSingleRecord;
export const createRecord = (body: any) =>
  moduleApiCall.createRecord(endpoint, body);
export const updateRecord = (body: any, id: any) =>
  moduleApiCall.editRecord(endpoint, body, id);
export const deleteRecord = (id: any) =>
  moduleApiCall.deleteRecord(endpoint, id);
