import React, { useState } from "react";

export const ColorPicker = () => {
	const [color, setColor] = useState("#000000");
	const [copyText, setCopyText] = useState(false);

	const pickColor = (event) => {
		setColor(event.target.value);
		setCopyText(false);
	};

	// Function to convert hex to RGB and calculate luminance
	const getLuminance = (hex) => {
		// Converting hex to RGB
		const r = parseInt(hex.substr(1, 2), 16) / 255;
		const g = parseInt(hex.substr(3, 2), 16) / 255;
		const b = parseInt(hex.substr(5, 2), 16) / 255;

		// Apply gamma correction (sRGB)
		const lum = [r, g, b].map((c) => {
			return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
		});

		// Calculate luminance
		return lum[0] * 0.2126 + lum[1] * 0.7152 + lum[2] * 0.0722;
	};

	// Check if color is light or dark based on luminance
	const isLightColor = getLuminance(color) > 0.5;

	let styleP = {
		backgroundColor: color,
		color: isLightColor ? "black" : "white", // Dynamic text color based on brightness
		width: "15rem",
		height: "15rem",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		fontSize: "2rem",
	};

	const copy = () => {
		navigator.clipboard.writeText(color);
		setCopyText(true);
	};

	return (
		<div className="p-3 border d-flex flex-column align-items-center">
			<p style={styleP}>{color}</p>
			<input type="color" id="color" onChange={pickColor} />
			<label htmlFor="color">Pick a Color</label>

			<button id="copy" onClick={copy} className="btn btn-primary">
				Copy
			</button>
			{copyText && <p style={{ color: "green" }}>Copied!</p>}
		</div>
	);
};
