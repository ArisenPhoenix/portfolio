import css from "./DropDownContainer.module.css";
import Item from "./Item/Item";

const DropDownContainer = (props) => {
  const classes = `${css.container}`;

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
