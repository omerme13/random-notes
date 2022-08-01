import React, { useEffect, useState } from "react";
import "./Card.scss";

const Card = ({ children }) => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setOpacity(1);
        },100)
    }, []);

    return (
        <div className="card" style={{ opacity }}>
            {children}
        </div>
    );
};

export default Card;
