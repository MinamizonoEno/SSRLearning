import ReactDOMServer from "react-dom/server";
import { App } from "./App";
import fs from "fs";
import path from "path";

const pageString = ReactDOMServer.renderToString(<App />);

const html = `<!DOCTYPE html>
<html lang="ja">
    <head>
    <meta charset="UTF-8" />
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

writeFile(path.resolve(__dirname, "../build/index.html"), html);
