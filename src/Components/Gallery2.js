import React from 'react';
import g1 from '../assets/g1.jpeg';
import g2 from '../assets/g2.jpeg';
import g3 from '../assets/g3.jpeg';
import g4 from '../assets/g4.jpeg';
import g5 from '../assets/g5.jpeg';
import g6 from '../assets/g6.jpeg';
import g7 from '../assets/g7.jpeg';
import g8 from '../assets/g8.jpeg';
import g9 from '../assets/g9.jpeg';

const Gallery2 = () => {
  return (
  <div className='bg-black mt-5'>
  <div className='container '>
      <div class="row">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0 mt-5">
    <img
      src={g1} 
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

    <img
      src={g2}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0 ">
   

    <img
      src={g4}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0 mt-5">
    <img
      src={g5}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <img
      src={g6}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>
  <div class="col-lg-4 mb-4 mb-lg-0 ">
    <img
      src={g7}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />
 <img
      src={g3}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />
    <img
      src={g8}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>
  <div class="col-lg-4 mb-4 mb-lg-0 mt-5">
    <img
      src={g9}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <img
      src={g1}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>
</div>
    </div>
  </div>
  );
}

export default Gallery2;
