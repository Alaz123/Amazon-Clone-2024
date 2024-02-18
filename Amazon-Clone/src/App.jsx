import React, { useContext, useEffect } from "react";
import "./App.css";
import Routing from "./Routing";
import { DataContext } from "./Components/Dataprovider/Dataprovider";
import { auth } from "./utility/firebase";

const App = () => {
	const [{ user }, dispatch] = useContext(DataContext);
	console.log(user)

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
		if (authUser) {
		  console.log(authUser)
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return <Routing />;
};

export default App;