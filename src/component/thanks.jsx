import SuccessIcon from "../assets/img/icon-success.svg?url";
import "../App.css";

function ThankSub(props) {
  return (
    <div className="thank-card">
      <img src={SuccessIcon} alt="" />
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to{" "}
        <span className="propEmail">{props.email}</span>. Please open it and
        click the button inside to confirm your subscription.
      </p>
      <button onClick={props.onDismiss}>Dismiss message</button>
    </div>
  );
}

export default ThankSub;
