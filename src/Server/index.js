import "@babel/polyfill";
import express from "express";
import React from "react";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import StyleContext from "isomorphic-style-loader/StyleContext";
import configureStore from "../App/AppStore";
import App from "../App/App.js";

const app = express();

app.use(express.static("build/public"));

app.get("/*", (req, res) => {
  const context = {};
  const store = configureStore();

  const css = new Set();
  const insertCss = (...styles) =>
    styles.forEach(style => css.add(style._getCss()));

  const jsx = (
    <Provider store={store}>
      <StaticRouter context={context} location={req.url}>
        <StyleContext.Provider value={{ insertCss }}>
          <App />
        </StyleContext.Provider>
      </StaticRouter>
    </Provider>
  );
  const reactDom = renderToString(jsx);

  const reduxState = store.getState();

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(htmlTemplate(reactDom, reduxState, css));
});

app.listen(3000, () => console.log("Server is listening on Port 3000!"));

function htmlTemplate(reactDom, reduxState, css) {
  return `
        <!DOCTYPE html>
        <html>
          <head>
              <title>Top 20 Stack Overflow Users</title>
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <style>${[...css].join("")}</style>
          </head>
          <body>
              <div id="app">${reactDom}</div>
              <script>
                  window.REDUX_DATA = ${JSON.stringify(reduxState)}
              </script>
              <script src="../client_bundle.js"></script>
          </body>                                             
        </html>
    `;
}
