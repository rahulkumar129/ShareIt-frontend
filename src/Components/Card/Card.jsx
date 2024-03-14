import { useState } from "react";
import "./Card.css";
import like from "../../assets/like.svg";
import comment from "../../assets/comment.svg";
import share from "../../assets/share.svg";

function Card({ image, user, caption }) {
	let [hover, setHover] = useState(false);

	return (
		<div className="card">
			<div className="user">
				@
				<a id="user" href="#">
					{user}
				</a>
			</div>
			<img id="image" src={image} alt="image" />
			<p id="caption">{caption}</p>
			<div className="reactions">
				<div className="like reaction">
					<img src={like} alt="" />
				</div>
				<div className="comment reaction">
					<img src={comment} alt="" />
				</div>
				<div className="share reaction">
					<img src={share} alt="" />
				</div>
			</div>
		</div>
	);
}

export default Card;
