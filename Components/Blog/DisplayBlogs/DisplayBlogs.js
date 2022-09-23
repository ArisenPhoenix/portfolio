import TextBox from "../../UI/Text/TextBox";
import BootStrapGridder from "../../UI/BootStrap/BootStrapGridder";
import css from "./DisplayBlogs.module.css";
import { Col } from "react-bootstrap";
import Button from "../../UI/Button/Button";
import BlogCard from "../BlogCard/BlogCard";
import { useRouter } from "next/router";

const DisplayBlogs = (props) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/blog/new");
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
