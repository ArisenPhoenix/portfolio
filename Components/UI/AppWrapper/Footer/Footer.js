import { useRouter } from "next/router";
import Table from "../../Table/Table";
import { useSelect, useClass } from "../../../../Merkurial/hooks/usehooks";
import { useContext } from "react";
import { AdminContext } from "../../../../Merkurial/store/Context/ADMIN_CONTEXT/admin_context";

const Footer = (props) => {
  const adminCtx = useContext(AdminContext);
  const LOGOUT = adminCtx.LOGOUT;
  const isAdmin = adminCtx.admin;
  const { theme, styles } = useSelect("THEME");
  const { bg, text } = theme;
  const { GENERAL, TABLES } = styles;
  const { noBorder, rounded } = GENERAL;
  const { removeBorder } = TABLES;

  const buttonStyles = useClass([noBorder, rounded]);
  const footerClass = useClass([props.className, rounded]);

  const year = new Date().getFullYear();
  const router = useRouter();
  const loc = router.pathname;
  const classes = useClass([bg, text, buttonStyles]);

  const button =
    loc !== "/settings" ? (
      <button onClick={() => router.push("/settings")} className={classes}>
        Settings
      </button>
    ) : null;

  const logout = isAdmin ? (
    <button onClick={LOGOUT} className={classes}>
      Logout Admin
    </button>
  ) : null;

  const data = [[button, logout, "Brandon Marcure", `Copyright @ ${year}`]];

  return (
    <div className={footerClass}>
      <Table
        heads={false}
        rowData={data.filter((item) => item !== null)}
        className={removeBorder}
      />
    </div>
  );
};

export default Footer;
