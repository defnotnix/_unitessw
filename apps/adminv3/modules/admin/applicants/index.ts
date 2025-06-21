import { ListDashes } from "@phosphor-icons/react";

import { _List } from "./pages/list";
import { _New } from "./pages/new";
import { _Profile } from "./pages/profile";
import { _CV } from "./pages/cv";

const Module: any = {
  List: _List,

  New: _New,
  Edit: _New,
  Profile: _Profile,
  CV: _CV,
};

export { Module as ModuleApplicants };
