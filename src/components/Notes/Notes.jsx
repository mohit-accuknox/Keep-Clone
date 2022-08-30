import React from "react";
import "../styles/Notes.css";

const Notes = ({ key, id, title, note, handleDeleteNote }) => {
  // console.log(props);

  return (
    <div>
      <div className="card" key={key}>
        <div className="cardContent">
          <h3 className="title">{title}</h3>
          <p className="noteContent">{note}</p>
        </div>
        <div className="deleteBtn">
          <button className="deleteButton" onClick={() => handleDeleteNote(id)}>
            Delete Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notes;
