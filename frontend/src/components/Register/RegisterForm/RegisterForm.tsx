import { Form, Formik, FormikHelpers, FormikValues } from "formik";
import * as Yup from "yup";
import RegisterInput from "../../inputs/LoginInput/LoginInput";
import "./RegisterForm.scss";
import { useState, ChangeEvent } from "react";

const RegisterForm = () => {
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    bDay: new Date().getDate(),
    bMonth: new Date().getMonth() + 1,
    bYear: new Date().getFullYear(),
    gender: "",
  };
  const [user, setUser] = useState(initialValues);
  const handleRegisterChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleRegisterSubmit = () => {};
  const years = Array.from(new Array(108), (val, index) => user.bYear - index);
  const months = Array.from(new Array(12), (val, index) => 1 + index);
  const getDays = () => new Date(user.bYear, user.bMonth, 0).getDate();
  const days = Array.from(new Array(getDays()), (val, index) => 1 + index);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const registerValidation = Yup.object({
    first_name: Yup.string().required("Enter a valid name"),
    last_name: Yup.string().required("Enter a valid name"),
    email: Yup.string()
      .required()
      .email("Enter a valid mobile number or email address"),
    password: Yup.string().required(),
    bDay: Yup.string().required("Enter a valid day"),
    bMonth: Yup.string().required("Select a valid month"),
    bYear: Yup.string().required("Select a valid year"),
    gender: Yup.string().required("Select a gender"),
  });
  return (
    <div className="blur">
      <div className="register">
        <div className="register_header">
          <i className="exit_icon"></i>
          <span>Sign Up</span>
          <span>It's quick and easy</span>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleRegisterSubmit}
          validationSchema={registerValidation}
        >
          {(formik: any) => (
            <Form className="register_form">
              <div className="reg_line">
                <RegisterInput
                  name="first_name"
                  onChange={handleRegisterChange}
                  placeholder="First name"
                  type="text"
                />
                <RegisterInput
                  name="last_name"
                  onChange={handleRegisterChange}
                  placeholder="Last name"
                  type="text"
                />
              </div>
              <div className="reg_line">
                <RegisterInput
                  name="email"
                  onChange={handleRegisterChange}
                  placeholder="Mobile number or Email"
                  type="text"
                />
                <RegisterInput
                  name="password"
                  onChange={handleRegisterChange}
                  placeholder="Password"
                  type="password"
                />
              </div>
              <div className="reg_col">
                <div className="reg_line_header">
                  Date of birth <i className="info_icon"></i>
                </div>
                <div className="reg_grid">
                  <select
                    name="bDay"
                    id="bDay"
                    onChange={handleRegisterChange}
                    defaultValue={user.bDay}
                  >
                    {days.map((day) => (
                      <option value={day} key={day}>
                        {day.toString().length === 1 ? "0" + day : day}
                      </option>
                    ))}
                  </select>
                  <select
                    name="bMonth"
                    id="bMonth"
                    onChange={handleRegisterChange}
                    defaultValue={user.bMonth}
                  >
                    {months.map((month) => (
                      <option value={month} key={month}>
                        {/* {month.toString().length === 1 ? "0" + month : month} */}
                        {monthNames[month - 1]}
                      </option>
                    ))}
                  </select>
                  <select
                    name="bYear"
                    id="bYear"
                    defaultValue={user.bYear}
                    onChange={handleRegisterChange}
                  >
                    {years.map((year) => (
                      <option value={year} key={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="reg_col">
                <div
                  className="reg_line_header"
                  style={{ marginBottom: "-2px" }}
                >
                  Gender <i className="info_icon"></i>
                </div>
                <div className="reg_grid">
                  <div className="gender ">
                    <label htmlFor="male">Male</label>
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      onChange={handleRegisterChange}
                    />
                  </div>
                  <div className="gender">
                    <label htmlFor="female">Female</label>
                    <input
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      onChange={handleRegisterChange}
                    />
                  </div>
                  <div className="gender">
                    <label htmlFor="male">Custom</label>
                    <input
                      type="radio"
                      name="gender"
                      id="custom"
                      value="custom"
                      onChange={handleRegisterChange}
                    />
                  </div>
                </div>
                <div className="reg_infos">
                  By clicking Sign Up, you agree to our{" "}
                  <span>Terms, Privacy Policy &nbsp;</span>
                  and <span>Cookies Policy.</span> You may receive SMS
                  notifications from us and can opt out at any time.
                </div>
                <div className="reg_btn_wrapper">
                  <button className="green_btn open_signup">Sign Up</button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterForm;
