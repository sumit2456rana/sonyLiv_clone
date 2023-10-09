import React, { useState, useRef } from "react";
import { usePostProvider } from "../AppContextProvider";
import ShowSuccessMsg from "./ShowSuccessMsg";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
function EditDetails() {
    const projectId = "ub5yjy8wj6ez";
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);
    const [currPassword, setCurrPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const { userDetail, userToken } = usePostProvider();
    const [errMsg, setErrorMsg] = useState("");
    const [showSuccessMsg , setShowSuccessMsg] = useState(false);
    const fileInputRef = useRef();
    const [profilePhoto, setProfilePhoto] = useState();
    const [isLoading , setIsLoading] = useState(false);

    function handleChange(e) {
        if (e.target.checked) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    }

    async function onFormSubmit(e) {
        e.preventDefault();
        if(isChecked){
            const url = "https://academics.newtonschool.co/api/v1/user/updateMyPassword";
            const requestOptions = {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${userToken}`,
                    'projectId' : projectId,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "name": userDetail.name,
                    "email" : userDetail.email,
                    "passwordCurrent" : currPassword,
                    "password": newPassword,
                    "appType" : "ott",
                })
            }

            try{
                setIsLoading(true);
                const resp = await fetch(url , requestOptions);
                const data = await resp.json();

                console.log(data , newPassword);
                if(data.status == "success"){
                    setErrorMsg("");
                    setShowSuccessMsg(true);
                }
                if(data.status == 'fail' && data.message == 'Your current password is wrong.'){
                    setErrorMsg("! Incorrect Password");
                }  
            }catch(err) {
                console.log(err);
            }finally {
                setIsLoading(false);
            }
            
        }
        const url = "https://academics.newtonschool.co/api/v1/user/updateProfileImage";
        const formData = new FormData();
        formData.append('profileImage', profilePhoto?.file);

        const requestOptions = {
            method: 'PATCH',
            body: formData,
            headers: {
                'Authorization': `Bearer ${userToken}`,
                'projectId': projectId,
            },
        }
        try {
            setIsLoading(true);
            const response = await fetch(url, requestOptions);
            const jsonData = await response.json();
            
            if(jsonData.status == "success") {
                setShowSuccessMsg(true);
            }else if(jsonData.status == "fail"){
                setShowSuccessMsg(false);
                alert("Something went wrong!!");
            }
        }catch (err) {
            console.log(err);
        }finally {
            setIsLoading(false);
        }
        
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = () => {
                    setProfilePhoto({ file, previewUrl: reader.result });
                };
                reader.readAsDataURL(file);
            } else {
                alert('Please select a valid image file.');
            }
        }
    };

    function handleOnCloseBtn() {
        setShowSuccessMsg(false);
        navigate("/myaccount");
    }

    return (
        <div className="editDetailsPage">
            <div className="wrapper">
                <h1 className="edit_details_heading">Edit Details</h1>

                <form className="editDetails_form" onSubmit={onFormSubmit}>
                    <div>
                        <label>Name</label>
                        <div className="input_wrapper">
                            <input type="text" value={userDetail.name} disabled />
                        </div>
                    </div>
                    <div>
                        <label>Email Address</label>
                        <div className="input_wrapper">
                            <input type="email" value={userDetail.email} disabled />
                        </div>
                    </div>
                    <div className="wantToUpPass">
                        <input id="upPass" onChange={handleChange} type="checkbox" />
                        <label for="upPass">Want to change password?</label>
                    </div>
                    {isChecked && <><div>
                        <label>Current Password</label>
                        <div className="input_wrapper_editable">
                            <input
                                type="password"
                                value={currPassword}
                                onChange={(e) => setCurrPassword(e.target.value)}
                            />
                        </div>
                        {errMsg && <span className="error">{errMsg}</span>}
                    </div>
                        <div>
                            <label>New Password</label>
                            <div className="input_wrapper_editable">
                                <input
                                    type="password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </div>
                            <span className="error">{newPassword && newPassword.length < 6 ? "Password should be between 6 and 60 characters." : ""}</span>
                        </div></>}

                    <div>
                        <label>Upload Profile Picture</label>
                        <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} />
                    </div>

                    <div className="btnContainer">
                        <button className="contBtn"  disabled={isChecked || profilePhoto ? false : true}>{isLoading ? <Loader /> : "Submit"}</button>
                    </div>
                </form>
            </div>
            <div>{showSuccessMsg && <ShowSuccessMsg text={"Profile Updated SuccessFully"} handleOnClick={handleOnCloseBtn} />}</div>
        </div>
    );
}

export default EditDetails;
