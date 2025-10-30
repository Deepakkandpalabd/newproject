import React from "react";
import "../styles/ChatPreviewSection.css";
import { motion } from "framer-motion";
import { FaUser, FaRobot, FaImage } from "react-icons/fa";

const ChatPreviewSection = () => {
  return (
    <section className="chat-preview-section">
      {/* Heading Part */}
      <motion.div
        className="chat-preview-heading"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2>Talk about anything, anytime, anywhere</h2>
        <p>
          Speak Tutor is your on-the-go conversational partner. Practice speaking
          on any topic, no matter how niche.
        </p>
      </motion.div>

      {/* Chat Preview Card */}
      <motion.div
        className="chat-preview-card"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h4 className="card-title">Create your own</h4>

        <ul className="card-list">
          <li>
            <FaUser className="card-icon" /> Tourist
          </li>
          <li>
            <FaRobot className="card-icon" /> New friend
          </li>
          <li>
            <FaImage className="card-icon" /> Talking about the best places to grab
            dinner in San Francisco.
          </li>
        </ul>

        <button className="chat-start-btn">Start chatting</button>
      </motion.div>
    </section>
  );
};

export default ChatPreviewSection;
