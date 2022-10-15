import css from "./About.module.css";
import Caption from "../UI/Text/Caption";
import TextBox from "../UI/Text/TextBox";
import Paragraph from "../UI/Text/Paragraph";
import Heading from "../UI/Text/Heading";
import { useClass, useSelect } from "../../Mercury/hooks/usehooks";

const About = (props) => {
  const { theme, styles } = useSelect("THEME");
  const { bg, text } = theme;
  const { textContainer } = styles.DIVS;

  const classes = useClass([css.main, bg, text, textContainer]);

  return (
    <div className={classes}>
      <Heading text="Program With Me" />
      <Paragraph text="I Love to program so much, just look at all my projects" />
      <TextBox
        type="caption"
        text="CAPTION :) Let's check everything out! Make sure it's all working"
      />
      <Caption text="CAPTION :) Let's check everything out! Make sure it's all working" />
    </div>
  );
};

export default About;
