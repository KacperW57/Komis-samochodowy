import React, { useState } from "react";
import "../App.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Aside() {
  const [benzStyle, setBenzStyle] = useState("hidden");
  const [diesStyle, setDiesStyle] = useState("hidden");
  const [hybrStyle, setHybrStyle] = useState("hidden");
  const [eleStyle, setEleStyle] = useState("hidden");
  const carsArray = useSelector((state) => state.cars);
  const listBenzyna = carsArray
    .filter((array) => array.engine_type === "Benzyna")
    .map((array) => {
      return (
        <li key={array.id}>
          <Link to={`/cars/${array.id}`}>
            {array.producer} {array.model}
          </Link>
        </li>
      );
    });
  const listDiesel = carsArray
    .filter((array) => array.engine_type === "Diesel")
    .map((array) => {
      return (
        <li key={array.id}>
          <Link to={`/cars/${array.id}`}>
            {array.producer} {array.model}
          </Link>
        </li>
      );
    });
  const listHybrydowy = carsArray
    .filter((array) => array.engine_type === "Hybrydowy")
    .map((array) => {
      return (
        <li key={array.id}>
          <Link to={`/cars/${array.id}`}>
            {array.producer} {array.model}
          </Link>
        </li>
      );
    });
  const listElektryczny = carsArray
    .filter((array) => array.engine_type === "Elektryczny")
    .map((array) => {
      return (
        <li key={array.id}>
          <Link to={`/cars/${array.id}`}>
            {array.producer} {array.model}
          </Link>
        </li>
      );
    });
  return (
    <aside>
      <h3>Samochody</h3>
      <p
        onClick={() => {
          if (benzStyle === "hidden") {
            setBenzStyle("visible");
          } else if (benzStyle === "visible") {
            setBenzStyle("hidden");
          }
        }}
      >
        Benzynowe
      </p>
      <ul className={benzStyle}>{listBenzyna}</ul>
      <p
        onClick={() => {
          if (diesStyle === "hidden") {
            setDiesStyle("visible");
          } else if (diesStyle === "visible") {
            setDiesStyle("hidden");
          }
        }}
      >
        Diesel
      </p>
      <ul className={diesStyle}>{listDiesel}</ul>
      <p
        onClick={() => {
          if (hybrStyle === "hidden") {
            setHybrStyle("visible");
          } else if (hybrStyle === "visible") {
            setHybrStyle("hidden");
          }
        }}
      >
        Hybrydowe
      </p>
      <ul className={hybrStyle}>{listHybrydowy}</ul>
      <p
        onClick={() => {
          if (eleStyle === "hidden") {
            setEleStyle("visible");
          } else if (eleStyle === "visible") {
            setEleStyle("hidden");
          }
        }}
      >
        elektryczne
      </p>
      <ul className={eleStyle}>{listElektryczny}</ul>
    </aside>
  );
}
