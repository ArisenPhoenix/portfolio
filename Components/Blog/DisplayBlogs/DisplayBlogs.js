import BootStrapGridder from "../../UI/BootStrap/BootStrapGridder";
import { Col } from "react-bootstrap";
import BlogCard from "../BlogCard/BlogCard";
import { useClass, useSelect } from "../../../Merkurial/hooks/usehooks";

const DisplayBlogs = (props) => {
  const { styles } = useSelect("THEME");
  const { GENERAL } = styles;
  const { transparent } = GENERAL;
  const blogContainerClass = useClass([transparent]);

  return (
    <div className={blogContainerClass}>
      <BootStrapGridder fluid="true">
        {props.blogs.map((blog, index) => {
          return (
            <Col xs="12" md="6" lg="6" key={`Col ${blog.title} ${index}`}>
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
