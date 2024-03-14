import { useState, useEffect } from "react";
import axios from "axios";
import "./Cards.css";
import Card from "./Card";

function Cards() {
	let [posts, setPosts] = useState([]);

	useEffect(() => {
		(() => {
			axios
				.get("/api/posts")
				.then((res) => {
					setPosts(res.data);
					// console.log(res);
				})
				.catch((error) => {
					console.log("Cannot get post data", error);
				});
		})();
	}, []);

	return (
		<div className="cards">
			{posts.map((post, index) => (
				<Card key={index} image={post.image} user={post.username} caption={post.caption}/>
			))}
		</div>
	);
}

export default Cards;
