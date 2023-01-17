import { useClass, useSelect } from "../Merkurial/hooks/usehooks";
import Skills from "../Components/Landing/Skills";
import Credits from "../Components/Credits/Credits";
import css from "./index.module.css";

const Landing = () => {
  const { theme, styles } = useSelect("THEME");
  const { bg, text } = theme;
  const { GENERAL } = styles;

  const mainDiv = useClass([bg, text, css.main]);
  const { center } = GENERAL;

  return (
    <div className={mainDiv}>
      <div>
        <Skills />
      </div>
      <Credits className={center} />
      <div className={css.spacer} />
    </div>
  );
};

export default Landing;
