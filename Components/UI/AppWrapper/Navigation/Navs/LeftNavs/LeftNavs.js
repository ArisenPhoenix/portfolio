import { useRouter } from "next/router";
import LeftNav from "./LeftNav/LeftNav";
import { LINKIFY } from "../../../../../../Helpers/Nav/Text/Linkify";

const NavItems = (props) => {
  const router = useRouter();
  return (
    <>
      {props.items.map((text) => {
        const link = LINKIFY(text);
        const active = link === router.pathname ? true : false;
        return <LeftNav key={text} text={text} link={link} active={active} />;
      })}
    </>
  );
};

export default NavItems;
