import logo_1 from './img/logo.png';
import logo_2 from './img/ahah_4.png';
import logo_3 from './img/angry.png';
import logo_4 from './img/hi.png';
import logo_5 from './img/love.png';
import logo_6 from './img/play.png';
import logo_7 from './img/sad.png';
import logo_8 from './img/stabbed.png';
import './Logo.scss';
import { useState } from 'react';

function Logo() {
    const logo = [logo_1, logo_2, logo_3, logo_4, logo_5, logo_6, logo_7, logo_8];

    const [currentLogo, setCurrentLogo] = useState(0);
    const randomCurrentLogo = () => {
        const logoCount = logo.length;
        const randomNumber = Math.floor(Math.random() * logoCount);
        setCurrentLogo(randomNumber);
    };

    return (
        <div className="header__logo" id="headerLogo" onMouseEnter={() => randomCurrentLogo()}>
            <img id="logo" className="logo" src={logo[currentLogo]} alt="Alex D." />
        </div>
    );
}

export default Logo;
