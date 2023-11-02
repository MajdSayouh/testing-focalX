import "./Training.css";
const Training = () => {
  return (
    <section className=" w-100 h-100 ">
      <div className="container d-flex flex-wrap  justify-content-between ma-training-section">
        <div className="ma-training-h">
          <h1>How is the training going</h1>
        </div>
        <div className=" d-flex flex-column align-items-center justify-content-center">
          <div className=" d-flex flex-wrap">
            <div className="ma-training-part">
              <h1>1.</h1>
              <div className="ma-training-underline"></div>
              <p>Study the material on the platform at any convenient time</p>
            </div>
            <div className="ma-training-part">
              <h1>2.</h1>
              <div className="ma-training-underline"></div>
              <p>Do practical tasks, get feedback and consolidate knowledge</p>
            </div>
          </div>
          <div className=" d-flex flex-wrap">
            <div className="ma-training-part">
              <h1>3.</h1>
              <div className="ma-training-underline"></div>
              <p>Prepare a project and add it to your portfolio</p>
            </div>
            <div className="ma-training-part">
              <h1>4.</h1>
              <div className="ma-training-underline"></div>
              <p>Prepare a project and add it to your portfolio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
