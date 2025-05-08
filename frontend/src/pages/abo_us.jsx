import { useForm } from "react-hook-form";
import "../css/abo_us.css";
import { Myoptions } from "../component/category";
import axios from "../api/axios";
import NavButton from "../component/nav_butt";

function About_us() {
  const { register, handleSubmit, formState: { errors } } = useForm();

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
     <NavButton/>
    </div>
  );
}

export default About_us;
