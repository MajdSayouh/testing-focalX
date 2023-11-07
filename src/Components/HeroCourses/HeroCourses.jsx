import HeroContent from "../HeroContent/HeroContent";
import "./HeroCourses.css";
import img10 from "./../../assets/img/business-finance-employment-female-successful-entrepreneurs-concept-confident-smiling-asian-businesswoman-office-worker-white-suit-glasses-using-laptop-help-clients 1.png";
const HeroCourses = () => {
  return (
    <div className="ma-hero">
      <div className=" container ma-hero-two ">
        <HeroContent
          pThree="6 months"
          pfour="profession:"
          under=""
          hOne="UI/UX designer "
          pOne=" You will learn how to create a brand identity on the web and for printing. Learn how to work in Illustrator, Photoshop, InDesign and Figma.
          Add posters, logos, merch design and other strong projects to your portfolio. Start a career in the studio or freelance."
          button="Started"
          hTow="25%"
          pTow="24 Days 17:44:16"
        />
        <div className="ma-hero-right">
          <img src={img10} alt="" className="img2" />
          <div className="ma-hero-btn position-relative">
            <button className="ma-hero-btn7">InVision</button>
            <button className="ma-hero-btn8">ProtoPie</button>
            <button className="ma-hero-btn9">Miro</button>
            <button className="ma-hero-btn10">Photoshop</button>
            <button className="ma-hero-btn11">Figma</button>
            <button className="ma-hero-btn12">Illustrator</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCourses;
