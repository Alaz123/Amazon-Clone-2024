import React from "react";
import classes from "./Catagories.module.css";



const Categorycard = ({ item }) => {
	return (
		<a
			// missing href
			className={classes.category}>
			<span>
				<h2>{item.title}</h2>
			</span>
			<img src={item.imgLink} alt="" />
			<p>Shop now</p>
		</a>
	);
};

export default Categorycard;
