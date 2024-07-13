import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards/Cards';
import InputGroup from '../components/Filters/Category/InputGroup';
import Sort, { sortResults } from '../components/Sort/Sort';

const Locations = () => {
  let [results, setResults] = useState([]);
  let [info, setInfo] = useState([]);
  let { dimension, type, name } = info;
  let [number, setNumber] = useState(1);
  let [sortBy, setSortBy] = useState('id');

  let api = `https://rickandmortyapi.com/api/location/${number}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await fetch(api).then((res) => res.json());
        setInfo(data);

        let residents = await Promise.all(
          data.residents.map((url) => fetch(url).then((res) => res.json()))
        );
        setResults(residents);
      } catch (error) {
        console.error('Error fetching location data:', error);
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
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4" style={{ marginLeft: '-80px' }}>
          <Sort onSortChange={handleSortChange} />
          <h4 className="text-center fw-bold fs-4 mb-3">Pick Location</h4>
          <InputGroup name="Location" changeID={setNumber} total={126} />
        </div>
         <div className="col-lg-9 col-md-8 col-sm-6">
          <div className="row">
            <div className="col-lg-12 mb-4">
              <h1 className="text-center mb-3">
                Location :{' '}
                <span style={{ color: '#96FF33' }}>
                  {' '}
                  {name === '' ? 'Unknown' : name}
                </span>
              </h1>
              <h5 className="text-center">
                Dimension: {dimension === '' ? 'Unknown' : dimension}
              </h5>
              <h6 className="text-center">
                Type: {type === '' ? 'Unknown' : type}
              </h6>
            </div>
            <Cards page="/locations/" results={sortedResults} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
