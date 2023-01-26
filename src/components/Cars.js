import React, { useState } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeCar, ratingPlus, ratingMinus } from "../features/cars/carsSlice";
import ArrowUp from "../images/ArrowUp.png";

export default function Cars() {
  const carsArray = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  const [renderCars, setRenderCars] = useState("All");
  const FILTER_MAP = {
    All: () => true,
    Benzyna: (car) => car.engine_type === "Benzyna",
    Diesel: (car) => car.engine_type === "Diesel",
    Hybrydowe: (car) => car.engine_type === "Hybrydowy",
    Elektryczne: (car) => car.engine_type === "Elektryczny",
  };

  const carsList = carsArray.filter(FILTER_MAP[renderCars]).map((cars) => {
    return (
      <div className="carsListItem" key={cars.id}>
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
        <p>
          <strong>Ocena użytkowników: </strong>
        </p>
        <div className="reactionContainer">
          <img
            src={ArrowUp}
            alt="arrow up"
            onClick={() => {
              dispatch(ratingPlus(cars.id));
            }}
          />
          <p>{cars.rating}</p>
          <img
            src={ArrowUp}
            alt="arrow down"
            onClick={() => {
              dispatch(ratingMinus(cars.id));
            }}
          />
        </div>
        <Link to={`/cars/${cars.id}`}>Zobacz Opis</Link>
        <button
          onClick={() => {
            dispatch(removeCar(cars.id));
          }}
        >
          Usuń z listy
        </button>
      </div>
    );
  });

  return (
    <div className="carsContainer">
      <h2>Lista samochodów:</h2>
      <nav className="filterButtons">
        <div
          className="filterBtn"
          onClick={() => {
            setRenderCars("All");
          }}
        >
          Wszystkie auta
        </div>
        <div
          className="filterBtn"
          onClick={() => {
            setRenderCars("Benzyna");
          }}
        >
          Benzyna
        </div>
        <div
          className="filterBtn"
          onClick={() => {
            setRenderCars("Diesel");
          }}
        >
          Diesel
        </div>
        <div
          className="filterBtn"
          onClick={() => {
            setRenderCars("Hybrydowe");
          }}
        >
          Hybrydowe
        </div>
        <div
          className="filterBtn"
          onClick={() => {
            setRenderCars("Elektryczne");
          }}
        >
          Elektryczne
        </div>
      </nav>
      <div className="carsListContainer">{carsList}</div>
    </div>
  );
}
