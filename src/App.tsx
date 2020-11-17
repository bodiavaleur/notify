import React from "react";
import { GlobalStyle } from "./globalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export function App() {
  return (
    <Router>
      <GlobalStyle />
    </Router>
  );
}
