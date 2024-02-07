import React, { useEffect, useState } from "react";
import Header from "../Header/Header";

const Layout = ({ childrencomponents }) => {
	return (
		<>
			<Header />
			{childrencomponents}
		</>
	);
};

export default Layout;
