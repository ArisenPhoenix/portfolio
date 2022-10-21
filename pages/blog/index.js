import Blog from "../../Components/Blog/Blog";
import Button from "../../Components/UI/Button/Button";
import css from "./Blog.module.css";
import { useClass } from "../../Merkurial/hooks/usehooks";
import { useState, useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { BlogSliceActions } from "../../Merkurial/store/Redux/Store";
import {
  SAVE_TO_LOCAL_STORAGE,
  RETREIVE_FROM_LOCAL_STORAGE,
  REMOVE_FROM_LOCAL_STORAGE,
} from "../../Merkurial/API_STORAGE/STORAGe/HANDLE_STORAGE";
import useSetTimeOut from "../../Merkurial/hooks/useSetTimeOut";
import { AdminContext } from "../../Merkurial/store/Context/ADMIN_CONTEXT/admin_context";
import { getBlogs } from "../../Components/Blog/helpers";

const BlogPage = () => {
  const router = useRouter();
  const adminCtx = useContext(AdminContext);
  const admin = adminCtx.admin;
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const { updateBlogs } = BlogSliceActions;

  // const getBlogsREQS = () => {
  //   return ;
  // };

  const classes = useClass([css.blogPage]);

  // USE TIMER TO DECIDE IF BLOG POSTS SHOULD BE UPDATED OR NOT
  const timeLeft = useSetTimeOut(
    {
      timerName: "updateBlogs",
      startTimeMS: 60000000,
      callBackPointer: null,
      running: isRunning,
      setRunning: setIsRunning,
    },
    true
  );

  useEffect(() => {
    const dispatchBlogs = (allBlogs) => {
      dispatch(updateBlogs(allBlogs));
    };
    const blogReqs = {
      setBlogs: setBlogs,
      setErrorMessage: setErrorMessage,
      updateBlogs: dispatchBlogs,
    };
    if (!isLoaded) {
      setIsLoaded(true);
      console.log("IN ASYNC FUNCTION !ISLOADED");

      const allBlogs = getBlogs(blogReqs, "FROM LOADED = TRUE");
      if (!allBlogs.err) {
        setIsRunning(true);
      }
    } else if (!isRunning) {
      const retreivedBlogs = RETREIVE_FROM_LOCAL_STORAGE("blogs");
      if (retreivedBlogs === null || retreivedBlogs?.length < 1) {
        console.log("IN ASYNC FUNCTION DATA NOT THERE");
        const allBlogs = getBlogs(blogReqs, "FROM LOADED = TRUE");
        if (!allBlogs.err) {
          setIsRunning(true);
        }
      } else {
        console.log("SETTING BLOGS TO LOCALLY STORED ONES");
        setBlogs(retreivedBlogs);
      }
      setIsRunning(true);
    }
  }, [setIsRunning, isRunning, setBlogs, timeLeft, isLoaded, setIsLoaded]);

  const handleClick = () => {
    router.push("/blog/addNew");
  };

  return (
    <div className={classes}>
      {admin && (
        <Button
          text="New"
          className={css.button}
          divClass={css.buttonDiv}
          onClick={handleClick}
        />
      )}
      <h1>BlogPage</h1>

      {blogs.length > 0 ? (
        <Blog blogs={blogs} />
      ) : errorMessage ? (
        <h2>{errorMessage}</h2>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default BlogPage;
