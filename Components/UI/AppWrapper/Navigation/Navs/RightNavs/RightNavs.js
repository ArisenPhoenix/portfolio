import css from "./RightNavs.module.css";
import { useRouter } from "next/router";
import RightNav from "./RightNav/RightNav";

const RightNavs = (props) => {
  const router = useRouter();
  const items = Object.keys(props.items);
  const itemsObj = props.items;
  return (
    <div className={`${css.hidden} ${props.className}`} onClick={props.onClick}>
      {items.map((item) => {
        const Text = itemsObj[item].name;
        const Link = itemsObj[item].link;
        const active = Link === router.pathname ? true : false;

        return (
          <RightNav
            key={item}
            text={Text}
            link={Link}
            active={active}
            display={props.display}
          />
        );
      })}
    </div>
  );
};

export default RightNavs;
