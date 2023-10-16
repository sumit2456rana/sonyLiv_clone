import React from "react"
import 'animate.css';
import './comingSoon.css'
function ComingSoon({show}) {
    return (
        <div className={`coming-soon ${show ? 'show' : ''}`}    >
            <p>Coming Soon .... </p>
            <div className="bar"></div>
        </div>
    )
};

export default ComingSoon;
