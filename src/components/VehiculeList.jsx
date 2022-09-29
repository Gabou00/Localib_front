import Voiture1 from "../assets/pictures/voiture1.jpg"
import Voiture2 from "../assets/pictures/voiture2.jpg"
import Voiture3 from "../assets/pictures/voiture3.jpg"
import Voiture4 from "../assets/pictures/voiture4.jpg"

export const vehiculeList = [
	{
		id: '1ed',
		cover: Voiture1,
		marque: 'Lexus',
		modele: 'LF-30',
		immatriculation: '25-CV-56',
		etat_du_vehicule: 'A',
        price: 80,
		disponibilite: true,
		type: 'voiture',
	},
	{
		id: '2ed',
		cover: Voiture2,
		marque: 'Renault',
		modele: 'Kangoo',
		immatriculation: '87-EJ-24',
		etat_du_vehicule: 'C',
        price: 90,
		disponibilite: true,
		type: 'voiture',
	},
	{
		id: '3ed',
		cover: Voiture3,
		marque: 'Iveco',
		modele: 'Daily',
		immatriculation: '45-GG-89',
		etat_du_vehicule: 'B',
        price: 120,
		disponibilite: false,
		type: 'utilitaire',
	},
	{
		id: '4ed',
		cover: Voiture4,
		marque: 'Tute Tute',
		modele: 'Redtruck',
		immatriculation: 'F4-KM-14',
		etat_du_vehicule: 'A',
        price: 149,
		disponibilite: true,
		type: 'camion',
	}
]