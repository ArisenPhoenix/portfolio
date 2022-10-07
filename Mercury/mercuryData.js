import IMPORT_ALL from "../Helpers/Nav/General/importAll";
import { Blogs } from "../DummyData/Blogs";

export const NAV_DATA = () => {
  const nav_data = {
    leftNavs: [{ name: "Projects" }, { name: "About" }, { name: "Contact" }],
    rightNavs: [{ name: "Blog" }, { name: "Resume" }],
    currentPage: null,
    dropDowns: [],
  };
  return nav_data;
};

export const PROJECT_DATA = () => {
  const bitcoinImages = IMPORT_ALL(
    require.context("../media/Bitcoin", false, /\.(png|jpe?g|svg)$/)
  );
  const foodieImages = IMPORT_ALL(
    require.context("../media/Foodie", false, /\.(png|jpe?g|svg)$/)
  );
  const languages = ["JavaScript", "Python"];

  const project_data = [
    {
      link: "https://bitcoin-price-master.vercel.app/",
      gitHub: "https://github.com/ArisenPhoenix/bitcoin_price_master",
      name: "Bitcoin Price Master",
      description: "Test Your Intuition Regarding Bitcoin Price Fluctuations",
      language: languages[0],
      images: bitcoinImages,
      video: "",
      stack: ["Nextjs", "Reactjs"],
    },
    {
      link: "https://foodie-nu.vercel.app/",
      gitHub: "https://github.com/ArisenPhoenix/foodie",
      name: "Foodie",
      description: "Food Planner and Calendar",
      language: languages[0],
      images: foodieImages,
      video: "",
      stack: ["Nextjs", "Reactjs"],
    },
    {
      link: null,
      gitHub: "https://github.com/ArisenPhoenix/typing-speed-test",
      name: "Typing Speed Test",
      description: "Test Your Typing Speed",
      language: languages[1],
      image: [],
      video: "",
      stack: ["Tkinter"],
    },
  ];

  return project_data;
};

export const BLOG_DATA = () => {
  return Blogs();
};

export const THEMES = () => {
  const themes = {
    default: "",
    primary: {
      dark: "",
      light: "",
      highContrasy: "",
    },
    secondary: {
      ethereal: "",
      kiddish: "",
      modern: "",
      professional: "",
      holy: "",
    },
    design: {
      angular: "",
      bubbly: "",
      rounded: "",
      natural: "",
    },
    accesibility: {
      red_green_blind: "",
    },
  };

  return themes;
};
