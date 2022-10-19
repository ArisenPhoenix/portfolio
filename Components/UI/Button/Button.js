import { useSelect, useClass } from "../../../Merkurial/hooks/usehooks";

const Button = (props) => {
  const { theme, styles } = useSelect("THEME");
  const { bg, text } = theme;
  const { BUTTON } = styles;
  const { buttonForm } = BUTTON;
  const buttonClasses = useClass([bg, text, buttonForm, props.buttonClass]);
  const divClasses = useClass([bg, text, props.divClass]);

  return (
    <div className={divClasses}>
      <button onClick={props.onClick} className={buttonClasses}>
        {props.text}
      </button>
    </div>
  );
};

export default Button;
