import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Navbarcomp from "./Components/Header/Navbar";
import { Outlet } from "react-router-dom";

function App() {

	return (
		<>
			<Navbarcomp />
			<Outlet />
		</>
	);
}

export default App;
