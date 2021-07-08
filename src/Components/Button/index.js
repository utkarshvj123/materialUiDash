import React from "react";

const Button = ({ btnName, isDisabled, btnHandler, btnClass }) => {
  return (
    <button
      classNam={`btn-class ${btnClass}`}
      onClick={btnHandler}
      disabled={isDisabled}
    >
      {btnName}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  btnClass: "",
  btnHandler: () => {},
  btnName: "Default",
  isDisabled: false,
};
