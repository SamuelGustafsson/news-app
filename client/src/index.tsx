import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import RootContainer from "./root-container";
import baseStyles from "./styles/index";

const render = () => {
  baseStyles();

  ReactDOM.render(<RootContainer />, document.getElementById(
    "root"
  ) as HTMLElement);
  registerServiceWorker();
};

render();
