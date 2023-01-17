// import BasicBottom from "../../../../Merkurial/Components/UI/Navigation/Bottom/BasicBottom";
import Button from "../../Button/Button";
import css from "./BottomNav.module.css";
import { useContext } from "react";
import { AdminContext } from "../../../../store/Context/ADMIN_CONTEXT/admin_context";
const BottomNav = (props) => {
  const adminCtx = useContext(AdminContext);
  const copyrightDate = new Date().getFullYear();
  return (
    <div className={css.Bottom}>
      <Button
        text="Logout"
        className={css.button}
        divClass={css.buttonDiv}
        onClick={adminCtx.LOGOUT}
      />

      <div className={`${css.dateDiv} ${css.break}`}>
        <p className={css.copyright}>Copyright {copyrightDate}</p>
      </div>
    </div>
  );
};

export default BottomNav;
