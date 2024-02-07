import React from "react";
import Layout from "../../Components/Layout/Layout";
import Carouselslide from "../../Carousel/Carouselslide";
import Catagory from "../../Components/Catagories/Catagory";
import Product from "../../Components/Product/Product";

const Landing = () => {
	return (
		<Layout
			childrencomponents={
				<>
					<Carouselslide />
					<Catagory />
					<Product />
					
				</>
			}
		/>
	);
};

export default Landing;
