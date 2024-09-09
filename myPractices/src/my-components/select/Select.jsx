import React from "react";
import { useState } from "react";
import { flowers2 } from "../../assets/flowers2.js";
import { flowers } from "../../assets/flowers.js";

export const Select = () => {
	let flowersArray = [...flowers, ...flowers2];

	const flowerNames = flowersArray.map((flower) => (
		<option key={flower.name} value={flower.url}>
			{flower.name}
		</option>
	));

	const [imgUrl, setImgUrl] = useState(flowers2[0].url);

	const getImage = (event) => {
		setImgUrl(event.target.value);
	};

	return (
		<section className="container border d-flex flex-column align-items-center">
			<select className="form-select fs-5 m-3 w-100" onChange={getImage}>
				<option>--Select a Flower --</option>
				{flowerNames}
			</select>
			<img src={imgUrl} alt="" width={300} height={300} />
		</section>
	);
};
