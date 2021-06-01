import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";

import "../stylesheet/layout.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="layout-contents">{children}</div>
      <Navigation />
      <Footer />
    </div>
  );
};

export default Layout;
