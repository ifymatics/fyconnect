import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import LoginInput from "../../inputs/LoginInput/LoginInput";
import { ChangeEvent, useState, FC } from "react";
import "./LoginForm.scss";
type LoginProp = {
  onHandleCreateAccount: () => void;
};
const LoginForm: FC<LoginProp> = ({ onHandleCreateAccount }) => {
  const [login, setLogin] = useState({ email: "", password: "" });

  const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    console.log();
  };
  const loginValidation = Yup.object({
    email: Yup.string()
      .required()
      .email("Enter a valid mobile number or email address"),
    password: Yup.string().required(),
  });
  const createNewAccount = () => {
    onHandleCreateAccount();
  };
  return (
    <div className="login_container">
      <div className="login_upper">
        <img
          className="logo"
          src={`${process.env.PUBLIC_URL}/icons/facebook.svg`}
          alt=""
        />
        <span>
          Facebook helps you connect and share with the people in your life.
        </span>
      </div>
      <div className="login_lower">
        <div className="login_lower_wrapper">
          <Formik
            enableReinitialize
            initialValues={login}
            onSubmit={handleOnSubmit}
            validationSchema={loginValidation}
          >
            {(formik: any) => (
              <Form>
                <LoginInput
                  name="email"
                  placeholder="Email address or phone number"
                  type="text"
                  onChange={handleLoginChange}
                />
                <LoginInput
                  name="password"
                  placeholder="Password"
                  type="password"
                  onChange={handleLoginChange}
                  position="bottom"
                />

                <button type="submit" className="login blue_btn">
                  Log in
                </button>
              </Form>
            )}
          </Formik>
          <Link to="/forgotten-password" className="forgot_password">
            Forgotten Password?
          </Link>
          <div className="splitter"></div>
          <button className=" blue_btn open_signup" onClick={createNewAccount}>
            Create new account
          </button>
        </div>

        <Link to="/register_fo_business" className="sign_up_for_business">
          <b>Create a Page</b> for a celebrity, brand or business.
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
