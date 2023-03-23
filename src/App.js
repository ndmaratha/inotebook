import "./App.css";
import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Alert from "./Component/Alert";
function App() {
	return (
		<>
			<Router>
			<Navbar />
			<Alert message={"This is alert"}/>
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
