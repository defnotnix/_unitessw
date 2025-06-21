import { House } from "@phosphor-icons/react";
import { PropModuleConfig } from "@vframework/ui";

export const moduleConfig: PropModuleConfig = {
  bread: [
    {
      label: "Unite SSW Admin",
    },
    {
      label: "Seeker Staff Accounts",
    },
    {
      label: "Manage Seeker Staff Accounts",
    },
  ],
  moduleKey: "vauth.staff.account".split("."),
  endpoint: "/players/staff/",
  //
  moduleTerm: "Staff Account",
  moduleTermPlural: "Staff Accounts",
  moduleName: "Staff Accounts",
  moduleDescription:
    "Manage all Unite SSW Admins/Staffs & their Staff Accounts.",
};
