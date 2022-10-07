import css from "./Todo.module.css";
import TodoList from "./TodoList";

const Todo = (props) => {
  return (
    <div className={css.todoTable}>
      {props.items.length > 0 && (
        <table className={css.table}>
          <tbody>
            <tr>
              <th className={css.num}>#</th>
              <th className={css.item}>Item</th>
              <th className={css.time}>Time</th>
              <th className={css.format}>AM/PM</th>
            </tr>
            <TodoList items={props.items} />
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Todo;
