import css from "./RightNavs.module.css";
import { useRouter } from "next/router";
import { LINKIFY } from "../../../../../../Helpers/Nav/Text/Linkify";
import RightNav from "./RightNav/RightNav";

const RightNavs = (props) => {
  const router = useRouter();
  return (
    <div className={`${css.hidden} ${props.className}`} onClick={props.onClick}>
      {props.items.map((text) => {
        const link = LINKIFY(text);
        const active = link === router.pathname ? true : false;
        return (
          <RightNav
            key={text}
            text={text}
            link={link}
            active={active}
            display={props.display}
          />
        );
      })}
    </div>
  );
};

export default RightNavs;
