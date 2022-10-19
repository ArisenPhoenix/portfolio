import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import Nav_Context_Provider from "../../../Merkurial/store/Context/NAV_CONTEXT/nav_context";
import { useSelect, useClass } from "../../../Merkurial/hooks/usehooks";
import Canvas from "./Canvas/Canvas";

const AppWrapper = (props) => {
  const { styles, theme } = useSelect("THEME");
  const { text, bg } = theme;
  const { NAVIGATION, BORDERS } = styles;
  const { footer, navigationHeight, navigationMargin, wrapperSpacing } =
    NAVIGATION;

  const { roundgold } = BORDERS;

  const wrapperClass = useClass([wrapperSpacing, roundgold]);

  const canvasClass = useClass([]);

  const navigationClass = useClass([navigationHeight, navigationMargin]);

  const footerClass = useClass([footer, text, bg]);

  return (
    <div className={wrapperClass}>
      <Nav_Context_Provider>
        <Navigation className={navigationClass} />
        <Canvas className={canvasClass}>{props.children}</Canvas>
        <Footer className={footerClass} />
      </Nav_Context_Provider>
    </div>
  );
};

export default AppWrapper;
