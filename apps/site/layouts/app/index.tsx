import { PropsWithChildren } from "react";
//vfw
import { AppWrapper, QueryWrapper } from "@vframework/core";

import { GoogleOAuthProvider } from "@react-oauth/google";

//themes
import { configThemeMantine } from "@/config/theme";
//styles
import classes from "./app.module.css";

import "@mantine/carousel/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/spotlight/styles.css";

import "@/public/styles/global.css";
import { LanguageProvider } from "./app.context";

//oauth

export const endpoint = "https://api.unitessw.com";

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
        <GoogleOAuthProvider clientId="891191709922-oqundf96vqb74d9ubv0nd5urhn5eh072.apps.googleusercontent.com">
          <LanguageProvider>{children}</LanguageProvider>
        </GoogleOAuthProvider>
      </AppWrapper>
    </QueryWrapper>
  );
}
