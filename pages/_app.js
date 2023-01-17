import css from "./App.module.css";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import Navigation from "../Components/UI/Navigation/Navigation";
import { SSRProvider, ThemeProvider } from "react-bootstrap";
import { Provider } from "react-redux";
import STORE from "../store/Redux/Store";
import Admin_Context_Provider from "../store/Context/ADMIN_CONTEXT/admin_context";
import Nav_Context_Provider from "../store/Context/NAV_CONTEXT/nav_context";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav_Context_Provider>
        <Admin_Context_Provider>
          <Provider store={STORE}>
            <SSRProvider>
              <ThemeProvider className={css.themeProvider}>
                <Navigation>
                  <Component {...pageProps} />
                </Navigation>
              </ThemeProvider>
            </SSRProvider>
          </Provider>
        </Admin_Context_Provider>
      </Nav_Context_Provider>
    </>
  );
}

export default MyApp;
