import React from "react";
import { GlobalStyle } from "./globalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NotesPage } from "./components/pages";

export function App() {
  return (
    <Router>
      <GlobalStyle />
      <NotesPage />
    </Router>
  );
}
