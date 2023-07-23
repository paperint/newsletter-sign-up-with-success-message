import { jsx } from "@emotion/react";
import React, { useState } from "react";
import ThankSub from "./thanks";
import "../App.css";

function FormEmail(props) {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const checkEmail = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);

    if (pattern.test(enteredEmail) === false) {
      setError("Valid email required");
    } else {
      setError("");
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (pattern.test(email)) {
      props.onSubscribe(email);
      setSubmitted(true);
    } else {
      setError("Valid email required");
    }
  };

  const handleDismiss = () => {
    setSubmitted(false); // Hide the ThankSub component when Dismiss is clicked
  };

  return (
    <>
      {!submitted ? (
        <div className="emailbox">
          <form action="" onSubmit={handleSubscribe}>
            <label htmlFor="" className="labelEmail">
              Email address
              <span className="errortext"> {error} </span>
            </label>
            <input
              type="text"
              onChange={checkEmail}
              placeholder="email@company.com"
              className={`inputemail ${error ? "error-border" : ""}`}
            />
            <input
              type="submit"
              value="Subscribe to monthly newsletters"
              className="subscribe"
            />
          </form>
        </div>
      ) : (
        <ThankSub email={email} onDismiss={handleDismiss} />
      )}
    </>
  );
}

export default FormEmail;
