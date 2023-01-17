import { useClass, useSelect } from "../Merkurial/hooks/usehooks";
import Skills from "../Components/Landing/Skills";
import Credits from "../Components/Credits/Credits";

const Landing = () => {
  const { theme, styles } = useSelect("THEME");
  const { bg, text } = theme;
  const { GENERAL, COLORS, BORDERS } = styles;

  const mainDiv = useClass([bg, text]);
  const { center } = GENERAL;

  return (
    <div className={mainDiv}>
      <div>
        <Skills />
      </div>
      <Credits className={center} />
    </div>
  );
};

export default Landing;
