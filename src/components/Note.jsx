import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";


function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <AnimatePresence>
      <motion.div
        className="note"
        key="box"
        initial={{ x: 300, opacity: 0 }}
        whileHover={{
          scale: [1, 1.1, 1, 1.1],
          boxShadow: "0px 0px 5px rgb(140, 140, 140)",
          textShadow: "0px 0px px rgb(140, 140, 140)",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 10 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        exit={{ scale: 0.8, y: -1000, opacity: 0 }}
      >
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>
          {" "}
          <DeleteIcon />{" "}
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

export { Note };
