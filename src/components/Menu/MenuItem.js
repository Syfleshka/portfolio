import './MenuItem.scss';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

function createMenuItemsArr(num, label) {
    return [
        Array.from({ length: num }).map((el, i) => (
            <span className="menu-item__text" key={i}>
                {label}
            </span>
        )),
    ];
}

function MenuItem({ item: { label, link }, id }) {
    useEffect(() => {
        const menu = document.getElementById(`header-menu`);
        const menuRect = menu.getBoundingClientRect();
        const menuItem = document.getElementById(`menu-item-effect-${id}`);

        const followMouse = (event) => {
            const menuWidth = menuRect.width;
            const mousePosition = event.pageX - menuRect.left;
            const calcPercent = mousePosition / (menuWidth / 100);
            menuItem.style.setProperty('left', `${calcPercent - 50}%`);
        };
        const mouseOut = () => {
            menuItem.style.removeProperty('left');
        };

        menuItem.addEventListener('mousemove', followMouse);
        menuItem.addEventListener('mouseleave', mouseOut);

        return () => {
            menuItem.removeEventListener('mousemove', followMouse);
            menuItem.removeEventListener('mouseleave', mouseOut);
        };
    }, [id]);

    return (
        <div className={`header-menu__wrapper`}>
            <div className={`menu-item-effect`} id={`menu-item-effect-${id}`}>
                <NavLink className="menu-item" to={link}>
                    {createMenuItemsArr(15, label)}
                </NavLink>
            </div>
        </div>
    );
}

export default MenuItem;
