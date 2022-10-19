import BootStrapGridder from "../../UI/BootStrap/BootStrapGridder";
import css from "./DisplayBlogs.module.css";
import { Col } from "react-bootstrap";
import Button from "../../UI/Button/Button";
import BlogCard from "../BlogCard/BlogCard";
import { useRouter } from "next/router";
import { BlogSliceActions } from "../../../Merkurial/store/Redux/Store";
import { useContext } from "react";
import { AdminContext } from "../../../Merkurial/store/Context/ADMIN_CONTEXT/admin_context";
const { addNew } = BlogSliceActions;
import { useClass, useSelect } from "../../../Merkurial/hooks/usehooks";

const DisplayBlogs = (props) => {
  const { theme, styles } = useSelect("THEME");
  const { bgGlass, textGlass } = theme;
  const { GENERAL } = styles;
  const { transparent } = GENERAL;
  const blogContainerClass = useClass([transparent]);
  const adminCtx = useContext(AdminContext);
  const admin = adminCtx.admin;
  const router = useRouter();
  const handleClick = () => {
    router.push(addNew().type);
  };
  return (
    <div className={blogContainerClass}>
      {admin && (
        <Button
          text="New"
          className={css.button}
          divClass={css.buttonDiv}
          onClick={handleClick}
        />
      )}
      <BootStrapGridder fluid="true">
        {props.blogs.map((blog, index) => {
          return (
            <Col xs="12" md="6" lg="6" key={`Col ${blog.title} ${index}`}>
              <BlogCard
                author={blog.author}
                body={blog.body}
                title={blog.title}
              />
            </Col>
          );
        })}
      </BootStrapGridder>
    </div>
  );
};

export default DisplayBlogs;
