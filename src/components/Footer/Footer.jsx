import React from 'react';
// import {
//   MDBFooter,
//   MDBContainer,
//   MDBCol,
//   MDBRow
// } from 'mdb-react-ui-kit';
import logo from "./assets/images/logo.png";
import "./assets/css/Footer.css";






function Footer() {
  return (

 <>

<div bgColor='light' className='text-center text-lg-left'>
      <div className='p-4'>
        <div className='RO-footer'>
          <div lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Links</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-dark'>
                  Link 1
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Link 2
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Link 3
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Link 4
                </a>
              </li>
            </ul>
          </div>

          <div lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Courses</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-dark'>
                Animation
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                Design
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                Illustration                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                Programming                </a>
              </li>

              <li>
                <a href='#!' className='text-dark'>
                Marketing               </a>
              </li>

              <li>
                <a href='#!' className='text-dark'>
                Photo & Film               </a>
              </li>

            </ul>
          </div>

          <div lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Teachers</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-dark'>
                All Teachers                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                Become a Teacher                </a>
              </li>
             
            </ul>
          </div>

          <div lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Information</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-dark'>
                Blog                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                About us                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                FAQ                </a>
              </li>
              
            </ul>
          </div>

          <div lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>En</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-dark'>
                English                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                French                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                Russian                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
    <span> Policy privacy </span> <span>Copyright 2022. All rights reserved</span>
       
      </div>
    </div>


 
 </>
  )

}

export default Footer