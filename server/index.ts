/// <reference types="webpack-env" />
import http from "http";
import * as app_module from "./server";

let a: typeof app_module = <any>require("./server.tsx");

const server = http.createServer(app_module.app);
let currentApp = app_module.app;
server.listen(3000);

if (module.hot) {
  module.hot.accept("./server.tsx", () => {
    a = <any>require("./server.tsx");
    server.removeListener("request", currentApp);
    server.on("request", a.app);
    currentApp = a.app;
  });
}

// /// <reference types="webpack-env" />
// import http from "http";
// import app from "./server";

// const server = http.createServer(app);
// let currentApp = app;
// server.listen(3000);

// if (module.hot) {
//   module.hot.accept("./server", () => {
//     console.log("DID THIS");
//     server.removeListener("request", currentApp);
//     server.on("request", app);
//     currentApp = app;
//   });
// }
