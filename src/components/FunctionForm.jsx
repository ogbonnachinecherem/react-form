import React, { useState } from "react";

function FunctionForm() {
	const [fname, setfName] = useState("");
    const [lname, setlName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [CardReg, setCardReg] = useState([
		
        // {fname:"ogbonna",
        //  lname: "confidence",
        //  email: "confy@gmail.com",
        // password: "confy101010",
        // },
	]);
	
	const handleSubmit = (e) => {
		e.preventDefault();
		setCardReg(
			[...CardReg, {fname, lname, email, password}],
			setfName(" "),
            setlName(" "),
			setEmail(" "),
			setPassword(" ")
		);
	};
	

	return (
		<>
        <section style={{margin: "2rem"}}>
            <div className="container center">
				<h1>FUNCTION CONTACT FORM</h1>
                <form className="ui form from">
				<div className="two fields">
                     <div className="field">
                        <label>First Name:</label>
						<input
						type="text"
						name="fname"
						value={fname}
						onChange={(e) => {
						setfName(e.target.value);
						}}
						/>
                        <br/>
                        <label>Last Name:</label>
                        <input
						type="text"
						name="lname"
						value={lname}
						onChange={(e) => {
						setlName(e.target.value);
						}}
						/>
                    </div> 
                    <div className="field">
                        <label>Email:</label>
						<input
						type="email"
						name="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						/>
                    </div>
                    <div className="field">
                        <label>Password:</label>
						<input
					type="password"
					name="password"
					value={password}
					onChange={(e) => {setPassword(e.target.value);
					}}
					/>
                    </div>
					<button className="ui button blue" onClick={handleSubmit}>Submit</button>
					</div>
                </form>
            </div> 

			{CardReg.map((item, index) => {
				return (
                <div key={index}>
					<br/>
					<small>first name: {item.fname}</small><br/>
                    <small>last name: {item.lname}</small> <br/>
                    <small>email: {item.email}</small><br/>
                    <small>password: {item.password}</small><br/>
				</div>                  
				);
			})}
        </section>
		</>
	);
}

export default FunctionForm;