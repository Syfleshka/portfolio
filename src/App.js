import './App.scss'
import {useState} from "react"
import {Outlet} from "react-router-dom"
import {Header} from "./Header/Header";

function App() {

    const [state, setState] = useState({
        theme: 'dark'
    })

    const updateTheme = (value) => {
        setState({theme: value})
    }

    return (
        <>
            <Header state={state} updateTheme={updateTheme}/>
            <Outlet/>
            <footer className={`footer`}>
                <p>Made by Alex D.</p>
            </footer>
        </>
    );
}

export default App;
