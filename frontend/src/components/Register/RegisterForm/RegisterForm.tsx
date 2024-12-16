import { Form, Formik, FormikHelpers, FormikValues, useField } from "formik";
import * as Yup from "yup";
import RegisterInput from "../../inputs/RegisterInput/RegisterInput";
import "./RegisterForm.scss";
import { useState, ChangeEvent, FC, FormEvent } from "react";
import { useMediaQuery } from "react-responsive";
import DateOfBirthSelect from "../DateOfBirthSelect/DateOfBirthSelect";
import { useAppDispatch } from "../../../store";
import { createUser } from "../../../store/reducerSlices/userSlice";

type RegisterFormProp = {
  cancelShowRegister: () => void;
};
const RegisterForm: FC<RegisterFormProp> = ({ cancelShowRegister }) => {
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
  const [dateError, setDateError] = useState("");
  const [genderError, setGenderError] = useState("");
  const dispatch = useAppDispatch();
  const handleRegisterChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleRegisterSubmit = () => {
    const currentDate = new Date();
    const pickedDate = new Date(user.bYear, user.bMonth - 1, user.bDay);
    const lesThan14 = new Date(1970 + 14, 0, 1);
    const notMoreThan70 = new Date(1970 + 70, 0, 1);
    // console.log(+currentDate - +pickedDate, lesThan14, notMoreThan70);
    // console.log(pickedDate, lesThan14, notMoreThan70);
    if (+currentDate - +pickedDate < +lesThan14) {
      setDateError("You must be up to 14 years to be able to join");
      return;
    } else if (+currentDate - +pickedDate > +notMoreThan70) {
      setDateError("You must be less than 70 years to be able to join");
      return;
    }
    if (user.gender === "") {
      setGenderError(
        "Please choose a gender. You can change who can see this later."
      );
      return;
    }
    const signupData = {
      email: user.email,
      password: user.password,
      first_name: user.first_name,
      last_name: user.last_name,
      gender: user.gender,

      dob: {
        birth_day: user.bDay,
        birth_month: user.bMonth,
        birth_year: user.bYear,
      },
    };
    console.log(signupData);
    dispatch(createUser(signupData));
  };
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
    first_name: Yup.string()
      .required("What's your First name?")
      .min(2, "Fisrt name must be between 2 and 16 characters.")
      .max(16, "Fisrt name must be between 2 and 16 characters.")
      .matches(/^[aA-zZ]+$/, "Numbers and special characters are not allowed."),
    last_name: Yup.string()
      .required("What's your Last name?")
      .min(2, "Last name must be between 2 and 16 characters.")
      .max(16, "Last name must be between 2 and 16 characters.")
      .matches(/^[aA-zZ]+$/, "Numbers and special characters are not allowed."),
    email: Yup.string()
      .required(
        "You'll need this when you log in and if you ever need to reset your password."
      )
      .email("Enter a valid email address."),
    password: Yup.string()
      .required(
        "Enter a combination of at least six numbers,letters and punctuation marks(such as ! and &)."
      )
      .min(6, "Password must be atleast 6 characters.")
      .max(36, "Password can't be more than 36 characters"),
  });
  const mobileView = useMediaQuery({ query: "(min-width:539px)" });
  return (
    <div className="blur">
      <div className="register">
        <div className="register_header">
          <i
            className="exit_icon"
            onClick={cancelShowRegister}
            style={{ cursor: "pointer" }}
          ></i>
          <span>Sign Up</span>
          <span>It's quick and easy</span>
        </div>
        <Formik
          enableReinitialize
          initialValues={user}
          onSubmit={handleRegisterSubmit}
          validationSchema={registerValidation}
        >
          {(formik: any) => (
            <Form className="register_form">
              <div
                className="reg_line"
                style={{
                  display: "flex",
                  flexDirection: mobileView ? "row" : "column",
                  width: "320px",
                  marginBottom: "-5px",
                }}
              >
                <RegisterInput
                  name="first_name"
                  onChange={handleRegisterChange}
                  placeholder="First name"
                  type="text"
                  value={user.first_name}
                />
                <RegisterInput
                  name="last_name"
                  onChange={handleRegisterChange}
                  placeholder="Last name"
                  type="text"
                  value={user.last_name}
                />
              </div>
              <div className="reg_line">
                <RegisterInput
                  name="email"
                  onChange={handleRegisterChange}
                  placeholder="Mobile number or Email"
                  type="text"
                  value={user.email}
                />
                <RegisterInput
                  name="password"
                  onChange={handleRegisterChange}
                  placeholder="Password"
                  type="password"
                  value={user.password}
                />
              </div>
              <div className="reg_col">
                <div className="reg_line_header">
                  Date of birth <i className="info_icon"></i>
                </div>

                <DateOfBirthSelect
                  bDay={user.bDay}
                  bMonth={user.bMonth}
                  bYear={user.bYear}
                  dateError={dateError}
                  days={days}
                  handleRegisterChange={handleRegisterChange}
                  months={months}
                  years={years}
                  monthNames={monthNames}
                />
              </div>
              {/* {dateError && <div className="input_error">{dateError}</div>} */}
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
                  <button
                    className="green_btn open_signup"
                    // onClick={handleRegisterSubmit}
                    type="submit"
                  >
                    Sign Up
                  </button>
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
