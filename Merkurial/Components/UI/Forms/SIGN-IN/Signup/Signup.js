import { InputGroup } from "react-bootstrap";
import CREATE_REACT_KEY from "../../../../../Helpers/Misc/createReactKey";
import Button from "../../../Buttons/Button";
import React, { useState } from "react";
import INPUT_LABEL from "../../../Basics/INPUT_LABEL/INPUT_LABEL";

const Signup = (props) => {
  const items = props.items;
  const groups = Object.keys(items);

  return (
    <>
      <form onSubmit={props.onSubmit}>
        return (
        <>
          <INPUT_LABEL
            label={{}}
            input={{}}
            onChange={props.onChange}
            required={props.required}
          />
        </>
        );
        <Button type="submit" text="Sign Up!" />
      </form>
    </>
  );
};

export default Signup;
