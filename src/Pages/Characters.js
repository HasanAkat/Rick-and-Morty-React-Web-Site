import React, { useState, useEffect } from 'react';
import Filters from '../components/Filters/Filters';
import Cards from '../components/Cards/Cards';
import Pagination from '../components/Pagination/Pagination';
import Search from '../components/Search/Search';
import Sort, { sortResults } from '../components/Sort/Sort';
import PageSizeSelect from '../components/PageSizeSelect/PageSizeSelect';

const Characters = () => {
  let [page, setPage] = useState(1); 
  let [search, setSearch] = useState(""); 
  let [status, setStatus] = useState(""); 
  let [gender, setGender] = useState(""); 
  let [species, setSpecies] = useState(""); 
  let [sortBy, setSortBy] = useState('id'); 
  let [allResults, setAllResults] = useState([]);
  let [totalPages, setTotalPages] = useState(0);
  let [pageSize, setPageSize] = useState(20); 

  useEffect(() => {
    const fetchAllCharacters = async () => {
      let results = [];
      let currentPage = 1;
      let totalPages = 1;

      try {
        while (currentPage <= totalPages) {
          let data = await fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${search}&status=${status}&gender=${gender}&species=${species}`)
            .then((res) => res.json());
          
          if (data.results) {
            results = results.concat(data.results);
            totalPages = data.info.pages;
            currentPage++;
          } else {
            break;
          }
        }
      } catch (error) {
        console.error("Error fetching characters:", error);
      }

      setAllResults(results);
      setTotalPages(totalPages);
    };

    fetchAllCharacters();
  }, [search, status, gender, species]);

  const handleSortChange = (sortValue) => {
    setSortBy(sortValue);
  };

  const sortedResults = sortResults(allResults, sortBy);

  return (    
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-4">
          <PageSizeSelect pageSize={pageSize} setPageSize={setPageSize} />
          <Sort onSortChange={handleSortChange} /> 
          <Filters 
            page={page}
            status={status}
            setStatus={setStatus}
            setGender={setGender}
            setSpecies={setSpecies}
            setPage={setPage}
          />
        </div>
        <div className="col-lg-9 col-md-8">
          <Search setSearch={setSearch}/> 
          <div className="row">
            <Cards page="/characters/" results={sortedResults.slice((page - 1) * pageSize, page * pageSize)} /> 
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <Pagination info={{ pages: totalPages }} page={page} setPage={setPage}/> 
      </div>
    </div>
  );
};

export default Characters;
