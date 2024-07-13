import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";
import './Filters.css';

// Filter bile�eni, sayfadaki filtreleme i�lemlerini y�netir
const Filter = ({
  page,
  setPage,
  setStatus,
  setGender,
  setSpecies,
}) => {

  // T�m filtreleri temizleyen fonksiyon
  let clear = () => {
    setStatus(""); // Status filtresini temizler
    setGender(""); // Gender filtresini temizler
    setSpecies(""); // Species filtresini temizler
    setPage(1); // Sayfay� 1. sayfaya ayarlar
    window.location.reload(false); // Sayfay� yeniden y�kler
  };

  return (
    <div>
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className="clear text-decoration-underline text-center mb-3"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status
          setPage={setPage}
          setStatus={setStatus}
        />
        <Species
          setPage={setPage}
          setSpecies={setSpecies}
        />
        <Gender
          setPage={setPage}
          setGender={setGender}
        />
      </div>
    </div>
  );
};

export default Filter;
