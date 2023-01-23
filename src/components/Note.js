import { useEffect } from 'react';

export default ({ note, removeNote }) => {
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
