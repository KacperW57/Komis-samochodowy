import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Komis samochodowy</h1>
      <nav>
        <div>
          <Link to={"/cars"}>Samochody</Link>
        </div>
        <div>
          <Link to={"/addCar"}>Wystaw ogłoszenie</Link>
        </div>
        <div>
          <Link to={"/contact"}>Kontakt</Link>
        </div>
        <div>
          <Link to={"/"}>Informacje</Link>
        </div>
      </nav>
    </header>
  );
}
