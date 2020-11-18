import React from "react";
import { ContentWrapper } from "../../ui/templates";
import { Header } from "../molecules";

interface MainTemplateProps {
  children: React.ReactNode;
}

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <ContentWrapper>
      <Header />
      {children}
    </ContentWrapper>
  );
}
