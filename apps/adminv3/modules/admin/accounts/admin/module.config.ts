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
  moduleKey: "vauth.admin.accounts".split("."),
  endpoint: "/authenticate/admin/accounts/",
  //
  moduleTerm: "Admin Account",
  moduleTermPlural: "Admin Accounts",
  moduleName: "Admin Accounts",
  moduleDescription:
    "Manage all Unite SSW Admins/Staffs & their Admin Accounts.",
};
