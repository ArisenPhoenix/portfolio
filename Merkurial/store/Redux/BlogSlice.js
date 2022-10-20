import { createSlice } from "@reduxjs/toolkit";
import { BlogSlicePrep } from "../../mercuryConfig";
const blogs = BlogSlicePrep();

const initialState = {
  blogs: blogs,
  individual: {
    body: "",
    author: "",
    _id: "",
    title: "",
    link: "",
  },
  timeToUpdate: 6000,
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
    dynamic: (state, action) => {
      state.individual = action.payload;
    },
  },
});

export default BlogSlice;
export const { addNew } = BlogSlice.actions;
