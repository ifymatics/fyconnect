import { ErrorMessage } from "formik";
import { ChangeEvent, FC } from "react";
import { useMediaQuery } from "react-responsive";
type DateOfBirthSelectProp = {
  handleRegisterChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  dateError: string;
  bDay: number;
  bMonth: number;
  bYear: number;
  days: number[];
  months: number[];
  years: number[];
  monthNames: string[];
};
const DateOfBirthSelect: FC<DateOfBirthSelectProp> = ({
  bDay,
  bMonth,
  bYear,
  days,
  months,
  years,
  handleRegisterChange,
  dateError,
  monthNames,
}) => {
  const view1 = useMediaQuery({
    query: "(min-width: 539px)",
  });
  const view2 = useMediaQuery({
    query: "(min-width: 850px)",
  });
  const view3 = useMediaQuery({
    query: "(min-width: 1170px)",
  });
  return (
    <div className="reg_grid">
      <select
        name="bDay"
        id="bDay"
        onChange={handleRegisterChange}
        defaultValue={bDay}
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
        defaultValue={bMonth}
      >
        {months.map((month) => (
          <option value={month} key={month}>
            {monthNames[month - 1]}
          </option>
        ))}
      </select>
      <select
        name="bYear"
        id="bYear"
        defaultValue={bYear}
        onChange={handleRegisterChange}
      >
        {years.map((year) => (
          <option value={year} key={year}>
            {year}
          </option>
        ))}
      </select>
      {/* {dateError && (
        <div
          className={!view3 ? "input_error" : "input_error desktop_input_error"}
        >
          <div
            className={!view3 ? "error_arrow_bottom" : "error_arrow_left"}
          ></div>
          {dateError}
        </div>
      )} */}
    </div>
  );
};
export default DateOfBirthSelect;
