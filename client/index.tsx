import * as React from "react";
import { render } from "react-dom";
import App from "../common/App";

render(<App />, document.getElementById("root"));

// import * as React from "react";
// import { render } from "react-dom";
// import { AppContainer } from "react-hot-loader";
// import App from "../common/App";

// render(
//   <AppContainer>
//     <App />
//   </AppContainer>,
//   document.getElementById("root")
// );

// if (module.hot) {
//   module.hot.accept("../common/App", () => {
//     render(
//       <AppContainer>{require("../common/App").default}</AppContainer>,
//       document.getElementById("root")
//     );
//   });
// }
