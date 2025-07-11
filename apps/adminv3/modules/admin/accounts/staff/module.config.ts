import { House } from "@phosphor-icons/react";
import { PropModuleConfig } from "@vframework/ui";

export const moduleConfig: PropModuleConfig = {
  bread: [
    {
      label: "Manabiya HR Unity Admin",
    },
    {
      label: "Seeker Staff Accounts",
    },
    {
      label: "Manage Seeker Staff Accounts",
    },
  ],
  moduleKey: "vauth.staff.account".split("."),
  endpoint: "/authenticate/staff/accounts/",
  //
  moduleTerm: "Staff Account",
  moduleTermPlural: "Staff Accounts",
  moduleName: "Staff Accounts",
  moduleDescription:
    "Manage all Manabiya HR Unity Admins/Staffs & their Staff Accounts.",
};
