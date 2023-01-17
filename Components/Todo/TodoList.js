import css from "./TodoList.module.css";
import { useDispatch } from "react-redux";
// import { TodoSliceActions } from "../../Merkurial/store/Redux/Store";
import { TodoSliceActions } from "../../store/Redux/Store";
const { removeItem } = TodoSliceActions;

const TodoList = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      {props.items?.map((item, index) => {
        return (
          <tr
            key={`DIV: ${index} |  ${item.item} | ${item.time}`}
            onClick={(e) => dispatch(removeItem(index))}
          >
            <td>
              <p>{index + 1}</p>
            </td>
            <td>
              <p className={css.text} key={`${index}: ${item.item}`} id={index}>
                {item.item}
              </p>
            </td>
            <td>
              <p className={css.text} key={`${index}: ${item.time}`} id={index}>
                {item.time}
              </p>
            </td>
            <td>
              <p
                className={css.text}
                key={`${index}: ${item.time2s}`}
                id={index}
              >
                {item.time2}
              </p>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default TodoList;
