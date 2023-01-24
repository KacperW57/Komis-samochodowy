import React from "react";
import "../App.css";

export default function Contact() {
  return (
    <div className="contactContainer">
      <h2>Informacje kontaktowe</h2>
      <p>
        <strong>Numer telefonu:</strong> 000000000
      </p>
      <p>
        <strong>Adres:</strong> Rzeszów ul.Reakcji 3500
      </p>
      <p>
        <strong>Link do Google maps:</strong>
        <a href="https://goo.gl/maps/z2QktyqPR3p1VYEV6"> Komis samochodowy</a>
      </p>
      <p>
        <i>
          Powyższe informacje nie są prawdziwe, gdyż jest to fikcyjna firma.
        </i>
      </p>
    </div>
  );
}
