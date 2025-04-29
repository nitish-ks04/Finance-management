import { useNavigate } from "react-router-dom";
import "../css/landing.css";
import LandingObj from "../component/landingObj";
import { useState } from "react";

function Landing() {
    const navigate = useNavigate();
    const [objectives, setObjectives] = useState(["To Develop a structured framework for optimizing BMTC bus routes and schedules based on real-time passenger demand and traffic conditions", "To Provide to ML model for bus demand prediction using machine learning and alert system to adapt to varying passenger volumes and traffic scenarios", "To Evaluate the proposed system under various scenarios, including peak demand, real-time traffic conditions and  performance monitoring"])

    return (
        <div className="landing">
            {/* Section 1: Photo/Background Section */}
            <div className="landing-photo-section">
                <div className="landing-background"></div>
                <h1>Your Financial Status Is Our Goal</h1>  
            </div>

            {/* Section 2: Login/Registration Section */}
            <div className="landing-auth-section">
                <h2>Get Started</h2>
                <p>Experience comfortable, reliable, and safe bus transportation services across the country.</p>
                <p>This project focuses on designing, developing, and simulating an optimized fleet management and routing system for the Bangalore Metropolitan Transport Corporation (BMTC). </p>
                <p>The primary objective is to enhance fleet utilization and improve overall operational efficiency.</p>
                <div className="landing-buttons">
                    <button onClick={() => navigate("/regis")}>Register</button>
                    <button onClick={() => navigate("/login")}>Login</button>
                </div>
            </div>

            {/* Section 3: Content/Paragraph Section */}
            <div className="landing-content-section">
                <h2>Our Objective</h2>
                <div className="ldObj">
                    {
                        objectives.map(obj => {
                            return <LandingObj content={obj} key="1" />
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Landing;