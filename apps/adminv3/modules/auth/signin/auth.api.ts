import { apiDispatch } from "@vframework/core";

const endpoint = "/authenticate/admin/login/";

export async function apiLogin(body: { email: string; password: string }) {
  return await apiDispatch.post({
    endpoint: endpoint,
    body,
  });
}
