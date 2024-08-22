import "./Login.scss";

import LoginForm from "../../components/Login/LoginForm/LoginForm";
import LoginFooter from "../../components/Login/LoginFooter/LoginFooter";
import RegisterForm from "../../components/Register/RegisterForm/RegisterForm";
import { useState } from "react";

const Login = () => {
  const [showRegisterForm, setShowRegister] = useState(false);
  const onHandleCreateAccount = () => {
    setShowRegister(true);
  };
  const cancelShowRegister = () => {
    setShowRegister(false);
  };
  return (
    <div className="login">
      <div className="login_wrapper">
        <LoginForm onHandleCreateAccount={onHandleCreateAccount} />
        {showRegisterForm && (
          <RegisterForm cancelShowRegister={cancelShowRegister} />
        )}
        <LoginFooter />
      </div>
    </div>
  );
};

export default Login;
