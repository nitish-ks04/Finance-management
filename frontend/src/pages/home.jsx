import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/home.css"
import Firstillus from "../image/first-illus.png"
import secondillus from "../image/second-illus.png"
import Feature from "../component/featureobj";
function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
    const [feature] = useState(["keep record of the expenses", "easy to search your expenses", "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", "Animi, reprehenderit.lorem5"])

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % feature.length);
    };
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + feature.length) % feature.length);
    };
    return (
        <div className="hom">
            <div className="first-lay">
                <div className="hom-text">
                    <h2>We Help Your To,</h2>
                    Keep record of your daily expenses
                </div>
                <div className="first-illu">
                    <img src={Firstillus} alt="first illustration" />
                </div>
            </div>
            <div className="second-lay">
                <div className="second-text">
                    <h2>Start making data-driven financial decisions today.</h2>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur accusamus atque minus suscipit fugit nihil omnis adipisci nobis deleniti dicta aliquid, possimus error officiis.
                </div>
                <div className="second-illu">
                    <img src={secondillus} alt="second illustration" />
                </div>
            </div>
            <div className="third-lay">
                <h2>Feature</h2>
                <div className="third-text">
                    <button className="arrow-btn" onClick={handlePrev}>←</button>
                    {feature.map((fea, index) => (
                        <div
                            key={index}
                            className={`feat ${index === currentIndex ? "active" : ""}`}
                        >
                            {fea}
                        </div>
                    ))}
                    <button className="arrow-btn" onClick={handleNext}>→</button>
                </div>
            </div>
            <div className="home-register">
                <button onClick={() => navigate("/home")}>Home</button>
                <button onClick={() => navigate("/abo_us")}>Route </button>
                <button onClick={() => navigate("/profile")}>Profile </button>
            </div>
        </div>

    );

}

export default Home