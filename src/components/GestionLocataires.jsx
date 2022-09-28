// Page #5 : Gestion des locataires
    // Nom / Prénom
    // Date de naissance
    // Email
    // Numéro de téléphone
    // (CRUD) 

    import "../styles/GestionLocataires.css";


    function GestionLocataires() {
        return (
            <div className='gestionLocataires'>
                <ul>
                    <div className="containerUser">
                    <li className="idUser">ID</li>          
                    <li className="nameUser">Nom</li>          
                    <li className="firstnameUser">Prénom</li>          
                    <li className="birthdateUser">Date de naissance</li>          
                    <li className="emailUser">Email</li>          
                    <li className="phoneUser">Numéro de téléphone</li>          
                    </div>
                </ul>
            </div>
        );
    };
    
    export default GestionLocataires;
    
    
    