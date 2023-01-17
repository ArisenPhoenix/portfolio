import css from "./SubmitButton.module.css";

const SubmitButton = (props) => {
  return (
    <div className={css.buttonDiv}>
      <button type="submit" className={props.className}>
        {props.text}
      </button>
    </div>
  );
};

export default SubmitButton;
