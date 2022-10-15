import About from "../../Components/About/About";
import { useSelector } from "react-redux";

const AboutPage = () => {
  const THEME = useSelector((state) => state.THEME);
  const theme = THEME.theme;
  const styles = THEME.styles;
  const animations = THEME.animations;
  return <About theme={theme} styles={styles} animations={animations} />;
};

export default AboutPage;
