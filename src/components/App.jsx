import React, { createContext, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Note } from "./Note";
import CreateArea from "./CreateArea";
import ReactSwitch from "react-switch"

export const ThemeContext = createContext(null);

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNotes) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNotes];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((notesItem, index) => {
        return index !== id;
      });
    });
  }
  
  const [theme,setTheme] = useState("light");

  const themeToggle = () =>{
    console.log("toggled");
    setTheme((curr) => (curr === "light") ? "dark" : "light" );
  }

  return (
    <ThemeContext.Provider value={{theme,themeToggle}}  > 
    <div id={theme} >
      <Header
      clickToggle={themeToggle}
       />
      <CreateArea onAdd={addNote} />
      {notes.map((notesItem,index) => {
        return (
          <Note
            key={index}
            id={index}
            title={notesItem.title}
            content={notesItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
    </ThemeContext.Provider>  
  );
}

export { App };
