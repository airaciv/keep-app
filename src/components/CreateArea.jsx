import React, { useState } from "react";

//CHALLENGE:
//1. Implement the add note functionality.
//2. Implement the delete note functionality.

//This is the end result you're aiming for:
//https://pogqj.csb.app/

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.handleSubmit(note);
          setNote({ title: "", content: "" });
        }}
      >
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
