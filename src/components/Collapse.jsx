import React, { useState } from "react";
import ChevronDown from "../assets/Chevron_Down.svg";
import ChevronUp from "../assets/Chevron_Up.svg";

const Collapse = ({ content }) => {
    const [showReply, setShowReply] = useState(false);
    const { title, reply, equipments } = content;
    return (
        <div className="accordeon">
            <header className="accordeon-header">
                <h3>{title}</h3>
                <button
                    className="btn-chevron"
                    // Toggle si vrai devient faux si faux devient vrai
                    onClick={() => setShowReply(!showReply)}
                    // Si montrer texte alors ChevronUp
                >
                    {/* si showReply est a true */}
                    <img
                        src={showReply ? ChevronUp : ChevronDown}
                        alt="close/open"
                        className="chevron"
                    />
                </button>
            </header>
            {showReply && reply && (
                <div className="about-content">
                    <p>{reply}</p>
                </div>
            )}
            {showReply && equipments && (
                <div className="about-content">
                    {equipments.map((equipment, index) => {
                        return <span key={index}>{equipment}</span>;
                    })}
                </div>
            )}
        </div>
    );
};

export default Collapse;
