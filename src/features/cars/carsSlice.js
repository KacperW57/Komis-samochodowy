import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    engine_type: "Benzyna",
    producer: "BMW",
    model: "M3",
    year: 2010,
    description:
      "Sportowa wersja samochodów BMW oparta na serii 3. Pierwsze BMW M3 pojawiło się w 1985 roku. Obecnie istnieje już 6 generacji tych pojazdów. Moc waha się od 195 KM w najstarszym modelu E30 do 500 KM w modelu M4 GTS (F82). W obecnej generacji F80 nazwa M3 odnosi się tylko do wersji sedan, wersja coupé otrzymała nazwę M4 i oznaczenie F82.",
  },
  {
    id: "1",
    engine_type: "Benzyna",
    producer: "Skoda",
    model: "Octavia",
    year: 2012,
    description:
      "Samochód osobowy klasy kompaktowej produkowany pod czeską marką Škoda od 1996 roku. Od 2019 roku produkowana jest czwarta generacja modelu.",
  },
  {
    id: "2",
    engine_type: "Benzyna",
    producer: "Skoda",
    model: "Fabia",
    year: 2005,
    description:
      "Samochód osobowy klasy aut miejskich produkowany pod czeską marką Škoda od 1999 roku. Od 2021 roku produkowana jest czwarta generacja pojazdu.",
  },
  {
    id: "3",
    engine_type: "Benzyna",
    producer: "Opel",
    model: "Corsa",
    year: 2002,
    description:
      " Samochód osobowy klasy miejskiej produkowany pod niemiecką marką Opel od 1982 roku. Od 2019 roku produkowana jest szósta generacja modelu.",
  },
  {
    id: "4",
    engine_type: "Benzyna",
    producer: "Hyundai",
    model: "i20",
    year: 2012,
    description:
      "Samochód osobowy klasy miejskiej produkowany pod południowokoreańską marką Hyundai od 2008 roku. Od 2020 roku produkowana jest trzecia generacja modelu.",
  },
  {
    id: "5",
    engine_type: "Benzyna",
    producer: "Hyundai",
    model: "i30",
    year: 2015,
    description:
      "Samochód osobowy klasy kompaktowej produkowany pod południowokoreańską marką Hyundai od 2007 roku. Od 2016 roku produkowana jest trzecia generacja modelu.",
  },
  {
    id: "6",
    engine_type: "Diesel",
    producer: "Alfa Romeo",
    model: "156",
    year: 1998,
    description:
      "Samochód osobowy klasy średniej produkowany przez włoską markę Alfa Romeo w latach 1997 – 2006.",
  },
  {
    id: "7",
    engine_type: "Diesel",
    producer: "Alfa Romeo",
    model: "159",
    year: 2010,
    description:
      "Samochód osobowy klasy średniej produkowany przez włoską markę Alfa Romeo w latach 2005 – 2011.",
  },
  {
    id: "8",
    engine_type: "Diesel",
    producer: "Saab",
    model: "9-3",
    year: 2010,
    description:
      "Samochód osobowy klasy średniej produkowany pod szwedzką marką Saab w latach 1998–2011 oraz ponownie przez szwedzkie przedsiębiorstwo NEVS w latach 2013–2014.",
  },
  {
    id: "9",
    engine_type: "Diesel",
    producer: "Fiat",
    model: "Bravo",
    year: 2008,
    description:
      "Samochód osobowy klasy kompaktowej produkowany przez włoską markę Fiat w latach 1995–2001 oraz ponownie w latach 2007–2014.",
  },
  {
    id: "10",
    engine_type: "Diesel",
    producer: "Fiat",
    model: "Doblo",
    year: 2020,
    description:
      "Samochód osobowo-dostawczy typu kombivan klasy kompaktowej produkowany przez włoską markę FIAT od 2000 roku. Od 2022 roku produkowana jest trzecia generacja modelu.",
  },
  {
    id: "11",
    engine_type: "Hybrydowy",
    producer: "Toyota",
    model: "Rav4",
    year: 2015,
    description:
      "Samochód osobowy typu SUV produkowany przez japoński koncern motoryzacyjny Toyota Motor Corporation od 1994 roku. Wraz z kolejnymi wcieleniami RAV4 wyewoluowała z miejskiego, przez kompaktowego do SUV-a klasy średniej. Od 2019 roku produkowana jest piąta generacja pojazdu. Na świecie sprzedano łącznie ponad 10 mln egzemplarzy modelu.",
  },
  {
    id: "12",
    engine_type: "Hybrydowy",
    producer: "Toyota",
    model: "Corolla",
    year: 2019,
    description:
      "Samochód osobowy segmentu B, a następnie segmentu C, produkowany pod japońską marką Toyota od roku 1966. W 1974 roku po raz pierwszy model został bestsellerem roku. W 1997 Corolla wyprzedziła model Typ 1 Volkswagena (Garbus) w rankingu na najlepiej sprzedających się modeli w historii. W lipcu 2013 roku Corolla przekroczyła 40 milionów sprzedanych egzemplarzy. W latach 2004–2016 jest nieprzerwanie najlepiej sprzedającym się samochodem roku. W pierwszym kwartale 2018 roku model był również najpopularniejszym kompaktowym sedanem w Polsce. Najlepszym rokiem dla Corolli był 2015, kiedy kupiono 1,35 mln egzemplarzy. Oznaczeniem kodowym dla Corolli jest „E”.",
  },
  {
    id: "13",
    engine_type: "Hybrydowy",
    producer: "Suzuki",
    model: "Vitara",
    year: 2019,
    description:
      "Samochód typu SUV produkowany przez japoński koncern Suzuki w latach 1988-1997 oraz ponownie od 2015 roku. Auto zostało zastąpione dwiema generacjami modelu Grand Vitara, które były autem sportowo-użytkowym, a w 2014 roku powrócono do nazwy Vitara podczas prezentacji nowego miejskiego crossovera na targach motoryzacyjnych Paris Motor Show, który zastąpił ponadto także wysłużony model SX4.",
  },
  {
    id: "14",
    engine_type: "Hybrydowy",
    producer: "Toyota",
    model: "Camry",
    year: 2015,
    description:
      "Samochód klasy średniej wyższej, produkowany przez koncern Toyota od 1982 roku. Ze względu na niewysoką cenę zdobył dużą popularność w Ameryce Północnej i Australii, gdzie zdecydowano się na jego produkcję. Na obu tych kontynentach jest pozycjonowany w klasie średniej i kosztuje mniej więcej tyle co Avensis w Europie. Toyota Camry powstała wskutek podziału linii modelowej klasy średniej na „europejską” (modele Carina i Avensis) oraz „amerykańską” – model Camry. Ze względu na wysokie ceny paliw masowy rynek europejski preferuje mniejsze samochody mimo oferowania modelu Camry, to nieporównywalnie model Avensis (a wcześniej Carina) lepiej się sprzedaje niż Camry. W Polsce największą popularnością cieszył się model trzeciej generacji (XV10) produkowany w latach 1992–1996, ze względu na korzystne regulacje celno-podatkowe z początku lat 90.",
  },
  {
    id: "15",
    engine_type: "Hybrydowy",
    producer: "Hyundai",
    model: "Tucson",
    year: 2022,
    description:
      "Samochód osobowy typu SUV klasy kompaktowej produkowany pod południowokoreańską marką Hyundai od 2004 roku. Od 2020 roku produkowana jest czwarta generacja modelu.",
  },
  {
    id: "16",
    engine_type: "Elektryczny",
    producer: "Nissan",
    model: "Leaf",
    year: 2022,
    description:
      "Samochód elektryczny klasy kompaktowej produkowany przez japoński koncern Nissan od 2010 roku. W 2017 roku zadebiutowała druga generacja pojazdu.",
  },
  {
    id: "17",
    engine_type: "Elektryczny",
    producer: "Renault",
    model: "Zoe",
    year: 2014,
    description:
      "Elektryczny samochód osobowy klasy miejskiej produkowany pod francuską marką Renault od 2012 roku.",
  },
  {
    id: "18",
    engine_type: "Elektryczny",
    producer: "BMW",
    model: "i3",
    year: 2015,
    description:
      "Elektryczny samochód osobowy klasy miejskiej produkowany pod niemiecką marką BMW w latach 2013–2022.",
  },
  {
    id: "19",
    engine_type: "Elektryczny",
    producer: "Tesla",
    model: "Model 3",
    year: 2018,
    description:
      "Elektryczny samochód osobowy klasy średniej produkowany pod amerykańską marką Tesla od 2017 roku.",
  },
  {
    id: "20",
    engine_type: "Elektryczny",
    producer: "Dacia",
    model: "Spring",
    year: 2018,
    description:
      "Model miejskiego, czteroosobowego auta elektrycznego produkowany przez rumuńską markę Dacia od 2021 roku.",
  },
  {
    id: "21",
    engine_type: "Elektryczny",
    producer: "Fiat",
    model: "500e",
    year: 2013,
    description:
      "Elektryczny samochód osobowy klasy aut najmniejszych produkowany pod włoską marką Fiat od 2012 roku. Od 2020 roku produkowana jest druga generacja pojazdu.",
  },
];

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    addCar(state, action) {
      state.push(action.payload);
    },
    removeCar(state, action) {
      return state.filter((array) => array.id !== action.payload);
    },
  },
});

export const { addCar, removeCar } = carsSlice.actions;

export default carsSlice.reducer;
