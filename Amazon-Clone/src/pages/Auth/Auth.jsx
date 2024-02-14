import React, { useState, useContext } from "react";
import classes from "./auth.module.css";
import { Link } from "react-router-dom";
import { auth } from "../../utility/firebase";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/Dataprovider/Dataprovider";
import { Type } from "../../utility/action.type";

const Auth = () => {
	const [email, Setemail] = useState("");
	const [password, Setpassword] = useState("");
	const [error, Seterror] = useState("");
	const [{ user }, dispatch] = useContext(DataContext);
	console.log(user);
	// console.log(email, password);
	const authHandler = async (e) => {
		// Prevent the default form submission behavior
		e.preventDefault();

		// Log the value of the 'name' attribute of the form element
		console.log(e.target.name);

		// Check if the form name is 'signin'
		if (e.target.name === "signin") {
			// Call the 'signInWithEmailAndPassword' function to sign in the user
			try {
				const userInfo = await signInWithEmailAndPassword(
					auth,
					email,
					password
				);
				// The 'signInWithEmailAndPassword' function returns a promise that resolves to the user information
				// console.log(userInfo);
				dispatch({
					type: Type.SET_USER,
					user: userInfo.user,
				});
			} catch (err) {
				// Handle any errors that occur during sign-in
				console.log(err.message);
			}
		} else {
			// Call the 'createUserWithEmailAndPassword' function to create a new user
			try {
				const userInfo = await createUserWithEmailAndPassword(
					auth,
					email,
					password
				);
				// The 'createUserWithEmailAndPassword' function returns a promise that resolves to the user information
				// console.log(userInfo);
				dispatch({
					type: Type.SET_USER,
					user: userInfo.user,
				});
			} catch (err) {
				// Handle any errors that occur during user creation
				console.log(err.message);
			}
		}
	};
	return (
		<section className={classes.login}>
			{/* logo */}
			<Link to={"/"}>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/315px-Amazon_logo.svg.png"
					alt="amazon-logo"
				/>
			</Link>
			{/* form  */}
			<div className={classes.login__container}>
				<h1>Sign In </h1>
				<form action="">
					<div>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Your Email"
							value={email}
							onChange={(e) => {
								Setemail(e.target.value);
							}}
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							name="password"
							placeholder="Your Password"
							value={password}
							onChange={(e) => {
								Setpassword(e.target.value);
							}}
						/>
					</div>

					<button
						type="submit"
						name="signin"
						onClick={authHandler}
						className={classes.login__signinbtn}
					>
						Sign In
					</button>
					{/* agremment  */}
					<p>
						By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
						Sale. Please see our Privacy Notice, our Cookies Notice and our
						Interest-Based Ads Notice.
					</p>

					{/* create account btn */}
					<button
						type="submit"
						name="signup"
						onClick={authHandler}
						className={classes.login__registerbtn}
					>
						Create your Amazon Account
					</button>
				</form>
			</div>
		</section>
	);
};

export default Auth;
