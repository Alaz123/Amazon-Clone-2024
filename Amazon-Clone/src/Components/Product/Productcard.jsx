import React from "react";
import classes from "./Product.module.css";
import Rating from "@mui/material/Rating";
import Currencyformater from "../Currencyformater/Currencyformater";

const Productcard = ({ item }) => {
	return (
		<div className={classes.card__container}>
			<a href="">
				<img src={item.image} alt="" />
			</a>
			<div>
				<h3>{item.title}</h3>
				<div className={classes.rating}>
					{/* rating and rating counter */}
					<Rating value={item.rating.rate} precision={0.1} />
					<small>{item.rating.count}</small>
				</div>
				<div>
					<Currencyformater amount={item.price} />
				</div>
				<button className={classes.button}>Add to Basket</button>
			</div>
		</div>
	);
};

export default Productcard;
