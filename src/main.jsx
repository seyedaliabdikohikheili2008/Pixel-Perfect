import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App.jsx";
import { Provider } from "react-redux";
import { store } from "./core/store/Store.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./core/i18n/i18n.js";
import { Toaster } from "react-hot-toast";
import "leaflet/dist/leaflet.css";
import "@neshan-maps-platform/mapbox-gl-react/dist/style.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Toaster position="top-center" reverseOrder={false}/>
        <App />
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
);
