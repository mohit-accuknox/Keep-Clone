import React, { createContext, useState, useEffect } from "react";

export const pinContext = createContext();

const ContextApi = ({ children }) => {
  
  const noteFromLocalStorage = JSON.parse(
    window.localStorage.getItem("note") || "[]"
  );

  const [notes, setNotes] = useState(noteFromLocalStorage);

  useEffect(() => {
    window.localStorage.setItem("note", JSON.stringify(notes));
  }, [notes]);

  return (
    <pinContext.Provider value={{ notes, setNotes }}>
      {children}
    </pinContext.Provider>
  );
};

export default ContextApi;
