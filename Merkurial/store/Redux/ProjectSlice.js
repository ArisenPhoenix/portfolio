import { createSlice } from "@reduxjs/toolkit";
import { ProjectSlicePrep } from "../../mercuryConfig";
const initialState = ProjectSlicePrep();
const ProjectSlice = createSlice({
  name: "PROJECT",
  initialState: initialState,
  reducers: {
    addNew: () => {
      return "/blog/new";
    },
  },
});

export default ProjectSlice;
