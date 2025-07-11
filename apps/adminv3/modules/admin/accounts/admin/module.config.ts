import { House } from "@phosphor-icons/react";
import { PropModuleConfig } from "@vframework/ui";

export const moduleConfig: PropModuleConfig = {
  bread: [
    {
      label: "Manabiya HR Unity Admin",
    },
    {
      label: "Admin Accounts",
    },
    {
      label: "Manage Admin Accounts",
    },
  ],
  moduleKey: "vauth.admin.accounts".split("."),
  endpoint: "/authenticate/admin/accounts/",
  //
  moduleTerm: "Admin Account",
  moduleTermPlural: "Admin Accounts",
  moduleName: "Admin Accounts",
  moduleDescription:
    "Manage all Manabiya HR Unity Admins/Staffs & their Admin Accounts.",
};
