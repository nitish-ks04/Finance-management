import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import "../css/history.css";
import { HistoryFilterOptions } from "../component/category";
import NavButton from "../component/nav_butt";

function History() {
    const [expenses, setExpenses] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [editMode, seteditMode] = useState(false);
    const [selectedexpenses, setselectedexpenses] = useState([]);
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

    const filteredExpenses = expenses.filter(expense =>
        expense.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const categoryTotals = HistoryFilterOptions.map(({ value, label }) => {
        const total = expenses
            .filter(exp => exp.category === value)
            .reduce((sum, exp) => sum + parseFloat(exp.amount), 0);
        return { label, total };
    });

    const handleCheckboxChange = (id) => {
        setselectedexpenses(prev =>
            prev.includes(id)
                ? prev.filter(expenseId => expenseId !== id)
                : [...prev, id]
        );
    };

    const handeldelete = async () => {
        const currentuser = JSON.parse(localStorage.getItem("currentuser"));
        if (!currentuser?.email) {
            alert("Login required");
            return navigate("/login");
        }
        try {
            await Promise.all(selectedexpenses.map(id => {
                return axios.delete(`/expenses/${id}?email=${currentuser.email}`)
            }))
            setExpenses(prev => prev.filter(exp => !selectedexpenses.includes(exp._id)))
            setselectedexpenses([])
            seteditMode(false)
        }
        catch (error) {
            alert("Failed to delete expenses: " + (error.response?.data?.error || error.message));
        }
    }

    return (
        <div className="history-container">
            <h2>Your Expense History</h2>

            {/*  Search Bar */}
            <label htmlFor="categoryFilter">Filter by category:</label>
            <select
                id="categoryFilter"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
            >
                <option value="">All</option>
                {HistoryFilterOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            <button onClick={() => seteditMode(!editMode)}>
                {editMode ? "Cancel Edit" : "Edit"}
            </button>
            {editMode && selectedexpenses.length > 0 && (
                <button onClick={handeldelete}>
                    Deleted selected
                </button>
            )}

            {filteredExpenses.length === 0 ? (
                <p>No expenses found.</p>
            ) : (
                <ul className="expense-list">
                    {filteredExpenses.map((expense, index) => (
                        <li key={index} className="expense-item">
                            {editMode && (
                                <input type="checkbox"
                                    checked={selectedexpenses.includes(expense._id)}
                                    onChange={() => handleCheckboxChange(expense._id)}
                                />
                            )}
                            <strong>Amount:</strong> ₹{expense.amount} |
                            <strong> Medium:</strong> {expense.medium} |
                            <strong> Category:</strong> {expense.category}
                        </li>
                    ))}
                </ul>
            )}
            <div className="category-summary">
                <h3>Category-wise Total Expenses</h3>
                <ul>
                    {categoryTotals.map(({ label, total }) => (
                        <li key={label}>
                            <span>{label}</span>
                            <span>₹{total}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <NavButton />
        </div>
    );
}

export default History;
