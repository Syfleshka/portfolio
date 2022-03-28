import './App.scss';
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import {useState} from "react";

function App() {

    const [state, setState] = useState({
        theme: 'dark'
    })
    const switchTheme = () => {
        state.theme === 'dark' ?
        setState({theme: 'light'}) : setState({theme: 'dark'})
    }

    return (
        <header className={`header ${state.theme}`}>
            <Logo/>
            <Menu/>
            <div onClick={() => switchTheme()}>Change Theme</div>
        </header>
    );
}

export default App;
