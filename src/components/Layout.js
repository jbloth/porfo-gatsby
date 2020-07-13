import React from "react";

import "./Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopBtn from "./ScrollToTopBtn";
import Metas from "./Metas";

const Layout = ({ children }) => {
  return (
    <>
      <Metas />
      <div className="site">
        <Header />
        <div className="site-content">{children}</div>
        <ScrollToTopBtn />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
