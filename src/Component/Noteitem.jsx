import React, { useContext } from "react";
import Notecontext from "../Context/notes/Notecontext";

const Noteitem = ({ note }) => {
	const Context = useContext(Notecontext);
	const { deleteNote } = Context;
	return (
		<div className="col-md-3">
			<div className="card my-3">
				<div className="card-body">
					<h5 className="card-title">{note.title}</h5>
					<p className="card-text">{note.description}</p>
					<i
						className="fa-solid fa-trash mx-3"
						onClick={() =>{ deleteNote(note._id)}}
					></i>
					<i className="fa-solid fa-pen-to-square mx-3"></i>
				</div>
			</div>
		</div>
	);
};

export default Noteitem;
