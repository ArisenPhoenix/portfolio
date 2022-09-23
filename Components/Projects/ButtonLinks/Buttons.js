import SocialMediaButton from "../../UI/SocialMediaButton/SocialMediaButton";
import css from "./Buttons.module.css";

const ProjectButtons = (props) => {
  return (
    <div className={css.container}>
      <SocialMediaButton
        icon={props.webIcon}
        href={props.webLink}
        className={css.webSite}
      />
      <SocialMediaButton
        icon={props.gitIcon}
        href={props.gitLink}
        className={css.gitHub}
      />
    </div>
  );
};

export default ProjectButtons;
