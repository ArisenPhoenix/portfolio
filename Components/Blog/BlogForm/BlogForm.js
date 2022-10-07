import css from "./BlogForm.module.css";
import Frosty from "../../UI/FrostedGlassDiv/Frosty";
import Button from "../../UI/Button/Button";

const BlogForm = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <Frosty className={css.color}>
      <form onSubmit={handleClick} className={css.form}>
        <div>
          <textarea className={css.textarea}>{props.text}</textarea>
        </div>
        <div className={css.buttonDiv}>
          <Button text="Add" className={css.button} />
        </div>
      </form>
    </Frosty>
  );
};

export default BlogForm;
