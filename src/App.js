import { Route, Routes } from "react-router-dom";
import GestionLocation from "./components/GestionLocation";
import LocationVehicules from "./components/LocationVehicules";
import GestionVehicules from "./components/GestionVehicules";
import GestionLocataires from "./components/GestionLocataires";
import Identification from "./components/Identification";
import Footer from "./commons/footer/Footer";
import Header from "./commons/header/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/gestionLocations" element={<GestionLocation />} />
          <Route path="/locationVehicules" element={<LocationVehicules />} />
          <Route path="/gestionVehicules" element={<GestionVehicules />} />
          <Route path="/gestionLocataires" element={<GestionLocataires />} />
          <Route path="/identification" element={<Identification />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
