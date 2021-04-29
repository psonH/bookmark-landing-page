import React from "react";
import Banner from "./components/Banner";
import Downloads from "./components/Downloads";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

const App = () => {
  return (
    <>
      <Menu />
      <Banner />
      <Features />
      <Downloads />
      <FAQ />
      <Footer />
    </>
  );
};

export default App;
