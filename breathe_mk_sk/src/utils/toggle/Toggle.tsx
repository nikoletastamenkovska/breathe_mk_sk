import React from "react";
import style from "./Toggle.module.css";

type ToggleProps = {
  isChecked: boolean;
  handleChange: () => void;
};

export const Toggle: React.FC<ToggleProps> = ({ isChecked, handleChange }) => {
  return (
    <div className={style.toggle_container}>
      <input
        className={style.toggler}
        id="toggler"
        type="checkbox"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="toggler" className={style.toggler_label}>
        {/* {isChecked ? "Dark Mode" : "Light Mode"} */}
      </label>
    </div>
  );
};
