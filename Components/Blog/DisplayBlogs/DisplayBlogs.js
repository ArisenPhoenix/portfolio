import BootStrapGridder from "../../../Merkurial/Components/UI/BootStrap/BootStrapGridder";
import { Col } from "react-bootstrap";
import BlogCard from "../BlogCard/BlogCard";
import css from "./DisplayBlogs.module.css";

const DisplayBlogs = (props) => {
  return (
    <div className={css.blogContainer}>
      <BootStrapGridder fluid="true" className={css.blogContainer}>
        {props.blogs.map((blog, index) => {
          return (
            <Col
              className={css.blogContainer}
              xs="12"
              md="6"
              lg="6"
              key={`Col ${blog.title} ${index}`}
            >
              <BlogCard
                key={blog._id}
                _id={blog._id}
                author={blog.author}
                body={blog.body}
                title={blog.title}
                date={blog.date}
              />
            </Col>
          );
        })}
      </BootStrapGridder>
    </div>
  );
};

export default DisplayBlogs;
