import MenuItem from './MenuItem'
import './Menu.scss'

const menuItems = [
    {
        label: 'About',
        link: '#'
    },
    {
        label: 'Portfolio',
        link: '#'
    },
    {
        label: 'Contact',
        link: '#'
    }
]

function Menu() {
    return (
        <div className="header__menu">
            {
                menuItems.map((item, i) => {
                    return <MenuItem item={item} key={i}/>
                })
            }
        </div>
    );
}

export default Menu;
