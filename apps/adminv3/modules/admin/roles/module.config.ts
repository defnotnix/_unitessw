import { House } from "@phosphor-icons/react";
import { PropModuleConfig } from "@vframework/ui";

export const moduleConfig: PropModuleConfig = {
  bread: [
    {
      label: "Manabiya HR Unity Admin",
    },
    {
      label: "Roles",
    },
    {
      label: "Manage Roles",
    },
  ],
  moduleKey: "vauth.Roles".split("."),
  endpoint: "/account/role/",
  //
  moduleTerm: "Account Role",
  moduleTermPlural: "Account Role",
  moduleName: "Account Role",
  moduleDescription: "Manage all job categories, that applicants select from.",
};
