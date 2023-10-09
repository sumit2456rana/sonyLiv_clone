import React from "react"

function Interest({text}) {
  return (
    <div className="interestMain_container">
        <div className="plus_icon">
            <span>+</span>
        </div>
        <p className="nothing_interest">Nothing in your {text ? text : "interest"}</p>
    </div>
  )
};

export default Interest;
