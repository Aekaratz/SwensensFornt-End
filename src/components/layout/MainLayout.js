import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "calc(130vh - 420px)" }}>{children}</div>
      <Footer />
    </>
  );
}
