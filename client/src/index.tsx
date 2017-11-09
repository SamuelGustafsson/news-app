import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import RootComponent from "./root/root-component";
import { Provider } from "react-redux";
import { store } from "./store";
import baseStyles from "./base-styles";

const render = () => {
  baseStyles();

  ReactDOM.render(
    <Provider store={store}>
      <RootComponent />
    </Provider>,
    document.getElementById("root") as HTMLElement
  );
  registerServiceWorker();
};

render();
