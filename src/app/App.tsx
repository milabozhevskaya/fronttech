import type { FC } from "react";

import { MantineProvider, createTheme } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Provider } from "react-redux";

import { Layout } from "./layout/Layout";
import { Route } from "./routes";

import { setupStore } from "store";

import "@mantine/notifications/styles.css";

const store = setupStore();

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "cyan",
  fontSizes: { xs: "12px", sm: "14px", md: "16px", lg: "18px", xl: "20px" },
  components: {},
});

export const App: FC = () => (
  <MantineProvider theme={theme} defaultColorScheme="dark" withGlobalClasses>
    <Provider store={store}>
      <Layout>
        <Route />
      </Layout>

      <Notifications autoClose={3000} />
    </Provider>
  </MantineProvider>
);
