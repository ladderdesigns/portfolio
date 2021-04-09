import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
