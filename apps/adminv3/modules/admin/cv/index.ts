import { ListDashes } from "@phosphor-icons/react";

import { _List } from "./pages/list";

import { _New } from "./pages/new";
import { _CV } from "./pages/cv";
import { _ListDeleted } from "./pages/deleted";

const Module: any = {
  List: _List,
  ListDeleted: _ListDeleted,
  New: _New,
  CV: _CV,
};

export { Module as ModuleCV };
