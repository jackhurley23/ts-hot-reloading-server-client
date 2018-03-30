import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { hot } from "react-hot-loader";

import { App } from "../common/App";
import { someObj } from "./anotherFile";

export const app = express();
export default hot(module)(app);

app.get("/api", (req, res) => {
  console.log("get API");
  res.send({
    message:
      "I am a server route and can also be hot reloaded! " + someObj.get()
  });
  someObj.inc();
});

app.get("*", (req, res) => {
  let application = renderToString(<App />);
  // const application = "Hello from fake react";

  const html = `<!doctype html>
    <html class="no-js" lang="">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <title>HOT HMR all the things!</title>
            <meta name="description" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body>
            <div id="root">${application}</div>
            <script src="http://localhost:3001/client.js"></script>
        </body>
    </html>`;

  res.send(html);
});

// export default app;
// export { app };
