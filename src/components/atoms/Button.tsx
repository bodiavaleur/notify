import React from "react";
import { ButtonText } from "../../ui/atoms";

interface ButtonProps {
  click: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}

export function Button({ click, text }: ButtonProps) {
  return <ButtonText onClick={click}>{text}</ButtonText>;
}
