import React from "react";
import botIcon from "../assets/bot-icon.png";
import "../styles/MotivationSection.css";

const MotivationSection = () => {
  return (
    <section className="motivation-wrapper">
      <div className="motivation-card floating">
        {/* Heading */}
        <h2 className="motivation-title">
          Stay motivated and <br /> reach your goals
        </h2>

        <p className="motivation-text">
          Speak Tutor keeps you motivated and accountable to achieve your goals.
          Learning a language is better with someone by your side.
        </p>

        {/* Cards Wrapper */}
        <div className="motivation-boxes">
          <div className="box red-box relative">
            {/* Bot Icon positioned at top-left of red box */}
            <img src={botIcon} alt="Bot Icon" className="bot-icon-above" />
            <span className="emoji">❤️</span>
            <p>
              You’re interested in traveling, and exploring new cultures.
            </p>
          </div>

          <div className="box blue-box">
            <span className="emoji">📘</span>
            <p>
              We’ve created unique lessons and conversations based on those
              goals.
            </p>
          </div>
        </div>

        {/* Button */}
        <button className="get-started-btn">Get Started</button>
      </div>
    </section>
  );
};

export default MotivationSection;
