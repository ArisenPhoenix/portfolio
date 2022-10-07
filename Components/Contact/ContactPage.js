import css from "./ContactPage.module.css";
import Frosty from "../UI/FrostedGlassDiv/Frosty";
import MessageBox from "./MessageBox/MessageBox";
import Button from "../UI/Button/Button";
import ContactInfo from "./ContactInfo/ContactInfo";
import Heading from "../UI/Text/Heading";

const ContactPage = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div className={css.main}>
      <ContactInfo info={props.info} />
      <Frosty className={css.textBoxContainer}>
        <Heading text="Email Me" className={css.heading} />
        <MessageBox />
      </Frosty>
    </div>
  );
};

export default ContactPage;
