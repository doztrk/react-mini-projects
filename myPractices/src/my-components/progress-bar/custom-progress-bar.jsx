import React, { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import { ButtonGroup, Container } from "react-bootstrap";
import { TfiMinus, TfiPlus } from "react-icons/tfi";

export const CustomProgressBar = () => {
	const [progress, setProgress] = useState(0);

	const handleClick = (value) => {
		if (progress + value < 0 || progress + value > 100) return;
		setProgress((prev) => prev + value);
	};
	return (
		<Container
			className="m-3"
			style={{
				width: "70%",
				height: "300px",
				border: "0.5px solid black",
				boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.19), 0px 1px 3px rgba(0, 0, 0, 0.18)",
				padding: "20px",
			}}
		>
			<div className=" mt-5">
				<ButtonGroup aria-label="Basic example" style={{ marginBottom: "20px" }}>
					<Button variant="danger" onClick={() => handleClick(-10)}>
						<TfiMinus />
					</Button>
					<Button variant="info" onClick={() => handleClick(+10)}>
						<TfiPlus />
					</Button>
				</ButtonGroup>

				<ProgressBar striped variant="warning" min={0} max={100} now={progress} style={{ width: "100%" }} />
			</div>
		</Container>
	);
};
