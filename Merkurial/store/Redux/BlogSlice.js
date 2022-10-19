import { createSlice } from "@reduxjs/toolkit";
import { BlogSlicePrep } from "../../mercuryConfig";
const blogs = BlogSlicePrep();

const initialState = {
  blogs: blogs,
};
const BlogSlice = createSlice({
  name: "blog",
  initialState: initialState,
  reducers: {
    addNew: () => {
      return "/blog/addNew";
    },
    addBlog: (state, action) => {
      state.blogs + action.payload;
    },
  },
});

export default BlogSlice;
export const { addNew } = BlogSlice.actions;
