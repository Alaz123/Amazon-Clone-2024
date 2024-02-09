import React, { useEffect, useState } from "react";
import classes from "./ProductDetail.module.css";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import { baseurl } from "../../API/endPoint";
import ProductCard from "../../Components/Product/Productcard";
import axios from "axios";
import Loding from "../../Components/Loding/Loding";

const ProductDetail = () => {
	const { productId } = useParams();
	console.log(productId);
	const [individualproduct, Setindividualproduct] = useState({});
	const [isloding, Setisloding] = useState(false);
	useEffect(() => {
		Setisloding(true);
		const fetchIndividualproduct = async () => {
			try {
				const response = await axios.get(`${baseurl}/products/${productId}`);

				Setindividualproduct(response.data);
				Setisloding(false);
				console.log(individualproduct);
			} catch (error) {
				console.log(error);
				Setisloding(false);
			}
		};
		fetchIndividualproduct();
	}, []);
	return (
		<Layout
			childrencomponents={
				<>
					{isloding ? (
						<Loding />
					) : (
						<ProductCard product={individualproduct} flex={true} desc={true} />
					)}
				</>
			}
		/>
	);
};

export default ProductDetail;

// IT
