import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="px-4 pt-4 bg-champagne">
        <Navbar />
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
