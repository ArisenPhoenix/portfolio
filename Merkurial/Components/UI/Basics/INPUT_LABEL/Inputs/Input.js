import { VERIFY_VALUE } from "../../../../../Helpers/Verifications/verify";

const Input = (props) => {
  return (
    <input
      value={props.value}
      placeholder={VERIFY_VALUE(props.placeholder, "")}
      ref={VERIFY_VALUE(props.ref)}
      required={VERIFY_VALUE(props.required, false)}
      type={VERIFY_VALUE(props.type, "")}
      onChange={VERIFY_VALUE(props.onChange, () => {})}
      name={VERIFY_VALUE(props.name)}
      readOnly={VERIFY_VALUE(props.readOnly, false)}
      hidden={VERIFY_VALUE(props.hidden)}
      autoComplete={props.autoComplete}
      className={props.className}
      onClick={VERIFY_VALUE(props.onClick)}
    />
  );
};

export default Input;
