import React from "react";

const Table = (props) => {
  return <table className={props.className}>{props.children}</table>;
};

export default Table;
