import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Komis samochodowy</h1>
      <nav>
        <Link to={"/cars"}>Samochody</Link>

        <Link to={"/addCar"}>Wystaw ogłoszenie</Link>

        <Link to={"/contact"}>Kontakt</Link>

        <Link to={"/"}>Informacje</Link>
      </nav>
    </header>
  );
}
