import './App.scss';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

function App() {
    const [state, setState] = useState({
        theme: 'dark',
    });

    const updateTheme = (value) => {
        setState({ theme: value });
    };

    return (
        <>
            <Header state={state} updateTheme={updateTheme} />
            <Outlet />
            <Footer />
        </>
    );
}

export default App;
