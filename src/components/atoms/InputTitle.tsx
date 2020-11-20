import React, { useState } from "react";
import { NoteTitle } from "../../types/NoteTypes";
import { TitleInput } from "../../ui/atoms/";

export function InputTitle() {
  const [newTitle, setNewTitle] = useState("");

  // const handleTitleInput = (evt) => setNewTitle(evt.target.value)

  return <TitleInput placeholder='Type your title' />;
}
