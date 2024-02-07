import React from "react";
import Rating from "@mui/material/Rating";
import Currencyformater from "../Currencyformater/Currencyformater";
import { Link } from "react-router-dom";
import classes from "./Product.module.css";

const ProductCard = ({ product, flex, desc }) => {
	const { id, image, title, description, rating, price } = product;

	if (!rating) {
		return null;
	}

	return (
		<div
			className={`${classes.card__container} ${
				flex ? classes.product__flexed : ""
			}`}
		>
			<Link to={`/products/${id}`}>
				<img src={image} alt="" />
			</Link>
			<div>
				<h3>{title}</h3>
				{desc && <div className={classes.desc}>{description}</div>}
				<div className={classes.rating}>
					<Rating value={rating.rate} precision={0.1} />
					<small>{rating.count}</small>
				</div>
				<div>
					<Currencyformater amount={price} />
				</div>
				<button className={classes.button}>Add to Basket</button>
			</div>
		</div>
	);
};

export default ProductCard;
