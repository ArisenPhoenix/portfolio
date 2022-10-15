import { createContext, useState } from "react";

export const AdminContext = createContext({
  admin: false,
  email: "",
  firstName: "",
  lastName: "",
  pin: "",
  validate: () => {},
  logout: () => {},
});

const AdminContextProvider = (props) => {
  const defaultState = {
    admin: false,
    email: "",
    firstName: "",
    lastName: "",
    pin: "",
  };
  const [creds, setCredentials] = useState(defaultState);

  const LOGOUT_ADMIN = () => {
    setCredentials(defaultState);
  };

  const GET_CREDENTIALS = async (credentials) => {
    const adminCredentials = await VALIDATE_ADMIN(credentials);
    setCredentials(adminCredentials);
    return adminCredentials;
  };

  const VALIDATE_ADMIN = async (credentials) => {
    const sendData = JSON.stringify(credentials);
    const response = await fetch("/api/admin-sign-in", {
      method: "POST",
      body: sendData,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const r = await response.json();
    return r;
  };

  const adminContextValue = {
    admin: creds.admin,
    email: creds.email,
    firstName: creds.firstName,
    lastName: creds.lastName,
    pin: creds.pin,
    message: creds.message,
    validate: GET_CREDENTIALS,
    logout: LOGOUT_ADMIN,
  };

  return (
    <AdminContext.Provider value={adminContextValue}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
