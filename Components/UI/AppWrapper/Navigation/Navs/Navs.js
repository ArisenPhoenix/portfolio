import css from "./Navs.module.css";
import { useRouter } from "next/router";
import Nav from "../Navs/Nav/Nav";

const NavItems = (props) => {
  const router = useRouter();
  const items = Object.keys(props.items);
  const itemsObj = props.items;
  const updateTop = props.updateTop;
  return (
    <>
      {props.show &&
        items.map((item) => {
          const Text = itemsObj[item].name;
          const Link = itemsObj[item].link;
          const active = Link === router.pathname ? true : false;
          return (
            <Nav
              key={item}
              isLeft={props.isLeft}
              side={props.side}
              text={Text}
              link={Link}
              active={active}
              updateTop={updateTop}
            />
          );
        })}
    </>
  );
};

export default NavItems;
