import css from "./contact.module.css";
import { useSelector } from "react-redux";
import ContactPage from "../../Components/Contact/ContactPage";

const Contact = () => {
  const info = useSelector((state) => state.CONTACTS);
  return (
    <>
      <ContactPage info={info} />
    </>
  );
};

export default Contact;
