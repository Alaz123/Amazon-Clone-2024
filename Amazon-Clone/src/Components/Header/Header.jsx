import React from "react";
import classes from "./Header.module.css";
import AmazonLogo from "../../assets/amazon-logo.png";
import { BsSearch } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { BiCart } from "react-icons/bi";
import Lowerheader from "./Lowerheader";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			<header className={classes.header__container}>
				<div className={classes.logo_container}>
					{/* logo */}
					<Link to="/">
						<img src={AmazonLogo} alt="amazon logo" />
					</Link>
					{/* delivery */}
					<div className={classes.delivery}>
						<span>
							<CiLocationOn />
						</span>
						<div>
							<p>Delivered to</p>
							<span>Ethiopia</span>
						</div>
					</div>
				</div>
				<div className={classes.search}>
					<select name="" id="">
						<option value="">All</option>
						<option value="">Categories</option>
					</select>
					<input type="text" placeholder="Search for products, phones & more" />
					<BsSearch size={13} />
				</div>
				<div className={classes.order_container}>
					<a to="" className={classes.language}>
						<img
							src="https://img.freepik.com/free-vector/illustration-usa-flag_53876-18165.jpg"
							alt="country logo"
						/>
						<select name="" id="">
							<option value="">EN</option>
						</select>
					</a>
					{/* <div className={classes.infos}> */}
					<Link to="/auth">
						<p>Hello, sign in</p>
						<span>Account & Lists</span>
					</Link>
					<Link to="/orders">
						<p>Returns</p>
						<span>&amp; Orders</span>
					</Link>

					<Link to="/cart" className={classes.cart}>
						<BiCart />
						<span>0</span>
					</Link>
				</div>
				{/* </div> */}
			</header>
			<Lowerheader />
		</>
	);
};

export default Header;
