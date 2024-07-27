import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaCalendarDay, FaClock, FaUser, FaMailBulk, FaPhone, FaTicketAlt, FaChevronDown } from 'react-icons/fa';
import '@fortawesome/fontawesome-free/css/all.min.css';
import gojo from '../assets/end.jpeg';
import visa from '../assets/visa.png';
 
const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 154%;  
  justify-content: space-between;
  position: relative;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
  display: ${props => (props.open ? 'block' : 'none')};
`;

const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const DropdownItemIcon = styled.span`
  margin-right: 10px;
`;

const DropdownArrow = styled(FaChevronDown)`
  margin-left: 10px;
  transition: transform 0.3s ease;
  transform: ${props => (props.open ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const DropdownIcon = styled(FaTicketAlt)`
  margin-right: 10px;
`;

 
const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Icon = styled(FaCalendarDay)`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
`;

const Icon2 = styled(FaClock)`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
`;

const Icon3 = styled(FaUser)`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
`;

const Icon4 = styled(FaMailBulk)`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
`;

const Icon5 = styled(FaPhone)`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
`;

const Input = styled.input`
  padding-left: 40px;
  width: 133%; 
  height: 40px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const InputSmall = styled(Input)`
  width: 10rem; 
`;

const BuyTickets = () => {
  const [amount, setAmount] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const navigate = useNavigate();  

  const increaseAmount = () => setAmount(amount + 1);
  const decreaseAmount = () => setAmount(amount > 0 ? amount - 1 : 0);
  const increasAmount = () => setAmount2(amount2 + 1);
  const decreasAmount = () => setAmount2(amount2 > 0 ? amount2 - 1 : 0);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState('Select ticket type');

  const ticketOptions = [
    { value: 'action', label: 'Action', icon: <FaCalendarDay /> },
    { value: 'another-action', label: 'Another action', icon: <FaClock /> },
    { value: 'something-else', label: 'Something else here', icon: <FaUser /> },
  ];

  const handleDropdownToggle = () => setDropdownOpen(!isDropdownOpen);
  const handleDropdownItemClick = (label) => {
    setSelectedTicket(label);
    setDropdownOpen(false);
  };

  return (
    <div>
      <div className="container">
        <div className='row '>
          <div className='col-lg-6 col-md-6 col-12 col-sm-6'>
           <div className=' '>
           <h1 className='main fw-light mt-5'>BOOKING TICKETS</h1>
           </div>
            <div className='loan '>
              <p className='tour'> Tour to Louvre</p>
            </div>
            <div className='row mt-4'>
              <div className='col-lg-4 col-md-12 col-sm-12'>
                <InputWrapper>
                  <Icon />
                  <InputSmall type="date"className='input1' placeholder="" />
                </InputWrapper>
              </div>
              <div className='col-lg-4 col-md-12 col-sm-12  '>
                <InputWrapper>
                  <Icon2 />
                  <InputSmall type="time"className='input2' placeholder="" />
                </InputWrapper>
              </div>
            </div>

            <div className=' mt-3'>
              <InputWrapper>
                <Icon3 />
                <Input type="text"className='input3' placeholder="Name" />
              </InputWrapper>
            </div>
            <div className=' mt-3'>
              <InputWrapper>
                <Icon4 />
                <Input type="email"className='input4' placeholder="Email" />
              </InputWrapper>
            </div>
            <div className=' mt-3'>
              <InputWrapper>
                <Icon5 />
                <Input type="tel"className='input5' placeholder="Phone" />
              </InputWrapper>
            </div>
            <div className=' mt-3'>
              <DropdownWrapper>
                <DropdownButton onClick={handleDropdownToggle}>
                  <DropdownIcon />
                  <span>{selectedTicket}</span>
                  <DropdownArrow open={isDropdownOpen} />
                </DropdownButton>
                <DropdownMenu open={isDropdownOpen}>
                  {ticketOptions.map(option => (
                    <DropdownItem key={option.value} onClick={() => handleDropdownItemClick(option.label)}>
                      <DropdownItemIcon>{option.icon}</DropdownItemIcon>
                      <span>{option.label}</span>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </DropdownWrapper>
            </div>

            <div className='bord mt-3'>
              <p className='main fw-light ms-2 moon'>Entery Ticket</p>
              <div className='d-flex justify-content-between '>
                <div className='  text-center '>
                  <p className='fw-bold ms-2'>Basic 18+ (20 €)</p>
                  <p className='fw-bold ms-2'>Senior 65+ (10 €)</p>
                </div>
                <div className='me-3'>
                  <div className="  " role="group" aria-label="Amount control">
                    <button type="button" className=" bg-dark text-white" onClick={decreaseAmount}>-</button>
                    <input
                      type="text"
                      value={amount}
                      readOnly
                      className="  text-center"
                      style={{ width: '50px' }}
                    />
                    <button type="button" className="bg-dark text-white" onClick={increaseAmount}>+</button>
                  </div>
                  <div className=" mt-2" role="group" aria-label="Amount control">
                    <button type="button" className="bg-dark text-white" onClick={decreasAmount}>-</button>
                    <input
                      type="text"
                      value={amount2}
                      readOnly
                      className=" text-center"
                      style={{ width: '50px' }}
                    />
                    <button type="button" className="bg-dark text-white" onClick={increasAmount}>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='here col-lg-6 col-md-6 col-12 col-sm-12 mt-5'>
            <div className='d-flex justify-content-between'>
              <div className="icon-paragraph mt-3">
                <h2>Overview</h2>
                <h5 className='yuji'>Tour to Louvre</h5>

                <a className='d-block text-black'> <i className="fas fa-calendar me-2"></i>Friday, August 19</a>
                <a className='d-block text-black'> <i className="fas fa-clock me-2"></i>Friday, August 19</a>
                <a className='d-block text-black'> <i className="fas fa-clock me-2"></i>Temporary exhibition</a>
              </div>
              <div className='mt-4'>
                <img className='satoru' src={gojo}></img>
              </div>
            </div>
            <div className='grade d-flex justify-content-between'>
              <div>
                <div className='d-flex mt-4'>
                  <div className='vegita mt-1 text-white text-center'>2</div>
                  <h5>Basic (20 €)</h5>
                </div>
                <div className='d-flex '>
                  <div className='vegita mt-1 text-white text-center'>2</div>
                  <h5>Senior (10 €)</h5>
                </div>
              </div>
              <div className=' mt-4'>
                <h5>40 €</h5>
                <h5>20 €</h5>

              </div>
            </div>
            <div className='media mt-2'>
              <div>
                <h4 className=''>Total:</h4>
              </div>
              <div>
                <h4 className=''>60 €</h4>
              </div>
            </div>
            <div className='parent'>
              <div className='visa'>
                <div className='container'>
                  <div>
                    <div className='d-flex justify-content-between'>
                      <div>
                        <a className='d-block text-black'>Card number</a>
                        <input type="text" className=''></input>
                      </div>
                      <div>
                        <img src={visa}></img>
                      </div>
                    </div>
                    <a className='d-block text-black'>Expiration date</a>
                    <div className='d-flex'>
                      <div >
                        <input className="ever" type="number" placeholder='date'></input>
                      </div>
                      <div >
                        <input className="ever ms-2" type="number" placeholder='Year'></input>
                      </div>
                    </div>
                    <div className=''>
                      <a className=' d-block text-black '>Cardholder name</a>
                      <input type="  text" className='atlast' style={{}}></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="visa1">
                <div className='dark mt-4'>
                </div>
                <div className='doit'>
                    <div>
                    <p className=''>CVC/CVV</p>
                    <input className='me-2'type="text"style={{ width: '5rem' }}></input>
  ''
                    </div>
                   
                  </div>
              </div>
              <div className='mt-5 dior'>
                    <button className='book mt-3'>Book</button>
                    </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyTickets;
