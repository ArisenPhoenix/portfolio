import { useRouter } from "next/router";
import css from "./Item.module.css";
import Link from "../../../../../../Link/Link";
import { LINKIFY } from "../../../../../../../Helpers/Nav/Text/Linkify";

const Item = (props) => {
  const router = useRouter();
  const text = props.text;
  const link = LINKIFY(text);
  const active = link === router.pathname ? true : false;

  const updateTop = () => {
    console.log("updating top....");
    props.updateTop(text);
  };

  const defaultClasses = active
    ? `${props.className} ${css.textActive}`
    : `${props.className} ${css.text}`;

  return (
    <div className={css.navDiv} onClick={updateTop}>
      <Link
        text={props.text}
        onClick={() => {}}
        active={active}
        className={defaultClasses}
      />
    </div>
  );
};

export default Item;
