import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
// import notes from "../notes";
import CreateArea from "./CreateArea";

function App() {
  const [list, setList] = useState([]);

  function addNote(note) {
    setList((prevValue) => {
      return [...prevValue, note];
    });
  }

  function deleteNote(id) {
    setList((prevValue) => {
      return prevValue.filter((list, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea handleSubmit={addNote} />
      {list.map((note, i) => (
        <Note
          key={i}
          id={i}
          title={note.title}
          content={note.content}
          deleteNote={deleteNote}
        />
      ))}
      {/* {notes.map((note) => (
        <Note key={note.id} title={note.title} content={note.content} />
      ))} */}
      <Footer />
    </div>
  );
}

export default App;
