import React from "react";
import Navbar from "../../components/header/Navbar";
import HomeFooter from "../../components/Hero/HomeFooter/HomeFooter";
import HomeHero from "../../components/Hero/HomeHero";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeHero />
      <HomeFooter />
    </>
  );
};

export default Home;
