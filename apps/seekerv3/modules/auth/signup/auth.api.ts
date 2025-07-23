import { apiDispatch } from "@vframework/core";

const endpoint = "/authenticate/signup/";

export async function apiLogin(body: { email: string; password: string }) {
  return await apiDispatch.post({
    endpoint: endpoint,
    body,
  });
}

export async function googleLogin(body: any) {
  return await apiDispatch.post({
    endpoint: "/authenticate/google/login/",
    body,
  });
}
