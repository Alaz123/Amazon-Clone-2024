import { useEffect, useState } from "react";

import classes from "./Catagories.module.css";
import { Link } from "react-router-dom";

const Categorycard = ({ item }) => {
	return (
		<Link to={`/category/${item.name}`} className={classes.category}>
			<span>
				<h2>{item.title}</h2>
			</span>
			<img src={item.imgLink} alt="" />
			<p>Shop now</p>
		</Link>
	);
};

export default Categorycard;
