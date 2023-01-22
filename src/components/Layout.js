import React, { useState } from "react";
import LayoutDetail from "./LayoutDetail";

const Layout = (props) => {
  const changePage = (id) => {
    props.changePage(id);
  };
  return (
    <nav className="navbar navbar-expand-lg bg-light box-bottom-shadow">
      <div className="container-fluid">
        <ul className="navbar-nav">
          {props.pages.map((page) => {
            return (
              <LayoutDetail key={page.id} page={page} changePage={changePage} />
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Layout;
