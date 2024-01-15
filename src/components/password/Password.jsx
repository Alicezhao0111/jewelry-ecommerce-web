import React, { useState } from "react";
import "./password.scss"
import { Link, useNavigate } from "react-router-dom";

function Password() {
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

  const handleSignInClick = (e) => {
    e.preventDefault();

    navigate('/user', { state: { showSignInForm: true } });
  };

  return (
    <div className="password">
      <div className="passwordContainer">
        <div className="info">
          <div className="infoTitle">
            <h2>Forgot your password?</h2>
            <span>
            Please enter your registered email to reset your password.
            </span>
          </div>
          <div className="formContainer">
            <form name="passwordForm" id="passwordForm" action="" method="post">
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
                  <div className="formBtn">
                  <button type="button">
                    <h3>RESET</h3>
                  </button>
                </div>
            </form>
            <div className="others">
                <div className="create">
                <Link to="/user">Create an account</Link>
                </div>
                <div className="sign">
                <a href="" onClick={handleSignInClick}>Sign in</a>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Password;
