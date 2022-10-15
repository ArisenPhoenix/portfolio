const VERIFY_PASSWORD = (password) => {
  switch (password) {
    case process.env.ADMIN_PASSWORD:
      return true;
    case process.env.ADMIN_PASSWORD2:
      return true;
    case process.env.ADMIN_PASSWORD3:
      return true;
    default:
      return false;
  }
};

const VERIFY_EMAIL = (email) => {
  switch (email) {
    case process.env.ADMIN_EMAIL:
      return true;
    case process.env.ADMIN_EMAIL2:
      return true;
    default:
      return false;
  }
};

const VERIFY_PIN = (pin) => {
  switch (pin) {
    case process.env.ADMIN_PIN:
      return true;
    case process.env.ADMIN_PIN2:
      return true;
    default:
      return false;
  }
};

const VERIFY_FIRST_NAME = (firstName) => {
  if (
    firstName === process.env.ADMIN_FIRST_NAME ||
    firstName === process.env.ADMIN_FIRST_NAME2
  ) {
    return true;
  } else {
    return false;
  }
};

const VERIFY_LAST_NAME = (lastName) => {
  if (
    lastName === process.env.ADMIN_LAST_NAME ||
    lastName === process.env.ADMIN_LAST_NAME2
  ) {
    return true;
  } else {
    return false;
  }
};

const ADMIN_SIGN_IN = async (req, res) => {
  const method = req.method;
  if (method === "POST") {
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const pin = req.body.pin;

    const fNameIsValid = VERIFY_FIRST_NAME(firstName);
    const lNameIsValid = VERIFY_LAST_NAME(lastName);
    const emailIsValid = VERIFY_EMAIL(email);
    const passwordIsValid = VERIFY_PASSWORD(password);
    const pinIsValid = VERIFY_PIN(pin);

    const credentialsAreValid =
      emailIsValid &&
      passwordIsValid &&
      pinIsValid &&
      fNameIsValid &&
      lNameIsValid;

    if (credentialsAreValid) {
      res.status(200).send({
        status: 200,
        admin: true,
        message: "You Are Now Admin.",
        email: email,
        firstName: firstName,
        lastName: lastName,
      });
    } else {
      res.status(400).send(
        JSON.stringify({
          status: 400,
          admin: false,
          message:
            "You Did Not Provide The Necessary Credentials To Become Admin. Try Again.",
          email: emailIsValid,
          firstName: fNameIsValid,
          lastName: lNameIsValid,
          pin: pinIsValid,
        })
      );
    }
  }
};

export default ADMIN_SIGN_IN;
