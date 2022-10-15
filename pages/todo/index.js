import Frosty from "../../Components/UI/FrostedGlassDiv/Frosty";
import css from "./todo.module.css";
import { useSelector, useDispatch } from "react-redux";
import { TodoSliceActions } from "../../store/Redux/Store";
import Todo from "../../Components/Todo/Todo";
import Input from "../../Components/UI/Input/Input";
import Button from "../../Components/UI/Button/Button";
import BootStrapGridder from "../../Components/UI/BootStrap/BootStrapGridder";
import { Col } from "react-bootstrap";
const { resetCurrent, addItem, handleChange } = TodoSliceActions;

const TodoList = () => {
  const dispatch = useDispatch();
  const todoItems = useSelector((state) => state.TODO.todos);
  const todo = useSelector((state) => state.TODO.current);

  const changeHandler = (e, option) => {
    e.preventDefault();
    const newChar = e.target.value;
    dispatch(handleChange({ char: newChar, option: [option] }));
  };

  const addTodo = (e) => {
    e.preventDefault();
    dispatch(addItem({ item: todo.item, time: todo.time, time2: todo.time2 }));
    dispatch(resetCurrent({ item: "", time: "", time2: "" }));
  };

  return (
    <>
      <h1>Todos</h1>
      <BootStrapGridder>
        <Col xs="12" md="12" lg="12">
          <Input
            text={todo.item}
            placeholder="Item"
            onChange={(e) => {
              changeHandler(e, "item");
            }}
          />
        </Col>
        <Col xs="6">
          <Input
            text={todo.time}
            placeholder="Time"
            onChange={(e) => {
              changeHandler(e, "time");
            }}
          />
        </Col>
        <Col xs="6">
          <Input
            type="number"
            text={todo.time2}
            placeholder="PM/AM"
            onChange={(e) => {
              changeHandler(e, "time2");
            }}
          />
        </Col>
      </BootStrapGridder>
      <div className={css.buttonDiv}>
        <Button
          className={css.button}
          text="Add"
          onClick={(e) => {
            addTodo(e);
          }}
        />
      </div>

      <Frosty className={css.frosty}>
        <Todo items={todoItems} />
      </Frosty>
    </>
  );
};

export default TodoList;
