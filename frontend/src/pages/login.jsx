import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../css/login.css"

function Login() {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    useEffect(() => {
        const isuser = localStorage.getItem("userInside")
        if (isuser) {
            navigate("/home")
        }
    }, [])

    const handereg = (data) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const existinguser = users.find(users => users.name === data.text && users.password === data.pass);
        if (!existinguser) {
            alert("Invalid username or password!");
            return;
        }

        if (existinguser.password !== data.pass) {
            alert("Incorrect password!");
            return;
        }

        localStorage.setItem("userInside", true);
        localStorage.setItem("currentuser", JSON.stringify(existinguser));
        navigate("/home");
    };

    return (
        <div className="login-container">
            <div className="login-image"> </div>
            <div className="login-home">
                <form onSubmit={handleSubmit(handereg)} className="login-submit-form">
                    <h2>Login Here</h2>
                    <input type="text" placeholder="Enter your name" className="login-name-input" {...register("text")} />
                    <input type="password" placeholder="Enter your password" className={`password-input ${errors.pass ? "login-input-error" : ""}`}{...register("pass", { required: true })} />
                    {errors.pass && (<span className="login-error-message">This field is required</span>)}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );

}

export default Login