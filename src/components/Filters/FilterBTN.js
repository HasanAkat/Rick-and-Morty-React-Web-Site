import React from "react";

// FilterBTN bileþeni, filtreleme için kullanýlan radyo butonlarýný temsil eder
const FilterBTN = ({ input, task, setPage, index, name }) => {
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`} // Her bir radyo butonu için benzersiz bir ID saðlar
        />
        <label
          onClick={() => {
            task(input); // Filtreleme görevini çaðýrýr
            setPage(1); // Sayfayý 1. sayfaya ayarlar
          }}
          className="btn btn-outline-dark"
          htmlFor={`${name}-${index}`} // Radyo butonuyla etiket arasýnda baðlantý kurar
        >
          {input}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
