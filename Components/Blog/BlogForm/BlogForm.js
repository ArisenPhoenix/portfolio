import { useState, useContext } from "react";
import Button from "../../UI/Button/Button";
import { useClass, useSelect } from "../../../Merkurial/hooks/usehooks";
import FETCH from "../../../Merkurial/Helpers/FETCH";
import { BlogSliceActions } from "../../../store/Redux/Store";
import InputGroup from "../../UI/InputGroup/InputGroup";
import { useDispatch } from "react-redux";
import { AdminContext } from "../../../store/Context/ADMIN_CONTEXT/admin_context";

const BlogForm = (props) => {
  const adminCtx = useContext(AdminContext);
  const isAdmin = adminCtx.admin;
  const dispatch = useDispatch();
  const [message, setMessage] = useState(null);
  const [name, setName] = useState(isAdmin ? "Brandon Marcure" : "");
  const [title, setTitle] = useState("");
  const [blogText, setBlogText] = useState("");

  const { updateBlogs } = BlogSliceActions;

  const { theme, styles } = useSelect("THEME");
  const { bg, text } = theme;
  const { GENERAL, DIVS, BORDERS, DIMENSIONS, TEXT, SPACING } = styles;
  const { smR, smPY } = SPACING;
  const { paragraphIndent, xlg } = TEXT;
  const { halfX, wholeX, halfQuarterX, xlgVY, quarterX, twoThirdX, ninetyX } =
    DIMENSIONS;
  const { centerAll } = GENERAL;
  const { mdForm, buttonDiv, inline } = DIVS;
  const {
    noBorder,
    smallRound,
    largeRound,
    solid,
    wide,
    roundgold,
    roundsilver,
  } = BORDERS;

  const mainDivClass = useClass([
    centerAll,
    wholeX,
    bg,
    text,
    wide,
    largeRound,
    smPY,
    centerAll,
    roundsilver,
  ]);
  const formClass = useClass([mdForm, centerAll, wholeX, smPY]);
  const textAreaClass = useClass([xlgVY, paragraphIndent, ninetyX, xlg]);
  const inputGroupDivClass = useClass([wholeX]);
  const submitButtonClass = useClass([
    smallRound,
    solid,
    buttonDiv,
    halfX,
    wide,
    roundgold,
  ]);
  const labelDivClasses = useClass([inline, halfQuarterX]);
  const inputClasses = useClass([largeRound, twoThirdX]);
  const labelClasses = useClass([smR, xlg, quarterX]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    name === "name" && setName(value);
    name === "title" && setTitle(value);
    name === "text" && setBlogText(value);
  };

  const handleSubmit = async (e) => {
    setMessage("Posting To The Database");
    e.preventDefault();
    const data = {
      author: name,
      title: title,
      body: blogText,
    };

    const info = await FETCH("/api/blogs", "POST", data, "ADD BLOG FORM");

    if (info.acknowledged) {
      dispatch(updateBlogs({ payload: data }));
      const updatedBlogs = await FETCH("/api/blogs", "GET");
      console.log("UPDATED BLOGS: ", updatedBlogs);
      if (Array.isArray(updatedBlogs)) {
        setMessage("Blog Post Successfully Added");
        dispatch(updateBlogs(updatedBlogs));
      } else {
        setMessage("Phoenix Down! Phoenix Down!");
      }
    }
    setName(isAdmin ? "Brandon Marcure" : "");
    setTitle("");
    setBlogText("");
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  return (
    <div className={mainDivClass}>
      <form onSubmit={handleSubmit} className={formClass}>
        <div className={inputGroupDivClass}>
          {message && <h1>{message}</h1>}
          <InputGroup
            label={{ text: "Name" }}
            labelClass={labelClasses}
            input={{
              text: "Name",
              value: name,
              onChange: handleChange,
              name: "name",
            }}
            text="Name"
            inputClass={inputClasses}
            inputDivClass={inline}
            labelDivClass={labelDivClasses}
            className={inline}
          />
          <br></br>
          <InputGroup
            label={{ text: "Title" }}
            labelClass={labelClasses}
            input={{
              text: "Title",
              value: title,
              onChange: handleChange,
              name: "title",
            }}
            inputClass={inputClasses}
            text="Title"
            inputDivClass={inline}
            labelDivClass={labelDivClasses}
            className={inline}
          />
        </div>
        <div>
          <textarea
            value={blogText}
            className={textAreaClass}
            onChange={handleChange}
            name="text"
          >
            {props.text}
          </textarea>
        </div>
        <div className={noBorder}>
          <Button text="Add" buttonClass={submitButtonClass} />
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
