import css from "./BlogCard.module.css";
import TextBox from "../../UI/Text/TextBox";
import { useClass, useSelect } from "../../../Mercury/hooks/usehooks";

const BlogCard = (props) => {
  const transparentCardClass = useClass([css.blogCard, props.className]);
  return <div className={transparentCardClass}>{props.children}</div>;
};

const BlogCardContainer = (props) => {
  const flipCardClass = useClass([props.className, css.flipCard]);
  const innerDivClass = useClass([props.inner, css.inner]);
  return (
    <div className={flipCardClass}>
      <div className={innerDivClass}>{props.children}</div>
    </div>
  );
};

const FrontSide = (props) => {
  const classes = useClass([props.className]);
  return (
    <div className={classes}>
      <BlogCard>
        <TextBox type="heading" text={props.text1} className={css.title} />
        <TextBox text={`~ ${props.text2}`} className={css.author} />
      </BlogCard>
    </div>
  );
};

const BackSide = (props) => {
  const classes = useClass([props.className]);
  return (
    <div className={classes}>
      <BlogCard>
        <TextBox type="paragraph" text={props.body} className={css.body} />
      </BlogCard>
    </div>
  );
};

// const OuterBlogCard = () =>

const FlipCard = (props) => {
  const { theme, styles, animations } = useSelect("THEME");
  const { FLIPCARD } = animations;
  const { bgGlass, text } = theme;
  const { back, front, flipY180, inner3D, threeD, card } = FLIPCARD;
  const backSide = useClass([back, text]);
  const frontSide = useClass([front, text]);
  const containerClass = useClass([flipY180, threeD]);
  const innerContainerClass = useClass([card]);
  return (
    <BlogCardContainer className={containerClass} inner={innerContainerClass}>
      <FrontSide
        text1={props.title}
        text2={props.author}
        className={frontSide}
      />
      <BackSide body={props.body} className={backSide} />
    </BlogCardContainer>
  );
};

export default FlipCard;
