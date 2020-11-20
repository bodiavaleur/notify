import React from "react";
import { VscTrash } from "react-icons/vsc";
import { Textarea } from "../../ui/atoms";
import { ActionIcon, InputTitle } from "../atoms/";
import { ActionPanel } from "../molecules";
import { MainTemplate } from "../templates";

export function NoteEditPage() {
  return (
    <MainTemplate>
      <ActionPanel>
        <ActionIcon icon={<VscTrash />} />
      </ActionPanel>
      <InputTitle />
      <Textarea />
    </MainTemplate>
  );
}
