import css from "./BlogCard.module.css";
import TextBox from "../../UI/Text/TextBox";
import Frosty from "../../UI/FrostedGlassDiv/Frosty";

const BlogCard = (props) => {
  return <Frosty className={css.blogCard}>{props.children}</Frosty>;
};

const FlipCard = (props) => {
  return (
    <div className={css.flipCard}>
      <div className={css.inner}>
        <div className={css.frontSide}>
          <BlogCard>
            <TextBox type="heading" text={props.title} className={css.title} />
            <TextBox text={`~${props.author}`} className={css.author} />
          </BlogCard>
        </div>
        <div className={css.backSide}>
          <BlogCard>
            <TextBox type="paragraph" text={props.body} className={css.body} />
          </BlogCard>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
