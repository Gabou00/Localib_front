// Page #3 :  Locations des véhicules => 	
    // Date de début de location (date JJ/MM/AAAA) + (HH :MM)
	// Date de fin de location (date JJ/MM/AAAA) + (HH :MM)
	// Informations du véhicules (marque, modèle, disponibilité, type de véhicule, état)
	// Tarif proposé aux dates sélectionnées par véhicule disponible (2 types de tarifs : 100% en semaine du lundi matin au vendredi midi et +160% les vendredis après-midi, les weekends, jours fériés et vacances)

import "../styles/LocationVehicules.css";

function LocationVehicules() {
    return (
        <div className='locationVehicules'>
            Bienvenue sur la page de location des véhicules           
        </div>
    );
};

export default LocationVehicules;


