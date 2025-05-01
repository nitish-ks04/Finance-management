import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import "../css/login.css";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    // useEffect(() => {
    //     const isuser = localStorage.getItem("userInside")
    //     if (isuser) {
    //         navigate("/home")
    //     }
    // }, [])

    const handereg = async (data) => {
        try {
            const res = await axios.post("/login", {
                email: data.mail,
                password: data.pass,
            });
            localStorage.setItem("userInside", true);
            localStorage.setItem("currentuser", JSON.stringify(res.data.user));
            navigate("/home");
        } catch (error) {
            alert("Login failed: " + (error.response?.data?.error || error.message));
        }
    };

    return (
        <div className="login-container">
            <div className="login-image" />
            <div className="login-home">
                <form onSubmit={handleSubmit(handereg)} className="login-submit-form">
                    <h2>Login Here</h2>
                    <input {...register("mail", { required: true })} placeholder="Enter your email" />
                    <input type="password" {...register("pass", { required: true })} placeholder="Enter your password" className={errors.pass ? "login-input-error" : ""} />
                    {errors.pass && <span className="login-error-message">This field is required</span>}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
