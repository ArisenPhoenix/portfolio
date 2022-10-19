import Blog from "../../Components/Blog/Blog";
import css from "./Blog.module.css";
import { useClass } from "../../Merkurial/hooks/usehooks";
import { useState, useEffect } from "react";
import FETCH from "../../Merkurial/Helpers/FETCH";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  // const blogs = [];
  const classes = useClass([css.blogPage]);

  useEffect(() => {
    console.log("In use effect");
    async () => {
      console.log("in async function");
      const allBlogs = await FETCH("/api/blogs", "GET");
      console.log("ALL BLOGS: ", allBlogs);
      setBlogs(allBlogs);
    };
  }, []);

  return (
    <div className={classes}>
      <h1>BlogPage</h1>
      {blogs.length > 0 ? (
        <Blog blogs={blogs} className={theme} />
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default BlogPage;

// const getServerSideProps = (context) => {

// }
