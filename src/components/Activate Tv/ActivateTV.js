import React, { useState } from "react"
import "./activateTv.css"
import { usePostProvider } from "../AppContextProvider";
import ComingSoon from "../Coming Soon/ComingSoon";
function ActivateTV() {
    const { userDetail } = usePostProvider();

    const [inputValues, setInputValues] = useState(['', '', '', '']);
    const [isFormValid, setIsFormValid] = useState(false);
    const [showComingSoon , setShowComingSoon] = useState(false);
    const handleInputChange = (index, value) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = value;

        setInputValues(newInputValues);

        if (value.length === 1 && index < inputValues.length - 1) {
            document.getElementById(`input-${index + 1}`).focus();
        }

        if (value.length === 0 && index > 0) {
            document.getElementById(`input-${index - 1}`).focus();
        }
        setIsFormValid(newInputValues.every(val => val.length > 0));

    };
    function hanldeActivateDevice() {
        console.log("object");
        setShowComingSoon(true);

        setTimeout(() => {
            setShowComingSoon(false);
        } , 3000)
    }
    return (
        <div className="myaccount-container activateTv_container">
            <div>
                <div className="heading">
                    <h2>Activate TV</h2>
                </div>
                <p className="code_label">Enter the code shown on your TV screen</p>
                <div className="activateTV_inputs">
                    {inputValues.map((value, index) => (
                        <input
                            key={index}
                            id={`input-${index}`}
                            type="text"
                            maxLength="1"
                            value={value}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                        />
                    ))}
                </div>
                <p className="curr_log">You are currently logging into account linked to</p>
                <p className="email">{userDetail.email}</p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p className="noActiveSubs noSubscription">NO ACTIVE SUBSCRIPTION</p>
                </div>

                <div className="activate_btn">
                    <button onClick={hanldeActivateDevice} disabled={!isFormValid}>Activate Device</button>
                </div>
            </div>
            {showComingSoon && <ComingSoon show={showComingSoon} />}
        </div>
    )
};

export default ActivateTV;
