import { apiDispatch, moduleApiCall } from "@vframework/core";
import { jwtDecode } from "jwt-decode";

export const updateRecord = (body: any, id: any) =>
  moduleApiCall.editRecord("/authenticate/admin/profile/update/", body, id);
