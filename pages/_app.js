import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import AppWrapper from "../Components/UI/AppWrapper/AppWrapper";
import { SSRProvider, ThemeProvider } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <ThemeProvider
        breakpoints={["xxl", "xl", "lg", "md", "sm", "xxs"]}
        minBreakpoint="xxs"
      >
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
      </ThemeProvider>
    </SSRProvider>
  );
}

export default MyApp;
