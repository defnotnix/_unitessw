import { House } from "@phosphor-icons/react";
import { PropModuleConfig } from "@vframework/ui";

export const moduleConfig: PropModuleConfig = {
  bread: [
    {
      label: "KCA Admin",
    },
    {
      label: "Accounts",
    },
    {
      label: "Manage Accounts",
    },
  ],
  moduleKey: "vauth.Accounts".split("."),
  endpoint: "/players/accounts/",
  //
  moduleTerm: "Account",
  moduleTermPlural: "Accounts",
  moduleName: "Accounts",
  moduleDescription: "Manage all Unite SSW Admins/Staffs & their accounts.",
};
