import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Login = () => {
	const navigate = useNavigate();
	const { store, actions } = useContext(Context);
	// 1. create 2 usestates, one for email one for password
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const token = sessionStorage.getItem("token");
	

	// 3. create an async function call handleclick that will include the fetch with options
	// that includes the email and password in the body to be sent to the server as a post
	const handleClick = () => {
	    actions.login(email, password).then(() => {
			navigate('/');
		})
	}

	// 2. make the <input> controlled inputs
	// make the button execute the handleclick function
	return (
		<div className="text-center mt-5">
			{token && token !== "" && token !== undefined ?
			<>
			     <h1>You are logged in</h1>
			</>
           :
			<>
			<h1>Login</h1>
			<div>
                  <input 
				  type="text" 
				  placeholder="email"
				  value={email}
				  onChange={(e) => setEmail(e.target.value)} 
				  />
			</div>
			   
			<div>
			    <input type="password" 
				placeholder="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				 />
			</div>

			
			<div>
			    <button onClick={handleClick}>Login</button>
			</div>
			
			
			</>

          }
			
		</div>
	);
};
