import React, { useContext, useState } from "react";
import Notecontext from "../Context/notes/Notecontext";
const Addnote = () => {
	const Context = useContext(Notecontext);
	const { addNote } = Context;
	const [note, setNote] = useState({ title: "", description:"", tag: "default" });
	const handleclick = (e) => {
        e.preventDefault();
		addNote(note.title,note.description,note.tag);
	};
	const onchange = (e) => {
		setNote({ ...note, [e.target.name]: e.target.value });
	};
	return (
		<div>
			<h1>Add Note</h1>
			<form className="my-3">
				<div className="mb-3 ">
					<label htmlFor="title" className="form-label">
						Title
					</label>
					<input
						type="text"
						className="form-control"
						id="title"
						aria-describedby="emailHelp"
						name="title"
						onChange={onchange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="description" className="form-label">
						Description
					</label>
					<input
						type="text"
						className="form-control"
						id="description"
						name="description"
						onChange={onchange}
					/>
				</div>
				<button type="submit" className="btn btn-primary" onClick={handleclick}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Addnote;
