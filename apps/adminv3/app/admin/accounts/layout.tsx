import { RBACCheck } from "@/components/RBACCheck";
import { PropsWithChildren } from "react";

export default function LayoutAccounts({ children }: PropsWithChildren) {
  return <RBACCheck allowList={["admin"]}>{children}</RBACCheck>;
}
