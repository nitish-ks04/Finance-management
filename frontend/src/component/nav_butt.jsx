import "../css/nav_butt.css"
import { useNavigate } from "react-router-dom";

function NavButton(){
    const navigate = useNavigate();
    return(
        <div className="home-register">
            <button onClick={() => navigate("/home")}>Home</button>
            <button onClick={() => navigate("/abo_us")}>Expenses </button>
            <button onClick={() => navigate("/history")}>History </button>  
        </div>
    )
}

export default NavButton;