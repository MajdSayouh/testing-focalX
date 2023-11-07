import Footer from "../../Footer/Footer";
import HeroCourses from "../../HeroCourses/HeroCourses";
import Nav from "../../Nav/Nav";
import Platform from "../../Platform/Platform";
import Program from "../../Program/Program";
import Slider from "../../Slider/Slider";
import WhatLearn from "../../WhatLearn/WhatLearn";

const Courses = () => {
  return (
    <div>
      <Nav />
      <HeroCourses />
      <Platform />
      <WhatLearn />
      <Slider />
      <Program />
      <Footer />
    </div>
  );
};

export default Courses;
