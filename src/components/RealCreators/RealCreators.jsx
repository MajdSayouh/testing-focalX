import React from 'react';
import IconRight from "./assets/images/IconRight.svg";
import CardRealCreators from '../CardRealCreators/CardRealCreators';
import JeffImg from "./assets/images/Jeff.png";
import JakeImg from "./assets/images/JakeBartlett.png";
import JoriImg from "./assets/images/jorikkleen.png";
import laurImg from "./assets/images/laurence-cruz.png";
import "./assets/css/RealCreators.css";



function RealCreators() {
    return (

        <div className=' Creators'>
            {/* title and text under title  */}
            <h2 className="RO-SectionTitle">Classes Taught by Real Creators</h2>
            <div className='d-flex RO-CreatorMarginP'>
                <p className='CreatorTitleP'>Lorem teachers are icons, experts, and industry rock stars excited to share their experience, wisdom, and trusted tools with you</p>
                <button className='CreatorButton'>See more  <img src={IconRight} alt="Icon right arrow" /></button>
            </div>


            {/* cards */}
            <div className='RO-CreatorCards'>
                <div>
                    <CardRealCreators image={JoriImg} name="Jessica Hische" career="Illustrator" path="#" />
                </div>
                <div className='RO-Card2'>
                    <CardRealCreators image={laurImg} name="Jeff Staple" career="Photographer" path="#" />
                </div>
                <div>
                    <CardRealCreators image={JeffImg} name="Aaron Draplin" career="Programmer" path="#" />
                </div>
                <div className='RO-Card2'>
                    <CardRealCreators image={JakeImg} name="Jake Bartlett" career="Motion Designer" path="#" />
                </div>
            </div>
        </div>







    )
}

export default RealCreators