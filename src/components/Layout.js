import React from "react";
import "./Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopBtn from "./ScrollToTopBtn";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <ScrollToTopBtn />
      <Footer />
    </div>
  );
};

export default Layout;
