import React, { useState } from "react";

export const Login = () => {
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();
	const [isLoginValid, setIsLoginValid] = useState(null);

	const handleUsername = (event) => {
		setUsername(event.target.value);
	};

	const handlePassword = (event) => {
		setPassword(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setIsLoginValid(username === "admin" && password === "admin");
	};

	return (
		<div className="m-3">
			<form action="" className="form-control p-3" style={{ width: "300px" }} onSubmit={handleSubmit}>
				<label htmlFor="username" className="form-label">
					Username
				</label>
				<input type="text" className="form-control" id="username" onChange={handleUsername} />
				<label htmlFor="password" className="form-label">
					Password
				</label>
				<input type="password" className="form-control" id="password" onChange={handlePassword} />
				<button type="submit" className="btn btn-primary mt-3 w-100 ">
					Login
				</button>
				{isLoginValid !== null && (
					<p className={isLoginValid ? "text-success" : "text-danger"}>{isLoginValid ? "Login Successful" : "Login Failed"}</p>
				)}
			</form>
		</div>
	);
};
