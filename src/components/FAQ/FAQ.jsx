import React from 'react';
import "./css/FAQ.css";
import { QAnswer } from '../QAnswer/QAnswer';

function FAQ() {
  return (
    <div>


      <div className=" ro-accordion ">
        {/* title section */}
        <h2 className="RO-AccordionTitle">FAQ</h2>


        <div className="accordion" id="myAccordion">

         

          <QAnswer qusetion="Omnis voluptas assumenda est, omnis dolor repellendus?" answer="lorem lorem"></QAnswer>
          <QAnswer qusetion="Rerum hic tenetur a sapiente delectus?" answer="lorem loem"></QAnswer>
          <QAnswer qusetion="Alias consequatur aut perferendis doloribus asperiores repellat?" answer="lorem lorem"></QAnswer>
          <QAnswer qusetion="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi?" answer="lorem"></QAnswer>


       

          

          
        </div>

      </div>



    </div>
  )
}

export default FAQ