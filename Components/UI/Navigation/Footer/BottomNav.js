import Button from "../../Button/Button";
import css from "./BottomNav.module.css";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AdminContext } from "../../../../store/Context/ADMIN_CONTEXT/admin_context";
const BottomNav = (props) => {
  const adminCtx = useContext(AdminContext);
  const copyrightDate = new Date().getFullYear();
  const router = useRouter();
  const handleClick = () => {
    router.push("/settings");
  };

  return (
    <div className={css.Bottom}>
      <Button
        text="Settings"
        className={css.button}
        divClass={css.buttonDiv}
        onClick={handleClick}
      />

      <div className={`${css.dateDiv} ${css.break}`}>
        <p className={css.copyright}>Copyright {copyrightDate}</p>
      </div>

      {adminCtx.admin && (
        <Button
          text="Logout"
          className={css.button}
          divClass={css.buttonDiv}
          onClick={adminCtx.LOGOUT}
        />
      )}
    </div>
  );
};

export default BottomNav;
