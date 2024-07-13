import React from 'react';

const Sort = ({ onSortChange }) => {
  const handleSortChange = (value) => {
    onSortChange(value);
  };

  return (
    <div className="mt-4 mb-4 text-center">
      <h4 className="text-center fw-bold fs-4 mb-3">Sort by:</h4>
      <div className="d-inline-block me-3">
        <input 
          className="form-check-input x" 
          type="radio" 
          name="sort" 
          id="sort-id" 
          onChange={() => handleSortChange('id')} 
          defaultChecked 
        />
        <label 
          className="btn btn-outline-dark" 
          htmlFor="sort-id"
        >
          ID
        </label>
      </div>
      <div className="d-inline-block">
        <input 
          className="form-check-input x" 
          type="radio" 
          name="sort" 
          id="sort-name" 
          onChange={() => handleSortChange('name')} 
        />
        <label 
          className="btn btn-outline-dark" 
          htmlFor="sort-name"
        >
          Name
        </label>
      </div>
    </div>
  );
}

export default Sort;

// Sort iþlemleri için yardýmcý fonksiyon
export const sortResults = (results, sortBy) => {
  if (!results) return [];
  const sortedResults = [...results];
  if (sortBy === 'name') {
    sortedResults.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'id') {
    sortedResults.sort((a, b) => a.id - b.id);
  }
  return sortedResults;
};
