import React, { useContext } from "react";
import Notecontext from "../Context/notes/Notecontext";
import Noteitem from "./Noteitem";

const Notes = () => {
    const Context = useContext(Notecontext);
	const { notes, setNote } = Context;
  return (
    <div className="row my-3">
        <h1>Your Notes</h1>
			{notes.map((note) => {
				return <Noteitem note={note}/>;
			})}
    </div>
  )
}

export default Notes
