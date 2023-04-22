import React, { useState } from "react";
import "./styles/Form.css";

import { validateEmail } from "./utils/helpers";

function Form() {
	const [email, setEmail] = useState("");
	const [fullName, setFullName] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleInputChange = (e) => {
		const { target } = e;
		const inputType = target.name;
		const inputValue = target.value;

		if (inputType === "email") {
			setEmail(inputValue);
		} else {
			setFullName(inputValue);
		}
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (!validateEmail(email) || !fullName) {
			setErrorMessage("Email or name is not valid");

			return;
		}

		setEmail("");
		setFullName("");
	};

	return (
		<div>
			<form className="form">
				<input
					value={fullName}
					name="fullName"
					onChange={handleInputChange}
					type="text"
					placeholder="Full Name"
				/>
				<input
					value={email}
					name="email"
					onChange={handleInputChange}
					type="email"
					placeholder="Email"
				/>
				<button type="button" onClick={handleFormSubmit}>
					Submit
				</button>
			</form>
			{errorMessage && (
				<div>
					<p className="error-text">{errorMessage}</p>
				</div>
			)}
		</div>
	);
}

export default Form;
