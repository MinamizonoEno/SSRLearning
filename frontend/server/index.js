import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { App } from "../src/App.tsx";

const PORT = 9000;
const app = express();

app.get("/", (req, res) => {
  // AppコンポーネントをHTML文字列に変換
  const app = ReactDOMServer.renderToString(<App />);

  // HTMLに変換されたAppコンポーネントを埋め込んだHTMLを作成
  const html = `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Vite + React + TS</title>
      <script src="client.js" async defer></script>
    </head>
    <body>
      <div id="root">${app}</div>
      <script type="module" src="/src/main.tsx"></script>
    </body>
  </html>
    `;

  // コンポーネントが埋め込まれたHTMLをレスポンス
  res.send(html);
});

app.use(express.static("./dist"));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
