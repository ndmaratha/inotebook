import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Notestate from "./Context/notes/Notestate";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Notestate>
		<App />
	</Notestate>
);
