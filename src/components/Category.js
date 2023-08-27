import React from "react";

const Category = ({ id, title, onClick }) => {
  return <div onClick={onClick}>{title}</div>;
};

export default Category;
