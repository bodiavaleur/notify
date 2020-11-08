import React from "react";
import { NoteBox } from "./components/molecules";
import { Header } from "./components/organisms";
import { MainWrapper } from "./components/templates/";
import { GlobalStyle } from "./globalStyle";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainWrapper>
        <NoteBox title='test' note='test' />
      </MainWrapper>
    </>
  );
}
