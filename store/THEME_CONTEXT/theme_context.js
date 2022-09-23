import { createContext } from "react";
const ThemeContext = createContext({
  main: "black",
  secondary: "white",
  tertiary: "red",
  accent: "yellow",
  heading: "white",
  paragraph: "yellow",
});

export default ThemeContext;

export const ThemeContextProvider = (props) => {
  const theme = {
    main: "black",
    secondary: "white",
    tertiary: "red",
    accent: "yellow",
    heading: "white",
    paragraph: "yellow",
  };

  return (
    <ThemeContext.Provider value={theme}>
      {props.children}
    </ThemeContext.Provider>
  );
};
