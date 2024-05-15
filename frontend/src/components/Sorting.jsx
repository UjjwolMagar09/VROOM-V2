import React, { useState } from 'react';

const SortingComponent = ({ handleSort }) => {
  const [sortOrder, setSortOrder] = useState('asc');

  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
    handleSort(newSortOrder);
  };

  const styles = `
    .sorting-container {
      margin-bottom: 10px;
    }

    .sorting-button {
      background-color: #4CAF50;
      border: none;
      color: white;
      padding: 10px 20px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      border-radius: 5px;
      cursor: pointer;
    }

    .sorting-button:hover {
      background-color: #45a049;
    }

    .arrow {
      margin-left: 5px;
    }
  `;

  return (
    <div>
      <style>{styles}</style>
      <div className="sorting-container">
        <button className="sorting-button" onClick={toggleSortOrder}>
          Sort by Price <span className="arrow">{sortOrder === 'asc' ? '↓' : '↑'}</span>
        </button>
      </div>
    </div>
  );
};

export default SortingComponent;
