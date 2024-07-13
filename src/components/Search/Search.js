import React from 'react'

const Search = ({setSearch}) => {
    let searchBtn = (e) => {
      e.preventDefault();
    };
    return (
      <form
        className="d-flex align-items-center justify-content-center gap-2 mb-5 mx-auto" style={{ maxWidth: '750px' }}
      >
        <input
          onChange={(e) => {
    
            setSearch(e.target.value);
          }}
          placeholder="Search Character..."
          type="text"
          class="form-control" placeholder="Search Character..." aria-label="Search Character" aria-describedby="button-addon2"
        />

        <button
          onClick={searchBtn} class="btn btn-dark" type="button" id="button-addon2">
          Search
        </button>
      </form>
      
    );
  };

export default Search
