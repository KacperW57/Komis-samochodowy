import React, { useState } from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addCar } from "../features/cars/carsSlice";

export default function AddCar() {
  const [engine, setEngine] = useState("Benzyna");
  const [producer, setProducer] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const nanoId = nanoid();
    dispatch(
      addCar({
        id: `${nanoId}`,
        engine_type: `${engine}`,
        producer: `${producer}`,
        model: `${model}`,
        year: `${year}`,
        description: `${description}`,
      })
    );

    setProducer("");
    setModel("");
    setYear("");
    setDescription("");
  }

  return (
    <div className="addCarContainer">
      <h2>Dodaj ogłoszenie:</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Wybierz rodzaj silnika</legend>
          <ul>
            <li>
              <label htmlFor="Benzyna">Benzyna</label>
              <input
                type="radio"
                defaultChecked
                aria-checked
                name="engine_type"
                id="Benzyna"
                value="Benzyna"
                onClick={() => setEngine("Benzyna")}
              />
            </li>
            <li>
              <label htmlFor="Diesel">Diesel</label>
              <input
                type="radio"
                name="engine_type"
                id="Diesel"
                value="Diesel"
                onClick={() => setEngine("Diesel")}
              />
            </li>
            <li>
              <label htmlFor="Hybrydowy">Hybrydowy</label>
              <input
                type="radio"
                name="engine_type"
                id="Hybrydowy"
                value="Hybrydowy"
                onClick={() => setEngine("Hybrydowy")}
              />
            </li>
            <li>
              <label htmlFor="Elektryczny">Elektryczny</label>
              <input
                type="radio"
                name="engine_type"
                id="Elektryczny"
                value="Elektryczny"
                onClick={() => setEngine("Elektryczny")}
              />
            </li>
          </ul>
        </fieldset>
        <div className="inputs">
          <div className="producer">
            <label htmlFor="producer">Producent:</label>
            <input
              type="text"
              id="producer"
              name="producer"
              required
              aria-required
              value={producer}
              onChange={(e) => {
                setProducer(e.target.value);
              }}
            />
          </div>

          <div className="model">
            <label htmlFor="model">Model:</label>
            <input
              type="text"
              id="model"
              name="model"
              required
              aria-required
              value={model}
              onChange={(e) => {
                setModel(e.target.value);
              }}
            />
          </div>

          <div className="year">
            <label htmlFor="year">Rok produkcji:</label>
            <input
              type="number"
              id="year"
              name="year"
              required
              aria-required
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
              }}
            />
          </div>

          <div className="description">
            <label htmlFor="description">Opis:</label>
            <textarea
              id="description"
              name="description"
              required
              aria-required
              rows="10"
              cols="50"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
        </div>
        <button type="submit">Dodaj samochód</button>
      </form>
    </div>
  );
}
