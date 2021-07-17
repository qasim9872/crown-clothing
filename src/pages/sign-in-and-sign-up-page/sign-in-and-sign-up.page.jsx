import React from "react";
import { SignIn } from "../../components/sign-in/sign-in.component";
import "./sign-in-and-sign-up.scss";

export const SignInAndSignUpPage = (props) => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
    </div>
  );
};
