import {useEffect} from "react"
import './ThemeSwitch.scss'

function ThemeSwitch({theme, updateTheme}) {


    const switchTheme = () => {
        theme === 'dark' ?
            updateTheme('light') : updateTheme('dark')
    }

    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [theme]);

    return (
        <div className={`header__upper`}>
            <div onClick={() => switchTheme()} className={`theme-switcher`}>
            <span className={`theme-switcher__text`}>
                {theme === 'dark' ? `to light mode →` : `to dark mode ←`}
            </span>
            </div>
        </div>
    );
}

export default ThemeSwitch;
