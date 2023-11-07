import "./Hero.css";
import img2 from "./../../assets/img/confident-sassy-young-bearded-gay-man-pink-t-shirt-shirt-hold-hand-waist-pointing-upper-left-corner-smiling-suggest-friends-visit-party-nearby 1.png";
import HeroContent from "../HeroContent/HeroContent";
const Hero = () => {
  return (
    <div className="ma-hero">
      <div className=" container ma-hero-two ">
        <HeroContent
          hOne="Explore thousands of hands-on creative classes."
          pOne=" Start learning for"
          a="free"
          button="Choose a cource"
          hTow="50%"
          pTow="24 Days 17:44:16"
        />

        <div className="ma-hero-right">
          <img src={img2} alt="" />
          <div className="ma-hero-btn position-relative">
            <button className="ma-hero-btn1">Marketer</button>
            <button className="ma-hero-btn2">Illustrator</button>
            <button className="ma-hero-btn3">Animator</button>
            <button className="ma-hero-btn4">Programmer</button>
            <button className="ma-hero-btn5">Designer</button>
            <button className="ma-hero-btn6">Photographer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
