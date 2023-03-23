import React, { useContext, useEffect } from "react";
import Notecontext from "../Context/notes/Notecontext";
import Addnote from "./Addnote";
import Noteitem from "./Noteitem";

const Notes = () => {
	const Context = useContext(Notecontext);
	const { notes, getNotes } = Context;
	useEffect(() => {
		getNotes();
	}, []);
	return (
		<>
			<Addnote />
			<div className="row my-3">
				<h1>Your Notes</h1>
				{notes.map((note) => {
					return <Noteitem key={note._id} note={note} />;
				})}
			</div>
		</>
	);
};

export default Notes;
