import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./Results.module.css";
import Layout from "../../Components/Layout/Layout";
import axios from "axios";
import { baseurl } from "../../API/endPoint";
import Productcard from "../../Components/Product/Productcard";
import Loding from "../../Components/Loding/Loding";

const Results = () => {
	const { catagoryitem } = useParams();
	const [results, setResults] = useState([]);
	const [isloding, Setisloding] = useState(false);

	useEffect(() => {
		Setisloding(true);
		const fetchResults = async () => {
			try {
				const response = await axios.get(
					`${baseurl}/products/category/${catagoryitem}`
				);
				console.log(response);
				setResults(response.data);
				Setisloding(false);
				console.log(results);
			} catch (error) {
				console.error(error);
				Setisloding(false);
			}
		};
		fetchResults();
	}, []);

	return (
		<Layout
			childrencomponents={
				<section className={classes.container}>
					<h1 style={{ padding: "30px" }}>Results</h1>
					<h2 style={{ padding: "30px" }}>
						category / <b>{catagoryitem}</b>
					</h2>
					<hr />
{isloding ? (
						<Loding />
					) : (
						<div className={classes.products__container}>
							{results?.map((product) => (
								<Productcard key={product.id} product={product} />
							))}
						</div>
					)}
				</section>
			}
		/>
	);
};

export default Results;
