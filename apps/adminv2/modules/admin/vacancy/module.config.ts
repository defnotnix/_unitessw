import { House } from "@phosphor-icons/react";
import { PropModuleConfig } from "@vframework/ui";

export const moduleConfig: PropModuleConfig = {
  bread: [
    {
      label: "KCA Admin",
    },
    {
      label: "Seekers",
    },
    {
      label: "Manage Seekers",
    },
  ],
  moduleKey: "vauth.Seekers".split("."),
  endpoint: "/vacancy/",
  //
  moduleTerm: "Vacancy",
  moduleTermPlural: "Vacancies",
  moduleName: "Vacancies",
  moduleDescription:
    "Manage vacancies from companies, and how they are published to applicants.",
};
