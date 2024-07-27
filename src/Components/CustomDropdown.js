// CustomDropdown.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCalendarDay, FaClock, FaUser, FaTicketAlt } from 'react-icons/fa';

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
  width: 200px;
  justify-content: space-between;
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

const Dropdown = ({ options, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const handleItemClick = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <DropdownWrapper>
      <DropdownButton onClick={toggleDropdown}>
        {selected} <FaTicketAlt style={{ marginLeft: '10px' }} />
      </DropdownButton>
      <DropdownMenu open={isOpen}>
        {options.map(option => (
          <DropdownItem key={option.value} onClick={() => handleItemClick(option.label)}>
            <DropdownItemIcon>{option.icon}</DropdownItemIcon>
            <span>{option.label}</span>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownWrapper>
  );
};

export default Dropdown;
