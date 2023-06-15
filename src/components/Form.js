import React, { useState } from "react";
import "./form.css";
const Form = () => {
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repPassword, setRepPassword] = useState("");

	const [errUserName, setErrUserName] = useState("");
	const [errEmail, setErrEmail] = useState("");
	const [errPassword, setErrPassword] = useState("");
	const [errRepPassword, setErrRepPassword] = useState("");

	const [isUserNameTouched, setIsUserNameTouched] = useState(false);
	const [isEmailTouched, setIsEmailTouched] = useState(false);
	const [isPasswordTouched, setIsPasswordTouched] = useState(false);
	const [isRepPasswordTouched, setIsRepPasswordTouched] = useState(false);
	const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	const handleUserNameChange = (value) => {
		setUserName(value);
		if (userName.valueOf() === "" && isUserNameTouched) {
			setErrUserName("Pole nie może być puste");
		} else {
			setErrUserName("");
		}
	};
	const handleUserNameBlur = () => {
		setIsUserNameTouched(true);
		if (userName.valueOf() === "") {
			setErrUserName("Pole nie może być puste");
		} else {
			setErrUserName("");
		}
	};

	const handleEmailChange = (value) => {
		setEmail(value);
		if (!regex.test(email.valueOf()) && isEmailTouched) {
			setErrEmail("E-mail musi byc prawdziwy");
		} else {
			setErrEmail("");
		}
	};
	const handleEmailBlur = () => {
		setIsEmailTouched(true);
		if (!regex.test(email.valueOf())) {
			setErrEmail("E-mail musi byc prawdziwy");
		} else {
			setErrEmail("");
		}
	};
	const handlePasswordChange = (value) => {
		setPassword(value);
		if (password.valueOf() < 4 && isPasswordTouched) {
			setErrPassword("hasło musi mieć minimum 4 znaki");
		} else {
			setErrPassword("");
		}
	};
	const handlePasswordBlur = () => {
		setIsPasswordTouched(true);
		if (password.valueOf() < 4) {
			setErrPassword("hasło musi mieć minimum 4 znaki");
		} else {
			setErrPassword("");
		}
	};
	const handleRepPasswordChange = (value) => {
		setRepPassword(value);
		if (repPassword.valueOf() === password.valueOf() && isRepPasswordTouched) {
			setErrPassword("hasła muszą być identyczne");
		} else {
			setErrPassword("");
		}
	};
	const handleRepPasswordBlur = () => {
		setIsRepPasswordTouched(true);
		if (repPassword.valueOf() === password.valueOf()) {
			setErrRepPassword("hasła muszą być identyczne");
		} else {
			setErrRepPassword("");
		}
	};
	console.log(password);
	return (
		<div className="form-box">
			<div className="left-box"></div>
			<div className="form-container">
				<form className="form">
					<div className="input-box">
						<label className="input-title">USERNAME</label>
						<input
							className="input"
							value={userName}
							onChange={(e) => handleUserNameChange(e.target.value)}
							onBlur={handleUserNameBlur}
						/>
						{errUserName && <p className="error">{errUserName}</p>}
					</div>
					<div className="input-box">
						<label className="input-title">E-MAIL</label>
						<input
							className="input"
							value={email}
							onChange={(e) => handleEmailChange(e.target.value)}
							onBlur={handleEmailBlur}
						/>
						{errEmail && <p className="error">{errEmail}</p>}
					</div>
					<div className="input-box">
						<label className="input-title">PASSWORD</label>
						<input
							className="input"
							type="password"
							value={password}
							onChange={(e) => handlePasswordChange(e.target.value)}
							onBlur={handlePasswordBlur}
						/>
						{errPassword && <p className="error">{errPassword}</p>}
					</div>
					<div className="input-box">
						<label className="input-title">REPEAT PASSWORD</label>
						<input
							className="input"
							type="password"
							value={repPassword}
							onChange={(e) => handleRepPasswordChange(e.target.value)}
							onBlur={handleRepPasswordBlur}
						/>
						{errRepPassword && <p className="error">{errRepPassword}</p>}
					</div>
					<div className="button-box">
						<button className="btn">Get Started</button>
						<div className="text-box">
							<p>or</p>
							<p className="sing-in">Sing-in</p>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Form;
