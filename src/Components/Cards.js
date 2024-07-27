import React from 'react';
import myImage from '../assets/card.jpeg';
import myImage2 from '../assets/card2.jpeg';
import myImage3 from '../assets/card3.jpeg';
import myImage4 from '../assets/card4.jpeg';
import myImage5 from '../assets/card5.jpeg';
import myImage6 from '../assets/card6.jpeg';

const Cards = () => {
    return (
        <div className='container '>
            <h1 className='main fw-light mt-4'>Virtual Tour</h1>
            <hr className='line'></hr>
           <div className='container'>
           <div className='d-flex justify-content-center'>  
            <div className='row'>
               <div className='d-flex justify-content-center col-12 col-md-6 col-lg-4'>
            <div className="card">
             <div className='text-center'>
             <img src={myImage} className="card-img-top" alt="..." />
             </div>
                <div className="card-body">
                    <a className="underline text-black fw-100 ">ROYAL PALACE</a>
                    <a className="mt-2 uni card-text d-block text-black fw-light"> 360° Virtual Tour</a>
                    <a className="uni card-text fw-light text-black"> Google Street Panorama View</a>
                </div>
            </div>
            </div>
            <div className='d-flex justify-content-center col-12 col-md-6 col-lg-4'>
            <div className="card">
                <img src={myImage2} className="card-img-top" alt="..." />
                <div className="card-body">
                    <a className="underline text-black fw-100 ">DENON WING</a>
                    <a className="mt-2 uni card-text d-block text-black fw-light"> 360° Virtual Tour</a>
                  <a className="uni card-text fw-light text-black"> Google Street Panorama View</a>
                </div>
            </div>
            </div>
            <div className='d-flex justify-content-center col-12 col-md-6 col-lg-4'>
            <div className="card">
                <img src={myImage3} className="card-img-top" alt="..." />
                <div className="card-body">
                    <a className="underline text-black fw-100 ">COLONNADE PERRAULT</a>
                    <a className="mt-2 uni card-text d-block text-black fw-light"> 360° Virtual Tour</a>
                    <a className="uni card-text fw-light text-black"> Google Street Panorama View</a>
                
                </div>
            </div>
            </div>
          
               <div className='d-flex justify-content-center col-12 col-md-6 col-lg-4'>
            <div className="card">
                <img src={myImage4} className="card-img-top" alt="..." />
                <div className="card-body">
                    <a className="underline text-black fw-100 ">GREEK HALL</a>
                    <a className="mt-2 uni card-text d-block text-black fw-light"> 360° Virtual Tour</a>
                    <a className="uni card-text fw-light text-black"> Google Street Panorama View</a>
                </div>
            </div>
            </div>
            <div className='d-flex justify-content-center col-12 col-md-6 col-lg-4'>
            <div className="card">
                <img src={myImage5} className="card-img-top" alt="..." />
                <div className="card-body">
                    <a className="underline text-black fw-100 ">MONA LISA</a>
                    <a className="mt-2 uni card-text d-block text-black fw-light"> 360° Virtual Tour</a>
                    <a className="uni card-text fw-light text-black"> Google Street Panorama View</a>
                
                </div>
            </div>
            </div>
            <div className='d-flex justify-content-center col-12 col-md-6 col-lg-4'>
            <div className="card">
                <img src={myImage6} className="card-img-top" alt="..." />
                <div className="card-body">
                    <a className="underline text-black fw-100 ">NIGHT PALACE</a>
                    <a className="mt-2 uni card-text d-block text-black fw-light"> 360° Virtual Tour</a>
                    <a className="uni card-text fw-light text-black"> Google Street Panorama View</a>
                
                </div>
            </div>
            </div>
            </div>
               
            </div>
           </div>
        </div>

    );
}

export default Cards;
