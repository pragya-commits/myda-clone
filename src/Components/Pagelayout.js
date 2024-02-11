import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function PageLayout({ children }) {
  return (
    <div>
      <Navbar />
      {/* CONTENT HERE */}
      {children}
      <Footer />
    </div>
  );
}

export default PageLayout;
