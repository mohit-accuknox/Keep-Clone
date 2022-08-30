import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header/Header";
import NoteMaker from "./components/NoteMaker/NoteMaker";
import Notes from "./components/Notes/Notes";
import NoteContainer from "./components/Notes/NoteContainer";

function App() {
  const noteFromLocalStorage = JSON.parse(
    window.localStorage.getItem("note") || "[]"
  );

  const [noteAdd, setNoteAdd] = useState(noteFromLocalStorage);

  const [searchResult, setSearchResult] = useState("");

  useEffect(() => {
    window.localStorage.setItem("note", JSON.stringify(noteAdd));
  }, [noteAdd]);

  // ====function for adding the notes======

  const addNote = (data) => {
    setNoteAdd((oldData) => {
      return [...oldData, data];
    });
    console.log(noteAdd);
  };

  // =====function for deleting notes based in id==============

  const deleteNote = (id) => {
    const delNote = noteAdd.filter((current,index) => {
      return index !== id;
    })
    setNoteAdd(delNote);
  };


  return (
    <div className="App">
      <Header search={setSearchResult} />
      <NoteMaker addNoteValue={addNote} />
      {/* <Notes/> */}

      {/* {noteAdd
          .filter((val) => {
            console.log(val);
            if (
              val.title.includes(searchResult) ||
              val.note.includes(searchResult)
            ) {
              return val;
            }
          })
          .map((item, index) => {
            if(item.title.includes(searchResult) || item.note.includes(searchResult)){
              return (
                <Notes
                  key={index}
                  id={index}
                  title={item.title}
                  note={item.note}
                  deleteNote={deleteNoteButtonFunction}
                />
              );
            }
            
          })}

        {noteAdd.map((item, index) => {
          return (
            <Notes
              Key={index}
              id={index}
              title={item.title}
              note={item.note}
              deleteNote={deleteNoteButtonFunction}
            />
          );
        })} */}

      <NoteContainer
        noteData={noteAdd.filter((val) => val.title.includes(searchResult) || val.note.includes(searchResult))}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
