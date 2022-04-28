import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './routes/About/About';
import Portfolio from './routes/Portfolio/Portfolio';
import Contact from './routes/Contact/Contact';

console.log(process.env.PUBLIC_URL)
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basemname={`/${process.env.PUBLIC_URL}`}>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="about" element={<About />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
