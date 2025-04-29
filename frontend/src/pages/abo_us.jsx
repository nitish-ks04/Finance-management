import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../css/abo_us.css"
import { Myoptions } from "../component/category";
function About_us() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    // const handereg = handleSubmit()
    useEffect(() => {
        const isUser = localStorage.getItem("userInside");
        if (!isUser) {
            alert("login or register first to access");
            navigate('/');
        }
    }, [])

    const onSubmit = (data) => {
        console.log("from data:", data);
        const currentuser = JSON.parse(localStorage.getItem("currentuser"))
        const useremail=currentuser?.email;
        const allexpenses=JSON.parse(localStorage.getItem("allexpenses")) || []
        if(!allexpenses[useremail]){
            allexpenses[useremail]=[];
        }
        allexpenses.push(data);
        localStorage.setItem("allExpenses", JSON.stringify(allexpenses));
        alert("expenses saved")
    }
    return (
        <div className="about-home">
            <div className="about-im"></div>
            <form onSubmit={handleSubmit(onSubmit)} className="about-form">
                <h2>Enter the Expenses </h2>
                <input type="number" placeholder="Enter amount" className="about-text" {...register("amount", { required: true })} />
                <input type="text" placeholder="medium" className="about-medium" {...register("medium")} />
                <label htmlFor="category">Choose a category:</label>
                <select id="category" {...register("category", { required: true })}>
                    {Myoptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                {errors.amount && <span className="about-error-message">This field is required</span>}
                <button type="submit">Submit</button>
            </form>
            <div className="about-register">
                <button onClick={() => navigate("/home")}>Home</button>
                <button onClick={() => navigate("/abo_us")}>Route </button>
                <button onClick={() => navigate("/profile")}>Profile </button>
            </div>
        </div >
    );
}
export default About_us