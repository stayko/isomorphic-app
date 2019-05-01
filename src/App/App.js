import React from "react";
import { Switch, Route } from "react-router-dom";
import withStyles from "isomorphic-style-loader/withStyles";
import Home from "../Home";
import Details from "../Details";
import s from "./AppStyles.css";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/user/:id" component={Details} />
    </Switch>
  );
}

export default withStyles(s)(App);
