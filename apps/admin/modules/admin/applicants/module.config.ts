import { House } from "@phosphor-icons/react";
import { PropModuleConfig } from "@vframework/ui";

export const moduleConfig: PropModuleConfig = {
  bread: [
    {
      label: "KCA Admin",
    },
    {
      label: "Applicants",
    },
    {
      label: "Manage Applicants",
    },
  ],
  moduleKey: "vauth.Applicants".split("."),
  endpoint: "/applicant/info/",
  //
  moduleTerm: "Applicant",
  moduleTermPlural: "Applicants",
  moduleName: "Applicants",
  moduleDescription:
    "A centralized portal for managing all Applicant-related data and activities.",
};
