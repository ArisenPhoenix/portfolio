import { configureStore } from "@reduxjs/toolkit";
import NavSlice from "./NavSlice/NavSlice";
import BlogSlice from "./BlogSlice";
import TodoSlice from "./TodoSlice";
import ProjectSlice from "./ProjectSlice";
import ContactSlice from "./ContactSlice";

const STORE = configureStore({
  reducer: {
    TODO: TodoSlice.reducer,
    BLOGS: BlogSlice.reducer,
    NAV: NavSlice.reducer,
    PROJECTS: ProjectSlice.reducer,
    CONTACTS: ContactSlice.reducer,
  },
});

export default STORE;

export const TodoSliceActions = TodoSlice.actions;
export const BlogSliceActions = BlogSlice.actions;
export const NavSliceActions = NavSlice.actions;
export const ContactSliceActions = ContactSlice.actions;
export const ProjectSliceActions = ProjectSlice.actions;
