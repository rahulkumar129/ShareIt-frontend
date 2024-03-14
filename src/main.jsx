import dotenv from "dotenv";
dotenv.config();

import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Components/Auth/Login.jsx";
import Signup from "./Components/Auth/Signup.jsx";
import Cards from "./Components/Card/Cards.jsx";
import Post from "./Components/user/Post.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "", element: <Cards /> },
			{ path: "login", element: <Login /> },
			{ path: "signup", element: <Signup /> },
		],
	},
	{
		path: "account",
		element: <App />,
		children: [{ path: "post", element: <Post /> }],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	// <React.StrictMode>
	<RouterProvider router={router} />
	// </React.StrictMode>
);
