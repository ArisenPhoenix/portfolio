import css from "./App.module.css";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import AppWrapper from "../Components/UI/AppWrapper/AppWrapper";
import { SSRProvider, ThemeProvider } from "react-bootstrap";
import { Provider } from "react-redux";
import STORE from "../store/Redux/Store";
import Admin_Context_Provider from "../store/Context/ADMIN_CONTEXT/admin_context.js";

function MyApp({ Component, pageProps }) {
  return (
    <Admin_Context_Provider>
      <Provider store={STORE}>
        <SSRProvider>
          <ThemeProvider className={css.themeProvider}>
            <AppWrapper>
              <Component {...pageProps} />
            </AppWrapper>
          </ThemeProvider>
        </SSRProvider>
      </Provider>
    </Admin_Context_Provider>
  );
}

export default MyApp;
