import css from "./BlogCard.module.css";
import TextBox from "../../UI/Text/TextBox";
import { useSelect, useClass } from "../../../Merkurial/hooks/usehooks";
import { useRouter } from "next/router";
import { SAVE_TO_LOCAL_STORAGE } from "../../../Merkurial/API_STORAGE/STORAGE/HANDLE_STORAGE";
import { LINKIFY } from "../../../Merkurial/Helpers/Text/Linkify";

const BlogCard = (props) => {
  const transparentCardClass = useClass([css.blogCard]);
  return <div className={transparentCardClass}>{props.children}</div>;
};

const BlogCardContainer = (props) => {
  const flipCardClass = useClass([props.className, css.flipCard]);
  const innerDivClass = useClass([props.inner, css.inner]);
  return (
    <div className={flipCardClass} onClick={props.onClick}>
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

const FlipCard = (props) => {
  const { animations } = useSelect("THEME");
  const { FLIPCARD } = animations;
  const { back, front, flipY180, inner3D, threeD, card } = FLIPCARD;
  const backSide = useClass([back]);
  const frontSide = useClass([front]);
  const containerClass = useClass([flipY180, threeD]);
  const innerContainerClass = useClass([card, threeD]);
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    const title = props.title;
    let link = props.title;
    if (link.includes("#")) {
      link = link.replace("#", "number");
    }
    link = LINKIFY(link, "blog");
    link = link + "-id-" + props._id;
    const query = {
      author: props.author,
      body: props.body,
      _id: props._id,
      title: title,
    };

    const routerParams = {
      pathname: link,
      query: {
        author: props.author,
        body: props.body,
        _id: props._id,
        title: title,
        data: props.date,
      },
    };
    const storageData = { ...query, link: link };

    SAVE_TO_LOCAL_STORAGE(storageData, "latestBlog");

    router.push(routerParams, link);
  };
  return (
    <BlogCardContainer
      className={containerClass}
      inner={innerContainerClass}
      onClick={handleClick}
    >
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
