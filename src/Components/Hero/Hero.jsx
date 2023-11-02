import "./Hero.css";
import img2 from "./../../assets/img/confident-sassy-young-bearded-gay-man-pink-t-shirt-shirt-hold-hand-waist-pointing-upper-left-corner-smiling-suggest-friends-visit-party-nearby 1.png";
import img3 from "./../../assets/img/Vector 9.png";
const Hero = () => {
  return (
    <div className="ma-hero">
      <div className=" container ma-hero-two ">
        <div className=" ma-hero-left">
          <h1>Explore thousands of hands-on creative classes.</h1>
          <p>
            Start learning for <a href="">free</a>
          </p>
          <button>Choose a cource</button>
          <div className="ma-hero-timer align-items-center">
            <div className=" w-25">
              <h1 className="ma-hero-50">50%</h1>
              <p>24 Days 17:44:16</p>
            </div>
            <img src={img3} alt="" />
          </div>
        </div>
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
