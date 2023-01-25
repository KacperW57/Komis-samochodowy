import React from "react";
import "../App.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Cars() {
  const carsArray = useSelector((state) => state.cars);

  const carsList = carsArray.map((cars) => {
    return (
      <div className="allCarsListItem" key={cars.id}>
        <p>
          <strong>Producent: </strong>
          {cars.producer}
        </p>
        <p>
          <strong>Model: </strong>
          {cars.model}
        </p>
        <p>
          <strong>Rodzaj silnika: </strong>
          {cars.engine_type}
        </p>
        <p>
          <strong>Rok produkcji: </strong>
          {cars.year}
        </p>
        <p>
          <strong>Opis: </strong>
          {cars.description.substring(0, 40)}
          ...
        </p>
        <Link to={`/cars/${cars.id}`}>Zobacz samochód</Link>
      </div>
    );
  });
  return (
    <div className="carsContainer">
      <h2>Lista samochodów:</h2>
      <div className="allCarsContainer">{carsList}</div>
    </div>
  );
}
