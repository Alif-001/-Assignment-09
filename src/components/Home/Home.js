import React from "react";

import ServicesForHome from "../Home/ServiceForHome";
import Heading from "../../components/Heading/Heading";
import About from "../About/About";

// heading page
const Home = () => {
  return (
    <div>
      <Heading></Heading>
      <ServicesForHome></ServicesForHome>
      <About></About>
    </div>
  );
};

export default Home;
