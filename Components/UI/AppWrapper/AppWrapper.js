import css from "./AppWrapper.module.css";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import Nav_Context_Provider from "../../../store/Context/NAV_CONTEXT/nav_context";

const AppWrapper = (props) => {
  return (
    <main className={css.main}>
      <Nav_Context_Provider>
        <Navigation className={css.wrapper} />
        <main className={css.app}>{props.children}</main>
        <Footer />
      </Nav_Context_Provider>
    </main>
  );
};

export default AppWrapper;
