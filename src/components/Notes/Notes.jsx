import React, { useContext } from "react";
import { useState } from "react";
import { pinContext } from "../Context/ContextApi";
import "../styles/Notes.css";
import { AnimatePresence, motion } from "framer-motion";

const Notes = ({ key, id, item, handleDeleteNote }) => {
  const [isOpen,setIsOpen] = useState(false);

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
      <AnimatePresence>
        <motion.div
          initial={{ x: -1000}}
          animate={{ x: 0}}
          transition={{ duration: 0.7, type: "spring"}}
          exit={{y:-1000, opacity:0}}
          className="card"
          key={key}
        >
          <div className="cardContent">
            {isEditing ? (
              <input
                className="inputEdit"
                type="text"
                value={titleText}
                placeholder="title"
                onChange={(e) => setTitleText(e.target.value)}
              />
            ) : (
              <h3>{title}</h3>
            )}

            <motion.img
              whileTap={{scale:1.1}}
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
            <motion.button whileTap={{scale:0.9,x:10}} className="deleteButton" onClick={() => deleteNote(item)}>
              Delete Note
            </motion.button>
            {isEditing ? (
              <motion.button whileTap={{scale:0.9,x:10}} onClick={() => handleSaveButton(item)}>Save</motion.button>
            ) : (
              <motion.button whileTap={{scale:0.9,x:10}} onClick={() => setIsEditing((val) => !val)}>Edit</motion.button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Notes;
