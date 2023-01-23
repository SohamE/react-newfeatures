import React, { useState, useEffect, useReducer } from "react";
import notesReducer from "../reducers/notes";
import NoteList from "./NoteList";
import AddNoteForm from './AddNoteForm';

export default() => {
    const [notes, notesDispatch] = useReducer(notesReducer, []);
  
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
  
    return (
      <div>
        <h1>My Notes</h1>
        <NoteList notes={notes} removeNote={removeNote}/>
        <p>Add Note</p>
        <AddNoteForm notesDispatch={notesDispatch} />
      </div>
    );
  };