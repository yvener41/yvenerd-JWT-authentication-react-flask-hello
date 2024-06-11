import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);
	// 1. create 2 usestates, one for email one for password

	// 3. create an async function call handleclick that will include the fetch with options
	// that includes the email and password in the body to be sent to the server as a post

	// 2. make the <input> controlled inputs
	// make the button execute the handleclick function
	return (
		<div className="text-center mt-5">
			<h1>Login</h1>

			<div>
                  <input type="text" placeholder="email" />
			</div>
			   
			<div>
			    <input type="password" placeholder="password" />
			</div>

			{/* onClick={HandleClick} */}
			<div>
			    <button>Login</button>
			</div>
			
		</div>
	);
};
