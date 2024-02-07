import React, { useEffect, useState } from "react";
import classes from "./ProductDetail.module.css";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import { baseurl } from "../../API/endPoint";
import ProductCard from "../../Components/Product/Productcard";
import axios from "axios";

const ProductDetail = () => {
	const { productId } = useParams();
	console.log(productId);
	const [individualproduct, Setindividualproduct] = useState({});
	useEffect(() => {
		const fetchIndividualproduct = async () => {
			try {
				const response = await axios.get(`${baseurl}/products/${productId}`);

				Setindividualproduct(response.data);

				console.log(individualproduct);
			} catch (error) {
				console.log(error);
			}
		};
		fetchIndividualproduct();
	}, []);
	return (
		<Layout
			childrencomponents={
				<>
					<ProductCard eachproduct=
						{ individualproduct }
					/>
				</>
			}
		/>
	);
};

export default ProductDetail;
