import React from "react";
import "./product-card.css";

export const ProductCard = (props) => {
	const { title, price, discount, rate, image } = props;
	const discountedPrice = discount ? price * (1 - discount / 100) : price;

	return (
		<div className="product-card">
			<div className="image-container">
				<img src={image} alt="" />
				{discount && <div className="discount-tag">{discount}% OFF</div>}
			</div>
			<div className="product-details">
				<div className="rating">
					{"★".repeat(rate)}
					{"☆".repeat(5 - rate)}
				</div>
				<h2>{title}</h2>
				{discount && <span className="old-price">${price}</span>}
				<span className="price">${discountedPrice}</span>
			</div>
		</div>
	);
};
