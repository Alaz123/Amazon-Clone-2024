import React from "react";
import { categoryinfo } from "./catagorydata";
import Categorycard from "./Categorycard";
import classes from "./Catagories.module.css";

const Catagory = () => {
	return (
		
			<section className={classes.category_container}>
				{categoryinfo.map((info, index) => (
					<Categorycard key={index} item={info} />
				))}
			</section>
		
	);
};

export default Catagory;
