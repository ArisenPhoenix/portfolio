import { useRouter } from "next/router";
import LeftNav from "./LeftNav/LeftNav";

const NavItems = (props) => {
  const router = useRouter();
  const items = Object.keys(props.items);
  const itemsObj = props.items;
  return (
    <>
      {items.map((item) => {
        const Text = itemsObj[item].name;
        const Link = itemsObj[item].link;
        const active = Link === router.pathname ? true : false;
        return <LeftNav key={item} text={Text} link={Link} active={active} />;
      })}
    </>
  );
};

export default NavItems;
