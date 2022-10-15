import css from "./RightNavs.module.css";
import { useRouter } from "next/router";
import RightNav from "./RightNav/RightNav";
import { useClass } from "../../../../../../Mercury/hooks/usehooks";

const RightNavs = (props) => {
  const router = useRouter();
  const items = Object.keys(props.items);
  const itemsObj = props.items;
  const classes = useClass([css.hidden, props.className]);
  return (
    <div className={classes} onClick={props.onClick}>
      {items.map((item) => {
        const Text = itemsObj[item].name;
        const Link = itemsObj[item].link;
        const active = Link === router.pathname ? true : false;

        return <RightNav key={item} text={Text} link={Link} active={active} />;
      })}
    </div>
  );
};

export default RightNavs;
