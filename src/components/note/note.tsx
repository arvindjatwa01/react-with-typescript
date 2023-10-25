import React from "react";
import { NoteProps } from "./notes-type";

const notes = (props: NoteProps) => {
  const { text, priority } = props;
  return <div className={`note ${priority}`}>{text}</div>;
};

export default notes;
