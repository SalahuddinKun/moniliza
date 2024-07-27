import React from 'react';
const Header = () => {
   
    return (
        <>
            <div className='bg-black'>
                <div className='container'>
                    <nav className="navbar navbar-expand-lg bg-black">
                        <div className="container-fluid">
                            <a className="navbar-brand text-white" href="#">Louvre</a>
                            <button className="navbar-toggler bg-black " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon "></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link text-white fw-light" aria-current="page" href="#">Visiting</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white fw-light" >Explore</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white fw-light" >Video</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white fw-light" >Gallery</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white fw-light" >Tickets</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white fw-light" >Contacts</a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                    {/* <div className='row '>
                        <div className='mt-4 col-3'>
                            <h1 className='text-white mt-4 '>Welcome <br></br>To The Louvre</h1>
                            <p className='text-white'>From the castle to the museum</p>
                            <button className='btn btn-danger'>Discover the Louvre</button>
                        </div>
                        <div className='col-9 image'style={bgstyle}>
                         crfmdkjfkitiano ronaldo
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}
/* 1 */




export default Header;
