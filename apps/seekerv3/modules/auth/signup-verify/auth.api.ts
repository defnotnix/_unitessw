import { apiDispatch } from "@vframework/core";

const endpoint = "/authenticate/verify/otp/";

export async function apiLogin(body: { email: string; otp: string }) {
  return await apiDispatch.post({
    endpoint: endpoint,
    body,
  });
}
