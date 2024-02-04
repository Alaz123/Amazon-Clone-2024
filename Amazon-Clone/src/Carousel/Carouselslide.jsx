import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import images from "./data";
import classes from "./Carousel.module.css";
console.log(classes)

const Carouselslide = () => {
	return (
		<div>
			<Carousel
				autoPlay={true}
				infiniteLoop={true}
				showIndicators={false}
				showThumbs={false}
			>
				{images.map((imagelink, index) => {
					return <img key={index} src={imagelink} />;
				})}
			</Carousel>
			<div className={classes.hero__img}></div>
		</div>
	);
};

export default Carouselslide;
