import React from 'react';
import "./css/FAQ.css";

function FAQ() {
  return (
    <div>


      <div className=" ro-accordion ">
        {/* title section */}
        <h2 className="RO-AccordionTitle">FAQ</h2>


        <div className="accordion" id="myAccordion">

          {/* first element */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse"
                data-bs-target="#collapseOne">Omnis voluptas assumenda est, omnis dolor repellendus?</button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
              <div className="card-body">
                <p>Rierem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui official.</p>
              </div>
            </div>
          </div>

          <hr />

          {/* second element */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button type="button" className="accordion-button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo">Rerum hic tenetur a sapiente delectus?</button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse show" data-bs-parent="#myAccordion">
              <div className="card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla </p>
              </div>
            </div>
          </div>

          <hr />

          {/* third element */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse"
                data-bs-target="#collapseThree">Alias consequatur aut perferendis doloribus asperiores repellat?</button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
              <div className="card-body">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam pariatur quam consequatur?
                  Cumque, velit doloribus eos reiciendis ipsum at maxime placeat harum sit suscipit odit a laborum,
                  repudiandae iste corrupti cupiditate doloremque. Corporis rem officiis, sed minima laudantium
                  aperiam cupiditate quis voluptatibus molestias voluptas.</p>
              </div>
            </div>
          </div>
          <hr />

          {/* element 4 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse"
                data-bs-target="#collapseThree">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi?</button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
              <div className="card-body">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam pariatur quam consequatur?
                  Cumque, velit doloribus eos reiciendis ipsum at maxime placeat harum sit suscipit odit a laborum,
                  repudiandae iste corrupti cupiditate doloremque. Corporis rem officiis, sed minima laudantium
                  aperiam cupiditate quis voluptatibus molestias voluptas.</p>
              </div>
            </div>
          </div>
        </div>

      </div>



    </div>
  )
}

export default FAQ