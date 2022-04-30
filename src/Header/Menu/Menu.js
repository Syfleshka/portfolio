import MenuItem from './MenuItem';
import './Menu.scss';

const menuItems = [
    {
        label: 'About',
        link: '/about',
    },
    {
        label: 'Portfolio',
        link: '/portfolio',
    },
    {
        label: 'Contact',
        link: '/contact',
    },
];

function Menu() {
    return (
        <nav className="header__menu">
            {menuItems.map((item, i) => {
                return <MenuItem item={item} key={i} />;
            })}
        </nav>
    );
}

export default Menu;
