import { createSlice } from "@reduxjs/toolkit";
import { NavSlicePrep } from "../../mercuryData";
const { leftNavs, rightNavs, dropDowns, currentPage } = NavSlicePrep();

const NavSlice = createSlice({
  name: "NAV",
  initialState: {
    leftNavs: leftNavs,
    rightNavs: rightNavs,
    dropDowns: dropDowns,
    currentPage: currentPage,
  },

  reducers: {
    leftNavsDefault: (state) => {
      state.value = leftNavs;
    },
    updateLeftNavs: (state, item) => {
      state.value = item;
    },
  },
});

export default NavSlice;
export const { leftNavsDefault, updateLeftNavs } = NavSlice.actions;
