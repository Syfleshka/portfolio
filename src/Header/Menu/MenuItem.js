import './MenuItem.scss';
import { NavLink } from 'react-router-dom';
import {useState} from "react";

function MenuItem({ item }) {
    const [wrapperPositionCorrector, setWrapperPositionCorrector] = useState(false);
    return (
        <div className={`header-menu__wrapper${wrapperPositionCorrector ? ' header-menu__wrapper_anim' : ''}`}>
            <NavLink
                className="menu-item"
                to={item.link}
                onMouseOver={() => setWrapperPositionCorrector(true)}
                onMouseOut={() => setWrapperPositionCorrector(false)}
            >
                <span className="menu-item__text">{item.label}</span>
                <span className="menu-item__text">{item.label}</span>
                <span className="menu-item__text">{item.label}</span>
                <span className="menu-item__text">{item.label}</span>
                <span className="menu-item__text">{item.label}</span>
                <span className="menu-item__text">{item.label}</span>
                <span className="menu-item__text">{item.label}</span>
                <span className="menu-item__text">{item.label}</span>
                <span className="menu-item__text">{item.label}</span>
                <span className="menu-item__text">{item.label}</span>
                <span className="menu-item__text">{item.label}</span>
            </NavLink>
        </div>
    );
}

export default MenuItem;
