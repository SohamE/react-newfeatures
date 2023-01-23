import React, { useState } from "react";

const AddNoteForm = ({ notesDispatch }) => {
  let [title, setTitle] = useState("");
  let [titleErr, setTitleErr] = useState("");
  let [desc, setDesc] = useState("");

  const validateTitle = (titleTest) => {
    let error = "";
    if (titleTest == "") {
      error = "Title is Empty";
    }
    setTitleErr(error);
    return !!error;
  };

  const addNote = (e) => {
    e.preventDefault();
    if (!validateTitle(document.getElementById("note-title").value)) {
      notesDispatch({ type: "ADD_NOTE", title, desc });
    }

    setTitle("");
    setDesc("");
  };

  return (
    <form onSubmit={addNote}>
      <input
        id="note-title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      {titleErr && <p>Error: {titleErr}</p>}
      <textarea
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export { AddNoteForm as default };
