import axios from "axios";

const axiosInstance = axios.create({
	// // local instace of firebase instance
	// baseURL: " http://127.0.0.1:5001/clone-93eda/us-central1/api",

	// deployed version of amazon server on render.com
	baseURL: "https://amazon-server-side.onrender.com/",
});

export { axiosInstance };
