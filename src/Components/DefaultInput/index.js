import React from "react";

const DefaultInput = ({
  onChangeInput,
  valueOfInput,
  label,
  type,
  min,
  max,
  styleDetail,
}) => {
  return (
    <div className="form-group" style={styleDetail}>
      <label className="label-class w-100 text-start pb-1 fs-6 ">{label}</label>
      <input
        className="form-control"
        type={type}
        onChange={(event) => onChangeInput(event?.target.value)}
        value={valueOfInput}
        minLength={min}
        maxLength={max}
      />
    </div>
  );
};
export default DefaultInput;

DefaultInput.defaultProps = {
  onChangeInput: () => {
    console.log("In input default...");
  },
  valueOfInput: "",
  label: "default",
  type: "text",
  min: 0,
  max: 16,
  styleDetail: {},
};
