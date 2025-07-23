import { PropModuleConfig } from "@vframework/ui";

export const moduleConfig: PropModuleConfig = {
  bread: [
    {
      label: "Manabiya HR Unity Admin",
    },
    {
      label: "Misc",
    },
    {
      label: "Manage Logs",
    },
  ],
  moduleKey: "admin.vacancy.category".split("."),
  endpoint: "/vacancy/category/",
  //
  moduleTerm: "Log",
  moduleTermPlural: "Logs",
  moduleName: "Logs",
  moduleDescription: "Activity Logs",
};
