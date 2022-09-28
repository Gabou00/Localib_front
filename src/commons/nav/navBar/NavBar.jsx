import NavItem from "../navItem/NavItem";
import "./NavBar.css";

function Navbar() {
  return (
    <div className="navbar--desktop">
      <ul className="navbar--desktop__navlist">
        <NavItem direction="/gestionLocations" text="Gestion des locations" />
        <NavItem direction="/locationVehicules" text="Location des véhicules" />
        <NavItem direction="/gestionVehicules" text="Gestion des véhicules"/>
        <NavItem direction="/gestionLocataires" text="Gestion des locataires" />
      </ul>
    </div>
  );
};

export default Navbar;
