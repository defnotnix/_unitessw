import { RBACCheck } from "@/components/RBACCheck";
import { PropsWithChildren } from "react";

export default function LayoutConfigure({ children }: PropsWithChildren) {
  return <RBACCheck allowList={["admin"]}>{children}</RBACCheck>;
}
