import React, { useContext, useEffect, useState } from "react";
import classes from "./Orders.module.css";
import Layout from "../../Components/Layout/Layout";

import { DataContext } from "../../Components/Dataprovider/Dataprovider";
import { db } from "../../utility/firebase";
import ProductCard from "../../Components/Product/Productcard";

const Orders = () => {
	const [{ user }, dispatch] = useContext(DataContext);
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		if (user) {
			db.collection("users")
				.doc(user?.uid)
				.collection("orders")
				.orderBy("created", "desc")
				.onSnapshot((snapshot) => {
					console.log(snapshot);
					setOrders(
						snapshot.docs.map((doc) => ({
							id: doc.id,
							data: doc.data(),
						}))
					);
				});
		} else {
			setOrders([]);
		}
	}, []);
	return (
		<Layout
			childrencomponents={
				<>
					<section className={classes.order_container}>
						<div className={classes.order_inner}>
							<h2>Your Orders</h2>

							{orders?.length == 0 && (
								<div
									style={{
										padding: "20px",
									}}
								>
									You Don't Have Orders till now
								</div>
							)}

							{/* ordered Items */}
							<div>
								{orders?.map((EachOrder, i) => {
									return (
										<div key={i}>
											<hr />
											<p>Order ID: {EachOrder?.id}</p>
											{EachOrder?.data?.basket?.map((order) => {
												return (
													<ProductCard
														product={order}
														flex={true}
														key={order?.id}
													/>
												);
											})}
										</div>
									);
								})}
							</div>
						</div>
					</section>
				</>
			}
		/>
	);
};

export default Orders;
