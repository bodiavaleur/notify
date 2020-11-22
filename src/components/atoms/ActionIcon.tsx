import React from "react";
import { ButtonIcon } from "../../ui/atoms";

interface ActionIconProps {
  click: React.MouseEventHandler<HTMLButtonElement>;
  icon: React.ReactNode;
}

export function ActionIcon({ click, icon }: ActionIconProps) {
  return <ButtonIcon onClick={click}>{icon}</ButtonIcon>;
}
