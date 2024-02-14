// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// for authinication purpose
import { getAuth } from "firebase/auth";
//
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDmPcLMvTvoUZbTWMHCqXNUYvwig3_aDLk",
	authDomain: "clone-93eda.firebaseapp.com",
	projectId: "clone-93eda",
	storageBucket: "clone-93eda.appspot.com",
	messagingSenderId: "877094033677",
	appId: "1:877094033677:web:258b2b78f8b280061db844",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = app.firestore()
