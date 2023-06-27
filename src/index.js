import React, { StrictMode } from "react";
import ReactDom from "react-dom/client";

import "./index.css";
import App from "./App";

import store from "./store/store";
import { Provider } from "react-redux";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
