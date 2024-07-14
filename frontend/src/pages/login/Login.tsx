import "./Login.scss";

import LoginForm from "../../components/Login/LoginForm/LoginForm";
import LoginFooter from "../../components/Login/LoginFooter/LoginFooter";
import RegisterForm from "../../components/Register/RegisterForm/RegisterForm";

const Login = () => {
  return (
    <div className="login">
      <div className="login_wrapper">
        <LoginForm />
        <RegisterForm />
        <LoginFooter />
      </div>
    </div>
  );
};

export default Login;
