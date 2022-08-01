import React from "react";
import useFadeStyle from "../hooks/useFadeStyle";
import "./Card.scss";

const Card = ({ children }) => {
    const fadeStyle = useFadeStyle({ delay: 100, duration: 1 });

    return (
        <div className="card" style={fadeStyle}>
            {children}
        </div>
    );
};

export default Card;
