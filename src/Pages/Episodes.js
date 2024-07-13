import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards/Cards';
import InputGroup from '../components/Filters/Category/InputGroup';
import Sort, { sortResults } from '../components/Sort/Sort';

const Episodes = () => {
  let [results, setResults] = useState([]);
  let [info, setInfo] = useState([]);
  let { air_date, name } = info;
  let [id, setID] = useState(1);
  let [sortBy, setSortBy] = useState('id');

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await fetch(api).then((res) => res.json());
        setInfo(data);

        let characters = await Promise.all(
          data.characters.map((url) => fetch(url).then((res) => res.json()))
        );
        setResults(characters);
      } catch (error) {
        console.error('Error fetching episode data:', error);
      }
    };

    fetchData();
  }, [api]);

  const handleSortChange = (sortValue) => {
    setSortBy(sortValue);
  };

  const sortedResults = sortResults(results, sortBy);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <Sort onSortChange={handleSortChange} />
          <h4 className="text-center fw-bold fs-4 mb-3">Pick Episode</h4>
          <InputGroup name="Episode" changeID={setID} total={51} />
        </div>
        <div className="col-lg-9 col-md-8 col-sm-6">
          <div className="row">
            <div className="col-lg-12 mb-4">
              <h1 className="text-center mb-3">
                Episode Name :{' '}
                <span style={{ color: '#96FF33' }}>
                  {name === '' ? 'Unknown' : name}
                </span>
              </h1>
              <h5 className="text-center">
                Air Date: {air_date === '' ? 'Unknown' : air_date}
              </h5>
            </div>
            <Cards page="/episodes/" results={sortedResults} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
