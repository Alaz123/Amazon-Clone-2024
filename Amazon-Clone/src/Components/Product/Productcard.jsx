import React from "react";
import classes from "./Product.module.css";
import Rating from "@mui/material/Rating";
import Currencyformater from "../Currencyformater/Currencyformater";
import { Link } from "react-router-dom";

const ProductCard = ({ product, eachproduct }) => {
	if (product && product.rating) {
		return (
			<div className={classes.card__container}>
				<Link to={`/products/${product.id}`}>
					<img src={product.image} alt="" />
				</Link>
				<div>
					<h3>{product.title}</h3>
					<div className={classes.rating}>
						<Rating value={product.rating.rate} precision={0.1} />
						<small>{product.rating.count}</small>
					</div>
					<div>
						<Currencyformater amount={product.price} />
					</div>
					<button className={classes.button}>Add to Basket</button>
				</div>
			</div>
		);
	}

	if (eachproduct && eachproduct.rating) {
		return (
			<div className={classes.eachcard__container}>
				<Link to={`/products/${eachproduct.id}`}>
					<img src={eachproduct.image} alt="" />
				</Link>
				<div>
					<h3>{eachproduct.title}</h3>
					<div className={classes.desc}>{eachproduct.description}</div>
					<div className={classes.rating}>
						<Rating value={eachproduct.rating.rate} precision={0.1} />
						<small>{eachproduct.rating.count}</small>
					</div>
					<div>
						<Currencyformater amount={eachproduct.price} />
					</div>
					<button className={classes.button}>Add to Basket</button>
				</div>
			</div>
		);
	}

	return null; // or render a placeholder/loading state if desired
};

export default ProductCard;
