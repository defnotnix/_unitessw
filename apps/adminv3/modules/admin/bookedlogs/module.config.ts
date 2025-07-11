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
  moduleTerm: "Pinged as Interested",
  moduleTermPlural: "Applicant Booking",
  moduleName: "Pinged as Interested",
  moduleDescription: "Pinged as interested by Seeker.",
};
