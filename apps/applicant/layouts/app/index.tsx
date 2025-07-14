"use client";

import { PropsWithChildren, Suspense, useEffect } from "react";
//vfw
import { QueryWrapper, AppWrapper } from "@vframework/core";

import { GoogleOAuthProvider } from "@react-oauth/google";

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
import { LanguageContext, LanguageProvider } from "./app.context";

//oauth

export const endpoint = "https://api.unitessw.com";
//export const endpoint = "http://10.0.0.8:8000";

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
      portalType="applicant"
    >
      <AppWrapper
        theme={configThemeMantine}
        defaultColorScheme={"light"}
        classNames={classes}
        title="Applicant-Manabiya HR Unity"
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
        <GoogleOAuthProvider clientId="242445348415-tp2tbac850cjumv4v6che5k0fgg7lp2m.apps.googleusercontent.com">
          <LanguageProvider>
            <Suspense fallback={<div></div>}>{children}</Suspense>
          </LanguageProvider>
        </GoogleOAuthProvider>
      </AppWrapper>
    </QueryWrapper>
  );
}
