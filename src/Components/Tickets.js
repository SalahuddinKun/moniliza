import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import g4 from '../assets/18+.jpeg';

const Tickets = () => {
  const [amount, setAmount] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const navigate = useNavigate();  

  const increaseAmount = () => setAmount(amount + 1);
  const decreaseAmount = () => setAmount(amount > 0 ? amount - 1 : 0);
  const increasAmount = () => setAmount2(amount2 + 1);
  const decreasAmount = () => setAmount2(amount2 > 0 ? amount2 - 1 : 0);

  const handleBuyNow = () => navigate('/confirmation');  

  return (
    <div>
      <div className='container'>
        <div>
          <h1 className='main fw-light mt-5'>BUY TICKETS</h1>
        </div>
        <hr className='line'></hr>
        <div className='row'>
          <div className='col-lg-4 col-md-6 col-sm-7 col-12'>
            <div className='text-center'>
              <img src={g4} className="geto m-2" alt="..." />
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-5 col-12'>
            <div className='row'>
              <div className=' col-lg-6 col-sm-6 col-12 col-md-6'>
                <div className='zoro'>
                  <h4 className=' fw-bold'>Ticket Type</h4>
                </div>
                <div className="zoro form-check mt-4">
                  <input className=" form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Permanent exhibition
                  </label>
                </div>
                <div className=" zoro form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Temporary exhibition
                  </label>
                </div>
                <div className="zoro form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                  <label className="form-check-label" htmlFor="flexRadioDefault3">
                    Combined Admission
                  </label>
                </div>
              </div>
              <div className=' col-lg-6 col-sm-6 col-12 col-md-6'>
                <div className='gohan'>
                  <h4 className=' fw-bold'>Amount</h4>
                </div>
                <div className='gohan'>
                  <a className=' uni text-black fw-light'>Basic 18+</a>
                </div>
                <div className=" gohan d-flex" role="group" aria-label="Amount control">
                  <button type="button" className="btn btn-secondary" onClick={decreaseAmount}>-</button>
                  <input
                    type="text"
                    value={amount}
                    readOnly
                    className=" form-control text-center"
                    style={{ width: '50px' }}
                  />
                  <button type="button" className="btn btn-secondary" onClick={increaseAmount}>+</button>
                </div>
                <div className='gohan'>
                  <a className='d-block uni text-black fw-light'>Senior 65+</a>
                </div>
                <div className="gohan d-flex" role="group" aria-label="Amount control">
                  <button type="button" className="btn btn-secondary" onClick={decreasAmount}>-</button>
                  <input
                    type="text"
                    value={amount2}
                    readOnly
                    className="form-control text-center"
                    style={{ width: '50px' }}
                  />
                  <button type="button" className="btn btn-secondary" onClick={increasAmount}>+</button>
                </div>
                <div className='gohan'>
                  <p className='fw-bold mt-4'>Total €220</p>
                </div>
                <div className='gohan'>
                  <button className='btn btn-dark mt-3' onClick={handleBuyNow}>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='long mt-5'></div>
    </div>
  );
}

export default Tickets;
