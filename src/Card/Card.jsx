import React, { useEffect, useState } from "react";
import useOpacity from "../hooks/useOpacity";
import "./Card.scss";

const Card = ({ children }) => {
    const opacity = useOpacity(100);
    
    return (
        <div className="card" style={{ opacity }}>
            {children}
        </div>
    );
};

export default Card;
