import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function Post() {
	const [postTitle, setPostTitle] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [caption, setCaption] = useState("");

	async function handleSubmit() {
		if (!postTitle || !imageUrl) {
			return "Please provide a post title and an image URL!!";
		}
		try {
			const res = await axios.post("/api/upload", {
				username: "rahul",
				postTitle,
				imageUrl,
				caption,
			});
			return res;
		} catch (error) {
			console.log("Error while uploding!!", error);
			return null;
		}
	}

	return (
		<div className="flex flex-col justify-center items-center mx-auto p-10 border-2 rounded-lg border-spacing-1 border-black w-1/2">
			<div className="mb-5 w-full">
				<label className="block mb-2 text-sm font-medium text-gray-900 ">
					Post Title
				</label>
				<input
					type="text"
					className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-5"
					onChange={(e) => setPostTitle(e.target.value)}
					required
				/>
			</div>
			<div className="mb-5 w-full">
				<label className="block mb-2 text-sm font-medium text-gray-900">
					Image URL
				</label>

				<input
					type="text"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					onChange={(e) => setImageUrl(e.target.value)}
					required
				/>
			</div>
			<div className="mb-5 w-full">
				<label className="block mb-2 text-sm font-medium text-gray-900">
					Caption
				</label>
				<input
					type="text"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					onChange={(e) => setCaption(e.target.value)}
					required
				/>
			</div>
			<button
				onClick={() => {
					handleSubmit();
				}}
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full p-2.5 text-center "
			>
				Submit
			</button>
		</div>
	);
}

export default Post;
