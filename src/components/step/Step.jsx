import React from "react";
import "./Step.scss";
import arrowStep from "../../assets/arrowStep.svg"

export const Step = () => {
  return (
    <div className="step">
      <div className="steps first">
        <h3>STEP 1</h3>
        <span>YOUR CART</span>
      </div>
      <div className="arrow">
        <img src={arrowStep} alt="" />
      </div>
      <div className="steps second">
        <h3>STEP 2</h3>
        <span>YOUR INFO</span>
      </div>
      <div className="arrow">
        <img src={arrowStep} alt="" />
      </div>
      <div className="steps third">
        <h3>STEP 3</h3>
        <span>SHIPPING</span>
      </div>
      <div className="arrow">
        <img src={arrowStep} alt="" />
      </div>
      <div className="steps fourth">
        <h3>STEP 4</h3>
        <span>PAYMENT</span>
      </div>
      <div className="arrow">
        <img src={arrowStep} alt="" />
      </div>
      <div className="steps fifth">
        <h3>STEP 5</h3>
        <span>CONFIRMATION</span>
      </div>
    </div>
  );
};
