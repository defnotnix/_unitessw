/* eslint-disable @typescript-eslint/no-explicit-any */

import { moduleApiCall } from "@vframework/core";

export const markInterested = async (body: any) => {
  return await moduleApiCall.createRecord("/logs/seeker/interest/", body);
};

export const apiUnnotify = async (id: any) => {
  return await moduleApiCall.deleteRecord("/logs/unnotify/", id);
};

export const apiCancelInterview = async (id: any) => {
  return await moduleApiCall.deleteRecord("/logs/cancel/interview/", id);
};
