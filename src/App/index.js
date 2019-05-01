import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./AppStore";
import { BrowserRouter } from "react-router-dom";
import StyleContext from "isomorphic-style-loader/StyleContext";
import App from "./App";
const store = configureStore(window.REDUX_DATA);

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss());
  return () => removeCss.forEach(dispose => dispose());
};

ReactDOM.hydrate(
  <Provider store={store}>
    <StyleContext.Provider value={{ insertCss }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StyleContext.Provider>
  </Provider>,
  document.getElementById("app")
);
