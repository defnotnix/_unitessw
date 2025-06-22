import { apiDispatch, moduleApiCall } from "@vframework/core";
import { moduleConfig } from "./module.config";

const endpoint = moduleConfig.endpoint || "";

export const getRecords = moduleApiCall.getRecords;
export const getSingleRecord = moduleApiCall.getSingleRecord;
export const createRecord = (body: any) =>
  moduleApiCall.createRecord("/authenticate/seeker/signup/", body);
export const updateRecord = (body: any, id: any) =>
  moduleApiCall.editRecord("/authenticate/admin/profile/update/", body, id);
export const deleteRecord = (id: any) =>
  moduleApiCall.deleteRecord(endpoint, id);
export const disableRecord = (id: any) =>
  moduleApiCall.editRecord("/authenticate/disable/account/", null, id);
