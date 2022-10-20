import css from "./individualBlog.module.css";
import Card from "../../UI/Card/Card";
import { useRouter } from "next/router";
import { useClass, useSelect } from "../../../Merkurial/hooks/usehooks";
import { RETREIVE_FROM_LOCAL_STORAGE } from "../../../Merkurial/API_STORAGE/STORAGe/HANDLE_STORAGE";
import { useEffect, useState } from "react";

const IndividualBlog = (props) => {
  let query = useRouter().query;
  const [post, setPost] = useState(query);

  useEffect(() => {
    if (
      !query.body ||
      !query.title ||
      !query._id ||
      !query.link ||
      !query.author
    ) {
      query = RETREIVE_FROM_LOCAL_STORAGE("latestBlog");
      setPost(query);
    }
  }, []);

  const { theme, styles } = useSelect("THEME");
  const { bg, text, bgGlass } = theme;

  const { GENERAL, BORDERS, SPACING, DIMENSIONS } = styles;
  const { lgMT, lgPT, mdPY, smPY } = SPACING;
  const { twoThirdX, wholeY, wholeVY } = DIMENSIONS;
  const { solid, roundgold, roundsilver } = BORDERS;
  const { centerAll } = GENERAL;
  const container = useClass([bg, text, lgPT, wholeVY, css.bg]);
  const mainCardClass = useClass([
    solid,
    centerAll,
    twoThirdX,
    roundsilver,
    smPY,
    bgGlass,
    css.card,
  ]);
  const textDiv = useClass([bgGlass]);

  return (
    <div className={container}>
      <Card id={post._id} className={mainCardClass}>
        <div className={textDiv}>
          <h1 className={bgGlass}>{post.title}</h1>

          <p>{post.body}</p>
          <p>{post.author}</p>
        </div>
      </Card>
    </div>
  );
};

export default IndividualBlog;
