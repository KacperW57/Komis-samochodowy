import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Aside from "./components/Aside";
import Info from "./components/Info";
import Cars from "./components/Cars";
import AddCar from "./components/AddCar";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Aside />
        <main>
          <Routes>
            <Route index path="/cars" element={<Cars />} />
            <Route path="/addCar" element={<AddCar />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Info />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
