import logo from './img/logo.png';
import './Logo.scss';

function Logo() {
    return (
        <div className="header__logo" id="headerLogo">
            <img id="logo" className="logo" src={logo} alt="Alex D." />
        </div>
    );
}

export default Logo;
