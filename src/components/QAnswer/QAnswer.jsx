import React from 'react'
import "./QAnswer.css";

export const QAnswer = (props) => {
    const {btn,qusetion,answer} = props;

  return (
    <div>
       <div className="accordion-item">
            <div className="accordion-header" id="headingOne">

              <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse"
                data-bs-target="#collapseOne">

                  <button> {btn}</button>
                  <p>{qusetion}</p>
                
                </button>
            </div>
            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
              <div className="card-body">
                <p>{answer}</p>
              </div>
            </div>
          </div>


    </div>
  )
}
