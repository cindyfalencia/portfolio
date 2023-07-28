import React, {useState, useContext} from "react";
import "./ToggleSwitch.css";
import StyleContext from "../../contexts/StyleContext";

const ToggleSwitch = () => {
    const styleContext = useContext(StyleContext);
    const isChecked = styleContext.isDark;
    const [isCheckedState, setCheckedState] = useState(isChecked);
  
    return (
      <label className="switch">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            styleContext.changeTheme();
            setCheckedState(!isCheckedState);
          }}
        />
        <span className="slider round">
          <span className="emoji">{isCheckedState ? '🌜' : '☀️'}</span>
        </span>
      </label>
    );
};

export default ToggleSwitch;