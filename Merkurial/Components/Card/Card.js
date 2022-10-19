const Card = (props) => {
  return (
    <div id={props.id}>
      <h1>{props.text}</h1>
    </div>
  );
};

export default Card;
