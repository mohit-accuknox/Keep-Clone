import React from "react";
import Notes from "./Notes";
import '../styles/NoteContainer.css'

const NoteContainer = ({ noteData, handleDeleteNote }) => {
  console.log(noteData);

  return (
    <div>
      <section className="containerNoteKeep">
        {noteData.map((item, index) => {
          return (
            <Notes
              key={index}
              id={index}
              title={item.title}
              note={item.note}
              handleDeleteNote={handleDeleteNote}
            />
          );
        })}
      </section>
    </div>
  );
};

export default NoteContainer;
