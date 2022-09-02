import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header/Header";
import NoteMaker from "./components/NoteMaker/NoteMaker";
import Notes from "./components/Notes/Notes";
import NoteContainer from "./components/Notes/NoteContainer";
import { useContext } from "react";
import { pinContext } from "./components/Context/ContextApi";

function App() {

  const {notes, setNotes} = useContext(pinContext);

  const [searchResult, setSearchResult] = useState("");






  // ====function for adding the notes======

  const addNote = (data) => {
    setNotes((oldData) => {
      return [...oldData, data];
    });

  };

  // =====function for deleting notes based in id==============

  const deleteNote = (id) => {
    const delNote = notes.filter((current,index) => {
      return index !== id;
    })
    setNotes(delNote);
  };


  return (
    <div className="App">
      <Header search={setSearchResult} />
      <NoteMaker addNoteValue={addNote}/>

      <NoteContainer
        noteData={notes.filter((val) => val.title.includes(searchResult) || val.note.includes(searchResult))}
        handleDeleteNote={deleteNote}
    
      />
    </div>
  );
}

export default App;
