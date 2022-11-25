import React from "react";
import Awards from "../component/awards/Awards";
import Home from "../component/home/Home";
import Tasks from "../component/tasks/Tasks";
import Way from "../component/way/Way";
import Winners from "../component/winners/Winners";
import About from "../component/about/About";
import Subject from "../component/subject/Subject";
// import Testimonial from "../component/testimonial/Testimonial";
import Team from "../component/team/Team";
const HomePage = () => {
  return (
    <>
      <Home />
      <About />
      <Subject />
      <Awards />
      <Tasks />
      <Winners />
      <Way />
      <Team />
      {/* <Testimonial /> */}
    </>
  );
};

export default HomePage;
