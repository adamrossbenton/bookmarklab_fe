import { useEffect, useState } from "react";

function Login(props) {
    // State for login form data
    const [newForm, setNewForm] = useState({
        username: "",
        password: "",
    })

    // handleChange for completing form
    const handleChange = event => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value })
    }
        
    return (
        <form>
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
            />
        </form>
    )
}

export default Login