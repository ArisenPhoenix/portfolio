import TextArea from "../../UI/Text/TextArea";
import css from "./MessageBox.module.css";
import Input from "../../UI/Input/Input";
import { useState } from "react";
import Button from "../../UI/Button/Button";
import { useSelector } from "react-redux";
import ax from "axios";

const MessageBox = (props) => {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    name === "name" && setName(value);
    name === "description" && setDescription(value);
    name === "message" && setText(value);
    name === "email" && setEmail(value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      subject: description,
      message: text,
      userEmail: email,
    };
    console.log(data);

    const response = await ax
      .post("/api/send_email", data)
      .then((res) => {
        alert("Send Mail To You");
        console.log(res);
      })
      .catch((err) => console.log(err));
    console.log("REQUEST RESPONSE: ", response);
  };

  return (
    <>
      <form className="btn" onSubmit={handleClick}>
        <div className={css.inputGroup}>
          <Input
            onChange={handleChange}
            text="Name"
            className={css.sendersName}
            value={name}
            name="name"
            placeholder="Name"
            required={true}
          />
          <Input
            onChange={handleChange}
            text="Your Email"
            className={css.sendersName}
            value={email}
            name="email"
            placeholder="Your Email"
            type="email"
            required={true}
          />
          <Input
            onChange={handleChange}
            text="Description"
            className={css.sendersDescription}
            value={description}
            name="description"
            placeholder="Subject"
            required={true}
          />
        </div>

        <TextArea
          onChange={handleChange}
          className={css.frosty}
          spellCheck={false}
          value={text}
          name="message"
          required={true}
        />
        <Button text="Send" className={css.button} />
      </form>
    </>
  );
};

export default MessageBox;
