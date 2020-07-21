import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <div>
      <Fragment>
        <img
          src={spinner}
          alt='...'
          style={{ width: "200px", margin: "auto", display: "block" }}
        />
      </Fragment>
    </div>
  );
};

export default Spinner;
