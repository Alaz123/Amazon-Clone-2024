import React, { useState, useEffect } from "react";
import axios from "axios";
import Productcard from "./Productcard";
import classes from './Product.module.css'
import Loding from "../Loding/Loding";


const Product = () => {
	const [product, setProduct] = useState([]);
	const [isloding, Setisloding] = useState(false);

	useEffect(() => {
		Setisloding(true);
		const getProducts = async () => {
			try {
				const response = await axios.get("https://fakestoreapi.com/products");
				const data = response.data;
				console.log(data);
				setProduct(data);
				Setisloding(false);
			} catch (error) {
				console.error(error);
				Setisloding(false);
			}
		};
		getProducts();
	}, []);
	return (
		<>
			{isloding ? (
				<Loding />
			) : (
				<section className={classes.container}>
					<section className={classes.products__container}>
						{product.map((singleproduct) => {
							return (
								<Productcard addbtn={true} product={singleproduct} key={singleproduct.id} />
							);
						})}
					</section>
				</section>
			)}
		</>
	);
};

export default Product;
