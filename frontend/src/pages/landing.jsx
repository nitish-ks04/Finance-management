import { useNavigate } from "react-router-dom";
import "../css/landing.css";
import { useState } from "react";
import ObjectivesSection from "../component/landingObj"

function Landing() {
    const navigate = useNavigate();
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
                <p>This project is a full-stack personal expense management application designed to help users easily track and categorize their daily spending.Users can add expenses with details like amount, category, and payment medium, then view and filter their history by category. The system also provides a breakdown of total spending per category, empowering users to understand and manage their financial habits more effectively.</p>
                {/* <div className="landing-buttons">
                    <button onClick={() => navigate("/regis")}>Register</button>
                    <button onClick={() => navigate("/login")}>Login</button>
                </div> */}
            </div>

            {/* Section 3: Content/Paragraph Section */}
            <div className="landing-content-section">
                <ObjectivesSection />
            </div>
        </div>
    );
}

export default Landing;