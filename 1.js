import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<h1>Hello</h1>);

// const root = ReactDOM.createRoot(document.getElementById('root1'));

// root.render(<h1>Hello world</h1>);

// document.getElementById('root').innerText = "hbacbc";
