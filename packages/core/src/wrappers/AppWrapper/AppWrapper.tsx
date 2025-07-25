"use client";

import React from "react";
//mantine
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
//modals
import { ModalsProvider } from "@mantine/modals";
//notifications
import { Notifications } from "@mantine/notifications";

//styles
import cx from "clsx";
import classes from "./AppWrapper.module.css";
//types
import type { PropAppWrapper } from "./AppWrapper.type";

export function AppWrapper({
  extraHeadTags,
  title = "Manabiya HR Unity",

  theme,
  defaultColorScheme = "light",
  classNames,

  children,
}: PropAppWrapper) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript
          nonce="8IBTHwOdqNKAWeKl7plt8g=="
          defaultColorScheme={defaultColorScheme}
        />
        <title>{title}</title>
        {extraHeadTags}
      </head>
      <body
        className={cx(classes.root, {
          [classNames.body]: classNames.body,
        })}
      >
        <MantineProvider theme={theme} defaultColorScheme={defaultColorScheme}>
          <ModalsProvider>
            <Notifications />
            {children}
          </ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
