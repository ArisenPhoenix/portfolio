import NavButton from "../NavButtons/NavButton";
import CreateReactKey from "../../../../Helpers/Misc/createReactKey";
import { LINKIFY } from "../../../../Helpers/Text/Linkify";
import css from "./Sides.module.css";

const RightSideNavs = (props) => {
  const NavItem = props.NavItem ? props.NavItem : NavButton;
  return (
    <div className={css.right}>
      {props.rightSideNavs?.map((rightNav, index) => {
        const href = LINKIFY(rightNav);
        return (
          <NavItem
            key={CreateReactKey(index)}
            href={href}
            text={rightNav}
            onClick={props.onClick}
          />
        );
      })}
    </div>
  );
};

export default RightSideNavs;

// const RightSideNavs = (props) => {
//   const router = useRouter();
//   return (
//     <div className={css.left}>
//       {props.rightSideNavs?.map((item) => {
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

// export default RightSideNavs;
