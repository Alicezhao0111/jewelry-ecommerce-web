import React from 'react'
import "./login.scss"

const Login = () => {
  return (
    <div className='login'>
        <div className="signContainer">
        <div className="info">
          <div className="infoTitle">
            <h2>Join Boho Family</h2>
            <span>Sign Up Today and Receive a $100 Voucher Instantly!</span>
          </div>
          <div className="option">
            <div className="account">
              <span>Create an account</span>
            </div>
            <div className="signIn">
              <span>Sign in</span>
            </div>
          </div>
          <div className="formTable">
            <form name="accountForm" id="accountForm" action="" method="post">
              <div className="formGrid">
                <div className="formField">
                  <label htmlFor="firstName">First name</label>
                  <input type="text" name="firstName" id="firstName" />
                </div>
                <div className="formField">
                  <label htmlFor="lastName">Last name</label>
                  <input type="text" name="lastName" id="lastName" />
                </div>
                <div className="formField">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" />
                </div>
                <div className="formField">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" />
                </div>
                <div className="formField">
                  <label htmlFor="birthDate">Birthdate</label>
                  <input type="date" name="birthDate" id="birthDate" />
                </div>
                <div className="formCheck">
                  <input
                    type="checkbox"
                    value="subscribe"
                    name="newsletter"
                    id="newsletter"
                  />
                  <label htmlFor="newsletter">
                    Sign up for our newsletter to get surprise discount coupons!
                  </label>
                </div>
                <div className="formCheck privacy">
                  <input
                    type="checkbox"
                    value="agree"
                    name="terms"
                    id="terms"
                  />
                  <label htmlFor="terms">
                    I agree to the terms and conditions and the privacy policy
                  </label>
                </div>
              </div>
              <div className="formBtn">
                <button type="submit">
                  <h3>JOIN</h3>
                </button>
              </div>
            </form>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Login