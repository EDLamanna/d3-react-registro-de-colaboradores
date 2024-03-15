import React from "react";

const Alert = ({ message }) => {
  let alertClass, textClass;

  if (message === "") {
    alertClass = "";
    textClass = "";
  } else if (message === "Completa todos los campos!") {
    alertClass = "errorBox";
    textClass = "errorText";
  } else {
    alertClass = "successBox";
    textClass = "successText";
  }

  return (
    <div className={alertClass}>
      <p className={textClass}>{message}</p>
    </div>
  );
};

export default Alert;
