import React from 'react'

function FAQ() {
  return (
    <div>



<div className="container-fluid re-customer ">
      <div className="mb-2 text-center py-5 text-white">
        <h2>SEE WHY CUSTOMERS LOVE THE OUR MOBILES</h2>
        <p>DESIGNED TO PERFECTION</p>
      </div>
      <div className=" ro-accordion container">
        <div>
          <img src="./assets/images/bg-1.png" alt="mobile" className="img-fluid" />
        </div>
        <div className="">
          <div className="accordion" id="myAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse"
                  data-bs-target="#collapseOne">NEW GRADIENT COLOR FINISHES?</button>
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
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button type="button" className="accordion-button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo">FOUR-SIDED CURVED CERAMIC BODY</button>
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
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree">4000MAH HIGH-CAPACITY BATTERY</button>
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

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree">FULLY HIDDEN CAMERA LENS</button>
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


    </div>
    </div>
  )
}

export default FAQ