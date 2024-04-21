import React from "react";
import ReactDOM from "react-dom/client";
import Content from "./components/Content";
import "./index.css";

/*
School Name - text
Study Area - text
Date of Study - date
*/

/*
Company name - text
Position title - text
Main responsibilities of your job - text input
date from and until when you worked for that company - date input
*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Content />
  </React.StrictMode>
);
