import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='bg-black mt-5'>
                <div className='container'>
                    <div className='row '>
                        <div className='col-lg-2'>
                            <p className='text-white mt-4 fw-light'>Louvre</p>
                        </div>
                        <div className='col-2 '>
                            <ul className='sakura mt-4'>
                                <li className='text-white fw-light'>Visiting</li>
                                <li className='text-white  fw-light'>Explore</li>
                                <li className='text-white  fw-light'>Video</li>

                            </ul>
                        </div>
                        <div className='col-2 '>
                            <ul className='sakura mt-4'>
                                <li className='text-white fw-light'>Gallery</li>
                                <li className='text-white  fw-light'>Tickets</li>
                                <li className='text-white  fw-light'>Contacts</li>

                            </ul>
                        </div>
                        <div className='col-lg-6'>
                            <div className='flex mt-5  '>
                                <i className="text-white bi bi-youtube"></i>
                                <i className="text-white bi bi-instagram ms-3"></i>
                                <i className=" text-white bi bi-facebook ms-3"></i>
                                <i className=" text-white bi bi-twitter ms-3"></i>
                                <i className="text-white bi bi-pinterest ms-3"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='end bg-black'>
               <div className='container'>
               <div className='last mt-3'>
                <p className='text-white fw-light'>&copy;2021</p>
                <p className='text-white fw-light'>The Rolling Scopes School</p>
                <p className='text-white fw-light'>Username</p>
                </div>
               </div>
            </div>
        </div>
    );
}

export default Footer;
