import { useState } from "react";
import like from "../../assets/like.svg";
import comment from "../../assets/comment.svg";
import share from "../../assets/share.svg";

function Card({ image, user, caption }) {
	let [hover, setHover] = useState(false);

	return (
		<div className=" bg-white rounded-lg border-2 border-black flex flex-col items-center my-4 mx-auto w-full max-w-md z-0">
			<div className="font-bold text-lg pt-2 pl-2 self-start ml-5">
				@
				<a href="#" className="text-black hover:underline">
					{user}
				</a>
			</div>
			<div
				style={{
					position: "relative",
					width: "90%",
					paddingTop: "56.25%",
					margin: "10px 0px",
				}}
			>
				<img
					src={image}
					alt="image"
					className="absolute top-0 left-0 w-full h-full object-cover rounded-xl cursor-pointer"
				/>
			</div>
			<p className="px-4 py-2 pt-0 pl-7 text-base text-black overflow-hidden self-start">
				{caption}
			</p>
			<div className="flex gap-4 self-start justify-end mx-4 py-2 pl-3">
				<div className="hover:opacity-60">
					<img src={like} alt="" className="h-6 " />
				</div>
				<div className="hover:opacity-60">
					<img src={comment} alt="" className="h-6" />
				</div>
				<div className="hover:opacity-60">
					<img src={share} alt="" className="h-6" />
				</div>
			</div>
		</div>
	);
}

export default Card;
