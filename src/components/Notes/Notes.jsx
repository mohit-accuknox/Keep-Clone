import React, { useContext } from "react";
import { useState } from "react";
import { pinContext } from "../Context/ContextApi";
import "../styles/Notes.css";

const Notes = ({ key, id, item, handleDeleteNote }) => {
  const { notes, setNotes } = useContext(pinContext);
  // console.log(props);

  const [isEditing, setIsEditing] = useState(false);

  const [titleText, setTitleText] = useState(item.title);

  const [descriptionText, setDescriptionText] = useState(item.note);

  // const [noteId, setNoteId] = useState()

  const convertDate = (value) => {
    const date = new Date(item.id);
    const month = date.toLocaleDateString("default", { month: "long" });
    const presentDate = date.getUTCDate();

    return `${month}: ${presentDate}`;
  };

  let { title, note } = item;

  // const pinnedNote = (isPinned) => {
  //   isPinned = !isPinned;
  // };

  const togglePinnedNote = (note) => {
    const foundNote = notes.find((val) => {
      return val.id === note.id;
    });

    if (foundNote) {
      const newNotes = notes.filter((val) => {
        return val.id !== foundNote.id;
      });
      const newNoteWithChangedValue = {
        ...note,
        isPinned: !foundNote.isPinned,
      };
      setNotes([...newNotes, newNoteWithChangedValue]);
    }
  };

  const deleteNote = (note) => {
    const newNotes = notes.filter((val) => {
      return val.id !== note.id;
    });
    setNotes(newNotes);
  };

  const handleSaveButton = (note) => {
    const foundNote = notes.find((val) => {
      return val.id === note.id;
    });

    if (foundNote) {
      const newNotes = notes.filter((val) => {
        return val.id !== foundNote.id;
      });
      const newNoteWithChangedValue = {
        ...note,
        title: titleText,
        note: descriptionText,
      };
      setNotes([...newNotes, newNoteWithChangedValue]);
    }
    setTitleText("");

    setIsEditing((val) => !val);
  };

  return (
    <div>
      <div className="card" key={key}>
        <div className="cardContent">
          {isEditing ? (
            <input
              type="text"
              value={titleText}
              placeholde="title"
              onChange={(e) => setTitleText(e.target.value)}
            />
          ) : (
            <h3>{title}</h3>
          )}

          <img
            src={item.isPinned ? "/images/active-pin.svg" : "/images/pin.png"}
            alt=""
            className="pinIcon"
            onClick={() => togglePinnedNote(item)}
          />
        </div>
        {isEditing ? (
          <textarea
            type="text"
            name="note"
            id="note"
            cols="30"
            rows="10"
            placeholder="Description"
            value={descriptionText}
            onChange={(e) => setDescriptionText(e.target.value)}
          ></textarea>
        ) : (
          <p>{note}</p>
        )}
        <div className="date">{convertDate(item)}</div>
        <div className="deleteBtn">
          <button className="deleteButton" onClick={() => deleteNote(item)}>
            Delete Note
          </button>
          {isEditing ? (
            <button onClick={() => handleSaveButton(item)}>Save</button>
          ) : (
            <button onClick={() => setIsEditing((val) => !val)}>Edit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notes;
