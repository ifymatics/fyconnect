import { FC } from "react";
import "./LoginInput.scss";
import { useField, ErrorMessage } from "formik";
import { useMediaQuery } from "react-responsive";
type InputProps = {
  name: string;
  placeholder: string;
  type: string;
  onChange: (e: any) => void;
  position?: string;
};
const LoginInput: FC<InputProps> = ({ placeholder, position, ...props }) => {
  const [field, meta] = useField(props);
  const deskTopView = useMediaQuery({ query: "(min-width:850px)" });
  return (
    <div className="input_wrapper">
      {meta.touched && meta.error && <i className="error_icon"> </i>}
      {meta.touched && meta.error && !position && (
        <div
          className={
            deskTopView ? " desktop_input_error input_error" : "input_error"
          }
          style={{ transform: "translateY(6px)" }}
        >
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          {meta.touched && meta.error && (
            <div
              className={
                deskTopView ? " desktop_error_arrow_left" : "error_arrow_top"
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
      />
      {meta.touched && meta.error && position && (
        <div
          className={
            deskTopView ? " desktop_input_error input_error" : "input_error"
          }
        >
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          {meta.touched && meta.error && (
            <div
              className={
                deskTopView
                  ? "desktop_error_arrow_bottom "
                  : "error_arrow_bottom"
              }
            ></div>
          )}
        </div>
      )}
      {meta.touched && meta.error && (
        <i
          className="error_icon"
          style={{ top: `${!position && !deskTopView ? "63%" : "15px"}` }}
        >
          {" "}
        </i>
      )}
    </div>
  );
};

export default LoginInput;
