import React, { useState } from "react";
import Notecontext from "./Notecontext";
const Notestate = (props) => {
	const host = "http://localhost:5000";
	const noteInitial = [];

	const [notes, setNotes] = useState(noteInitial);

	const addNote = async (title, description, tag) => {
		const response = await fetch(`${host}/api/notes/addnote`, {
			method: "POST",

			headers: {
				"Content-Type": "application/json",
				"auth-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmZmE1MDc4ZGE1YjBkY2VjZjU2MTMxIn0sImlhdCI6MTY3NzY5ODMzNH0.XqG3jrvTW3ahnehatvqi523J6S3hZf0AcDif-eU5yYo",
			},
			body: JSON.stringify({ title, description, tag }),
		});
		const json = response.json({ title, description, tag });

		const note = {
			_id: "6401e7785debf97529ca2465",
			user: "63ffa5078da5b0dcecf56131",
			title: title,
			description: description,
			tag: tag,
			date: "2023-03-03T12:26:32.515Z",
			__v: 0,
		};
		setNotes(notes.concat(note));
	};

	//get all notes
	const getNotes = async () => {
		const response = await fetch(`${host}/api/notes/fetchallnotes`, {
			method: "Get",

			headers: {
				"Content-Type": "application/json",
				"auth-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmZmE1MDc4ZGE1YjBkY2VjZjU2MTMxIn0sImlhdCI6MTY3NzY5ODMzNH0.XqG3jrvTW3ahnehatvqi523J6S3hZf0AcDif-eU5yYo",
			},
		});
		const json =await response.json();

		console.log(json);
		setNotes(json)
	};
	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => {
			return note._id !== id;
		});
		setNotes(newNotes);
	};
	const editNote = async (id, title, description, tag) => {
		const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
			method: "POST",

			headers: {
				"Content-Type": "application/json",
				"auth-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmZmE1MDc4ZGE1YjBkY2VjZjU2MTMxIn0sImlhdCI6MTY3NzY5ODMzNH0.XqG3jrvTW3ahnehatvqi523J6S3hZf0AcDif-eU5yYo",
			},
			body: JSON.stringify(),
		});
		const json = response.json();

		for (let i = 0; i < notes.length; i++) {
			const element = notes[i];
			if (element._id === id) {
				element.title = title;
				element.description = description;
				element.tag = tag;
			}
		}
	};
	return (
		<Notecontext.Provider
			value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}
		>
			{props.children}
		</Notecontext.Provider>
	);
};

export default Notestate;
