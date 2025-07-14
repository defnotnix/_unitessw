"use client";

import React from "react";
//query
import axios from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//prop
import { PropQueryWrapper } from "./QueryWrapper.type";

export function QueryWrapper({
  apiProvider,
  queryProps = {},
  children,
  portalType,
}: PropQueryWrapper) {
  const [client] = React.useState(new QueryClient(queryProps));

  axios.defaults.baseURL = apiProvider;
  axios.defaults.headers.common["X-Portal-Type"] = portalType;

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
