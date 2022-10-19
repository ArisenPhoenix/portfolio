import MERK_THEMES from "../../Merkurial/CSS/Themes/MERK_THEMES";
import { ThemeProviderActions } from "../../Merkurial/store/Redux/Store";
import { useDispatch } from "react-redux";

const Settings = () => {
  const dispatch = useDispatch();
  const changeTheme = ThemeProviderActions.changeTheme;
  const themes = Object.keys(MERK_THEMES().THEMES);
  const handleClick = (e) => {
    const updatedTheme = e.target.name;
    dispatch(changeTheme({ theme: updatedTheme }));
  };

  return (
    <>
      <h1>Settings</h1>
      {themes.map((theme, index) => {
        return (
          <button key={`${index}|${theme}`} name={theme} onClick={handleClick}>
            {theme}
          </button>
        );
      })}
    </>
  );
};

export default Settings;
