import NavButton from "../NavButtons/NavButton";
import CreateReactKey from "../../../../Helpers/Misc/createReactKey";
import { LINKIFY } from "../../../../Helpers/Text/Linkify";
import css from "./Sides.module.css";
// import Nav from "../../../../../Components/UI/AppWrapper/Navigation/Navs/Nav/Nav";

const LeftSideNavs = (props) => {
  const NavItem = props.NavItem ? props.NavItem : NavButton;
  return (
    <div className={css.left}>
      {props?.leftSideNavs?.map((leftNav, index) => {
        const href = LINKIFY(leftNav);
        return (
          <NavItem
            key={CreateReactKey(index)}
            href={href}
            text={leftNav}
            onClick={props.onClick}
          />
        );
      })}
    </div>
  );
};

export default LeftSideNavs;

// const LeftSideNavs = (props) => {
//   const router = useRouter();
//   return (
//     <div className={css.left}>
//       {props.leftSideNavs?.map((item) => {
//         const Link = LINKIFY(item).link;
//         const Text = item;
//         const active = Link === router.pathname ? true : false;
//         return (
//           <Nav
//             key={item}
//             isLeft={props.isLeft}
//             side={props.side}
//             text={Text}
//             link={Link}
//             active={active}
//             updateTop={props.updateTop}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default LeftSideNavs;
