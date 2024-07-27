import React from 'react';
import myImage8 from '../assets/convert.PNG';
const Section = () => {
  return (
    <div className='bg-black'>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-6'>
                <h1 className='heading mt-5 text-white fw-light'>PICTURE EXPLORE</h1>
                <p className='mt-4 text-white fw-light'>Las Meninas is a 1656 painting by Diego Velázquez, the leading artist of the Spanish Golden Age.<br></br>
                <br></br>
                It was cleaned in 1984 to remove a <span className='text-warning'>"yellow veil"</span> of dust that had gathered since the previous restoration in the 19th century.<br></br>
               <br></br>
                The cleaning provoked furious protests, not because the picture had been damaged in any way, but because it looked different.</p>
            </div>
            <div className='col-lg-6'>
            <img src={myImage8} className="mt-5 card-img-top mb-5" alt="..." />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
