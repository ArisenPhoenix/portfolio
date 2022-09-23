import css from "./Stack.module.css";

const Stack = (props) => {
  const stack = props.stack;

  return (
    <table className={css.table}>
      <tbody>
        {stack.map((item, index) => {
          if (index % 2 === 0) {
            const item1 = stack[index];
            const item2 = stack[index + 1];
            return (
              <tr key={`Row| ${index} ${item1} & ${item2}`}>
                <td>{item1}</td>
                <td>{item2}</td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
};

export default Stack;
