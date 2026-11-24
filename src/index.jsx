import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const Testing = () => (
  <div>
    <App />
  </div>
);

createRoot(document.getElementById("root")).render(<Testing />);
