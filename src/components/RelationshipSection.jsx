import React from "react";
import "../styles/RelationshipSection.css";

const RelationshipSection = () => {
  return (
    <section className="relationship-section">
      <div className="relationship-content">
        <h2>Build a relationship with your tutor</h2>
        <p>
          Speak Tutor designs a personalized curriculum as unique as you are by
          getting to know you on a surprisingly deep level.
        </p>

        <div className="relationship-card">
          <div className="chat-bubble">
            <p>
              Hey Audrey, your trip to Mexico is in 6 days! I made you a vocab
              lesson for your trip!
            </p>
          </div>
          <div className="lesson-box">
            <h5>MADE FOR YOU</h5>
            <p>Phrases to go through customs and air travel</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelationshipSection;
