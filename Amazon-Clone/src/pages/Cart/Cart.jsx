import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Layout from "../../Components/Layout/Layout";
import { DataContext } from "../../Components/Dataprovider/Dataprovider";
import ProductCard from "../../Components/Product/Productcard";
import Currencyformater from "../../Components/Currencyformater/Currencyformater";
import { Link } from "react-router-dom";
import {Type} from '../../utility/action.type'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
const Cart = () => {
	const [{ basket }, dispatch] = useContext(DataContext);
	const totalprice = basket?.reduce((amount, item) => {
		return (item.price * item.amount) + amount;
	}, 0);
	console.log(basket)

	const Increment = (item) => {
		dispatch({
            type: Type.ADD_TO_BASKET,
            item,
        });
	}
	const decrement = (id) => {
		dispatch({
            type: Type.REMOVE_FROM_BASKET,
            id,
        });
	}
	return (
		<Layout
			childrencomponents={
				<>
					<section className={classes.container}>
						<div className={classes.cart__container}>
							<h2>Hello</h2>
							<h3>Your shopping basket</h3>
							<hr />
							{basket?.length === 0 ? (
								<p>Oops! No items in your cart</p>
							) : (
									
									basket?.map((item, i) => (
										<section className={classes.cart__product}>
											<ProductCard
										key={i}
										product={item}
										desc={true}
										flex={true}
										addbtn={false}
										cart={true}
									/>
											<div className={classes.btn__product}>
												<button className={classes.btn} onClick={() => { Increment(item) }}>
													<IoIosArrowUp size={20}/>
												</button>
												<span>{item.amount}</span>
												<button className={classes.btn} onClick={() => { decrement(item.id) }}>
												<IoIosArrowDown size={20}/>
												</button>
											</div>
									</section>
									
										))
									
							)}
						</div>

						{basket?.length !== 0 && (
							<div className={classes.subtotal} >
								<div>
									<p>Subtotal ({basket?.length} items)</p>
								<Currencyformater amount={totalprice} />
								</div>
								<span>
									<input type="checkbox" />
									<small>This order contains a gift</small>
								</span>
								<Link to="/payments">Continue to checkout</Link>
							</div>
						)}
					</section>
				</>
			}
		/>
	);
};

export default Cart;
