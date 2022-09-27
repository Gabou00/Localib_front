import "../header/Header.css"
import logoLocalib from "../../assets/logo/logoLocalib.png"

const title = 'Localib';
const slogan ="La liberté à 4 roues !";

function Header() {
    return (
        <div className='header'>
        <img src={logoLocalib} alt="logo Localib" className='logoLocalib' />
        <h2 className='title'>{title}</h2>
        <h4 className='slogan'>{slogan}</h4>
        {/* <p>{`Bonjour ${employee.name} !`}</p> */}
        <div className="barreSeparation"></div>
    </div>
    )
}

export default Header;