import Blog from "../../Components/Blog/Blog";
import css from "./Blog.module.css";
import { useClass, useSelect } from "../../Merkurial/hooks/usehooks";

const BlogPage = () => {
  const { THEME, BLOGS } = useSelect();
  const { blogs } = BLOGS;
  const { theme } = THEME;
  const { bg, bgGlass, text, textGlass } = theme;
  const classes = useClass([css.blogPage]);

  return (
    <div className={classes}>
      <h1>BlogPage</h1>
      <Blog blogs={blogs} className={theme} />
    </div>
  );
};

export default BlogPage;
