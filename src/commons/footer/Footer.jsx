import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div id="barre"></div>
      <ul className="ul1">
        <li className="blockfooterPalier">Localib © 2022</li>
        <li className="blockfooter" id="aide"><span>Aide</span></li>
        <li className="blockfooter" id="politique"><span>CGU</span></li>
        <li className="blockfooter" id="charte"><span>Contact</span></li>
        <li className="blockfooter" id="cookie"><span>Cookies</span></li>
        <li className="blockfooter" id="presse"><span>Presse</span></li>
        <li className="blockfooter" id="carriere"><span>Carrières</span></li>
      </ul>
    </footer>
  )
}

export default Footer
