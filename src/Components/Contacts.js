import React from 'react';

const Contacts = () => {
    return (
        <div>
            <div className='container'>
                <h1 className='main fw-light mt-4'>CONTACT US</h1>
                <hr className='line'></hr>
                <div className='row'>
                    <div className='col-lg-6'>
                        <p className='fw-bold'>Palais Royal<br></br> Musee du Louvre</p>
                        <p>Adress:75001 Paris, France</p>
                        <p>Phone:+33(0) 1 40 20 50 50 </p>
                        <p>Mail:info@louvre.fr</p>
                    </div>
                    <div className='col-lg-6'>
                        <div className='import'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11426922.61546134!2d-7.988112082935943!3d45.63523546072285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54a02933785731%3A0x6bfd3f96c747d9f7!2sFrance!5e0!3m2!1sen!2s!4v1721827852049!5m2!1sen!2s "height={300}width={400}       ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
