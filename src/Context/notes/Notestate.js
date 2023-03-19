import React,{useState} from "react";
import Notecontext from "./Notecontext";
const Notestate = (props) => {
	const noteInitial=[
		{
		  "_id": "6401e70f0d2114a81bad7f77",
		  "user": "63ffa5078da5b0dcecf56131",
		  "title": " Shree Ram Jay Ram Jay Jay Ram",
		  "description": "Jay Bajrang Bali Ki Jay",
		  "tag": "Ram ka nhi to kisi Kaam ka nhi",
		  "date": "2023-03-03T12:24:47.448Z",
		  "__v": 0
		},
		{
		  "_id": "6401e7785def97529ca24654",
		  "user": "63ffa5078da5b0dcecf56131",
		  "title": "Jay Shree Mahakaal",
		  "description": "Jay Bajrang Bali Ki Jay",
		  "tag": "Ram ka nhi to kisi Kaam ka nhi",
		  "date": "2023-03-03T12:26:32.515Z",
		  "__v": 0
		},
		{
		  "_id": "6401e70f0d2114a81bad7f77",
		  "user": "63ffa5078da5b0dcecf56131",
		  "title": " Shree Ram Jay Ram Jay Jay Ram",
		  "description": "Jay Bajrang Bali Ki Jay",
		  "tag": "Ram ka nhi to kisi Kaam ka nhi",
		  "date": "2023-03-03T12:24:47.448Z",
		  "__v": 0
		},
		{
		  "_id": "6401e7785def97529ca24654",
		  "user": "63ffa5078da5b0dcecf56131",
		  "title": "Jay Shambho",
		  "description": "Jay Bajrang Bali Ki Jay",
		  "tag": "Ram ka nhi to kisi Kaam ka nhi",
		  "date": "2023-03-03T12:26:32.515Z",
		  "__v": 0
		},
		{
		  "_id": "6401e70f0d2114a81bad7f77",
		  "user": "63ffa5078da5b0dcecf56131",
		  "title": " Har Har Mahadev",
		  "description": "Jay Bajrang Bali Ki Jay",
		  "tag": "Ram ka nhi to kisi Kaam ka nhi",
		  "date": "2023-03-03T12:24:47.448Z",
		  "__v": 0
		},
		{
		  "_id": "6401e7785def97529ca24654",
		  "user": "63ffa5078da5b0dcecf56131",
		  "title": "Radhey Radhey",
		  "description": "Jay Bajrang Bali Ki Jay",
		  "tag": "Ram ka nhi to kisi Kaam ka nhi",
		  "date": "2023-03-03T12:26:32.515Z",
		  "__v": 0
		},
	];
  const [notes,setNote]=useState(noteInitial)
	return (
		<Notecontext.Provider value={{notes,setNote}}>{props.children}</Notecontext.Provider>
	);
};

export default Notestate;
