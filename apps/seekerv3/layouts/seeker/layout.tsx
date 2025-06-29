"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import { PropsWithChildren } from "react";

export default function TokenCheck({ children }: PropsWithChildren) {
  const router = useRouter();
  const [checked, setChecked] = useState(false); // Ensure check only runs on client

  useEffect(() => {
    const checkToken = () => {
      try {
        const token =
          typeof window !== "undefined"
            ? sessionStorage.getItem("sswtokenseeker")
            : null;

        if (!token) {
          throw new Error("No token");
        }

        const tokenData: any = jwtDecode(token);

        if (!tokenData?.user_id) {
          throw new Error("Invalid token data");
        }

        setChecked(true);
      } catch (err) {
        router.push("/");
      }
    };

    checkToken();
  }, [router]);

  if (!checked) return null; // Show nothing until check is complete

  return <>{children}</>;
}
