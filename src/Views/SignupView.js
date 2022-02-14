import { useState } from "react";
import { useNavigate } from "react-router";

import './SignupView.css'

const SignupView = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    const navigate = useNavigate();

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    return (
        <>
        <div>
            <h2 className="MainTitle">Subscribe Here!</h2>
            <h6 className="Subtitle">In this page you will be able to sign into our server for this project!</h6>
        </div>
        <div>
            <form className="container">
                <label className="Label">Name:</label>
                <br />
                <input
                value={user.name}
                name="name"
                onChange={handleChange}
                className="Input"
                placeholder="Name"
                type="text"
                />
                <br />
                <br />
                <label>Email:</label>
                <br />
                <input 
                value={user.email}
                name="email"
                onChange={handleChange}
                className="Input"
                type="text" 
                placeholder="E-mail"
                />
                <br />
                <br />
                <label>Password:</label>
                <br />
                <input 
                value={user.password}
                name="password"
                onChange={handleChange}
                className="Input"
                type="password" 
                placeholder="Password"
                />
                <br />
                <br />
                <button className="SubmitButton">
                    SUBMIT
                </button>
            </form>
        </div>
        </>
        
    )
}

export default SignupView;