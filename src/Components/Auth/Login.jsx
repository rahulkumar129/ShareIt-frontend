import React, { useState } from "react";
import "./Login.css";
import axios from "axios";

async function loginRequest() {
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;
	let res = await axios.post("auth/login", { username, password });
	return res;
}

function Login() {
	let [response, setResponse] = useState("");

	return (
		<div className="form">
			<div className="container">
				<label htmlFor="username">
					<b>Username</b>
				</label>
				<input
					id="username"
					type="text"
					placeholder="Enter Username"
					name="uname"
					required
				/>

				<label htmlFor="psw">
					<b>Password</b>
				</label>
				<input
					id="password"
					type="password"
					placeholder="Enter Password"
					name="password"
					required
				/>

				<button
					id="sumbit"
					onClick={async () => {
						let res = await loginRequest();
						console.log(res);
						// setResponse(res);
						setResponse(res["data"]["message"]);
					}}
				>
					Login
				</button>
				<span>{response}</span>
			</div>
		</div>
	);
}

export default Login;
