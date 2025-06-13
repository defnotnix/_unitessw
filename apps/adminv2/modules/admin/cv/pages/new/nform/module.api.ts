import { apiDispatch } from "@vframework/core";
import { jwtDecode } from "jwt-decode";

export async function apiCategory() {
  return await apiDispatch.get({
    endpoint: `/applicant/category/`,
  });
}

export async function apiDocument(body: any) {
  const decoded: any = jwtDecode(sessionStorage.getItem("sswtoken") || "");

  return await apiDispatch.patch({
    endpoint: `/authenticate/idocs/${decoded.user_id}/`,
    body,
  });
}

export async function apiDetails(body: any) {
  const decoded: any = jwtDecode(sessionStorage.getItem("sswtoken") || "");

  return await apiDispatch.post({
    endpoint: `/applicant/info/`,
    body,
  });
}

export async function apiMedical(body: any, id: any) {
  console.log(id);
  const decoded: any = jwtDecode(sessionStorage.getItem("sswtoken") || "");

  return await apiDispatch.patch({
    endpoint: `/applicant/info/${id}/`,
    body,
  });
}

export async function apiOrthodontics(body: any, id: any) {
  const decoded: any = jwtDecode(sessionStorage.getItem("sswtoken") || "");

  return await apiDispatch.post({
    endpoint: `/applicant/orthodontics/`,
    body,
  });
}

export async function apiAcademics(body: any, id: any) {
  const decoded: any = jwtDecode(sessionStorage.getItem("sswtoken") || "");

  return await apiDispatch.post({
    endpoint: `/applicant/academic/`,
    body,
  });
}

export async function apiWork(body: any, id: any) {
  const decoded: any = jwtDecode(sessionStorage.getItem("sswtoken") || "");

  return await apiDispatch.post({
    endpoint: `/applicant/work/`,
    body,
  });
}
