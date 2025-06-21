import { House } from "@phosphor-icons/react";
import { PropModuleConfig } from "@vframework/ui";

export const moduleConfig: PropModuleConfig = {
  bread: [
    {
      label: "Unite SSW Admin",
    },
    {
      label: "Seeker Disabled Accounts",
    },
    {
      label: "Manage Seeker Disabled Accounts",
    },
  ],
  moduleKey: "vauth.disabled.account".split("."),
  endpoint: "/authenticate/inactive/admin/accounts//",
  //
  moduleTerm: "Disabled Account",
  moduleTermPlural: "Disabled Accounts",
  moduleName: "Disabled Accounts",
  moduleDescription: "Review disabled accounts",
};
