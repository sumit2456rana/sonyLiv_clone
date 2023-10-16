import React from "react"
import { useState } from "react";
import { NavLink , useNavigate } from "react-router-dom";
import Loader from "./Loader";
function Register() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const navigate = useNavigate();
  const projectId = "ub5yjy8wj6ez";
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [isLoading , setIsLoading] = useState(false);
  function handleInputChange(e) {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    })
  }
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!validateEmail(userData.email)) {
      setEmailError("Please enter a valid email address.");
    } else if (userData.password.length < 6 || userData.password.length > 60) {
      setPassError("Password should be between 6 and 60 characters.")
    } else if (validateEmail(userData.email) && (userData.password.length < 6 || userData.password.length > 60)) {
      setEmailError("");
      setPassError("");
    } else {
        getResponse();
    }
  }
  async function getResponse() {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'projectId': projectId,
      },
      body: JSON.stringify({
        name: userData.name,
        email: userData.email,
        password: userData.password,
        appType: "ott"
      })
    }

    try {
      setIsLoading(true);
      const resp = await fetch('https://academics.newtonschool.co/api/v1/user/signup', requestOptions)
      const data = await resp.json();
      console.log(data);
      if (data.status === "success") {
        alert("SuccessFully Signed Up !! Go and Login");
        navigate("/signin");
        setUserData({
          name: '',
          email: '',
          password: ''
        })
      } else if (data.message === "User already exists") {
        alert("User Already Exists");
        setUserData({
          name: '',
          email: '',
          password: ''
        })
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="signin-page">
      <div className="form-container" style={{ height: "auto" }}>
        <h1>
          Register
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <input
              type="text"
              name="name"
              required placeholder="Name"
              value={userData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={userData.email}
              onChange={handleInputChange}
              className={validateEmail(userData.email) ? "" : "error-input"}
            />
            {validateEmail(userData.email) ? "" : <span className="error">{emailError}</span>}
            <input
              type="password"
              name="password"
              required placeholder="Password"
              value={userData.password}
              onChange={handleInputChange}
              className={passError ? "error-input" : ""}
            />
            {passError && <span className="error">{passError}</span>}
          </div>
          <div>
            <button className="submit-btn">{isLoading ? <Loader /> : "Sign Up"}</button>
          </div>
          {/* <div style={{ textAlign: "center", marginTop: "20px" }}>
            <img className="googleImg" src="google.256x256.png" />
            <img className="googleImg" src="github.256x244.png" />
          </div> */}
          <div className="notRegister">
            <p>Already have an account? <NavLink to="/signin">Login</NavLink> </p>
          </div>
        </form>
      </div>
    </div>
  )
};

export default Register;
