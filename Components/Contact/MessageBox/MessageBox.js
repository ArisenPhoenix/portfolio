import { useState } from "react";
import { useClass, useSelect } from "../../../Mercury/hooks/usehooks";
import SEND_EMAIL from "../../../Helpers/API/SEND_EMAIL";
import { useRouter } from "next/router";
import MessageForm from "../../UI/MessageForm/MessageForm";

const MessageBox = (props) => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");

  const { theme, styles } = useSelect("THEME");
  const { bg, text } = theme;
  const { DIVS, GENERAL } = styles;
  const { stained } = DIVS;
  const { noBorder, spaceAbove } = GENERAL;

  const mainDivClasses = useClass([bg, text, stained, noBorder, spaceAbove]);

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    name === "name" && setName(value);
    name === "description" && setDescription(value);
    name === "message" && setMessage(value);
    name === "email" && setEmail(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("Sending Email...");
    const data = {
      name: name,
      subject: description,
      message: message,
      userEmail: email,
    };

    const response = await SEND_EMAIL(data);

    if (response.response) {
      setSuccess("Email Successfully Sent") &&
        setEmail("") &&
        setName("") &&
        setMessage("") &&
        setDescription("");
    }

    response.err && setSuccess("Uh-Oh A Phoenix Has Drowned!");

    setTimeout(() => {
      if (!response.err && response.response) {
        router.push("/");
      }
      setSuccess("");
    }, 3000);
  };

  const inputs = {
    inputs: [
      {
        label: { text: "Name" },
        input: {
          text: "Name",
          value: name,
          required: true,
          type: "text",
          name: "name",
        },
      },
      {
        label: { text: "Email" },
        input: {
          text: "Your Email",
          value: email,
          required: true,
          type: "email",
          name: "email",
        },
      },
      {
        label: { text: "Subject" },
        input: {
          type: "text",
          text: "Subject",
          value: description,
          name: "description",
          required: true,
          name: "description",
        },
      },
    ],
    cols: { xs: "12", md: "4", xl: "4" },

    textArea: {
      text: "Write Your Message To Me Here",
      name: "message",
      value: message,
    },
  };

  return (
    <div className={mainDivClasses}>
      <MessageForm
        inputData={inputs}
        onChange={handleChange}
        handleSubmit={handleSubmit}
        message={success}
        defaultMessage="Email Me"
      />
    </div>
  );
};

export default MessageBox;
