import React, { useState } from "react";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <motion.div 
     intitial ={{opacity: 0}}
    animate = {{opacity: 1}}
    >
      <form className="create-note"
      >
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Add a title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Write a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddTaskIcon />
          </Fab>
        </Zoom>
      </form>
    </motion.div>
  );
}

export default CreateArea;
