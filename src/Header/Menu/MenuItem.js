import './MenuItem.scss';
import { NavLink } from 'react-router-dom';

function MenuItem({ item }) {
    return (
        <div className={`header-menu__wrapper`}>
            <NavLink className="menu-item" to={item.link}>
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
