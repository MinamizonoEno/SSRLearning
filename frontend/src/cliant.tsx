import ReactDOMClient from "react-dom/client";
import { App } from "./App";

const rootElement = document.getElementById("react-root");
if (rootElement === null) throw new Error("rootElement not found.");

ReactDOMClient.hydrateRoot(rootElement, <App />);
