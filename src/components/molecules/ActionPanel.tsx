import React from "react";
import { PanelBlock } from "../../ui/molecules";

interface PanelProps {
  children: React.ReactNode;
}

export function ActionPanel({ children }: PanelProps) {
  return <PanelBlock>{children}</PanelBlock>;
}
