import React from "react";
import "../App.css";

export default function Info() {
  return (
    <div className="infoContainer">
      <h2>Informacje o stronie</h2>
      <p>Strona powstała w celu wrzucania ogłoszeń sprzedaży samochodów.</p>
      <p>
        W zakładce <i>Samochody</i> możesz przeglądać ogłoszenia.
      </p>
      <p>
        W zakładce <i>Wystaw ogłoszenie</i> możesz dodać swoje własne
        ogłoszenie.
      </p>
      <p>
        W zakładce <i>Kontakt</i> możesz znaleźć informacje kontaktowe oraz
        adres komisu.
      </p>
      <h2>Informacje o firmie</h2>
      <p>
        Komis samochodowy to firma powstała w 2023 roku. Zajmuje się sprzedażą
        samochodów używanych. W ofercie znajdują się samochody z silnikami
        benzynowymi, dieslami, hybrydowymi oraz elektrycznymi.
      </p>
      <p>Firma tak naprawde nie istnieje.</p>
      <p>
        Samochody też tak naprawde nie istnieją, chociaż ich modele i producenci
        są prawdziwi.
      </p>
      <p>
        Jedynie strona którą widzisz jest prawdziwa, powstała w celach
        treningowych.
      </p>
    </div>
  );
}
