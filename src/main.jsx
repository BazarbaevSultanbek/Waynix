import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "@mantine/core/styles.css";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { MantineProvider } from "@mantine/core";
import { I18nProvider } from "./i18n/I18nProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <I18nProvider>
        <MantineProvider>
          <App />
        </MantineProvider>
      </I18nProvider>
    </Provider>
  </StrictMode>
);
