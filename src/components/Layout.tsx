import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="px-8 pt-8 bg-champagne">
        <Navbar></Navbar>
      </div>

      {children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
