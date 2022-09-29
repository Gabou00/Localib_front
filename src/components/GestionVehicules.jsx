// Page #4 :  gestion des véhicules => Marque, Modèle, Immatriculation,	Etat du véhicule (A, B, C, D),	Prix de location à la journée,	Disponibilité, Type de véhicule (Voiture, Camion, Utilitaire, Moto) (CRUD)

import "../styles/GestionVehicules.css";
import { vehiculeList } from "./VehiculeList.jsx";
import VehiculeItem from "./VehiculeItem"

function GestionVehicules() {
  return (
    <div className="gestionVehicule">
      <ul className="ulHeadVehicule">
        <div className="containerVehicule">
          <li className="marqueVehicule">Photo</li>
          <li className="marqueVehicule">Marque</li>
          <li className="modeleVehicule">Modèle</li>
          <li className="immatriculationVehicule">Immatriculation</li>
          <li className="etatVehicule">Etat du véhicule </li>
          <li className="prixJourneeVehicule">Prix de location à la journée</li>
          <li className="disponibiliteVehicule">Disponibilité</li>
          <li className="typeVehicule">Type de véhicule </li>
        </div>
      </ul>

      <ul className="ulBodyVehicule"> {vehiculeList.map((vehicule) => (
        <VehiculeItem
        id = {vehicule.id}
        cover = {vehicule.cover}
        marque = {vehicule.marque}
        modele = {vehicule.modele}
        immatriculation = {vehicule.immatriculation}
        etat_du_vehicule = {vehicule.etat_du_vehicule}
        price = {vehicule.price}
        disponibilite = {vehicule.disponibilite}
        type = {vehicule.type}
        />
      ))}   
        </ul>
    </div>
  );
}

export default GestionVehicules;

// id, cover, marque, modele, immatriculation, etat_du_vehicule, price, disponibilite, type