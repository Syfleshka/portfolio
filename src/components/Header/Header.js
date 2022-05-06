import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import * as PropTypes from 'prop-types';

export function Header(props) {
    return (
        <header className={`header`}>
            <ThemeSwitch theme={props.state.theme} updateTheme={props.updateTheme} />
            <Logo />
            <Menu />
        </header>
    );
}

Header.propTypes = {
    state: PropTypes.shape({ theme: PropTypes.string }),
    updateTheme: PropTypes.func,
};
