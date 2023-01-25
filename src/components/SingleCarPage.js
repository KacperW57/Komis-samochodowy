import React from "react";
import "../App.css";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

export default function SingleCarPage() {
  const params = useParams();
  const carsId = params.carsId;

  const carsArray = useSelector((state) => state.cars);

  const singleCar = carsArray.find((car) => car.id === carsId);
  if (!singleCar) {
    return (
      <div className="SingleCar">
        <p>Car not found!</p>
      </div>
    );
  }

  return (
    <div className="SingleCar">
      <h2>Samochód:</h2>
      <p>
        <strong>Producent: </strong>
        {singleCar.producer}
      </p>
      <p>
        <strong>Model: </strong>
        {singleCar.model}
      </p>
      <p>
        <strong>Rodzaj silnika: </strong>
        {singleCar.engine_type}
      </p>
      <p>
        <strong>Rok produkcji: </strong>
        {singleCar.year}
      </p>
      <p>
        <strong>Opis: </strong>
        {singleCar.description}
      </p>
      <Link to={`/cars`}>Powrót do listy</Link>
    </div>
  );
}
