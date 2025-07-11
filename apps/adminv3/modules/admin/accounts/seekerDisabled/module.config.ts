import { House } from "@phosphor-icons/react";
import { PropModuleConfig } from "@vframework/ui";

export const moduleConfig: PropModuleConfig = {
  bread: [
    {
      label: "Manabiya HR Unity Admin",
    },
    {
      label: "Seeker Accounts",
    },
    {
      label: "Manage Seeker Accounts",
    },
  ],
  moduleKey: "vauth.seeker.account".split("."),
  endpoint: "/authenticate/inactive/seeker/accounts/",
  //
  moduleTerm: "Disabled Seeker Account",
  moduleTermPlural: "Disabled Seeker Accounts",
  moduleName: "Disabled Seeker Accounts",
  moduleDescription: "Manage inactive seeker accounts.",
};
