import React from "react";
import Hero from "../components/Hero";
import Popular from "../components/Popular";
import NewCollection from "../components/NewCollection";
import Offer from "../components/Offer";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Offer />
      <NewCollection />
      <Newsletter />
    </>
  );
};

export default Home;
