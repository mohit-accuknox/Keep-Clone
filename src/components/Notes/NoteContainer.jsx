import React from "react";
import Notes from "./Notes";
import '../styles/NoteContainer.css'
import PinnedFile from "./PinnedFile";

const NoteContainer = ({ noteData, handleDeleteNote, pinStatus }) => {
  console.log(noteData);
  
  const pinnedData = noteData.filter((val) => val.isPinned === true);
  const unPinnedData = noteData.filter((val) => val.isPinned === false);
  return (
    <div>
      <section className="containerNoteKeep">
        
        {pinnedData.map((item, index) => {
          return (
            <Notes
              key={index}
              item={item}
              handleDeleteNote={handleDeleteNote}
              pinStatus={pinStatus}
            />
          );
        })}
        
        {
        
        unPinnedData.map((item, index) => {
          return (
            <Notes
              key={index}
              item={item}
              handleDeleteNote={handleDeleteNote}
              pinStatus={pinStatus}
            />
          );
        })
        }
      </section>
    </div>
  );
};

export default NoteContainer;
