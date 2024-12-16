import { FC } from "react";
import "./RegisterInput.scss";
import { useField, ErrorMessage } from "formik";
import { useMediaQuery } from "react-responsive";
type InputProps = {
  name: string;
  placeholder: string;
  type: string;
  onChange: (e: any) => void;
  position?: string;
  value: string;
};
const RegisterInput: FC<InputProps> = ({ placeholder, position, ...props }) => {
  const [field, meta] = useField(props);
  const deskTopView = useMediaQuery({ query: "(min-width:1170px)" });
  const mobileView = useMediaQuery({ query: "(min-width:539px)" });
  const tabletView = useMediaQuery({ query: "(min-width:850px)" });
  return (
    <div className="input_wrapper register_input_wrap">
      {/* {meta.touched && meta.error && <i className="error_icon"> </i>} */}
      {meta.touched && meta.error && !position && (
        <div
          className={
            tabletView ? " desktop_input_error input_error" : "input_error"
          }
          style={{
            transform: "translateY(6px)",
            left: field.name === "last_name" && tabletView ? "107%" : "",
          }}
        >
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          {meta.touched && meta.error && (
            <div
              className={
                tabletView && field.name !== "last_name"
                  ? "desktop_error_arrow_left"
                  : tabletView && field.name === "last_name"
                  ? "error_arrow_right"
                  : "error_arrow_top"
              }
            ></div>
          )}
        </div>
      )}
      <input
        placeholder={placeholder}
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input_error_border" : ""}
        style={{
          width: `${
            mobileView &&
            (field.name === "first_name" || field.name === "last_name")
              ? "100%"
              : mobileView &&
                (field.name === "email" || field.name === "password")
              ? ""
              : "320px"
          }`,
        }}
      />
      {meta.touched && meta.error && position && (
        <div
          className={
            tabletView ? " desktop_input_error input_error" : "input_error"
          }
        >
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          {meta.touched && meta.error && (
            <div
              className={
                tabletView && field.name !== "last_name"
                  ? "desktop_error_arrow_bottom "
                  : tabletView && field.name === "last_name"
                  ? "error_arrow_right"
                  : "error_arrow_bottom"
              }
            ></div>
          )}
        </div>
      )}
      {meta.touched && meta.error && (
        <i
          className="error_icon"
          style={{ top: `${!position && !tabletView ? "61%" : "10px"}` }}
        >
          {" "}
        </i>
      )}
    </div>
  );
};

export default RegisterInput;
