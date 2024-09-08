import "./flowers.css";
import PropTypes from "prop-types";

const flowerColors = {
	Rose: "#f08080",
	Tulip: "#ffb6c1",
	Daisy: "#f5deb3",
	Lilly: "#C8AABF",
	Violet: "#8F00FF",
	Orchid: "#DA70D6",
	Hyacinth: "#5D8AA8",
	Jasmine: "#F8F8FF",
	Carnation: "#FF66B2",
	Dandelion: "#FFD700",
};

const getFlowerColor = (name) => {
	return flowerColors[name] || "#d3d3d5";
};

export const List = (props) => {
	let flowers = props.flowerArr;

	let flowerArray = flowers.map((flower, index) => (
		<div key={index} className="flower-container" style={{ backgroundColor: getFlowerColor(flower.name) }}>
			<li>
				{flower.name} <img src={flower.url} alt="" />
			</li>
		</div>
	));
	return (
		<>
			<ul>{flowerArray}</ul>
		</>
	);
};



//Type Safety
List.PropTypes = {
	flowerArr: PropTypes.array,
};