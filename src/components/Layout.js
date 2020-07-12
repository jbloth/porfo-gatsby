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
      <Header />
      {children}
      <ScrollToTopBtn />
      <Footer />
    </>
  );
};

export default Layout;
