import React from "react";
import "./Main.css";
import "./fontawesome_5.15.1/css/all.css";
import "./fontawesome_5.15.1/css/brands.css";
import "./fontawesome_5.15.1/css/fontawesome.css";
import "./fontawesome_5.15.1/css/regular.css";
import "./fontawesome_5.15.1/css/solid.css";
import "./fontawesome_5.15.1/css/v4-shims.css";
import Products from "./Products";
const StartUp = () => {
  return (
    <div className="dontainer-fluid main-background">
      <div className="container">
        <Products />
      </div>
    </div>
  );
};

export default StartUp;
