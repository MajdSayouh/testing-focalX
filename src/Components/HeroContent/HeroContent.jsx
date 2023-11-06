import img3 from "./../../assets/img/Vector 9.png";
const HeroContent = (props) => {
  return (
    <div>
      <div className=" ma-hero-left">
        <p className="ma-courses-pThree">{props.pThree}</p>
        <div className="ma-courses-underline">{props.under}</div>
        <p>{props.pfour}</p>
        <h1>{props.hOne}</h1>
        <p>
          {props.pOne} <a href="">{props.a}</a>
        </p>
        <button>{props.button}</button>
        <div className="ma-hero-timer align-items-center">
          <div className=" w-25">
            <h1 className="ma-hero-50">{props.hTow}</h1>
            <p className="ma-bottom">{props.pTow}</p>
          </div>
          <img src={img3} alt="" className="ma-arrow" />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
