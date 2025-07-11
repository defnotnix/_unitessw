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
  moduleKey: "vauth.Seekers".split("."),
  endpoint: "/applicant/category/",
  //
  moduleTerm: "Job Category",
  moduleTermPlural: "Job Category",
  moduleName: "Job Category",
  moduleDescription: "Manage all job categories, that applicants select from.",
};
