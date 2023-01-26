import React from "react";
import "../App.css";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import ArrowUp from "../images/ArrowUp.png";
import { ratingPlus, ratingMinus } from "../features/cars/carsSlice";

export default function SingleCarPage() {
  const dispatch = useDispatch();
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
      <p>
        <strong>Ocena użytkowników: </strong>
      </p>
      <div className="reactionContainer">
        <img
          src={ArrowUp}
          alt="arrow up"
          onClick={() => {
            dispatch(ratingPlus(singleCar.id));
          }}
        />
        <p>{singleCar.rating}</p>
        <img
          src={ArrowUp}
          alt="arrow down"
          onClick={() => {
            dispatch(ratingMinus(singleCar.id));
          }}
        />
      </div>
      <Link to={`/cars`}>Powrót do listy</Link>
    </div>
  );
}
