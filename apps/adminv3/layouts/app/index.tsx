"use client";
import { PropsWithChildren, useEffect } from "react";
//vfw
import { QueryWrapper, AppWrapper } from "@vframework/core";
//themes
import { configThemeMantine } from "@/config/theme";
//styles
import classes from "./app.module.css";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/spotlight/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/charts/styles.css";

import "@/public/styles/global.css";

//oauthF

//export const endpoint = "https://api.unitessw.com";
export const endpoint = "http://10.0.0.4:8000";

export function LayoutApp({ children }: PropsWithChildren) {
  return (
    <QueryWrapper
      apiProvider={endpoint}
      //apiProvider="http://192.168.30.12:8000/"
      queryProps={{
        defaultOptions: {
          queries: {
            retry: false,
            refetchOnWindowFocus: false,
          },
        },
      }}
    >
      <AppWrapper
        theme={configThemeMantine}
        defaultColorScheme={"light"}
        classNames={classes}
        title="Admin-Manabiya HR Unity"
        extraHeadTags={
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&display=swap"
              rel="stylesheet"
            />
          </>
        }
      >
        {children}
      </AppWrapper>
    </QueryWrapper>
  );
}
