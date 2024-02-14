import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import Currencyformater from "../Currencyformater/Currencyformater";
import { Link } from "react-router-dom";
import classes from "./Product.module.css";
import { DataContext } from "../Dataprovider/Dataprovider";
import { Type } from "../../utility/action.type";

const ProductCard = ({ product, flex, desc, addbtn, cart }) => {
	const { id, image, title, description, rating, price } = product;

	if (!rating) {
		return null;
	}

	const [state, dispatch] = useContext(DataContext);
	console.log(state);
	const addtocart = () => {
		dispatch({
			type: Type.ADD_TO_BASKET,
			item: {
				id,
				image,
				title,
				description,
				rating,
				price,
			},
		});
	};

	return (
		<div
			className={`${classes.card__container} ${
				flex ? classes.product__flexed : ""
			} ${
				cart ? classes.product__cart : ""
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
				{addbtn && (
					<button
						className={classes.button}
						onClick={() => {
							addtocart();
						}}
					>
						Add to Basket
					</button>
				)}
			</div>
		</div>
	);
};

export default ProductCard;
