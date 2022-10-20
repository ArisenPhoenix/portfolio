import { useState, useContext, useEffect } from "react";
import { useSelect, useClass } from "../../Merkurial/hooks/usehooks";
import Input from "../../Components/UI/Input/Input";
import Label from "../../Components/UI/Label/Label";
import Button from "../../Components/UI/Button/Button";
import { AdminContext } from "../../Merkurial/store/Context/ADMIN_CONTEXT/admin_context";
import Heading from "../../Components/UI/Text/Heading";
import SubHeading from "../../Components/UI/Text/SubHeading";
import {
  SAVE_TO_LOCAL_STORAGE,
  RETREIVE_FROM_LOCAL_STORAGE,
} from "../../Merkurial/API_STORAGE/STORAGe/HANDLE_STORAGE";
import { useRouter } from "next/router";

const AdminLogin = () => {
  const adminCtx = useContext(AdminContext);
  const LOGIN = adminCtx.LOGIN;
  const [message, setMessage] = useState(null);
  const [wrongValuesMessage, setWrongValuesMessage] = useState(null);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");
  const admin = adminCtx.admin;

  const VALIDATE = adminCtx.validate;
  const LOGOUT = adminCtx.logout;

  const handleLogout = () => {
    LOGOUT();
  };

  useEffect(() => {
    if (!admin) {
      let retreivedAdminData = RETREIVE_FROM_LOCAL_STORAGE("admin");
      if (retreivedAdminData?.admin) {
        LOGIN(retreivedAdminData);
        // router.reload();
      }
    }
  }, [admin]);

  const { theme, styles } = useSelect("THEME");
  const { GENERAL, DIVS, BORDERS, ABSOLUTE, COLORS, DIMENSIONS } = styles;
  const {
    centerAll,
    smallSpaceBelow,
    largeYMargin,
    removeAllStyles,
    fillWhiteSpace,
  } = GENERAL;
  const { red, green, orange, orangeRed, pink, purple } = COLORS;
  const { wholeX, quarterX, halfX } = DIMENSIONS;
  const { bg, text } = theme;
  const { centerLeft, centerRight, fillRight, fillLeft, left, right } =
    ABSOLUTE;

  const testLeftDivClass = useClass([fillLeft, green]);
  const testRightDivClass = useClass([fillRight, green]);
  const testLeftButtonClass = useClass([purple]);
  const testRightButtonClass = useClass([pink]);

  const { largeRound } = BORDERS;
  const { form } = DIVS;
  const formClass = useClass([form, centerAll]);
  const inputClass = useClass([smallSpaceBelow]);
  const divClass = useClass([form, centerAll, bg, text]);

  const handleChange = (e) => {
    e.preventDefault();
    const input = e.target.name;
    const value = e.target.value;
    input === "fName" && setFName(value);
    input === "lName" && setLName(value);
    input === "email" && setEmail(value);
    input === "password" && setPassword(value);
    input === "pin" && setPin(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submittedCredentials = {
      firstName: fName,
      lastName: lName,
      email: email,
      password: password,
      pin: pin,
    };

    const validated = await VALIDATE(submittedCredentials);
    if (validated.status === 200) {
      setFName("");
      setLName("");
      setEmail("");
      setPassword("");
      setPin("");
      submittedCredentials.admin = true;
      SAVE_TO_LOCAL_STORAGE(submittedCredentials, "admin");
    } else {
      const allValues = Object.keys(validated);
      const wrongValues = allValues.map((value, index) => {
        if (validated[value] === false) {
          return value;
        }
      });
      const final = wrongValues.filter((value) => {
        return value !== undefined && value !== "admin";
      });
      setWrongValuesMessage(final.map((value) => ` ${value.toLowerCase()} `));
    }
    setMessage(validated.message);

    setTimeout(() => {
      setMessage(null);
      setWrongValuesMessage(null);
    }, 5000);
  };

  const test = false;
  const testers = test && (
    <>
      <div className={testLeftDivClass}>
        <button
          className={testLeftButtonClass}
          onClick={() => {
            console.log("Button Pressed");
          }}
        >
          Left Button
        </button>
      </div>
      <div className={testRightDivClass}>
        <button
          className={testRightButtonClass}
          onClick={() => {
            console.log("Button Pressed");
          }}
        >
          Right Button
        </button>
      </div>
    </>
  );
  const mainClass = useClass([bg, fillWhiteSpace]);

  return (
    <div className={mainClass}>
      {admin && <h1 className={`${text} ${centerAll}`}>You Are Admin!</h1>}
      <div className={divClass}>
        <Heading text={message} />
        <SubHeading
          text={
            wrongValuesMessage
              ? "The Following Inputs Need to be fixed: " + wrongValuesMessage
              : null
          }
        />
        {admin && (
          <Button
            text="Logout"
            onClick={handleLogout}
            divClass={largeYMargin}
          />
        )}
        <form className={formClass} onSubmit={handleSubmit}>
          {/* <Label text="First Name" /> */}
          <Input
            className={inputClass}
            onChange={handleChange}
            placeholder="First Name"
            value={fName}
            name="fName"
            required={true}
            type="fName"
          />

          <Label />
          <Input
            className={inputClass}
            onChange={handleChange}
            placeholder="Last Name"
            value={lName}
            name="lName"
            required={true}
            type="lName"
          />
          <Label />
          <Input
            className={inputClass}
            onChange={handleChange}
            placeholder="Email"
            value={email}
            name="email"
            required={true}
            type="email"
          />
          <Label />
          <Input
            className={inputClass}
            onChange={handleChange}
            placeholder="Password"
            value={password}
            name="password"
            required={true}
            type="password"
          />
          <Label />
          <Input
            className={inputClass}
            onChange={handleChange}
            placeholder="Pin"
            value={pin}
            name="pin"
            required={true}
            type="password"
          />
          <Button
            text="Submit"
            divClass={largeYMargin}
            buttonClass={largeRound}
          />
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
