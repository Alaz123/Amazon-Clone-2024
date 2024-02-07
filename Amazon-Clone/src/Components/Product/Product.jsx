import React, { useState, useEffect } from "react";
import axios from "axios";
import Productcard from "./Productcard";
import classes from "./Product.module.css";

const Product = () => {
	const [product, setProduct] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			try {
				const response = await axios.get("https://fakestoreapi.com/products");
				const data = response.data;
				console.log(data);
				setProduct(data);
			} catch (error) {
				console.error(error);
			}
		};
		getProducts();
	}, []);
	return (
		<section className={classes.container}>
			<section className={classes.products__container}>
				{/* <section> */}
				{product.map((singleproduct) => {
					return <Productcard product={singleproduct} key={singleproduct.id} />;
				})}
				{/* </section> */}
			</section>
		</section>
	);
};

export default Product;
