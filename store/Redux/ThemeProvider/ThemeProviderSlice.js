import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  light: blogs,
};
const BlogSlice = createSlice({
  name: "blog",
  initialState: initialState,
  reducers: {
    addNew: () => {
      return "/blog/new";
    },
  },
});

export default BlogSlice;
export const { addNew } = BlogSlice.actions;
