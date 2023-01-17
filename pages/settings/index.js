import MERK_THEMES from "../../Merkurial/CSS/Themes/MERK_THEMES";
import { ThemeProviderActions } from "../../store/Redux/Store";
import { useDispatch } from "react-redux";
import Heading from "../../Components/UI/Text/Heading";

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
      <Heading text="Settings" />
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
