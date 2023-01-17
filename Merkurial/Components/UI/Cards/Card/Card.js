const Card = (props) => {
  return (
    <div id={props.id} className={props.className}>
      <h1>{props.text}</h1>
    </div>
  );
};

export default Card;
