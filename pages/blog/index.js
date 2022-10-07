import { Blogs } from "../../DummyData/Blogs";
import Blog from "../../Components/Blog/Blog";
import css from "./Blog.module.css";
import Frosty from "../../Components/UI/FrostedGlassDiv/Frosty";
import tree from "../../media/tree.jpg";
import sephiroth from "../../media/sephiroth_fire.jpg";
import { useSelector } from "react-redux";

const BlogPage = (props) => {
  const { blogs } = useSelector((state) => state.BLOGS);
  return (
    <div className={css.blogPage}>
      <h1>BlogPage</h1>
      <Blog blogs={blogs} />
    </div>
  );
};

export default BlogPage;

// export const getServerSideProps = (context) => {
//   return {
//     props: {
//       blogs: Blogs(),
//     },
//   };
// };
