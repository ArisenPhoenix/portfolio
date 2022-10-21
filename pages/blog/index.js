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
  const dispatch = useDispatch();
  const { updateBlogs } = BlogSliceActions;

  const router = useRouter();
  const adminCtx = useContext(AdminContext);
  const admin = adminCtx.admin;

  const [blogs, setBlogs] = useState([]);
  const classes = useClass([css.blogPage]);
  const hasLoaded = false;
  const [isRunning, setIsRunning] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const setTimeOutCallBack = async (timer) => {
    const newBlogData = await getBlogs(
      getBlogsREQS,
      "FROM setTimeOutCallBack",
      "blogs"
    );
    console.log("NEW BLOG DATA: ", newBlogData);
    return clearTimeout(timer);
  };

  // USE TIMER TO DECIDE IF BLOG POSTS SHOULD BE UPDATED OR NOT
  useSetTimeOut(
    {
      timerName: "updateBlogs",
      startTimeMS: 60000,
      callBackPointer: setTimeOutCallBack,
      running: isRunning,
      setRunning: setIsRunning,
    },
    true
  );

  useEffect(() => {
    const dispatchBlogs = (allBlogs) => {
      dispatch(updateBlogs(allBlogs));
    };
    const getBlogsREQS = {
      setBlogs: setBlogs,
      setErrorMessage: setErrorMessage,
      updateBlogs: dispatchBlogs,
    };

    let loaded = RETREIVE_FROM_LOCAL_STORAGE("hasLoaded");
    loaded = loaded?.hasLoaded ? loaded.hasLoaded : false;

    if (loaded) {
      const retreivedBlogs = RETREIVE_FROM_LOCAL_STORAGE("blogs");
      if (retreivedBlogs === null || retreivedBlogs?.length < 1) {
        getBlogs(getBlogsREQS, "FROM LOADED = TRUE");
        setIsRunning(true);
      } else {
        REMOVE_FROM_LOCAL_STORAGE("blogs");
        setBlogs(retreivedBlogs);
      }
    } else if (!isRunning) {
      getBlogs(getBlogsREQS, "FROM LOADED = FALSE");
      setIsRunning(true);
    }

    SAVE_TO_LOCAL_STORAGE({ hasLoaded: true }, "hasLoaded");
  }, [setIsRunning, isRunning, dispatch]);

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
      ) : !hasLoaded ? (
        <h1>Loading...</h1>
      ) : errorMessage ? (
        <h2>{errorMessage}</h2>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default BlogPage;
