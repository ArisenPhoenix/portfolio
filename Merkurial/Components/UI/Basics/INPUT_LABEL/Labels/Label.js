const Label = (props) => {
  return (
    <label className={props.className} htmlFor={props.for ? props.for : null}>
      {props.text} {props.required && <span>*</span>}
    </label>
  );
};

export default Label;
