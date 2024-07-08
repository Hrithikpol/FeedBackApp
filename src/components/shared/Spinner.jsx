import React from "react";
import Spin from "../assets/spinner.gif";

const Spinner = () => {
  return (
    <img
      src={Spin}
      alt="loading..."
      style={{ width: "100px", margin: "auto", display: "block" }}
    />
  );
};

export default Spinner;
