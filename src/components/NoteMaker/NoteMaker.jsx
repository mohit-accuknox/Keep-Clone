import React, { useState } from "react";
import "../styles/NoteMaker.css";
import {motion} from 'framer-motion'

const NoteMaker = (prop) => {

  const emptyNote = {
    id: Date.now(),
    title: "",
    note: "",
    isPinned: false,
  };

  const [input, setInput] = useState(emptyNote);
  // console.log(input);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
    // console.log(note);
  };

  const addNoteButton = () => {
    if (input.title !== "" && input.note !== "") {
      prop.addNoteValue(input);
      setInput(emptyNote);
    }
  };

  return (
    <div>
      <motion.section initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.7}} className="noteContainer">
        <div className="top">
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={input.title}
            onChange={handleInput}
            className="titleInput"
          />
          <img src="/images/pin.png" alt="" className="pinIcon" />
        </div>
        <textarea
          name="note"
          id="note"
          cols="30"
          rows="10"
          placeholder="Take a note..."
          value={input.note}
          onChange={handleInput}
        ></textarea>
        <span className="addNote">
          <motion.button whileTap={{scale:0.9, x:10}} className="addBtn" onClick={addNoteButton}>
            Add Note
          </motion.button>
        </span>
      </motion.section>
    </div>
  );
};

export default NoteMaker;
