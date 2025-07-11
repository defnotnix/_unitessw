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
  moduleKey: "admin.vacancy.category".split("."),
  endpoint: "/vacancy/category/",
  //
  moduleTerm: "Vacancy Category",
  moduleTermPlural: "Vacancies",
  moduleName: "Vacancies",
  moduleDescription:
    "Manage vacancies from companies, and how they are published to applicants.",
};
