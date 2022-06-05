import React, { useState } from "react";
import "./Form.css";

function Form() {
	const [inputState, setInputState] = useState({
		email: "",
		password: "",
	});
	const [finalInfo, setFinalInfo] = useState({
		email: "",
		password: "",
	});

	const handleSubmit = (e) => {
		setFinalInfo(inputState);
		setInputState({ email: "", password: "" });
		e.preventDefault();
	};

	const handleChange = (e) => {
		const value = e.target.value;
		setInputState({
			...inputState,
			[e.target.name]: value,
		});
	};

	return (
		<div className="box">
			<form onSubmit={handleSubmit}>
				<label>
					Email:
					<input
						type="text"
						name="email"
						value={inputState.email}
						onChange={handleChange}
					/>
				</label>
				<label>
					Password:
					<input
						type="password"
						name="password"
						value={inputState.password}
						onChange={handleChange}
					/>
				</label>
				<button type="submit" style={{ width: "50%" }}>
					Log In
				</button>
			</form>
		</div>
	);
}

export default Form;
