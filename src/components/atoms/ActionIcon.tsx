import React from "react";
import { Icon } from "../../ui/atoms";

interface ActionIconProps {
  icon: React.ReactNode;
}

export function ActionIcon({ icon }: ActionIconProps) {
  return <Icon>{icon}</Icon>;
}
