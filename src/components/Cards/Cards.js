import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import './Cards.css';
import { addToFavorites } from '../../redux/favoritesSlice';

// Cards bileşeni, karakterlerin listelendiği ve favorilere eklenebildiği bir bileşendir.
const Cards = ({ results, page }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favoritesItems = useSelector(state => state.favorites.favoritesItems);

  // Karakteri favorilere ekleyen fonksiyon
  const addToFavoriteHandler = (character) => {
    const isAlreadyFavorite = favoritesItems.some((item) => item.id === character.id);

    if (isAlreadyFavorite) {
      alert("This character is already in favorites!");
    } else {
      dispatch(addToFavorites(character));
      navigate('/favorites');
    }
  }

  // Karakter kartlarını görüntüleyen ve karakter bulunamadığında mesaj gösteren değişken
  let display;
  if (results && results.length > 0) {
    display = results.map((character) => {
      let { id, name, image } = character;
      return (
        <Link
          to={`${page}${id}`}
          key={id}
          className="character-card-link"
          style={{ color: 'white', textDecoration: 'none' }}
        >
          <div className="text-center character-card">
            <img src={image} className="circle-img" alt={name} />
            <div className="fs-4 fw-bold">{name}</div>
            <button 
              className="btn btn-danger" 
              onClick={(e) => { 
                e.preventDefault(); // Link tıklamasını engeller
                addToFavoriteHandler(character); // Karakteri favorilere ekler
              }} 
            > 
              <FaHeart />
            </button>
          </div>
        </Link>
      );
    });
  } else {
    display = <p style={{ textAlign: 'center', marginTop: '50px', fontSize: '30px' }}>Character not found</p>;
  }

  // Karakter kartlarını içeren div
  return <div className="character-card-container">{display}</div>;
};

export default Cards;
