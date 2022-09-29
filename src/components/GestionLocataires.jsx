// Page #5 : Gestion des locataires
// Nom / Prénom
// Date de naissance
// Email
// Numéro de téléphone
// (CRUD)

import "../styles/GestionLocataires.css";

function GestionLocataires() {
  return (
    <table className="gestionLocataires">

      <ul className="ulUser">
        <div className="containerHeadUser">
          <li className="idUser">ID</li>
          <li className="nameUser">Nom</li>
          <li className="firstnameUser">Prénom</li>
          <li className="birthdateUser">Date de naissance</li>
          <li className="emailUser">Email</li>
          <li className="phoneUser">Numéro de téléphone</li>
        </div>

        <div className="containerBodyUser">
            <li className="liBodyUser">
          <li className="idBody">#3BC2456</li>
          <li className="nameBody">Martinet</li>
          <li className="firstnameBody">Michel</li>
          <li className="birthdateBody">05/13/2015</li>
          <li className="emailBody">jaimlejambon@iaou.com</li>
          <li className="phoneBody">+33 899 456 456</li>
          </li>
        </div>
      </ul>

    </table>
  );
}

export default GestionLocataires;
