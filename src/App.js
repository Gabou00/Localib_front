import GestionVehicules from "./components/GestionVehicules";
import Footer from "./commons/footer/Footer";
import Header from "./commons/header/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/gestionVehicules" element={<GestionVehicules />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
