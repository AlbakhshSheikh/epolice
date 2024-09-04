/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { useColorModes } from '@coreui/react';

const DropdownComponent = () => {
  const [selectedOption, setSelectedOption] = useState('All');
  const { colorMode } = useColorModes();

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Inline styles based on theme
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '5px',
    border: `1px solid ${colorMode === 'dark' ? '#444' : '#ddd'}`,
    borderRadius: '4px',
    width: '100%', // Full width of the container
    maxWidth: '1270px', // Max width to prevent it from getting too wide
    margin: 'auto',
    backgroundColor: colorMode === 'dark' ? '#333' : '#f9f9f9',
  };

  const selectStyle = {
    padding: '5px',
    fontSize: '16px',
    borderRadius: '4px',
    border: `1px solid ${colorMode === 'dark' ? '#666' : '#ccc'}`,
    backgroundColor: colorMode === 'dark' ? '#555' : '#fff',
    color: colorMode === 'dark' ? '#fff' : '#000',
    cursor: 'pointer',
    width: '100%', // Full width of the container
    boxSizing: 'border-box', // Ensures padding and border are included in width
  };

  return (
    <div style={containerStyle}>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleChange}
        style={selectStyle}
      >
        <option value="All">All</option>
        <option value="Camera">Cameras</option>
        <option value="Bpatrak">Bpatrak</option>
        <option value="Police Stations">Police Stations</option>
        <option value="Criminals">Criminals</option>
        <option value="Sensitive Area">Sensitive Area</option>
      </select>
    </div>
  );
};

export default DropdownComponent;
