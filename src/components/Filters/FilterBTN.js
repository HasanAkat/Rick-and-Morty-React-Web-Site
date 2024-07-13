import React from "react";

// FilterBTN bile�eni, filtreleme i�in kullan�lan radyo butonlar�n� temsil eder
const FilterBTN = ({ input, task, setPage, index, name }) => {
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`} // Her bir radyo butonu i�in benzersiz bir ID sa�lar
        />
        <label
          onClick={() => {
            task(input); // Filtreleme g�revini �a��r�r
            setPage(1); // Sayfay� 1. sayfaya ayarlar
          }}
          className="btn btn-outline-dark"
          htmlFor={`${name}-${index}`} // Radyo butonuyla etiket aras�nda ba�lant� kurar
        >
          {input}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
