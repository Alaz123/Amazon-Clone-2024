import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DataProvider } from "./Components/Dataprovider/Dataprovider.jsx";
import { initstate, reducer } from "./utility/rducer";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<DataProvider reducer={reducer} initialState={initstate} >
			<App/>
		</DataProvider>
	</React.StrictMode>
);
