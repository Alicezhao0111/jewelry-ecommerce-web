import React, { useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

const { VITE_APP_HOST } = import.meta.env;

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const toggleForm = (showSignInForm) => {
    setIsSignInForm(showSignInForm);
  };

  const formData = {
    email,
    firstName,
    password,
    birthDate,
  };

  const navigate = useNavigate();

  async function handleSign() {
    if (!email || !firstName || !password || !birthDate) {
      swal({
        icon: "error",
        title: "Oops...",
        text: "請完整輸入您的資料",
      });
      return;
    }

    try {
      const res = await axios.post(`${VITE_APP_HOST}/users/sign_up`, formData);
      swal("註冊成功", "Login right now to get things done!", "success");
      console.log("回應", res);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login">
      <div className="signContainer">
        <div className="info">
          {isSignInForm ? (
            <div className="infoTitle active">
              <h2>Login</h2>
            </div>
          ) : (
            <div className="infoTitle">
              <h2>Join Boho Family</h2>
              <span>Sign Up Today and Receive a $100 Voucher Instantly!</span>
            </div>
          )}
          <div className="option">
            <div className="account">
              <span onClick={() => toggleForm(false)}>Create an account</span>
            </div>
            <div className="signIn">
              <span onClick={() => toggleForm(true)}>Sign in</span>
            </div>
          </div>
          {isSignInForm ? (
            <div className="formTable">
              <form name="accountForm" id="accountForm" action="" method="post">
                <div className="formGrid">
                  <div className="formField">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="formField">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>
                <div className="formBtn">
                  <button type="button" onClick={handleSign}>
                    <h3>SIGN IN</h3>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="formTable">
              <form name="accountForm" id="accountForm" action="" method="post">
                <div className="formGrid">
                  <div className="formField">
                    <label htmlFor="firstName">First name</label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="formField">
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" name="lastName" id="lastName" />
                  </div>
                  <div className="formField">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="formField">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="formField">
                    <label htmlFor="birthDate">Birthdate</label>
                    <input
                      type="date"
                      name="birthDate"
                      id="birthDate"
                      onChange={(e) => {
                        setBirthDate(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="formCheck">
                    <input
                      type="checkbox"
                      value="subscribe"
                      name="newsletter"
                      id="newsletter"
                    />
                    <label htmlFor="newsletter">
                      Sign up for our newsletter to get surprise discount
                      coupons!
                    </label>
                  </div>
                  <div className="formCheck privacy">
                    <input
                      type="checkbox"
                      value="agree"
                      name="terms"
                      id="terms"
                      required
                    />
                    <label htmlFor="terms">
                      I agree to the terms and conditions and the privacy policy
                    </label>
                  </div>
                </div>
                <div className="formBtn">
                  <button type="button" onClick={handleSign}>
                    <h3>JOIN</h3>
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
