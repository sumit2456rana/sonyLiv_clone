import React, { useState } from "react"
import ComingSoon from "../Coming Soon/ComingSoon";

function BottomSection({price}) {
  const [comingSoon , setComingSoon] = useState(false)
  function handlePay() {
    setComingSoon(true);

    setTimeout(() => {
      setComingSoon(false);
    } , 3000)
  }
  return (
    <div className="bottomSection">
      {comingSoon && <ComingSoon show={comingSoon} />}
      <div className="promo">
        <span onClick={handlePay}>Select a promo code</span>
      </div>
      <div>
        <button className="payBtn" onClick={handlePay}>Pay &#8377;{price}</button>
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
