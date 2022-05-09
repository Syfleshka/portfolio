import './MenuItem.scss';
import { NavLink } from 'react-router-dom';
import {useEffect} from 'react';

function MenuItem({ item, id }) {
    useEffect(() => {
        const menu = document.getElementById(`header-menu`);
        const menuRect = menu.getBoundingClientRect()
        const menuItem = document.getElementById(`menu-item-effect-${id}`);

        const followMouse = (event) => {
            const menuWidth = menuRect.width
            const mousePosition = event.pageX - menuRect.left
            const calcPercent = mousePosition / (menuWidth / 100)
            menuItem.style.setProperty('left', `${calcPercent - 50}%`)
        }
        const mouseOut = () => {
            menuItem.style.removeProperty('left')
        }

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
                <NavLink className='menu-item' to={item.link}>
                    <span className='menu-item__text'>{item.label}</span>
                    <span className='menu-item__text'>{item.label}</span>
                    <span className='menu-item__text'>{item.label}</span>
                    <span className='menu-item__text'>{item.label}</span>
                    <span className='menu-item__text'>{item.label}</span>
                    <span className='menu-item__text'>{item.label}</span>
                    <span className='menu-item__text'>{item.label}</span>
                    <span className='menu-item__text'>{item.label}</span>
                    <span className='menu-item__text'>{item.label}</span>
                    <span className='menu-item__text'>{item.label}</span>
                    <span className='menu-item__text'>{item.label}</span>
                    <span className='menu-item__text'>{item.label}</span>
                    <span className='menu-item__text'>{item.label}</span>
                    <span className='menu-item__text'>{item.label}</span>
                    <span className='menu-item__text'>{item.label}</span>
                </NavLink>
            </div>
        </div>
    );
}

export default MenuItem;
