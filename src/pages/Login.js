import { useEffect, useState } from "react";

function Login(props) {
    // State for login form data
    const [newForm, setNewForm] = useState({
        username: "",
        password: "",
    })

    // handleSubmit to login user
    const handleSubmit = event => {
        event.preventDefault()
    }

    // handleChange for completing form
    const handleChange = event => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value })
    }
        
    return (
        <form onSubmit={handleSubmit}>
            <p>Username</p><input 
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
            />
                <p>Password</p><input 
                type="text"
                name="password"
                placeholder="Password"
                onChange={handleChange}
            /><br />
            <input type="submit" value="Login" />
        </form>
    )
}

export default Login