import React, {useState} from 'react';

const HookForm = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    //preventing the submitted values to being entered in URL
    const handleSubmit = e => {
        e.preventDefault();

        //setting values to default
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

    }

    return (
        <>
        <form className onSubmit={handleSubmit}>
            <h1>Enter Your Info:</h1>
            <div className="form-group">
                <label>First Name: </label>
                <input 
                    type="text"  className="form-control"
                    name="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Last Name: </label>
                <input 
                    type="text"  className="form-control"
                    name="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Email: </label>
                <input 
                    type="text"  className="form-control"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Password: </label>
                <input 
                    type="password"  className="form-control"
                    name="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Confirm Password: </label>
                <input 
                    type="password"  className="form-control"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <input type="submit" value="Submit Info"/>
        </form>
        <div className="col-5 mx-auto">
            <h2>Form Data:</h2>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
            
        </div>
        </>
    );

}

export default HookForm;