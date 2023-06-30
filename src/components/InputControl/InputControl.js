import React from "react";

function InputControl(props) {
  return (
    <div>
      {props.label && <label className="lable">{props.label}</label>}
      <br />
      <input className="form-input" type="text" {...props} />
    </div>
  );
}

export default InputControl;