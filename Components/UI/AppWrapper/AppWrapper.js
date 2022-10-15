import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import Nav_Context_Provider from "../../../store/Context/NAV_CONTEXT/nav_context";
import { useSelect, useClass } from "../../../Mercury/hooks/usehooks";
import Canvas from "./Canvas/Canvas";

const AppWrapper = (props) => {
  const { styles } = useSelect("THEME");
  const { NAVIGATION, BORDERS } = styles;
  const {
    footer,
    canvasMargin,
    navigationHeight,
    navigationMargin,
    wrapperSpacing,
    canvasSpacing,
  } = NAVIGATION;

  const { roundgold } = BORDERS;

  const wrapperClass = useClass([wrapperSpacing, roundgold]);

  const canvasClass = useClass([canvasMargin, canvasSpacing]);

  const navigationClass = useClass([navigationHeight, navigationMargin]);

  const footerClass = useClass([footer]);

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
