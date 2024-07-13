import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaHeart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../../redux/favoritesSlice';
import PageNotFound from '../../Pages/PageNotFound';
import '../../App.css';

// CardDetails bileþeni, karakterin detaylarýný gösteren bileþendir.
const CardDetails = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let [fetchedData, updateFetchedData] = useState(null); // API'den getirilen veriyi saklar
  let [notFound, setNotFound] = useState(false); // Karakter bulunamadýðýnda true olur

  let { name, location, origin, gender, image, status, species } = fetchedData || {}; // Gelen veriyi ayrýþtýrýr

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  // API çaðrýsýný yapan ve veriyi güncelleyen useEffect
  useEffect(() => {
    (async function () {
      try {
        let response = await fetch(api);
        if (response.status === 404) {
          setNotFound(true); // Karakter bulunamazsa notFound'u true yapar
        } else {
          let data = await response.json();
          updateFetchedData(data); // Veriyi günceller
        }
      } catch (error) {
        setNotFound(true); // Hata durumunda notFound'u true yapar
      }
    })();
  }, [api]);

  // Karakteri favorilere ekleyen fonksiyon
  const addToFavoritesHandler = () => {
    dispatch(addToFavorites(fetchedData));
    navigate('/favorites');
  }

  // Karakter bulunamazsa PageNotFound bileþenini döner
  if (notFound) {
    return <PageNotFound />;
  }

  return (
    <div className="background">
      <div className="container d-flex justify-content-center mb-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img className="img-fluid mb-3" src={image} alt={name} />
            <div className="badge fs-5" style={{ width: "100%", backgroundColor: status === "Dead" ? '#dc3545' : (status === "Alive" ? '#198754' : '#6c757d') }}>
              {status}
            </div>
          </div>
          <div className="col-md-6">
            <h1 className="mb-4">{name}</h1>
            <div className="content">
              <div className="mb-3">
                <span className="fw-bold">Gender:</span> {gender}
              </div>
              <div className="mb-3">
                <span className="fw-bold">Location:</span> {location?.name}
              </div>
              <div className="mb-3">
                <span className="fw-bold">Origin:</span> {origin?.name}
              </div>
              <div className="mb-3">
                <span className="fw-bold">Species:</span> {species}
              </div>
              <button className="btn btn-danger heart-button" onClick={addToFavoritesHandler}> 
                <FaHeart /> Add to Favorites
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <Link to="/Rick-and-Morty-React-Web-Site" className="btn btn-dark mb-5">Back to Home</Link>
      </div>
    </div>
  );
};

export default CardDetails;
