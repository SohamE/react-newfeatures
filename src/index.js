import React, { useState, useEffect, useReducer } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import notesReducer from "./reducers/notes";
import reportWebVitals from "./reportWebVitals";

const Apple = () => {
  let [title, setTitle] = useState("");
  let [desc, setDesc] = useState("");
  const [notes, notesDispatch] = useReducer(notesReducer, []);
  let [titleErr, setTitleErr] = useState("");

  const addNote = (e) => {
    e.preventDefault();

    notesDispatch({ type: "ADD_NOTE", title, desc });

    setTitle("");
    setDesc("");
  };

  const removeNote = (noteTest) => {
    notesDispatch({ type: "REMOVE_NOTE", noteTest });
  };

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));

    if (notes.length > 0) {
      notesDispatch({ type: "POPULATE_NOTES", notes });
    }
  }, []);

  useEffect(() => {
    console.log("setting");
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const validateTitle = (titleTest) => {
    let error = "";
    if (titleTest == "") {
      error = "Title is Empty";
    }
    setTitleErr(error);
    return !!error;
  };

  return (
    <div>
      <h1>My Notes</h1>
      {notes.map((note, index) => (
        <Note key={index} note={note} removeNote={removeNote} />
      ))}
      <form onSubmit={addNote}>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            validateTitle(e.target.value);
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
    </div>
  );
};

let Note = ({ note, removeNote }) => {
  useEffect(() => {
    console.log("Setting up effect!");

    return () => {
      console.log("Cleaning up effect");
    };
  }, []);

  return (
    <div>
      <h4>{note.title}</h4>
      <p>{note.desc}</p>
      <button
        onClick={() => {
          removeNote(note);
        }}
      >
        X
      </button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Apple counter={30} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
