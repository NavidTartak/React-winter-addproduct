import React from "react";

const LayoutDetail = (props) => {
  const changePageHandler = () => {
    props.changePage(props.page.id);
  };
  if (props.page.active) {
    return (
      <li className="nav-item">
        <span
          onClick={changePageHandler}
          className="nav-link active cursor-pointer"
          aria-current="page"
        >
          {props.page.name}
        </span>
      </li>
    );
  }
  return (
    <li className="nav-item">
      <span
        onClick={changePageHandler}
        className="nav-link cursor-pointer"
        aria-current="page"
      >
        {props.page.name}
      </span>
    </li>
  );
};

export default LayoutDetail;
