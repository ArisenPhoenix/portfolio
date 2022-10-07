import BootStrapGridder from "../../UI/BootStrap/BootStrapGridder";
import css from "./DisplayBlogs.module.css";
import { Col } from "react-bootstrap";
import Button from "../../UI/Button/Button";
import BlogCard from "../BlogCard/BlogCard";
import { useRouter } from "next/router";
import STORE, { BlogSliceActions } from "../../../store/Redux/Store";
const { addNew } = BlogSliceActions;
// import { useSelector, useDispatch } from "react-redux";

const DisplayBlogs = (props) => {
  // const dispatch = useDispatch();u7
  const router = useRouter();
  const handleClick = () => {
    router.push(addNew().type);
  };
  return (
    <>
      <Button
        text="New"
        className={css.button}
        divClass={css.buttonDiv}
        onClick={handleClick}
      />
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
    </>
  );
};

export default DisplayBlogs;
