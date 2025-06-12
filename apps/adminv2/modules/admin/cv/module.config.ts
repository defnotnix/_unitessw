import { House } from "@phosphor-icons/react";
import { PropModuleConfig } from "@vframework/ui";

export const moduleConfig: PropModuleConfig = {
  bread: [
    {
      label: "KCA Admin",
    },
    {
      label: "CVs",
    },
    {
      label: "Manage CVs",
    },
  ],
  moduleKey: "vauth.CVs".split("."),
  endpoint: "/CV/info/",
  //
  moduleTerm: "CV",
  moduleTermPlural: "CVs",
  moduleName: "CVs",
  moduleDescription:
    "A centralized portal for managing all CV-related data and activities.",
};
