import React from 'react';
import g1 from '../assets/g1.jpeg';
import g2 from '../assets/g2.jpeg';
import go from '../assets/g3.jpeg';
import g4 from '../assets/g4.jpeg';
import g5 from '../assets/g5.jpeg';
import g6 from '../assets/g6.jpeg';
import g7 from '../assets/g7.jpeg';
import g8 from '../assets/g8.jpeg';
import g9 from '../assets/g9.jpeg';

const Gallery = () => {
    return (
        <div>
        <div className='bg-black mt-5 gallery-images'>
   
                <div className='container'>
              
                    <div className='row mt-5' >
                    <h2 className='text-white fw-light mt-5'>ART GALLERY</h2>
                        <div className='col-lg-4 col-md-12 mb-4 mb-lg-0'>
                            <div className='gallery-item'><img src={g1} class="gojo m-2" alt="..." /></div>
                            <div className='gallery-item '><img src={go} class="gojo  m-2" alt="..." /></div>
                            <div className='gallery-item'><img src={g2} class="gojo  m-2" alt="..." /></div>

                        </div>
                        <div className='col-lg-4 col-md-12 mb-4 mb-lg-0'>
                            <div className='gallery-item'><img src={g4} class="gojo  m-2" alt="..." /></div>
                            <div className='gallery-item'><img src={g5} class="gojo m-2" alt="..." /></div>
                            <div className='gallery-item'><img src={g6} class="gojo  m-2" alt="..." /></div>

                        </div>
                        <div className='col-lg-4 col-md-12 mb-4 mb-lg-0'>
                            <div className='gallery-item'><img src={g7} class="gojo  m-2" alt="..." /></div>
                            <div className='gallery-item'><img src={g8} class="gojo m-2" alt="..." /></div>
                            <div className='gallery-item'><img src={g9} class="gojo  m-2" alt="..." /></div>

                        </div>
                    </div>
                </div>
        </div>
      
        </div>
    );
}

export default Gallery;
