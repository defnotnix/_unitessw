import { moduleApiCall } from "@vframework/core";

export async function getJobCategory() {
  return await moduleApiCall.getRecords({
    endpoint: "/applicant/category/",
  });
}
