import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import profilePic from "../image/profile-pic.png";
import "../css/profile.css"

function Profile() {

    useEffect(() => {
      const isuser=localStorage.getItem("userInside")
      if(!isuser){
        alert("login or register first to access");
        navigate("/");
      }
    }, [])
    


    const [username, setusername] = useState("");
    const [userphone, setuserphone] = useState("");
    const [usermail, setusermail] = useState("");

    useEffect(() => {
        const currentuser = JSON.parse(localStorage.getItem("currentuser"));
        if (currentuser?.name) {
            setusername(currentuser.name);
            setuserphone(currentuser.phone);
            setusermail(currentuser.email);
        }
    }, [])


    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem("userInside");
        localStorage.removeItem("currentuser");
        navigate("/");
    }

    return (
        <div className="profile-page">
            <div className="profile-container">
                <div className="image">
                    <img src={profilePic} alt="your profile pic" />
                    <p>Welcome Back.</p>
                </div>
                <div className="profile-info">
                    <div className="name">Username: {username}</div>
                    <div className="phone-number">Phone number: {userphone}</div>
                    <div className="mail">Email: {usermail}</div>
                </div>
            </div>
            <button onClick={handleSignOut}>Sign Out</button>
            <div className="profile-register">
                <button onClick={() => navigate("/home")}>Home</button>
                <button onClick={() => navigate("/abo_us")}>Route </button>
                <button onClick={() => navigate("/profile")}>Profile </button>
            </div>
        </div>
    );
}

export default Profile