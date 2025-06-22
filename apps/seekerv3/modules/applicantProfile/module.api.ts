import { apiDispatch, moduleApiCall } from "@vframework/core";

const endpoint = "/applicant/info/";

export const getRecords = moduleApiCall.getRecords;

export const getSingleRecord = (id: any) =>
  moduleApiCall.getSingleRecord(endpoint, id);
export const createRecord = (body: any) =>
  moduleApiCall.createRecord(endpoint, body);
export const updateRecord = (body: any, id: any) =>
  moduleApiCall.editRecord(endpoint, body, id);
export const deleteRecord = (id: any) =>
  moduleApiCall.deleteRecord(endpoint, id);

export const apiPersonalInformation = {
  get: async (id: any) => {
    return await apiDispatch.get({
      endpoint: `/applicant/info/${id}/`,
    });
  },

  create: async (body: any) => {
    return await apiDispatch.post({
      endpoint: "/applicant/info/",
      body,
    });
  },
  update: async (body: any, id: any) => {
    return await moduleApiCall.editRecord("/applicant/info/", body, id);
  },
};
