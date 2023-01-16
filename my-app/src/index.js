import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./style/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./components/StateProvider";
import reducer, { initialState } from "./components/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </React.StrictMode>
  </BrowserRouter>
);
