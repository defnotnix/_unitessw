import { RBACCheck } from "@/components/RBACCheck";
import { PropsWithChildren } from "react";

export default function LayoutCV({ children }: PropsWithChildren) {
  return (
    <RBACCheck allowList={["admin", "staff1", "staff3"]}>{children}</RBACCheck>
  );
}
