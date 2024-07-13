import React from 'react';

const PageSizeSelect = ({ pageSize, setPageSize }) => {
  const handlePageSizeChange = (e) => {
    setPageSize(Number(e.target.value));
  };

  return (
    <div className="mt-4 mb-4 text-center">
      <h4 className="text-center fw-bold fs-4 mb-3">Page Size:</h4>
      <div className="d-inline-block me-3">
        <input 
          className="form-check-input x" 
          type="radio" 
          name="page-size" 
          id="page-size-20" 
          value={20}
          onChange={handlePageSizeChange}
          checked={pageSize === 20}
        />
        <label 
          className="btn btn-outline-dark" 
          htmlFor="page-size-20"
        >
          20
        </label>
      </div>
      <div className="d-inline-block me-3">
        <input 
          className="form-check-input x" 
          type="radio" 
          name="page-size" 
          id="page-size-100" 
          value={100}
          onChange={handlePageSizeChange}
          checked={pageSize === 100}
        />
        <label 
          className="btn btn-outline-dark" 
          htmlFor="page-size-100"
        >
          100
        </label>
      </div>
      <div className="d-inline-block">
        <input 
          className="form-check-input x" 
          type="radio" 
          name="page-size" 
          id="page-size-200" 
          value={200}
          onChange={handlePageSizeChange}
          checked={pageSize === 200}
        />
        <label 
          className="btn btn-outline-dark" 
          htmlFor="page-size-200"
        >
          200
        </label>
      </div>
    </div>
  );
};

export default PageSizeSelect;
