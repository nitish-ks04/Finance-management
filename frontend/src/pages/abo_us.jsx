import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../css/abo_us.css";
import { Myoptions } from "../component/category";
import axios from "../api/axios";

function About_us() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const currentuser = JSON.parse(localStorage.getItem("currentuser"));
    try {
      await axios.post(`/${currentuser.email}/expenses`, data);
      alert("Expense saved to server");
    } catch (error) {
      alert("Failed to save expense: " + (error.response?.data?.error || error.message));
    }
  };

  return (
    <div className="about-home">
      <div className="about-im" />
      <form onSubmit={handleSubmit(onSubmit)} className="about-form">
        <h2>Enter the Expenses</h2>
        <input {...register("amount", { required: true })} placeholder="Enter amount" />
        <input {...register("medium", { required: true })} placeholder="Medium" />
        <label htmlFor="category">Choose a category:</label>
        <select id="category" {...register("category", { required: true })}>
          {Myoptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        {errors.amount && <span className="about-error-message">This field is required</span>}
        <button type="submit">Submit</button>
      </form>
      <div className="home-register">
                <button onClick={() => navigate("/home")}>Home</button>
                <button onClick={() => navigate("/abo_us")}>Route </button>
                <button onClick={() => navigate("/history")}>History </button>
            </div>
    </div>
  );
}

export default About_us;
