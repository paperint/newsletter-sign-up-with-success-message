/**  @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import FormEmail from "./formemail";
import SuccessIcon from "../assets/img/icon-success.svg?url";
import RightImage from "../assets/img/illustration-sign-up-desktop.svg?url";
import RightImageMobile from "../assets/img/illustration-sign-up-mobile.svg?url";
import React, { useState } from "react";
import ThankSub from "./thanks";
import "../App.css";

function Container() {
  const successList = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];

  const [showContainer, setShowContainer] = useState(true);
  const [showThankYou, setShowThankYou] = useState(false);
  const [subscribedEmail, setSubscribedEmail] = useState("");

  const hideContainer = () => {
    setShowContainer(false);
  };

  const showThankYouMessage = (email) => {
    setSubscribedEmail(email);
    setShowThankYou(true);
    setShowContainer(false);
  };

  const handleDismiss = () => {
    setShowThankYou(false);
    setShowContainer(true); // Show the main container when the "Dismiss" button is clicked
  };

  return (
    <>
      {showContainer && (
        <div className="container">
          <div className="signupdetail">
            <div className="signupinfo">
              <h1>Stay updated!</h1>
              <p>Join 60,000+ product managers receiving monthly updates on:</p>
              <div className="checkbox">
                {successList.map((item, index) => {
                  return (
                    <div key={index} className="listSuccess">
                      <div>
                        <img src={SuccessIcon} alt="" className="icon" />
                      </div>
                      <p>{item}</p>
                    </div>
                  );
                })}
              </div>
              <FormEmail onSubscribe={showThankYouMessage} />
            </div>
          </div>
          <div className="signupimg">
            <img src={RightImage} alt="" className="rightImg" />
            <img src={RightImageMobile} alt="" className="rightImgMobile" />
          </div>
        </div>
      )}
      {showThankYou && (
        <ThankSub email={subscribedEmail} onDismiss={handleDismiss} />
      )}
    </>
  );
}

export default Container;
