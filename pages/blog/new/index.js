import css from "./new.module.css";
import InputGroupSameLine from "../../../Components/UI/InputGroup/InputGroup";
import Frosty from "../../../Components/UI/FrostedGlassDiv/Frosty";

const NewBlog = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <Frosty className={css.color}>
      <form onClick={handleClick}>
        <div className={css.formInside}>
          <InputGroupSameLine
            label={{ text: "Title" }}
            input={{ text: "Title" }}
          />
        </div>
        <div>
          <InputGroupSameLine
            label={{ text: "Author" }}
            input={{ text: "Author" }}
          />
        </div>
        <div>
          <textarea></textarea>
        </div>

        <button>Add</button>
      </form>
    </Frosty>
  );
};

export default NewBlog;
