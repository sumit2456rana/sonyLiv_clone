import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { usePostProvider } from "../AppContextProvider";
import SuccessFullPage from "./SuccessFullPage";
import Loader from "./Loader";
export default function SignIn() {
  const { userDetail, setUserDetail, setUserToken, setIsLogin } = usePostProvider();
  const navigate = useNavigate();
  const projectId = "ub5yjy8wj6ez";
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setformData] = useState({
    email: '',
    password: ''
  })
  const [errMsg, setErrMsg] = useState("");
  const [successFullModal, setSuccessFullModal] = useState(false);
  function handleInput(e) {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    })
  }
  function handleOnClick() {
    navigate("/");
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const url = "https://academics.newtonschool.co/api/v1/user/login";
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'projectId': projectId,
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          appType: "ott",
        })
      }

      const resp = await fetch(url, requestOptions);
      const data = await resp.json();

      // console.log(data.data);
      if (data.status === "success") {
        setSuccessFullModal(true);
        setUserDetail(data.data);
        setUserToken(data.token);
        // navigate("/");
        setErrMsg("");
        setIsLogin(true)
      }
      else if (data.status === "fail") {
        setErrMsg(data.message);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }

  }
  return (
    <div className="signin-page">
      <div className="form-container">
        <h1>
          Sign In
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <input type="email" name="email" value={formData.email} onChange={handleInput} required placeholder="Enter your registerd email" />
            <input type="password" name="password" className={errMsg ? "error-input" : ""} value={formData.password} onChange={handleInput} required placeholder="Password" />
            {errMsg && <span className="error">{errMsg}</span>}
          </div>
          <div>
            <button className="submit-btn">{isLoading ? <Loader /> : "Sign In"}</button>
          </div>
          <div className="notRegister">
            <p>New to SonyLiv ? <NavLink to="/signup">Sign up now</NavLink></p>
          </div>
        </form>
      </div>
      {successFullModal && <SuccessFullPage text={"You have successfully signed in with"} email={userDetail.email} btnText={"Continue"} subs={"NO ACTIVE SUBSCRIPTION"} handleOnClick={handleOnClick} />}
    </div>
  )
};
