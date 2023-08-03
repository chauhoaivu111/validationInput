import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { ErrorProvider } from "./Provider";
import Layout from "./layout/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorProvider>
      <Layout />
    </ErrorProvider>
  </React.StrictMode>
);


reportWebVitals();
