import React from "react";
import "./Post.css";

function Post() {
	return (
		<form action="" method="">
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

export default Post;
