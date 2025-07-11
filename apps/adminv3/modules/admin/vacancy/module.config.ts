import { House } from "@phosphor-icons/react";
import { PropModuleConfig } from "@vframework/ui";

export const moduleConfig: PropModuleConfig = {
  bread: [
    {
      label: "Manabiya HR Unity Admin",
    },
    {
      label: "Seekers",
    },
    {
      label: "Manage Seekers",
    },
  ],
  moduleKey: "admin.cv".split("."),
  endpoint: "/vacancy/info/",
  //
  moduleTerm: "Vacancy",
  moduleTermPlural: "Vacancies",
  moduleName: "Vacancies",
  moduleDescription:
    "Manage vacancies from companies, and how they are published to applicants.",
};
