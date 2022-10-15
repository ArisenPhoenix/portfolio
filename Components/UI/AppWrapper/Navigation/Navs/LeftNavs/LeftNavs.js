import css from "./LeftNavs.module.css";
import { useRouter } from "next/router";
import LeftNav from "./LeftNav/LeftNav";

const NavItems = (props) => {
  const router = useRouter();
  const items = Object.keys(props.items);
  const itemsObj = props.items;
  const floatRight = props.left ? null : css.floatRight;
  const updateTop = props.updateTop;
  return (
    <>
      {props.show &&
        items.map((item) => {
          const Text = itemsObj[item].name;
          const Link = itemsObj[item].link;
          const active = Link === router.pathname ? true : false;
          return (
            <LeftNav
              key={item}
              text={Text}
              link={Link}
              active={active}
              className={floatRight}
              updateTop={updateTop}
            />
          );
        })}
    </>
  );
};

export default NavItems;
