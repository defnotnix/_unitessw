import { RBACCheck } from "@/components/RBACCheck";
import { PropsWithChildren } from "react";

export default function LayoutApplicants({ children }: PropsWithChildren) {
  return (
    <RBACCheck allowList={["admin", "staff2", "staff3"]}>{children}</RBACCheck>
  );
}
