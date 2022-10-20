import IndividualBlog from "../../../Components/Blog/Individual/IndividualBlog";

const SingleBlog = (props) => {
  return (
    <IndividualBlog
      id={props._id}
      author={props.author}
      title={props.title}
      body={props.body}
    />
  );
};

export default SingleBlog;
