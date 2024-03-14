import React from "react";
import "./Signup.css";

function Signup() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const redirectafterSignUp = async () => {
		await axios.get("/auth/islogged").then((res) => {
			const UserCredentials = res.data;
			sessionStorage.setItem(
				"User Credentials",
				JSON.stringify(UserCredentials)
			);
		});
		window.location.replace("/");
	};

	async function signUpRequest() {
		if (!username || !email || !password) {
			return "Please provide username, email, and password !!";
		}
		try {
			const res = await axios.post("/auth/signup", {
				username,
				email,
				password,
			});
			return res;
		} catch (error) {
			console.log("Error while signing up!!", error);
			return null;
		}
	}

	return (
		<form action="/auth/signup" method="post">
			<div className="container">
				<label htmlFor="uname">
					<b>Username</b>
				</label>
				<input
					type="text"
					placeholder="Enter Username"
					name="uname"
					required
				/>

				<label htmlFor="email">
					<b>Email</b>
				</label>
				<input
					type="email"
					placeholder="Enter Email"
					name="email"
					required
				/>
				<label htmlFor="psw">
					<b>Password</b>
				</label>
				<input
					type="password"
					placeholder="Enter Password"
					name="psw"
					required
				/>

				<button type="submit">Sign Up</button>
			</div>
		</form>
	);
}

export default Signup;
