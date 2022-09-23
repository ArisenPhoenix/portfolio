import css from "./Footer.module.css";

const Footer = (props) => {
  const year = new Date().getFullYear();
  return (
    <div className={css.footer}>
      <div className={css.copyright}>
        <p className={`${css.text}`}>Copyright {year}</p>
      </div>
      <div className={css.name}>
        <p className={`${css.text}`}>Brandon Marcure</p>
      </div>
    </div>
  );
};

export default Footer;
