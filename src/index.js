import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";

const Testing = () => (
  <div>
    <App />
  </div>
);

render(<Testing />, document.getElementById("root"));
