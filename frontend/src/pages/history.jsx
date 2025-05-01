import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import "../css/history.css";

function History() {
    const [expenses, setExpenses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchExpenses = async () => {
            const currentuser = JSON.parse(localStorage.getItem("currentuser"));
            if (!currentuser?.email) {
                alert("Login required");
                return navigate("/login");
            }

            try {
                const res = await axios.get(`/${currentuser.email}/history`);
                setExpenses(res.data.data);
            } catch (error) {
                alert("Failed to load expenses: " + (error.response?.data?.error || error.message));
            }
        };

        fetchExpenses();
    }, [navigate]);

    return (
        <div className="history-container">
            <h2>Your Expense History</h2>
            {expenses.length === 0 ? (
                <p>No expenses found.</p>
            ) : (
                <ul className="expense-list">
                    {expenses.map((expense, index) => (
                        <li key={index} className="expense-item">
                            <strong>Amount:</strong> ₹{expense.amount} |
                            <strong> Medium:</strong> {expense.medium} |
                            <strong> Category:</strong> {expense.category}
                        </li>
                    ))}
                </ul>
            )}
            <div className="home-register">
                <button onClick={() => navigate("/home")}>Home</button>
                <button onClick={() => navigate("/abo_us")}>Route </button>
                <button onClick={() => navigate("/history")}>History </button>
            </div>
        </div>
    );
}

export default History;
