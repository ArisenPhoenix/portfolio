import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useClass, useSelect } from "../../../Mercury/hooks/usehooks";

const SocialMediaButton = (props) => {
  const { GENERAL, BORDERS } = useSelect("THEME").styles;
  const { centerAll } = GENERAL;
  const { medium, silver, largeRound, solid } = BORDERS;
  const newClass = useClass([medium, silver, largeRound, solid]);
  return (
    <div>
      <a href={props.href} type="button">
        <FontAwesomeIcon
          className={`${centerAll} ${newClass}`}
          icon={props.icon}
        />
      </a>
    </div>
  );
};

export default SocialMediaButton;
