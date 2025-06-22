import { apiDispatch } from "@vframework/core";

const endpoint = "/authenticate/forgot/password/";

export async function apiLogin(body: { email: string; password: string }) {
  return await apiDispatch.post({
    endpoint: endpoint,
    body,
  });
}

export async function googleLogin(body: any) {
  console.log("sending", body);
  return await apiDispatch.post({
    endpoint: "/authenticate/applicant/google/login/",
    body,
  });
}
