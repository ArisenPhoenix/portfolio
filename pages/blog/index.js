import Blog from "../../Components/Blog/Blog";
import Button from "../../Components/UI/Button/Button";
import css from "./Blog.module.css";
import { useClass } from "../../Merkurial/hooks/usehooks";
import { useState, useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { BlogSliceActions } from "../../store/Redux/Store";
import { RETREIVE_FROM_LOCAL_STORAGE } from "../../Merkurial/API_STORAGE/STORAGE/HANDLE_STORAGE";
import useSetTimeOut from "../../Merkurial/hooks/useSetTimeOut";
import { AdminContext } from "../../store/Context/ADMIN_CONTEXT/admin_context";
import { getBlogs } from "../../Components/Blog/helpers";
import LoadingScreen from "../../Merkurial/Components/UI/LoadingScreen/LoadingScreen";
import Heading from "../../Components/UI/Text/Heading";

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
  const classes = useClass([css.blogPage]);

  const timeLeft = useSetTimeOut(
    // USE TIMER TO DECIDE IF BLOG POSTS SHOULD BE UPDATED OR NOT
    {
      timerName: "updateBlogs",
      startTimeMS: 60000,
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
      const allBlogs = getBlogs(blogReqs, "FROM LOADED = TRUE");
      if (!allBlogs.err) {
        setIsRunning(true);
      }
    } else if (!isRunning) {
      const retreivedBlogs = RETREIVE_FROM_LOCAL_STORAGE("blogs");
      if (retreivedBlogs === null || retreivedBlogs?.length < 1) {
        // console.log("IN ASYNC FUNCTION DATA NOT THERE");
        const allBlogs = getBlogs(blogReqs, "FROM LOADED = TRUE");
        if (!allBlogs.err) {
          setIsRunning(true);
        }
      } else {
        setBlogs(retreivedBlogs);
      }
      setIsRunning(true);
    }
  }, [
    setIsRunning,
    isRunning,
    setBlogs,
    timeLeft,
    isLoaded,
    setIsLoaded,
    dispatch,
    updateBlogs,
  ]);

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

      {blogs.length > 0 ? (
        <Blog blogs={blogs} className={css.blog} />
      ) : errorMessage ? (
        <h2>{errorMessage}</h2>
      ) : (
        <>
          <Heading text="Loading..." />
          <LoadingScreen />
        </>
      )}
    </div>
  );
};

export default BlogPage;
