import React, { useEffect, useState } from 'react';
import getDataFromApi from '../services/api';
import Card from './Card';

function App() {
    const [triviaCards, setTriviaCards] = useState([]);

    useEffect(() => {
        getDataFromApi().then((data) => {
            setTriviaCards(data);
        });
    }, []);

    const getRandomCard = () =>
        triviaCards[Math.floor(Math.random() * triviaCards.length)];

    return triviaCards.length > 0 ? (
        <div className="app wrapper">
            <header className="header">
                <nav className="header__nav">
                    <div className="nav__item">
                        <span className="nav__item--score">0</span>Puntos
                    </div>
                    <div className="nav__item">
                        <span className="nav__item--record">0</span>Récord
                    </div>
                    <div className="nav__item">
                        <span className="nav__item--timer">0</span>Tiempo
                    </div>
                </nav>
            </header>
            <Card triviaCard={getRandomCard()} />
        </div>
    ) : (
        <h2>Loading</h2>
    );
}

export default App;
