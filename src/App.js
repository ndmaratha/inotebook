import "./App.css";
import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
function App() {
	return (
		<>
			<Router>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/about" element={<About />}/>
				</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
