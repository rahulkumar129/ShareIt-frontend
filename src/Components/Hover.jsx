import "./Hover.css";

function Hover(image) {
	return (
		<>
			<div
				onClick={(event) => {
					event.stopPropagation();
					let ele = document.getElementById("ele");
					ele.remove();
				}}
				className="main"
				id="ele"
			>
				<img className="image" src={image} alt="" />
			</div>
		</>
	);
}

export default Hover;
