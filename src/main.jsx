import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextApi from "./components/Context/ContextApi";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextApi>
      <App />
    </ContextApi>
  </React.StrictMode>
);
