import { ListDashes } from "@phosphor-icons/react";
import { _Edit } from "./pages/edit";
import { _List } from "./pages/list";
import { _ListPublished } from "./pages/list_published";
import { _ListRequest } from "./pages/list_request";
import { _New } from "./pages/new";
import { _Profile } from "./pages/profile";
import { _ListDeleted } from "./pages/list_deleted";
import { _ListBooked } from "./pages/list_booked";

const Module: any = {
  List: _List,
  ListPending: _ListRequest,
  ListActive: _ListPublished,
  ListDeleted: _ListDeleted,
  ListBooked: _ListBooked,
  New: _New,
  Edit: _Edit,
  Profile: _Profile,
};

export { Module as ModuleApplicants };
