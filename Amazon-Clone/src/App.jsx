import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";

import Carouselslide from "./Carousel/Carouselslide";
import Catagory from "./Components/Catagories/Catagory";


const App = () => {
	return (
		<>
			<Header />
			<Carouselslide />
			<Catagory/>
		</>
	);
};

export default App;
