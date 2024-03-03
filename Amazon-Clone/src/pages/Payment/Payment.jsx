import React, { useContext, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import classes from "./Payment.module.css";
import { DataContext } from "../../Components/Dataprovider/Dataprovider";
import Productcard from "../../Components/Product/Productcard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import Currencyformat from "../../Components/Currencyformater/Currencyformater";
import { axiosInstance } from "../../API/axios";
import { ClipLoader, FadeLoader } from "react-spinners";
import { db } from "../../utility/firebase";
import { useNavigate } from "react-router-dom";
import { Type } from "../../utility/action.type";

const Payment = () => {
	const [{ user, basket }, dispatch] = useContext(DataContext);

	const [cardError, setCardError] = useState(null);

	const [loading, setLoading] = useState(false);

	// console.log(basket);
	const totalItem = basket?.reduce((amount, item) => {
		return item.amount + amount;
	}, 0);

	const total = basket.reduce((amount, item) => {
		return item.price * item.amount + amount;
	}, 0);

	const stripe = useStripe();
	const elemets = useElements();
	const Navigate = useNavigate();

	const handleChange = (e) => {
		// console.log(e)

		e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
	};

	const handlePayment = async (e) => {
		e.preventDefault();

		try {
			setLoading(true);

			//1. backend || function --->contact the client secret
			const response = await axiosInstance({
				method: "POST",
				url: `/payment/create?total=${total * 100}`,
			});

			// console.log(response.data);
			const clientSecret = response.data?.clientSecret;

			//2. client sede(react side confirmation)
			const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elemets.getElement(CardElement),
				},
			});

			console.log(paymentIntent);

			

			await db
			.collection("users")
			.doc(user?.uid)
			.collection("orders")
			.doc(paymentIntent?.id)
			.set({
			  basket: basket,
			  amount: paymentIntent.amount,
			  created: paymentIntent.created,
			});
	
		  // empty the basket
		  dispatch({ type: Type.EMPTY_BASKET });

			setLoading(false);

			Navigate("/orders", { state: { msg: "You Have Placed New Order" } });
		} catch (error) {
			console.log(error.message);
			setLoading(false);
		}
	};

	return (
		<Layout
			childrencomponents={
				<>
					{/*					 header */}
					<div className={classes.payment_header}>
						CheckOut ({totalItem}) items
					</div>

					<section className={classes.payment_section}>
						{/* address */}
						<div className={classes.payment_flex}>
							<h3>Delivery Address</h3>
							<div>
								<div> {user?.email}</div>
								<div>123 react laen</div>
								<div> chicago,USA</div>
							</div>
						</div>
						<hr />

						{/* products */}
						<div className={classes.payment_flex}>
							<h3>Review items and Delevery</h3>
							<div>
								{basket?.map((item) => (
									<Productcard key={item?.id} product={item} flex={true} />
								))}
							</div>
						</div>
						<hr />

						{/* card form */}
						<div className={classes.payment_flex}>
							<h3>Payment Methods</h3>
							<div className={classes.payment_card_container}>
								<div className={classes.payment_details}>
									<form onSubmit={handlePayment}>
										{/* error */}
										{cardError && (
											<small style={{ color: "red" }}>{cardError}</small>
										)}

										{/* card element */}
										<CardElement onChange={handleChange} />

										{/* price */}
										<div className={classes.payment_price}>
											<div>
												<span style={{ display: "flex", gap: "10px" }}>
													<p>Total Order | </p>{" "}
													<Currencyformat amount={total} />
												</span>
											</div>
											<button type="submit">
												{loading ? (
													<div
														style={{
															display: "flex",
															alignItems: "center",
															justifyContent: "center",
															color: "grey",
														}}
													>
														<ClipLoader color="grey" size={12} />
														<p>Please Wait...</p>
													</div>
												) : (
													"Pay Now"
												)}
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</section>
				</>
			}
		/>
	);
};

export default Payment;
