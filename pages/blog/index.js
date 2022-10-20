import Blog from "../../Components/Blog/Blog";
import css from "./Blog.module.css";
import { useClass } from "../../Merkurial/hooks/usehooks";
import { useState, useEffect } from "react";
import FETCH from "../../Merkurial/Helpers/FETCH";
import {
  SAVE_TO_LOCAL_STORAGE,
  RETREIVE_FROM_LOCAL_STORAGE,
  REMOVE_FROM_LOCAL_STORAGE,
} from "../../Merkurial/API_STORAGE/STORAGe/HANDLE_STORAGE";
import useSetTimeOut from "../../Merkurial/hooks/useSetTimeOut";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const classes = useClass([css.blogPage]);
  const [hasLoaded, setHasLoaded] = useState(false);

  const getBlogs = async () => {
    const allBlogs = await FETCH("/api/blogs", "GET");
    // console.log("ALL BLOGS: ", allBlogs);
    setBlogs(allBlogs);
    SAVE_TO_LOCAL_STORAGE(allBlogs, "blogs");
    return allBlogs;
  };

  const setTimeOutCallBack = () => {
    setHasLoaded(true);
    REMOVE_FROM_LOCAL_STORAGE("hasLoaded");
    SAVE_TO_LOCAL_STORAGE({ hasLoaded: true }, "hasLoaded");
    getBlogs();
  };

  const timeLeft = useSetTimeOut("updateBlogs", 500000, setTimeOutCallBack);
  // console.log("TIME LEFT: ", timeLeft);

  useEffect(() => {
    const getBlogs = async () => {
      const allBlogs = await FETCH("/api/blogs", "GET");
      console.log("ALL BLOGS: ", allBlogs);
      setBlogs(allBlogs);
      SAVE_TO_LOCAL_STORAGE(allBlogs, "blogs");
      return allBlogs;
    };

    let loaded = RETREIVE_FROM_LOCAL_STORAGE("hasLoaded");
    loaded = loaded?.hasLoaded ? loaded.hasLoaded : false;

    if (loaded) {
      const retreived = RETREIVE_FROM_LOCAL_STORAGE("blogs");
      retreived === null || retreived.length < 1
        ? getBlogs()
        : setBlogs(retreived);
    } else if (!hasLoaded) {
      setHasLoaded(true);
      getBlogs();
      SAVE_TO_LOCAL_STORAGE({ hasLoaded: true }, "hasLoaded");
    }
  }, [hasLoaded]);

  return (
    <div className={classes}>
      <h1>BlogPage</h1>
      {blogs.length > 0 ? <Blog blogs={blogs} /> : <h1>Loading</h1>}
    </div>
  );
};

export default BlogPage;
