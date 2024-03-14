import { useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Navbarcomp() {
	useEffect(() => {
		(() => {
			axios
				.get("/auth/islogged")
				.then((res) => {
					console.log(res);
					const UserCrediantials = res.data;
					sessionStorage.setItem(
						"User Crediantials",
						JSON.stringify(UserCrediantials)
					);
				})
				.catch((error) => {
					console.log("Cannot get post data", error);
				});
		})();
	}, []);

	const UserCrediantials = sessionStorage.getItem("User Crediantials");
	return (
		<nav>
			<Link id="icon" to={"/home"}>
				ShareIt
			</Link>
			{UserCrediantials ? null : (
				<div className="buttons">
					<Link id="login" className="button" to={"/login"}>
						Login
					</Link>
					<Link id="signup" className="button" to={"/signup"}>
						Sign Up
					</Link>
				</div>
			)}
			{UserCrediantials ? (
				<div className="greet">
					Hey 👋 <b>@{JSON.parse(UserCrediantials)["username"]}</b>
					<div className="dropdown-content">
						<Link to={"#"}>Profile</Link>
						<Link to={"account/post"}>Post</Link>
						<Link to={"#"}>Log Out</Link>
					</div>
				</div>
			) : null}
		</nav>
	);
}

export default Navbarcomp;
