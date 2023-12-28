import React from 'react'
import "./Form.scss"
import { Step } from "../step/Step";

const Form = () => {
  return (
    <div className='form'>
        <Step />
        <div className="wholeArea">
            <div className="info">
                <div className="infoTitle">
                    <h2>Personal Information</h2>
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
                    <form action="" method="post">
                        <div className="formField">
                            <label htmlFor="firstName">First name</label>
                            <input type="text" name='firstName' id='firstName'/>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Form