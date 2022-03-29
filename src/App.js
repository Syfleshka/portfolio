import './App.scss';
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import {useState} from "react";
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch";

function App() {

    const [state, setState] = useState({
        theme: 'dark'
    })

    const updateTheme = (value) => {
        setState({theme: value})
    }

    return (
        <header className={`header`}>
            <ThemeSwitch theme={state.theme} updateTheme={updateTheme}/>
            <Logo/>
            <Menu/>
        </header>
    );
}

export default App;
