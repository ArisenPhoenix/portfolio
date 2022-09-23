import { Blogs } from "../../DummyData/Blogs";
import Blog from "../../Components/Blog/Blog";
import css from "./Blog.module.css";
import Frosty from "../../Components/UI/FrostedGlassDiv/Frosty";
import tree from "../../media/tree.jpg";
import sephiroth from "../../media/sephiroth_fire.jpg";

const BlogPage = (props) => {
  return (
    <div
      className={css.blogPage}
      style={{ backgroundImage: `url(${tree.src})` }}
    >
      <h1>BlogPage</h1>
      <Blog blogs={props.blogs} />
    </div>
  );
};

export default BlogPage;

export const getServerSideProps = (context) => {
  return {
    props: {
      blogs: Blogs(),
    },
  };
};
