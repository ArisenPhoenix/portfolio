import css from "./ContactPage.module.css";
import MessageBox from "./MessageBox/MessageBox";
import ContactInfo from "./ContactInfo/ContactInfo";
import { useSelect, useClass } from "../../Merkurial/hooks/usehooks";

const ContactPage = () => {
  const { THEME, CONTACTS } = useSelect(false);
  const { theme, styles } = THEME;
  const { NAVIGATION } = styles;
  const { canvasMargin } = NAVIGATION;
  const mainClass = useClass([css.main, canvasMargin]);

  return (
    <main className={mainClass}>
      <ContactInfo info={CONTACTS} />
      <div>
        <MessageBox theme={theme} />
      </div>
    </main>
  );
};

export default ContactPage;
