import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App.jsx";
import { Provider } from "react-redux";
import { store } from "./core/store/Store.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./core/i18n/i18n.js";
import { AuthProvider } from "./context/AuthContext/AuthContext.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
);
