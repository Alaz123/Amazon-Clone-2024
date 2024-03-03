import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Auth from "./pages/Auth/Auth";
import Payment from "./pages/Payment/Payment";
import Orders from "./pages/Orders/Orders";
import Cart from "./pages/Cart/Cart";
import Results from "./pages/Results/Results";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe(
	"pk_test_51OlZF7F9OwsmDWXRafVWdSVMWUmKvUNbRVoL5h7ZSrZDjzpENymE3wSIJliOHggc18KQMVbz8mExhlnFxnkNYSnq00wp6IQxVD"
);

const Routing = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/auth" element={<Auth />} />
				<Route
					path="/payments"
					element={
						<ProtectedRoute
							msg={"You Must Log in to pay"}
							redirect={"/payments"}
						>
							<Elements stripe={stripePromise}>
								<Payment />
							</Elements>
						</ProtectedRoute>
					}
				/>
				<Route path="/category/:catagoryitem" element={<Results />} />
				<Route path="/products/:productId" element={<ProductDetail />} />
				<Route
					path="/orders"
					element={
						<ProtectedRoute
							msg={"You Must Log in to see your Orders"}
							redirect={"/orders"}
						>
						<Orders />
						</ProtectedRoute>
					}
				/>
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</Router>
	);
};

export default Routing;
