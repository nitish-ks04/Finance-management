import React from 'react'
import "../css/LandingCard.css"

const objectives = [
    {
      title: "Track Expenses Easily",
      description: "Log daily expenses with amount, category, and medium in a streamlined interface."
    },
    {
      title: "Secure User Accounts",
      description: "Register and log in securely to ensure data privacy and personalized access."
    },
    {
      title: "Filter by Category",
      description: "View expenses filtered by category to analyze spending behavior."
    },
    {
      title: "Reliable Data Storage",
      description: "Store data using MongoDB for consistent access and long-term use."
    }
  ];
  
  function ObjectivesSection() {
    return (
      <section className="objectives-section">
        <h2>Project Objectives</h2>
        <div className="objectives-grid">
          {objectives.map((obj, index) => (
            <div className="ob" key={index}>
              <h3>{obj.title}</h3>
              <p className="description">{obj.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  

  export default ObjectivesSection;