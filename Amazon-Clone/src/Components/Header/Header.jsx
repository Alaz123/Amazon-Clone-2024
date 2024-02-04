import React from "react";
import classes from "./Header.module.css";
import AmazonLogo from "../../assets/amazon-logo.png";
import { BsSearch } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { BiCart } from "react-icons/bi";
import Lowerheader from "./Lowerheader";

const Header = () => {
	return (
		<>
			<header className={classes.header__container}>
				<div className={classes.logo_container}>
					{/* logo */}
					<a href="/">
						<img src={AmazonLogo} alt="amazon logo" />
					</a>
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
					<a href="" className={classes.language}>
						<img
							src="https://img.freepik.com/free-vector/illustration-usa-flag_53876-18165.jpg"
							alt="country logo"
						/>
						<select name="" id="">
							<option value="">EN</option>
						</select>
					</a>
					{/* <div className={classes.infos}> */}
					<a href="">
						<p>Hello, sign in</p>
						<span>Account & Lists</span>
					</a>
					<a href="">
						<p>Returns</p>
						<span>&amp; Orders</span>
					</a>

					<a href="" className={classes.cart}>
						<BiCart />
						<span>0</span>
					</a>
				</div>
				{/* </div> */}
			</header>
			<Lowerheader />
		</>
	);
};

export default Header;
