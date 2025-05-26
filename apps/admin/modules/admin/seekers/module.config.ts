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
  endpoint: "/players/Seekers/",
  //
  moduleTerm: "Applicant Seeker",
  moduleTermPlural: "Applicant Seekers",
  moduleName: "Applicant Seekers",
  moduleDescription: "Manage all Applicant-Seekers & their accounts.",
};
