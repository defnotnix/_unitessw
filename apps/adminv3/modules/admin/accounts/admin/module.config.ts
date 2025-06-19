import { House } from "@phosphor-icons/react";
import { PropModuleConfig } from "@vframework/ui";

export const moduleConfig: PropModuleConfig = {
  bread: [
    {
      label: "Unite SSW Admin",
    },
    {
      label: "Admin Accounts",
    },
    {
      label: "Manage Admin Accounts",
    },
  ],
  moduleKey: "vauth.Admin Accounts".split("."),
  endpoint: "/players/Admin Accounts/",
  //
  moduleTerm: "Admin Account",
  moduleTermPlural: "Admin Accounts",
  moduleName: "Admin Accounts",
  moduleDescription:
    "Manage all Unite SSW Admins/Staffs & their Admin Accounts.",
};
