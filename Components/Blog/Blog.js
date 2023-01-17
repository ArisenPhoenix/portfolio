import DisplayBlogs from "./DisplayBlogs/DisplayBlogs";
import { useClass, useSelect } from "../../Merkurial/hooks/usehooks";

const Blog = (props) => {
  const { styles } = useSelect("THEME");
  const { GENERAL } = styles;
  const { transparent } = GENERAL;

  const classes = useClass([transparent]);
  return <DisplayBlogs blogs={props.blogs} className={classes} />;
};

export default Blog;
