import React, { useState } from "react";
import axios from "axios";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const redirectafterlogin = async () => {
		await axios.get("/auth/islogged").then((res) => {
			const UserCredentials = res.data;
			sessionStorage.setItem(
				"User Credentials",
				JSON.stringify(UserCredentials)
			);
		});
		window.location.reload();
		window.location.replace("/home");
	};

	async function loginRequest() {
		if (!username || !password) {
			return "Please provide username and password !!";
		}
		try {
			const res = await axios.post("auth/login", {
				username,
				password,
			});
			return res;
		} catch (error) {
			console.log("Error while uploading!!", error);
			return null;
		}
	}

	return (
		<div className="flex flex-col justify-center items-center mx-auto p-10 border-2 rounded-lg border-spacing-1 border-black w-1/2">
			<div className="mb-5 w-full">
				<label className="block mb-2 text-sm font-medium text-gray-900">
					Username
				</label>
				<input
					type="text"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-3"
					onChange={(e) => setUsername(e.target.value)}
					required
				/>
			</div>
			<div className="mb-5 w-full">
				<label className="block mb-2 text-sm font-medium text-gray-900">
					Password
				</label>
				<input
					type="password"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-3"
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
			</div>
			<button
				onClick={async () => {
					const res = await loginRequest();
					if (res && res.status === 200) {
						redirectafterlogin();
					}
				}}
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full p-3 text-center"
			>
				Login
			</button>
		</div>
	);
}

export default Login;
