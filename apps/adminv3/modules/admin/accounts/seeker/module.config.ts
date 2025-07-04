import { House } from "@phosphor-icons/react";
import { PropModuleConfig } from "@vframework/ui";

export const moduleConfig: PropModuleConfig = {
  bread: [
    {
      label: "Unite SSW Admin",
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
    "Manage all Unite SSW Admins/Staffs & their Seeker Accounts.",
};
