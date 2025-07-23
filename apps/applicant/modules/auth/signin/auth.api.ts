import { apiDispatch } from "@vframework/core";

const endpoint = "/authenticate/applicant/login/";

export async function apiLogin(body: { email: string; password: string }) {
  return await apiDispatch.post({
    endpoint: endpoint,
    body,
  });
}
export async function googleLogin(body: any) {

  return await apiDispatch.post({
    endpoint: "/authenticate/applicant/google/login/",
    body,
  });
}
