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
  endpoint: "/authenticate/seeker/accounts/",
  //
  moduleTerm: "Seeker Account",
  moduleTermPlural: "Seeker Accounts",
  moduleName: "Seeker Accounts",
  moduleDescription:
    "Manage all Manabiya HR Unity Admins/Staffs & their Seeker Accounts.",
};
