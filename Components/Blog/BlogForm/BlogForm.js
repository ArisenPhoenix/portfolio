import { useState } from "react";
import Button from "../../UI/Button/Button";
import { useClass, useSelect } from "../../../Merkurial/hooks/usehooks";
import FETCH from "../../../Merkurial/Helpers/FETCH";
import { BlogSliceActions } from "../../../Merkurial/store/Redux/Store";
import InputGroup from "../../UI/InputGroup/InputGroup";

const BlogForm = (props) => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [blogText, setBlogText] = useState("");

  const { addBlog } = BlogSliceActions;

  const { theme, styles } = useSelect("THEME");
  const { bg, text, bgGlass, textGlass } = theme;
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
    const data = {
      author: name,
      title: title,
      body: blogText,
    };

    addBlog(data);
    e.preventDefault();
    const info = await FETCH("/api/blogs", "POST", data, "ADD BLOG FORM");
  };

  return (
    <div className={mainDivClass}>
      <form onSubmit={handleSubmit} className={formClass}>
        <div className={inputGroupDivClass}>
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
