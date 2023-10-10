import React from "react"

function BottomSection({price}) {
  return (
    <div className="bottomSection">
      <div className="promo">
        <span >Select a promo code</span>
      </div>
      <div>
        <button className="payBtn">Pay &#8377;{price}</button>
      </div>
      <div className="termsCond">
        <span className="terms">Terms and Conditions</span>
        <span className="dot" style={{color : "#fff"}}>&bull;</span>
        <span className="terms">Privacy Policy</span>
        <span className="dot" style={{color : "#fff"}}>&bull;</span>
        <span className="terms">FAQ</span>
      </div>
    </div>
  )
};

export default BottomSection;
