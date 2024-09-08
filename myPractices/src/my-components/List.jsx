import React from "react";
import { flowers } from "./flowers.js";
import "./flowers.css";

const flowerColors = {
	Rose: "#f08080",
	Tulip: "#ffb6c1",
	Daisy: "#f5deb3",
	Lilly: "#C8AABF",
	Violet: "8F00FF",
};

const getFlowerColor = (name) => {
	return flowerColors[name] || "#d3d3d5";
};
export const List = () => {
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
