import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import RootContainer from "./root-container";
import { Provider } from "react-redux";
import { store } from "./store";
import baseStyles from "./styles/index";

const render = () => {
  baseStyles();

  ReactDOM.render(
    <Provider store={store}>
      <RootContainer />
    </Provider>,
    document.getElementById("root") as HTMLElement
  );
  registerServiceWorker();
};

render();
