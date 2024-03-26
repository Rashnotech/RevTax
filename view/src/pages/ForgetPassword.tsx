import { FunctionComponent, useCallback } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import { useNavigate } from "react-router-dom";
import "./ForgetPassword.css";

const ForgetPassword: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/verification");
  }, [navigate]);

  return (
    <div className="forget-password">
      <div className="password-01">
        <div className="revtax">
          <span>LO</span>
          <span className="go">GO</span>
        </div>
        <h1 className="forgot-password">Forgot password</h1>
        <div className="enter-your-email">
          Enter your email for the verification proccess,we will send 4 digits
          code to your email.
        </div>
        <div className="instance-parent">
          <FrameComponent1 />
          <div className="button" onClick={onButtonContainerClick}>
            <div className="send-mail">Continue</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
