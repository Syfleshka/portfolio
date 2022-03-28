function MenuItem({item}) {
    return (
        <a className="menu-item" href={item.link}>
            <span className="menu-item__text">{item.label}</span>
            <span className="menu-item__text">{item.label}</span>
            <span className="menu-item__text">{item.label}</span>
            <span className="menu-item__text">{item.label}</span>
            <span className="menu-item__text">{item.label}</span>
            <span className="menu-item__text">{item.label}</span>
            <span className="menu-item__text">{item.label}</span>
        </a>
    );
}

export default MenuItem;
