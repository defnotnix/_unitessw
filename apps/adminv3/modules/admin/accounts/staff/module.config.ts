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
  moduleKey: "vauth.Seeker Staff Accounts".split("."),
  endpoint: "/players/Seeker Staff Accounts/",
  //
  moduleTerm: "Seeker Staff Account",
  moduleTermPlural: "Seeker Staff Accounts",
  moduleName: "Seeker Staff Accounts",
  moduleDescription:
    "Manage all Unite SSW Admins/Staffs & their Seeker Staff Accounts.",
};
