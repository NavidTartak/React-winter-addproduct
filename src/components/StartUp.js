import React, { useState } from "react";
import "./Main.css";
import "./fontawesome_5.15.1/css/all.css";
import "./fontawesome_5.15.1/css/brands.css";
import "./fontawesome_5.15.1/css/fontawesome.css";
import "./fontawesome_5.15.1/css/regular.css";
import "./fontawesome_5.15.1/css/solid.css";
import "./fontawesome_5.15.1/css/v4-shims.css";
import Products from "./Products";
import Counter from "./Counter";
import Layout from "./Layout";
const StartUp = () => {
  const [page, setPage] = useState({
    pages: [
      { id: 1, name: "Products", componentName: <Products />, active: true },
      { id: 2, name: "Counter", componentName: <Counter />, active: false },
    ],
    activeComponent: <Products />,
  });
  const changePage = (id) => {
    const newPages = page.pages.map((p) => {
      if (p.id == id) {
        return {
          id: p.id,
          name: p.name,
          componentName: p.componentName,
          active: true,
        };
      }
      return {
        id: p.id,
        name: p.name,
        componentName: p.componentName,
        active: false,
      };
    });
    setPage({
      pages: newPages,
      activeComponent:
        newPages[newPages.findIndex((x) => x.id == id)].componentName,
    });
  };
  return (
    <div className="container-fluid main-background">
      <Layout changePage={changePage} pages={page.pages} />
      <div className="container">{page.activeComponent}</div>
    </div>
  );
};

export default StartUp;
