import React from "react";
import ReactDOMServer from "react-dom/server";
import { App } from "./App.tsx";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pageString = ReactDOMServer.renderToString(<App />);
const randomeNumber = Math.random().toString(32).substring(2);

const html = `<!DOCTYPE html>
<html lang="ja">
    <head>
    <meta charset="UTF-8" />
    // ${randomeNumber}
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
    </head>
  <body>
    <div id="root">${pageString}</div>
  </body>
  <script src="client.js"></script>
</html>
`;

async function writeFile(file: string, data: string): Promise<void> {
  await fs.promises.mkdir(path.dirname(file), { recursive: true });
  fs.promises.writeFile(file, data);
}

writeFile(path.resolve(__dirname, "../dist/index.html"), html);
