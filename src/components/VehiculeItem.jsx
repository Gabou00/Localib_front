import "../styles/VehiculeItem.css"

function VehiculeItem( {id, cover, marque, modele, immatriculation, etat_du_vehicule, price, disponibilite, type}) {
    return (
        <div key={id} className='vehiculeItem'>
           <img src={cover} className='vehiculeItem-cover' alt={marque}/>
             <li className="vehiculeItem-marque">{marque}</li>
             <li className="vehiculeItem-modele">{modele}</li>
             <li className="vehiculeItem-immatriculation">{immatriculation}</li>
             <li className="vehiculeItem-etatduvehicule">{etat_du_vehicule}</li>
             <li className="vehiculeItem-price">{price}€ TTC</li>
             <li className="vehiculeItem-disponibilite">{disponibilite}</li>
             <li className="vehiculeItem-type">{type}</li>
        </div>
    )
}

export default VehiculeItem;