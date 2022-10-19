import css from "./DropDownContainer.module.css";
import Item from "./Item/Item";
import {
  useClass,
  useSelect,
} from "../../../../../../Merkurial/hooks/usehooks";

const DropDownContainer = (props) => {
  const { theme, styles } = useSelect("THEME");
  const { GENERAL, BORDERS, NAVIGATION } = styles;
  const { dropDownContainer } = NAVIGATION;
  const classes = useClass([css.container, dropDownContainer]);
  return (
    <div className={classes} onClick={props.onClick}>
      {props.show &&
        props.items.map((item, index) => {
          let classes = `${css.item} `;
          if (index === props.items.length - 1) {
            classes += css.bottomBorder;
          }
          return (
            <Item
              key={item}
              text={item}
              className={classes}
              updateTop={props.updateTop}
            />
          );
        })}
    </div>
  );
};

export default DropDownContainer;
