import { useForm } from "react-hook-form";
import "../css/regis.css";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios"; // use the configured axios instance

function Regis() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    //  useEffect(() => {
    //         const isuser = localStorage.getItem("userInside");
    //         if (isuser) {
    //             navigate("/home")
    //         }
    //     }, [])

    const handelReg = async (data) => {
        try {
            await axios.post("/register", {
                name: data.text,
                phone: data.ph,
                email: data.mail,
                password: data.pass,
            });
            alert("Registration successful");
            navigate("/home");
        } catch (error) {
            alert("Registration failed: " + (error.response?.data?.error || error.message));
        }
    };

    return (
        <div className="home-container">
            <div className="regis-image" />
            <div className="home">
                <form onSubmit={handleSubmit(handelReg)} className="submit-form">
                    <h2>Register</h2>
                    <input {...register("text", { required: true })} placeholder="Enter your name" />
                    <input {...register("ph", { required: true })} placeholder="Enter your phone number" />
                    <input {...register("mail", { required: true })} placeholder="Enter your email" />
                    <input type="password" {...register("pass", { required: true })} placeholder="Enter your password" className={errors.pass ? "input-error" : ""} />
                    {errors.pass && <span className="error-message">This field is required</span>}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
export default Regis;